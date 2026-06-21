import { Participant, QualificationType } from "../lib/models/team.model";
import { Event } from "../lib/models/event.model";
import { Role } from "../lib/models/player.model";
import * as players from "./players";

const navi: Participant = {
    id: "NAVI",
    name: "Natus Vincere",
    roster: {
        pos1: { ...players.xboct, role: Role.CARRY, skill: 66, stability: 0.5, greed: 0.7 },
        pos2: { ...players.dendi, role: Role.MID, skill: 89, stability: 1, greed: 0.5 },
        pos3: { ...players.lightOfHeaven, role: Role.OFFLANE, skill: 65, stability: 0.6, greed: 0.7 },
        pos4: { ...players.puppey, role: Role.SOFT_SUPPORT, skill: 78, stability: 1, greed: 0.7 },
        pos5: { ...players.arsArt, role: Role.HARD_SUPPORT, skill: 58, stability: 0.9, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const dk: Participant = {
    id: "DK",
    name: "Team DK",
    roster: {
        pos1: { ...players.burning, role: Role.CARRY, skill: 85, stability: 1, greed: 0.8 },
    pos2: { ...players.super_, role: Role.MID, skill: 76, stability: 0.9, greed: 0.6 },
        pos3: { ...players.rotk, role: Role.OFFLANE, skill: 79, stability: 0.7, greed: 0.7 },
        pos4: { ...players.zippo, role: Role.SOFT_SUPPORT, skill: 60, stability: 0.4, greed: 0.3 },
        pos5: { ...players.longdd, role: Role.HARD_SUPPORT, skill: 68, stability: 0.7, greed: 0.5 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const orange: Participant = {
    id: "ORANGE",
    name: "Orange Esports",
    roster: {
        pos1: { ...players.yamathe, role: Role.CARRY, skill: 60, stability: 0.8, greed: 0.6 },
        pos2: { ...players.mushi, role: Role.MID, skill: 70, stability: 0.9, greed: 0.8 },
        pos3: { ...players.winter, role: Role.OFFLANE, skill: 58, stability: 0.6, greed: 0.5 },
        pos4: { ...players.xtinct, role: Role.SOFT_SUPPORT, skill: 50, stability: 0.6, greed: 0.4 },
        pos5: { ...players.ice, role: Role.HARD_SUPPORT, skill: 58, stability: 0.7, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const al: Participant = {
    id: "AL",
    name: "Absolute Legends",
    roster: {
        pos1: { ...players.blackshatan, role: Role.CARRY, skill: 18, stability: 0.5, greed: 0.5 },
        pos2: { ...players.xmusica, role: Role.MID, skill: 21, stability: 0.4, greed: 0.5 },
        pos3: { ...players.bleek, role: Role.OFFLANE, skill: 17, stability: 0.5, greed: 0.5 },
        pos4: { ...players.godot, role: Role.SOFT_SUPPORT, skill: 16, stability: 0.4, greed: 0.4 },
        pos5: { ...players.snoopy, role: Role.HARD_SUPPORT, skill: 15, stability: 0.3, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ehome: Participant = {
    id: "EHOM",
    name: "EHOME",
    roster: {
        pos1: { ...players.lanm, role: Role.CARRY, skill: 76, stability: 0.9, greed: 0.4 },
        pos2: { ...players.kingj, role: Role.MID, skill: 60, stability: 0.7, greed: 0.5 },
        pos3: { ...players.pct, role: Role.OFFLANE, skill: 58, stability: 0.6, greed: 0.5 },
        pos4: { ...players.x, role: Role.SOFT_SUPPORT, skill: 74, stability: 0.8, greed: 0.7 },
        pos5: { ...players.qqq, role: Role.HARD_SUPPORT, skill: 66, stability: 0.8, greed: 0.6 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const ig: Participant = {
    id: "IG",
    name: "Invictus Gaming",
    roster: {
        pos1: { ...players.zhou, role: Role.CARRY, skill: 75, stability: 1, greed: 0.5 },
        pos2: { ...players.ferrari_430, role: Role.MID, skill: 89, stability: 1, greed: 0.8 },
        pos3: { ...players.yyf, role: Role.OFFLANE, skill: 65, stability: 0.6, greed: 0.4 },
        pos4: { ...players.chuan, role: Role.SOFT_SUPPORT, skill: 78, stability: 0.8, greed: 0.3 },
        pos5: { ...players.faith, role: Role.HARD_SUPPORT, skill: 69, stability: 0.7, greed: 0.3 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const lgd: Participant = {
    id: "LGD",
    name: "LGD Gaming",
    roster: {
        pos1: { ...players.sylar, role: Role.CARRY, skill: 74, stability: 1, greed: 0.8 },
        pos2: { ...players.xiao8, role: Role.MID, skill: 66, stability: 0.7, greed: 0.6 },
        pos3: { ...players.yao, role: Role.OFFLANE, skill: 50, stability: 0.5, greed: 0.6 },
        pos4: { ...players.dd, role: Role.SOFT_SUPPORT, skill: 57, stability: 0.8, greed: 0.4 },
        pos5: { ...players.ddc, role: Role.HARD_SUPPORT, skill: 69, stability: 0.8, greed: 0.3 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const clg: Participant = {
    id: "CLG",
    name: "Counter Logic Gaming",
    roster: {
        pos1: { ...players.pajkatt, role: Role.CARRY, skill: 40, stability: 0.8, greed: 0.5 },
        pos2: { ...players.misery, role: Role.MID, skill: 61, stability: 0.8, greed: 0.6 },
        pos3: { ...players.lacoste, role: Role.OFFLANE, skill: 24, stability: 0.6, greed: 0.4 },
        pos4: { ...players.mirakel, role: Role.SOFT_SUPPORT, skill: 27, stability: 0.6, greed: 0.3 },
        pos5: { ...players.akke, role: Role.HARD_SUPPORT, skill: 50, stability: 0.8, greed: 0.6 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const eg: Participant = {
    id: "EG",
    name: "Evil Geniuses",
    roster: {
        pos1: { ...players.fear, role: Role.CARRY, skill: 49, stability: 1, greed: 0.8 },
        pos2: { ...players.bulba, role: Role.MID, skill: 33, stability: 0.4, greed: 0.3 },
        pos3: { ...players.demon, role: Role.OFFLANE, skill: 40, stability: 0.6, greed: 0.4 },
        pos4: { ...players.maelk, role: Role.SOFT_SUPPORT, skill: 55, stability: 0.5, greed: 0.4 },
        pos5: { ...players.universe, role: Role.HARD_SUPPORT, skill: 45, stability: 0.8, greed: 0.5 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const zenith: Participant = {
    id: "Zenith",
    name: "Team Zenith",
    roster: {
        pos1: { ...players.hyhy, role: Role.CARRY, skill: 61, stability: 0.9, greed: 0.6 },
        pos2: { ...players.iceiceice, role: Role.MID, skill: 65, stability: 0.8, greed: 0.7 },
        pos3: { ...players.loda, role: Role.OFFLANE, skill: 50, stability: 0.5, greed: 0.6 },
        pos4: { ...players.xfreedom, role: Role.SOFT_SUPPORT, skill: 38, stability: 0.4, greed: 0.3 },
        pos5: { ...players.xy, role: Role.HARD_SUPPORT, skill: 40, stability: 0.6, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const darer: Participant = {
    id: "Darer",
    name: "Darer Entertainment",
    roster: {
        pos1: { ...players.artstyle, role: Role.CARRY, skill: 65, stability: 0.7, greed: 0.4 },
        pos2: { ...players.god, role: Role.MID, skill: 60, stability: 0.9, greed: 0.7 },
        pos3: { ...players.mag, role: Role.OFFLANE, skill: 41, stability: 0.5, greed: 0.4 },
        pos4: { ...players.goblak, role: Role.SOFT_SUPPORT, skill: 39, stability: 0.4, greed: 0.3 },
        pos5: { ...players.funn1k, role: Role.HARD_SUPPORT, skill: 49, stability: 0.4, greed: 0.5 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const col: Participant = {
    id: "CompLexity",
    name: "CompLexity Gaming",
    roster: {
        pos1: { ...players.tc, role: Role.CARRY, skill: 33, stability: 1, greed: 0.5 },
        pos2: { ...players.jeyo, role: Role.MID, skill: 29, stability: 0.6, greed: 0.5 },
        pos3: { ...players.hannah_montana, role: Role.OFFLANE, skill: 30, stability: 0.5, greed: 0.4 },
        pos4: { ...players.fluffstuff, role: Role.SOFT_SUPPORT, skill: 40, stability: 0.6, greed: 0.3 },
        pos5: { ...players.ixmike88, role: Role.HARD_SUPPORT, skill: 30, stability: 0.2, greed: 0.2 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const m5: Participant = {
    id: "M5",
    name: "Moscow Five",
    roster: {
        pos1: { ...players.silent, role: Role.CARRY, skill: 30, stability: 0.9, greed: 0.6 },
        pos2: { ...players.admiration, role: Role.MID, skill: 21, stability: 0.5, greed: 0.6 },
        pos3: { ...players.vigoss, role: Role.OFFLANE, skill: 41, stability: 1, greed: 0.9 },
        pos4: { ...players.pgg, role: Role.SOFT_SUPPORT, skill: 29, stability: 0.6, greed: 0.3 },
        pos5: { ...players.bloodangel, role: Role.HARD_SUPPORT, skill: 19, stability: 0.7, greed: 0.4 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mt: Participant = {
    id: "MT",
    name: "Mortal Teamwork",
    roster: {
        pos1: { ...players.sockshka, role: Role.CARRY, skill: 37, stability: 0.9, greed: 0.6 },
        pos2: { ...players.synderen, role: Role.MID, skill: 18, stability: 0.5, greed: 0.6 },
        pos3: { ...players.funzil, role: Role.OFFLANE, skill: 20, stability: 1, greed: 0.9 },
        pos4: { ...players.kebap, role: Role.SOFT_SUPPORT, skill: 19, stability: 0.6, greed: 0.2 },
        pos5: { ...players._7ckngmad, role: Role.HARD_SUPPORT, skill: 30, stability: 0.5, greed: 0.7 },
    },
    qualification: QualificationType.REGIONAL_QUALIFIER,
};

const tongfu: Participant = {
    id: "TongFu",
    name: "TongFu",
    roster: {
        pos1: { ...players.hao, role: Role.CARRY, skill: 59, stability: 1, greed: 0.8 },
        pos2: { ...players.mu, role: Role.MID, skill: 60, stability: 0.9, greed: 0.9 },
        pos3: { ...players.kabu, role: Role.OFFLANE, skill: 40, stability: 0.7, greed: 0.3 },
        pos4: { ...players.awoke, role: Role.SOFT_SUPPORT, skill: 45, stability: 0.7, greed: 0.3 },
        pos5: { ...players.sansheng, role: Role.HARD_SUPPORT, skill: 58, stability: 0.8, greed: 0.4 },
    },
    qualification: QualificationType.REGIONAL_QUALIFIER,
};

const mouse: Participant = {
    id: "mouse",
    name: "mousesports",
    roster: {
        pos1: { ...players.black, role: Role.CARRY, skill: 38, stability: 0.8, greed: 0.9 },
        pos2: { ...players.singsing, role: Role.MID, skill: 35, stability: 0.7, greed: 0.5 },
        pos3: { ...players.sexybamboe, role: Role.OFFLANE, skill: 25, stability: 0.4, greed: 0.5 },
        pos4: { ...players._1437, role: Role.SOFT_SUPPORT, skill: 29, stability: 0.5, greed: 0.3 },
        pos5: { ...players.kuroky, role: Role.HARD_SUPPORT, skill: 38, stability: 0.7, greed: 0.8 },
    },
    qualification: QualificationType.WILD_CARD,
};

export const dota2Ti2012: Event = {
    id: "TI2",
    name: "The International 2012",
    year: 2012,
    teams: [ navi, dk, orange, al, ehome, ig, lgd, clg, eg, zenith, darer, col, m5, mt, tongfu, mouse ]
};