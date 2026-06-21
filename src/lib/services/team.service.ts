import { Injectable } from '@angular/core';
import { Competitor } from '../models/player.model';
import { dota2Ti2011 } from '../../data/dota2-ti-2011';
import { dota2Ti2012 } from '../../data/dota2-ti-2012';
import { Participant } from '../models/team.model';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private draftedTeam?: Competitor[] = undefined;
  private events = [ dota2Ti2011, dota2Ti2012 ];

  getDraftedTeam() {
    return this.draftedTeam?.slice();
  }

  setDraftedTeam(t: Competitor[]) {
    this.draftedTeam = t.slice();
  }

  randomPick() {
    const idx = Math.floor(Math.random() * this.events.length);
    const event = this.events[idx];
    const participantIdx = Math.floor(Math.random() * event.teams.length);
    const participant = event.teams[participantIdx];

    return {event, participant}
  }

  randomPicks(size: number) {
    const allTeams: Array<{participant: Participant, event: Event}> = this.events.flatMap((event) => event.teams.map((team) => {
      return {
        participant: team,
        event: event,
      }
    }));

    const idxs = new Set<number>();
    while(idxs.size !== size) {
      idxs.add(Math.floor(Math.random() * allTeams.length) + 1);
    }

    return Array.from(idxs).map((idx) => allTeams[idx]);
  }

  /**
   * Get the performance of the team for a specific match.
   * This function calculates the overall team performance based on individual player skills,
   * taking into account their stability and greed factors.
   */
  getPerformance(team: Competitor[]) {
    const teamSkill = team.map(p => {
      const variance = {
        lowerBound: 1-(1-p.stability),
        upperBound: 1+(1-p.stability)
      }
      // Generate a random value within the variance bounds
      const randomValue = Math.random() * (variance.upperBound - variance.lowerBound) + variance.lowerBound;
      return p.skill * randomValue;
    }).reduce((a, b) => a + b, 0);
    const averageGreed = team.reduce((a, b) => a + b.greed, 0) / team.length;

    return teamSkill * Math.max((1 - 2 * Math.abs(averageGreed - 0.5)), 0.5);
  }

  /**
   * Simulates a confrontation between 2 teams and picks a winner.
   * Returns true if team A wins, false otherwise.
   */
  headToHead(teamA: Competitor[], teamB: Competitor[]) {
    const perfA = this.getPerformance(teamA);
    const perfB = this.getPerformance(teamB);
    const roll = Math.random() * (perfA+perfB);
    return roll <= perfA;
  }
}
