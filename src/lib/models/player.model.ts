export enum Role {
  CARRY = 'Carry',
  MID = 'Mid',
  OFFLANE = 'Offlane',
  SOFT_SUPPORT = 'Soft Support',
  HARD_SUPPORT = 'Hard Support'
};

export interface Player {
  id: string;
  name?: string;
  nationality?: string;
};

export interface Competitor extends Player {
  role: Role;
  elo: number
}
