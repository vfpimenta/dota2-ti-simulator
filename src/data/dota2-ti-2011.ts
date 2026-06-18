import { Participant, QualificationType } from "../lib/models/team.model";
import { Event } from "../lib/models/event.model";
import * as players from "./players";

const mym = {
    id: "MYM",
    name: "Meet Your Makers",
    roster: {
        pos1: { player: players.misery, elo: 8500 },
        pos2: { player: players.mania, elo: 8600 },
        pos3: { player: players.playmate, elo: 8400 },
        pos4: { player: players.maelk, elo: 8300 },
        pos5: { player: players.demon, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
    year: 2011,
};

const mith = {
    id: "MiTH",
    name: "Made in Thailand",
    roster: {
        pos1: { player: players.l3nu, elo: 8000 },
        pos2: { player: players.tnk, elo: 8100 },
        pos3: { player: players.lakelz, elo: 8200 },
        pos4: { player: players.lookball, elo: 8300 },
        pos5: { player: players.aabbaa, elo: 8400 },
    },
    qualification: QualificationType.REGIONAL_QUALIFIER,
    year: 2011,
};

const navi = {
    id: "NAVI",
    name: "Natus Vincere",
    roster: {
        pos1: { player: players.artstyle, elo: 9000 },
        pos2: { player: players.dendi, elo: 9500 },
        pos3: { player: players.xboct, elo: 9200 },
        pos4: { player: players.puppey, elo: 8800 },
        pos5: { player: players.lightOfHeaven, elo: 8700 },
    },
    qualification: QualificationType.DIRECT_INVITE,
    year: 2011,
};

const virus = {
    id: "Virus",
    name: "Virus Gaming",
    roster: {
        pos1: { player: players.maldeJambes, elo: 7800 },
        pos2: { player: players.vladtepes, elo: 7900 },
        pos3: { player: players.sockshka, elo: 8000 },
        pos4: { player: players.pseudo, elo: 8100 },
        pos5: { player: players.phoenix, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
    year: 2011,
};

const mufc = {
    id: "MUFC",
    name: "MUFC",
    roster: {
        pos1: { player: players.silverCross, elo: 8000 },
        pos2: { player: players.net, elo: 8100 },
        pos3: { player: players.sharky, elo: 8200 },
        pos4: { player: players.xiaoling, elo: 8300 },
        pos5: { player: players.kyxy, elo: 8400 },
    },
    qualification: QualificationType.REGIONAL_QUALIFIER,
    year: 2011,
};

const ig = {
    id: "iG",
    name: "Invictus Gaming",
    roster: {
        pos1: { player: players.zhou, elo: 8500 },
        pos2: { player: players.ferrari_430, elo: 8600 },
        pos3: { player: players.xiao8, elo: 8400 },
        pos4: { player: players.sansheng, elo: 8300 },
        pos5: { player: players.ddc, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
    year: 2011,
};

export const dota2Ti2011: Event = {
    id: "TI1",
    name: "The International 2011",
    year: 2011,
    teams: [ mym, mith, navi, virus, mufc, ig ]
};
