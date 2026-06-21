import { Participant, QualificationType } from "../lib/models/team.model";
import { Event } from "../lib/models/event.model";
import { Role } from "../lib/models/player.model";
import * as players from "./players";

const mym: Participant = {
    id: "MYM",
    name: "Meet Your Makers",
    roster: {
        pos1: { ...players.misery, role: Role.CARRY, skill: 61, stability: 0.8, greed: 0.4 },
        pos2: { ...players.mania, role: Role.MID, skill: 52, stability: 0.9, greed: 0.4 },
        pos3: { ...players.playmate, role: Role.OFFLANE, skill: 52, stability: 0.8, greed: 0.4 },
        pos4: { ...players.maelk, role: Role.SOFT_SUPPORT, skill: 55, stability: 0.5, greed: 0.4 },
        pos5: { ...players.demon, role: Role.HARD_SUPPORT, skill: 44, stability: 0.6, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mith: Participant = {
    id: "MiTH",
    name: "Made in Thailand",
    roster: {
        pos1: { ...players.l3nu, role: Role.CARRY, skill: 20, stability: 0.6, greed: 0.4 },
        pos2: { ...players.tnk, role: Role.MID, skill: 19, stability: 0.7, greed: 0.4 },
        pos3: { ...players.lakelz, role: Role.OFFLANE, skill: 22, stability: 0.5, greed: 0.3 },
        pos4: { ...players.lookball, role: Role.SOFT_SUPPORT, skill: 19, stability: 0.4, greed: 0.3 },
        pos5: { ...players.aabbaa, role: Role.HARD_SUPPORT, skill: 17, stability: 0.4, greed: 0.2 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const navi: Participant = {
    id: "NAVI",
    name: "Natus Vincere",
    roster: {
        pos1: { ...players.artstyle, role: Role.CARRY, skill: 70, stability: 0.7, greed: 0.4 },
        pos2: { ...players.dendi, role: Role.MID, skill: 87, stability: 1, greed: 0.5 },
        pos3: { ...players.xboct, role: Role.OFFLANE, skill: 60, stability: 0.8, greed: 0.6 },
        pos4: { ...players.puppey, role: Role.SOFT_SUPPORT, skill: 75, stability: 1, greed: 0.7 },
        pos5: { ...players.lightOfHeaven, role: Role.HARD_SUPPORT, skill: 65, stability: 0.8, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const virus: Participant = {
    id: "Virus",
    name: "Virus Gaming",
    roster: {
        pos1: { ...players.maldeJambes, role: Role.CARRY, skill: 25, stability: 0.8, greed: 0.3 },
        pos2: { ...players.vladtepes, role: Role.MID, skill: 29, stability: 0.6, greed: 0.3 },
        pos3: { ...players.sockshka, role: Role.OFFLANE, skill: 36, stability: 0.9, greed: 0.6 },
        pos4: { ...players.pseudo, role: Role.SOFT_SUPPORT, skill: 22, stability: 0.5, greed: 0.4 },
        pos5: { ...players.phoenix, role: Role.HARD_SUPPORT, skill: 23, stability: 0.5, greed: 0.3 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mufc: Participant = {
    id: "MUFC",
    name: "MUFC",
    roster: {
        pos1: { ...players.silverCross, role: Role.CARRY, skill: 24, stability: 0.7, greed: 0.3 },
        pos2: { ...players.net, role: Role.MID, skill: 21, stability: 0.6, greed: 0.3 },
        pos3: { ...players.sharky, role: Role.OFFLANE, skill: 18, stability: 0.5, greed: 0.4 },
        pos4: { ...players.xiaoling, role: Role.SOFT_SUPPORT, skill: 27, stability: 0.9, greed: 0.5 },
        pos5: { ...players.kyxy, role: Role.HARD_SUPPORT, skill: 39, stability: 0.4, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const tyloo: Participant = {
    id: "TYLOO",
    name: "TYLOO",
    roster: {
        pos1: { ...players.awoke, role: Role.CARRY, skill: 45, stability: 0.8, greed: 0.3 },
        pos2: { ...players.kabu, role: Role.MID, skill: 40, stability: 0.7, greed: 0.3 },
        pos3: { ...players.dd, role: Role.OFFLANE, skill: 47, stability: 0.8, greed: 0.3 },
        pos4: { ...players.hao, role: Role.SOFT_SUPPORT, skill: 50, stability: 1, greed: 0.8 },
        pos5: { ...players.faith, role: Role.HARD_SUPPORT, skill: 61, stability: 1, greed: 0.2 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mineski: Participant = {
    id: "Mineski",
    name: "Mineski",
    roster: {
        pos1: { ...players.wootz, role: Role.CARRY, skill: 22, stability: 0.7, greed: 0.5 },
        pos2: { ...players.julz, role: Role.MID, skill: 27, stability: 0.5, greed: 0.5 },
        pos3: { ...players.john, role: Role.OFFLANE, skill: 29, stability: 0.4, greed: 0.5 },
        pos4: { ...players.owa, role: Role.SOFT_SUPPORT, skill: 21, stability: 0.5, greed: 0.2 },
        pos5: { ...players.vash, role: Role.HARD_SUPPORT, skill: 27, stability: 0.6, greed: 0.1 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ig: Participant = {
    id: "iG",
    name: "Invictus Gaming",
    roster: {
        pos1: { ...players.zhou, role: Role.CARRY, skill: 70, stability: 0.9, greed: 0.5 },
        pos2: { ...players.ferrari_430, role: Role.MID, skill: 77, stability: 1, greed: 0.6 },
        pos3: { ...players.xiao8, role: Role.OFFLANE, skill: 61, stability: 0.7, greed: 0.3 },
        pos4: { ...players.sansheng, role: Role.SOFT_SUPPORT, skill: 58, stability: 0.8, greed: 0.4 },
        pos5: { ...players.ddc, role: Role.HARD_SUPPORT, skill: 62, stability: 0.8, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ehome: Participant = {
    id: "EHOME",
    name: "EHOME",
    roster: {
        pos1: { ...players._820, role: Role.CARRY, skill: 75, stability: 0.9, greed: 0.4 },
        pos2: { ...players.qqq, role: Role.MID, skill: 70, stability: 0.9, greed: 0.5 },
        pos3: { ...players.x, role: Role.OFFLANE, skill: 79, stability: 1, greed: 0.5 },
        pos4: { ...players.lanm, role: Role.SOFT_SUPPORT, skill: 80, stability: 1, greed: 0.7 },
        pos5: { ...players.sjq, role: Role.HARD_SUPPORT, skill: 61, stability: 0.6, greed: 0.2 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sythe: Participant = {
    id: "Sythe",
    name: "Sythe Gaming",
    roster: {
        pos1: { ...players.hyhy, role: Role.CARRY, skill: 61, stability: 0.9, greed: 0.6 },
        pos2: { ...players.xy, role: Role.MID, skill: 50, stability: 0.8, greed: 0.4 },
        pos3: { ...players.tofu, role: Role.OFFLANE, skill: 54, stability: 0.6, greed: 0.5 },
        pos4: { ...players.chawy, role: Role.SOFT_SUPPORT, skill: 50, stability: 0.5, greed: 0.5 },
        pos5: { ...players.roy, role: Role.HARD_SUPPORT, skill: 48, stability: 0.6, greed: 0.3 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sgc: Participant = {
    id: "SGC",
    name: "Storm Games Clan",
    roster: {
        pos1: { ...players.cranich, role: Role.CARRY, skill: 19, stability: 0.5, greed: 0.5 },
        pos2: { ...players.lacek, role: Role.MID, skill: 18, stability: 0.4, greed: 0.4 },
        pos3: { ...players.tonci, role: Role.OFFLANE, skill: 17, stability: 0.3, greed: 0.5 },
        pos4: { ...players.tulex, role: Role.SOFT_SUPPORT, skill: 21, stability: 0.5, greed: 0.2 },
        pos5: { ...players.warlog, role: Role.HARD_SUPPORT, skill: 19, stability: 0.6, greed: 0.1 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaCn: Participant = {
    id: "OK.Nirvana.cn",
    name: "OK.Nirvana.cn",
    roster: {
        pos1: { ...players.insence, role: Role.CARRY, skill: 18, stability: 0.6, greed: 0.5 },
        pos2: { ...players.ksssssss, role: Role.MID, skill: 15, stability: 0.6, greed: 0.6 },
        pos3: { ...players.banana, role: Role.OFFLANE, skill: 37, stability: 0.7, greed: 0.2 },
        pos4: { ...players.yao, role: Role.SOFT_SUPPORT, skill: 40, stability: 0.4, greed: 0.2 },
        pos5: { ...players.seaking, role: Role.HARD_SUPPORT, skill: 18, stability: 0.5, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaInt: Participant = {
    id: "OK.Nirvana.Int",
    name: "OK.Nirvana.Int",
    roster: {
        pos1: { ...players.fear, role: Role.CARRY, skill: 38, stability: 0.9, greed: 0.8 },
        pos2: { ...players.lacoste, role: Role.MID, skill: 18, stability: 0.6, greed: 0.6 },
        pos3: { ...players.comeWithMe, role: Role.OFFLANE, skill: 19, stability: 0.5, greed: 0.5 },
        pos4: { ...players.pajkatt, role: Role.SOFT_SUPPORT, skill: 34, stability: 0.8, greed: 0.3 },
        pos5: { ...players._1437, role: Role.HARD_SUPPORT, skill: 29, stability: 0.5, greed: 0.3 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const gosu: Participant = {
    id: "GosuGamers",
    name: "GosuGamers",
    roster: {
        pos1: { ...players.kuroky, role: Role.CARRY, skill: 28, stability: 0.5, greed: 0.9 },
        pos2: { ...players.mirakel, role: Role.MID, skill: 21, stability: 0.6, greed: 0.5 },
        pos3: { ...players.azen, role: Role.OFFLANE, skill: 18, stability: 0.5, greed: 0.5 },
        pos4: { ...players.kebap, role: Role.SOFT_SUPPORT, skill: 18, stability: 0.7, greed: 0.2 },
        pos5: { ...players.kev, role: Role.HARD_SUPPORT, skill: 19, stability: 0.6, greed: 0.1 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const next: Participant = {
    id: "Next Evolution",
    name: "Next Evolution",
    roster: {
        pos1: { ...players.synderen, role: Role.CARRY, skill: 15, stability: 0.4, greed: 0.5 },
        pos2: { ...players.angel, role: Role.MID, skill: 17, stability: 0.6, greed: 0.5 },
        pos3: { ...players.miggel, role: Role.OFFLANE, skill: 18, stability: 0.5, greed: 0.3 },
        pos4: { ...players.ryze, role: Role.SOFT_SUPPORT, skill: 17, stability: 0.6, greed: 0.2 },
        pos5: { ...players.eatenfish, role: Role.HARD_SUPPORT, skill: 18, stability: 0.5, greed: 0.2 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const m5: Participant = {
    id: "M5",
    name: "Moscow Five",
    roster: {
        pos1: { ...players.ns, role: Role.CARRY, skill: 63, stability: 0.6, greed: 0.5 },
        pos2: { ...players.dread, role: Role.MID, skill: 59, stability: 0.6, greed: 0.4 },
        pos3: { ...players.arsArt, role: Role.OFFLANE, skill: 60, stability: 0.9, greed: 0.5 },
        pos4: { ...players.santa, role: Role.SOFT_SUPPORT, skill: 53, stability: 0.7, greed: 0.4 },
        pos5: { ...players.god, role: Role.HARD_SUPPORT, skill: 68, stability: 1, greed: 0.5 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

export const dota2Ti2011: Event = {
    id: "TI1",
    name: "The International 2011",
    year: 2011,
    teams: [ mym, mith, navi, virus, mufc, tyloo, mineski, ig, ehome, sythe, sgc, okNirvanaCn, okNirvanaInt, gosu, next, m5 ]
};
