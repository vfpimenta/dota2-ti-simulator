import { Participant, QualificationType } from "../lib/models/team.model";
import { Event } from "../lib/models/event.model";
import { Competitor, Role } from "../lib/models/player.model";
import * as players from "./players";

const mym: Participant = {
    id: "MYM",
    name: "Meet Your Makers",
    roster: {
        pos1: { ...players.misery, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.mania, role: Role.MID, elo: 8600 },
        pos3: { ...players.playmate, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.maelk, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.demon, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mith: Participant = {
    id: "MiTH",
    name: "Made in Thailand",
    roster: {
        pos1: { ...players.l3nu, role: Role.CARRY, elo: 8000 },
        pos2: { ...players.tnk, role: Role.MID, elo: 8100 },
        pos3: { ...players.lakelz, role: Role.OFFLANE, elo: 8200 },
        pos4: { ...players.lookball, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.aabbaa, role: Role.HARD_SUPPORT, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const navi: Participant = {
    id: "NAVI",
    name: "Natus Vincere",
    roster: {
        pos1: { ...players.artstyle, role: Role.CARRY, elo: 650 },
        pos2: { ...players.dendi, role: Role.MID, elo: 875 },
        pos3: { ...players.xboct, role: Role.OFFLANE, elo: 400 },
        pos4: { ...players.puppey, role: Role.SOFT_SUPPORT, elo: 750 },
        pos5: { ...players.lightOfHeaven, role: Role.HARD_SUPPORT, elo: 550 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const virus: Participant = {
    id: "Virus",
    name: "Virus Gaming",
    roster: {
        pos1: { ...players.maldeJambes, role: Role.CARRY, elo: 7800 },
        pos2: { ...players.vladtepes, role: Role.MID, elo: 7900 },
        pos3: { ...players.sockshka, role: Role.OFFLANE, elo: 8000 },
        pos4: { ...players.pseudo, role: Role.SOFT_SUPPORT, elo: 8100 },
        pos5: { ...players.phoenix, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mufc: Participant = {
    id: "MUFC",
    name: "MUFC",
    roster: {
        pos1: { ...players.silverCross, role: Role.CARRY, elo: 8000 },
        pos2: { ...players.net, role: Role.MID, elo: 8100 },
        pos3: { ...players.sharky, role: Role.OFFLANE, elo: 8200 },
        pos4: { ...players.xiaoling, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.kyxy, role: Role.HARD_SUPPORT, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const tyloo: Participant = {
    id: "TYLOO",
    name: "TYLOO",
    roster: {
        pos1: { ...players.awoke, role: Role.CARRY, elo: 8000 },
        pos2: { ...players.kabu, role: Role.MID, elo: 8100 },
        pos3: { ...players.dd, role: Role.OFFLANE, elo: 8200 },
        pos4: { ...players.hao, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.faith, role: Role.HARD_SUPPORT, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mineski: Participant = {
    id: "Mineski",
    name: "Mineski",
    roster: {
        pos1: { ...players.wootz, role: Role.CARRY, elo: 8000 },
        pos2: { ...players.julz, role: Role.MID, elo: 8100 },
        pos3: { ...players.john, role: Role.OFFLANE, elo: 8200 },
        pos4: { ...players.owa, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.vash, role: Role.HARD_SUPPORT, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ig: Participant = {
    id: "iG",
    name: "Invictus Gaming",
    roster: {
        pos1: { ...players.zhou, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.ferrari_430, role: Role.MID, elo: 8600 },
        pos3: { ...players.xiao8, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.sansheng, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.ddc, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ehome: Participant = {
    id: "EHOME",
    name: "EHOME",
    roster: {
        pos1: { ...players._820, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.qqq, role: Role.MID, elo: 8600 },
        pos3: { ...players.x, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.lanm, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.sjq, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sythe: Participant = {
    id: "Sythe",
    name: "Sythe Gaming",
    roster: {
        pos1: { ...players.hyhy, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.xy, role: Role.MID, elo: 8600 },
        pos3: { ...players.tofu, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.chawy, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.roy, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sgc: Participant = {
    id: "SGC",
    name: "Storm Games Clan",
    roster: {
        pos1: { ...players.cranich, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.lacek, role: Role.MID, elo: 8600 },
        pos3: { ...players.tonci, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.tulex, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.warlog, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaCn: Participant = {
    id: "OK.Nirvana.cn",
    name: "OK.Nirvana.cn",
    roster: {
        pos1: { ...players.insence, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.ksssssss, role: Role.MID, elo: 8600 },
        pos3: { ...players.banana, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.yao, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.seaking, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaInt: Participant = {
    id: "OK.Nirvana.Int",
    name: "OK.Nirvana.Int",
    roster: {
        pos1: { ...players.fear, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.lacoste, role: Role.MID, elo: 8600 },
        pos3: { ...players.comeWithMe, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.pajkatt, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players._1437, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const gosu: Participant = {
    id: "GosuGamers",
    name: "GosuGamers",
    roster: {
        pos1: { ...players.kuroky, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.mirakel, role: Role.MID, elo: 8600 },
        pos3: { ...players.azen, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.kebap, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.kev, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const next: Participant = {
    id: "Next Evolution",
    name: "Next Evolution",
    roster: {
        pos1: { ...players.synderen, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.angel, role: Role.MID, elo: 8600 },
        pos3: { ...players.miggel, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.ryze, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.eatenfish, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const m5: Participant = {
    id: "M5",
    name: "Moscow Five",
    roster: {
        pos1: { ...players.ns, role: Role.CARRY, elo: 8500 },
        pos2: { ...players.dread, role: Role.MID, elo: 8600 },
        pos3: { ...players.arsArt, role: Role.OFFLANE, elo: 8400 },
        pos4: { ...players.santa, role: Role.SOFT_SUPPORT, elo: 8300 },
        pos5: { ...players.god, role: Role.HARD_SUPPORT, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

export const dota2Ti2011: Event = {
    id: "TI1",
    name: "The International 2011",
    year: 2011,
    teams: [ mym, mith, navi, virus, mufc, tyloo, mineski, ig, ehome, sythe, sgc, okNirvanaCn, okNirvanaInt, gosu, next, m5 ]
};
