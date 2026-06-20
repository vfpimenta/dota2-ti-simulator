import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { dota2Ti2011 } from '../../../data/dota2-ti-2011';

@Component({
  standalone: true,
  selector: 'app-draft',
  imports: [CommonModule],
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent {
  squad: any[] = [];
  // team array (filled players) kept for compatibility; teamSlots represents all role slots
  team: any[] = [];
  teamSlots: Array<{ role: string; player: any | null }> = [];
  lastSeed: number | null = null;
  rolledTeamName: string | null = null;
  rolledTeamYear: number | null = null;
  // Whether the user has picked (and added) one player from the current squad roll
  pickedFromCurrent: boolean = false;

  // Convert a country name or ISO2 code to a flag emoji when possible
  countryToFlag(country?: string): string {
    if (!country) return '';
    const code = country.length === 2
      ? country.toUpperCase()
      : DraftComponent.countryNameToCode[country.toLowerCase()] || '';
    if (!code) return '';
    // Regional Indicator Symbol Letter A starts at 0x1F1E6
    const first = code.charCodeAt(0) - 0x41 + 0x1F1E6;
    const second = code.charCodeAt(1) - 0x41 + 0x1F1E6;
    return String.fromCodePoint(first, second);
  }

  // Small manual mapping for country names used in the historical dataset
  static countryNameToCode: Record<string,string> = {
    'denmark': 'DK',
    'thailand': 'TH',
    'united states': 'US',
    'united states of america': 'US',
    'usa': 'US',
    'ukraine': 'UA',
    'estonia': 'EE',
    'russia': 'RU',
    'france': 'FR',
    'malaysia': 'MY',
    'china': 'CN',
    'macau': 'MO',
    'philippines': 'PH',
    'singapore': 'SG',
    'czechia': 'CZ',
    'czech republic': 'CZ',
    'slovakia': 'SK',
    'croatia': 'HR',
    'romania': 'RO',
    'sweden': 'SE',
    'canada': 'CA',
    'germany': 'DE'
  };



  constructor(private teamService: TeamService, private router: Router) {
    this.team = this.teamService.getTeam();
    this.initTeamSlots();
  }

  private rolesOrder = [
    'Carry',
    'Mid',
    'Offlane',
    'Soft Support',
    'Hard Support'
  ];

  private initTeamSlots() {
    // initialize slots with empty players
    this.teamSlots = this.rolesOrder.map(r => ({ role: r, player: null }));
    // populate from existing team array if any
    for (const p of this.team) {
      const idx = this.teamSlots.findIndex(s => s.role === p.role);
      if (idx !== -1) this.teamSlots[idx].player = p;
    }
    // ensure team array is synchronized
    this.syncTeamArrayFromSlots();
  }

  private syncTeamArrayFromSlots() {
    this.team = this.teamSlots.filter(s => s.player).map(s => s.player);
    this.teamService.setTeam(this.team);
  }

  rollSquad() {
    // Prevent rerolling if there's an existing squad and the user hasn't picked one player from it,
    // unless none of the players in the current squad are pickable (all roles already taken) —
    // in that case allow the reroll so the user isn't stuck.
    if (this.squad.length && !this.pickedFromCurrent) {
      const anyPickable = this.squad.some(s => !this.team.some(t => t.role === s.role));
      if (anyPickable) return;
    }

    // reset picked flag when rolling a fresh squad
    this.pickedFromCurrent = false;

  // Pick a random participant team from the historical TI2011 event
    const teams = dota2Ti2011.teams;
    if (!teams || teams.length === 0) return;
    const idx = Math.floor(Math.random() * teams.length);
    const participant = teams[idx];

    // store team name/year for the UI
    this.rolledTeamName = (participant as any).name || (participant as any).id || null;
    this.rolledTeamYear = (participant as any).year || dota2Ti2011.year || null;

    // Map the participant roster (pos1..pos5) into the squad format used by the UI
  const positions = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5'];
    const posToRole: Record<string,string> = {
      pos1: 'Carry',
      pos2: 'Mid',
      pos3: 'Offlane',
      pos4: 'Soft Support',
      pos5: 'Hard Support'
    };
    const rng = Math.random;
  this.squad = positions.map((pos: any, idx: number) => {
      const entry = (participant as any).roster[pos];
      const player = entry.player || { id: 'unknown' };
  const name = player.id || player.name || 'Unknown';
      const country = player.nationality || player.nationality || '';
      const flag = this.countryToFlag(country);
      const elo = entry.elo || 0;
      // map elo (historical) to a "power" value roughly between 40-100
      const powerFromElo = Math.round(40 + Math.min(Math.max((elo / 10000) * 60, 0), 60));
      // add a small random variance
      const power = Math.round(powerFromElo + (rng() * 10 - 5));
      // include a small stable id (role-based + name) so template tracking and comparisons are easier
  return { id: `p${idx}-${name}`, name, country, flag, role: posToRole[pos] || pos.toUpperCase(), elo, power };
    });
    this.lastSeed = null;
  }

  // Attempt to pick a single player from the current squad and add to user's team
  pickPlayer(i: number) {
    if (!this.squad || i < 0 || i >= this.squad.length) return;
    this._pick(this.squad[i]);
  }

  pickPlayerById(id: string) {
    if (!this.squad || !id) return;
    const idx = this.squad.findIndex(s => s.id === id);
    if (idx === -1) return;
    this._pick(this.squad[idx]);
  }

  private _pick(player: any) {
    // Don't allow picking more than one player from the same roll
    if (this.pickedFromCurrent) return;

    // Don't allow picking if the team already has a player in this role (position locked)
    const slotIdx = this.teamSlots.findIndex(s => s.role === player.role);
    if (slotIdx === -1) return; // no matching role
    if (this.teamSlots[slotIdx].player) return; // already filled

    // Fill the slot for the player's role
    this.teamSlots[slotIdx].player = player;
    // Sync derived team array and persist
    this.syncTeamArrayFromSlots();

    // Mark that the current roll has been consumed (exactly one pick)
    this.pickedFromCurrent = true;
  }

  hasRole(role: string) {
  if (!role) return false;
  return this.teamSlots.some(s => s.role === role && !!s.player);
  }

  addToTeam() {
  // legacy: keep behaviour but restrict to when no squad exists (not used in new flow)
  if (!this.squad || !this.squad.length) return;
  // Do nothing — new flow uses pickPlayer(i) instead. This method kept to avoid breaking callers.
  }

  saveTeam() {
    this.teamService.setTeam(this.team);
    this.router.navigate(['/simulator']);
  }
}
