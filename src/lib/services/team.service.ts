import { Injectable } from '@angular/core';
import players from '../../app/ti-players.data';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private team: any[] = [];

  getTeam() {
    return this.team.slice();
  }

  setTeam(t: any[]) {
    this.team = t.slice();
  }

  // Return a random squad of 5 players from the historical TI players list
  rollRandomSquad(seed?: number) {
    const rng = seed !== undefined ? seededRNG(seed) : Math.random;
    const arr = players.slice();
    shuffleArray(arr, rng);
    const squad = arr.slice(0, 5).map(p => ({ ...p, power: Math.round(40 + (rng() * 60)) }));
    return { squad, seed: seed ?? Math.floor(Math.random() * 1e9) };
  }
}

function shuffleArray(arr: any[], rng: () => number) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function seededRNG(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) % 0x100000000;
    return s / 0x100000000;
  };
}
