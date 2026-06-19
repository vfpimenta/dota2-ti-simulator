import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';

@Component({
  standalone: true,
  selector: 'app-simulator',
  imports: [CommonModule],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent {
  team: any[] = [];
  result: string | null = null;

  constructor(private teamService: TeamService) {
    this.team = this.teamService.getTeam();
  }

  runTournament() {
    const score = this.team.reduce((s, p) => s + (p.power || 50), 0);
    // Simple random outcome based on total power
    const luck = Math.random() * 100;
    const chance = score / (this.team.length * 100) * 100 + luck * 0.3;
    if (chance > 120) this.result = 'Champion! Your team won The International!';
    else if (chance > 90) this.result = 'Top 4 finish! Very impressive.';
    else if (chance > 60) this.result = 'Group stage exit.';
    else this.result = 'Early elimination.';
  }
}
