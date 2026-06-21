import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import { Competitor } from '../../models/player.model';
import { FlagPipe } from '../../pipes/flag.pipe';
import { BO2_GroupParticipant, Participant, QualificationType } from '../../models/team.model';

@Component({
  standalone: true,
  selector: 'app-simulator',
  imports: [CommonModule, FlagPipe],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  private teamService: TeamService = inject(TeamService);

  draftedPlayers: Competitor[] = [];
  draftedTeam?: BO2_GroupParticipant;
  competition: BO2_GroupParticipant[] = [];

  ngOnInit() {
    this.draftedPlayers = this.teamService.getDraftedTeam() || this.getFallbackTeam();
    this.draftedTeam = this.buildParticipant(this.draftedPlayers);
    this.competition = this.teamService.randomPicks(7).map((e) => {
      return {
        ...e.participant,
        id: `${e.event.id} ${e.participant.id}`,
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
    });
    this.competition.push({
      ...this.draftedTeam,
      series: {
        wins: 0,
        ties: 0,
        losses: 0,
      },
      games: {
        wins: 0,
        losses: 0
      }
    });
  }

  getFallbackTeam(): Competitor[] {
    return [
      { id: 'CarryOne', role: 'Carry', skill: 80, stability: 0.7, greed: 0.4 },
      { id: 'MidOne', role: 'Mid', skill: 75, stability: 0.4, greed: 0.5 },
      { id: 'OffOne', role: 'Offlane', skill: 70, stability: 0.9, greed: 0.6 },
      { id: 'SupOne', role: 'Soft Support', skill: 65, stability: 0.2, greed: 0.2 },
      { id: 'HardSupOne', role: 'Hard Support', skill: 60, stability: 1, greed: 1 }
    ];
  }

  buildParticipant(players: Competitor[]): BO2_GroupParticipant {
    return {
      id: 'Your Team',
      name: 'Your Team',
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

  runTournament() {
    
  }
}
