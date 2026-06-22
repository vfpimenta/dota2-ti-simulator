import { Competitor, Player } from "./player.model";

export interface Team {
  id: string;
  name: string;
}

export enum QualificationType {
  DIRECT_INVITE = "Direct Invite",
  REGIONAL_QUALIFIER = "Regional Qualifier",
  WILD_CARD = "Wild Card",
}

/**
 * Represents a team at a certain point in time
 */
export interface Participant extends Team {
    roster: {
        pos1: Competitor;
        pos2: Competitor;
        pos3: Competitor;
        pos4: Competitor;
        pos5: Competitor;
    };
    coaches?: Player[];
    qualification: QualificationType;
}

export interface BO2_GroupParticipant extends Participant {
  series: {
    wins: number;
    ties: number;
    losses: number;
  };
  games: {
    wins: number;
    losses: number;
  };
}

export interface BO2_Series {
  team1: BO2_GroupParticipant;
  team2: BO2_GroupParticipant;
  score: {
    team1: number;
    team2: number;
  }
}