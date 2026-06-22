import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competitor } from '../../models/player.model';
import { FlagPipe } from '../../pipes/flag.pipe';
import { BO2_GroupParticipant, BO2_Series, Participant, QualificationType } from '../../models/team.model';
import { TournamentService } from '../../services/tournament.service';
import { delay } from '../../utils/time.utils';
import { Router } from '@angular/router';

enum TournamentState {
  BEFORE_GROUP = 'BeforeGroup',
  RUNNING_GROUP = 'RunningGroup',
  AFTER_GROUP = 'AfterGroup',
  BEFORE_PLAYOFFS = 'BeforePlayoffs',
  RUNNING_PLAYOFFS = 'RunningPlayoffs',
  AFTER_PLAYOFFS = 'AfterPlayoffs',
}

@Component({
  standalone: true,
  selector: 'app-simulator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FlagPipe],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  private tournamentService: TournamentService = inject(TournamentService);
  private router: Router = inject(Router);

  draftedPlayers: Competitor[] = [];
  draftedTeam?: BO2_GroupParticipant;

  competition: WritableSignal<BO2_GroupParticipant[]> = signal<BO2_GroupParticipant[]>([]);
  groupMatches: WritableSignal<BO2_Series[]> = signal<BO2_Series[]>([]);

  tournamentState = signal<TournamentState>(TournamentState.BEFORE_GROUP);
  groupWin = signal<boolean>(false);

  ngOnInit() {
    this.draftedPlayers = this.tournamentService.getDraftedTeam() || this.getFallbackTeam();
    this.draftedTeam = this.tournamentService.buildParticipant('Your Team', this.draftedPlayers);
    this.competition.set(this.tournamentService.randomPicks(7).map((e) => {
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
    }));
    // append drafted team immutably
    this.competition.update(curr => [...curr, {
      ...this.draftedTeam!,
      series: {
        wins: 0,
        ties: 0,
        losses: 0,
      },
      games: {
        wins: 0,
        losses: 0
      }
    }]);
    this.groupMatches.set(this.tournamentService.generateGroupMatches(this.competition()));
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

  runMatch(match: BO2_Series) {
    // Run game and get winner
    const team1Win = this.tournamentService.headToHead(match.team1, match.team2);

    // Update match score
    this.groupMatches.update(curr => curr.map(m => {
      if (m.team1.id === match.team1.id && m.team2.id === match.team2.id) {
        return {
          ...m,
          score: {
            team1: m.score.team1 + (team1Win ? 1 : 0),
            team2: m.score.team2 + (team1Win ? 0 : 1)
          }
        };
      }
      return m;
    }));

    // Update standing games
    const winningTeam = team1Win ? match.team1 : match.team2;
    const losingTeam = team1Win ? match.team2 : match.team1;
    this.competition.update(curr => curr.map(t => {
      if (t.id === winningTeam.id) {
        return { ...t, games: { ...t.games, wins: t.games.wins + 1 } };
      }
      if (t.id === losingTeam.id) {
        return { ...t, games: { ...t.games, losses: t.games.losses + 1 } };
      }
      return t;
    }));

    return team1Win;
  }

  async runGroupStage() {
    this.tournamentState.set(TournamentState.RUNNING_GROUP);
    for(let match of this.groupMatches()) {
      // Sleep 1 second
      await delay(1000);
      const team1WinsGame1 = this.runMatch(match);

      // Sleep 1 second
      await delay(1000);
      const team1WinsGame2 = this.runMatch(match);

      // Update standing series immutably
      if (team1WinsGame1 && team1WinsGame2) {
        this.competition.update(curr => curr.map(t => t.id === match.team1.id ? { ...t, series: { ...t.series, wins: t.series.wins + 1 } } : t.id === match.team2.id ? { ...t, series: { ...t.series, losses: t.series.losses + 1 } } : t));
      } else if (!team1WinsGame1 && !team1WinsGame2) {
        this.competition.update(curr => curr.map(t => t.id === match.team1.id ? { ...t, series: { ...t.series, losses: t.series.losses + 1 } } : t.id === match.team2.id ? { ...t, series: { ...t.series, wins: t.series.wins + 1 } } : t));
      } else {
        this.competition.update(curr => curr.map(t => t.id === match.team1.id ? { ...t, series: { ...t.series, ties: t.series.ties + 1 } } : t.id === match.team2.id ? { ...t, series: { ...t.series, ties: t.series.ties + 1 } } : t));
      }

      // Reorder standings immutably
      this.competition.update(curr => [...curr].sort((team1, team2) => (team1.games.wins > team2.games.wins ? -1 : 1)));
    }

    // Set your team result
    this.tournamentState.set(TournamentState.AFTER_GROUP);
    this.groupWin.set(this.competition().find((team, index) => team.id === 'Your Team' && index <= 3) !== undefined);
  }

  back() {
    this.tournamentService.setDraftedTeam(undefined);
    this.router.navigate(['/draft']);
  }
}
