import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TeamService } from '../../services/team.service';
import { dota2Ti2011 } from '../../../data/dota2-ti-2011';
import { Competitor, Player } from '../../models/player.model';
import { FlagPipe } from '../../pipes/flag.pipe';
import { Participant } from '../../models/team.model';

@Component({
  standalone: true,
  selector: 'app-draft',
  imports: [CommonModule, FlagPipe],
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  private teamService: TeamService = inject(TeamService);
  private router: Router = inject(Router);

  squad: Competitor[] = [];
  // team array (filled players) kept for compatibility; teamSlots represents all role slots
  team: Competitor[] = [];
  teamSlots: Array<{ role: string; player: Competitor | null }> = [];
  lastSeed: number | null = null;
  rolledTeamName: string | null = null;
  rolledTeamYear: number | null = null;
  // Whether the user has picked (and added) one player from the current squad roll
  pickedFromCurrent: boolean = false;

  rolesOrder: string[] = [
    'Carry',
    'Mid',
    'Offlane',
    'Soft Support',
    'Hard Support'
  ];

  ngOnInit() {
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
    this.team = this.teamSlots.filter(s => s.player).map(s => s.player) as Competitor[];
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
    this.rolledTeamName = participant.name;
    this.rolledTeamYear = dota2Ti2011.year;

    // Map the participant roster (pos1..pos5) into the squad format used by the UI
    this.squad = Object.values(participant.roster);
    this.lastSeed = null;
  }

  pickPlayerById(id: string) {
    if (!this.squad || !id) return;
    const idx = this.squad.findIndex(s => s.id === id);
    if (idx === -1) return;
    this._pick(this.squad[idx]);
  }

  private _pick(player: Competitor) {
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

  saveTeam() {
    this.teamService.setTeam(this.team);
    this.router.navigate(['/simulator']);
  }
}
