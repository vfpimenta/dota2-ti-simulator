import { Competitor, Player } from "./player.model";

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
        pos1: Competitor;
        pos2: Competitor;
        pos3: Competitor;
        pos4: Competitor;
        pos5: Competitor;
    };
    coaches?: Player[];
    qualification: QualificationType;
}
