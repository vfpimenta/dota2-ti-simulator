import { Injectable } from '@angular/core';
import players from '../../app/ti-players.data';
import { Competitor } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private team?: Competitor[] = undefined;

  getTeam() {
    return this.team?.slice();
  }

  setTeam(t: Competitor[]) {
    this.team = t.slice();
  }
}
