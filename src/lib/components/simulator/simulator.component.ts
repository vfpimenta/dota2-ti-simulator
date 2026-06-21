import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import { Competitor } from '../../models/player.model';
import { FlagPipe } from '../../pipes/flag.pipe';

@Component({
  standalone: true,
  selector: 'app-simulator',
  imports: [CommonModule, FlagPipe],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  private teamService: TeamService = inject(TeamService);

  team: Competitor[] = [];
  result: string | null = null;

  ngOnInit() {
    this.team = this.teamService.getTeam() || this.getFallbackTeam();
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

  /**
   * Get the performance of the team for a specific match.
   * This function calculates the overall team performance based on individual player skills,
   * taking into account their stability and greed factors.
   */
  getPerformance() {
    const teamSkill = this.team.map(p => {
      const variance = {
        lowerBound: 1-(1-p.stability),
        upperBound: 1+(1-p.stability)
      }
      // Generate a random value within the variance bounds
      const randomValue = Math.random() * (variance.upperBound - variance.lowerBound) + variance.lowerBound;
      return p.skill * randomValue;
    }).reduce((a, b) => a + b, 0);
    const averageGreed = this.team.reduce((a, b) => a + b.greed, 0) / this.team.length;

    return teamSkill * Math.max((1 - 2 * Math.abs(averageGreed - 0.5)), 0.5);
  }

  runTournament() {
    this.result = this.getPerformance().toString();
  }
}
