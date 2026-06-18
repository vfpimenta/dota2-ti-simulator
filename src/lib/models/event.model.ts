import { Participant } from "./team.model";

export interface Event {
    id: string;
    name: string;
    year: number;
    teams: Participant[];
}
