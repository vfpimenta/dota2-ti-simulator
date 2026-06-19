import { Player } from "./player.model";

export interface Team {
  id: string;
  name: string;
}

export enum QualificationType {
  DIRECT_INVITE = "Direct Invite",
  REGIONAL_QUALIFIER = "Regional Qualifier",
  OPEN_QUALIFIER = "Open Qualifier",
}

/**
 * Represents a team at a certain point in time
 */
export interface Participant extends Team {
    roster: {
        pos1: {player: Player, elo: number};
        pos2: {player: Player, elo: number};
        pos3: {player: Player, elo: number};
        pos4: {player: Player, elo: number};
        pos5: {player: Player, elo: number};
    };
    coaches?: Player[];
    qualification: QualificationType;
}
