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
  team: any[] = [];
  lastSeed: number | null = null;
  rolledTeamName: string | null = null;
  rolledTeamYear: number | null = null;

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
  }

  rollSquad() {
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
    this.squad = positions.map((pos: any) => {
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
  return { name, country, flag, role: posToRole[pos] || pos.toUpperCase(), elo, power };
    });
    this.lastSeed = null;
  }

  addToTeam() {
    this.team = this.team.concat(this.squad).slice(0,5);
    this.teamService.setTeam(this.team);
  }

  saveTeam() {
    this.teamService.setTeam(this.team);
    this.router.navigate(['/simulator']);
  }
}
