import { Injectable } from '@angular/core';
import { Competitor } from '../models/player.model';
import { dota2Ti2011 } from '../../data/dota2-ti-2011';
import { dota2Ti2012 } from '../../data/dota2-ti-2012';
import { BO2_GroupParticipant, BO2_Series, Participant, QualificationType } from '../models/team.model';
import { Event } from '../models/event.model';
import { shuffle } from '../utils/arrays.util';

@Injectable({ providedIn: 'root' })
export class TournamentService {
  private draftedTeam?: Competitor[] = undefined;
  private events = [ dota2Ti2011, dota2Ti2012 ];

  getDraftedTeam() {
    return this.draftedTeam?.slice();
  }

  setDraftedTeam(t?: Competitor[]) {
    if (t) {
      this.draftedTeam = t.slice();
    } else {
      this.draftedTeam = undefined;
    }
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
      idxs.add(Math.floor(Math.random() * allTeams.length));
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
    headToHead(teamA: BO2_GroupParticipant, teamB: BO2_GroupParticipant) {
        const teamAPlayers = [teamA.roster.pos1, teamA.roster.pos2, teamA.roster.pos3, teamA.roster.pos4, teamA.roster.pos5]
        const teamBPlayers = [teamB.roster.pos1, teamB.roster.pos2, teamB.roster.pos3, teamB.roster.pos4, teamB.roster.pos5]

        const perfA = this.getPerformance(teamAPlayers);
        const perfB = this.getPerformance(teamBPlayers);
        const roll = Math.random() * (perfA+perfB);
        return roll <= perfA;
    }

    buildParticipant(teamName: string, players: Competitor[]): BO2_GroupParticipant {
        return {
          id: teamName,
          name: teamName,
          qualification: QualificationType.WILD_CARD,
          roster: {
            pos1: players[0],
            pos2: players[1],
            pos3: players[2],
            pos4: players[3],
            pos5: players[4]
          },
          series: {
            wins: 0,
            ties: 0,
            losses: 0,
          },
          games: {
            wins: 0,
            losses: 0
          }
        }
    }

    /**
     * Generates all possible match combination within a group.
     */
    generateGroupMatches(competition: BO2_GroupParticipant[]): BO2_Series[] {
        const matches = competition.flatMap(
            (participant, idx) => competition.slice(idx+1).map( (next) => {
                return {
                    team1: participant,
                    team2: next,
                    score: {
                        team1: 0,
                        team2: 0
                    }
                }
            } )
        );

        return shuffle(matches);
    }
}
