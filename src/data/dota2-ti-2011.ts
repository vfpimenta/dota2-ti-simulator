import { Participant, QualificationType } from "../lib/models/team.model";
import { Event } from "../lib/models/event.model";
import * as players from "./players";

const mym: Participant = {
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
    qualification: QualificationType.DIRECT_INVITE,
};

const navi = {
    id: "NAVI",
    name: "Natus Vincere",
    roster: {
        pos1: { player: players.artstyle, elo: 650 },
        pos2: { player: players.dendi, elo: 875 },
        pos3: { player: players.xboct, elo: 400 },
        pos4: { player: players.puppey, elo: 750 },
        pos5: { player: players.lightOfHeaven, elo: 550 },
    },
    qualification: QualificationType.DIRECT_INVITE,
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
    qualification: QualificationType.DIRECT_INVITE,
    year: 2011,
};

const tyloo = {
    id: "TYLOO",
    name: "TYLOO",
    roster: {
        pos1: { player: players.awoke, elo: 8000 },
        pos2: { player: players.kabu, elo: 8100 },
        pos3: { player: players.dd, elo: 8200 },
        pos4: { player: players.hao, elo: 8300 },
        pos5: { player: players.faith, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const mineski = {
    id: "Mineski",
    name: "Mineski",
    roster: {
        pos1: { player: players.wootz, elo: 8000 },
        pos2: { player: players.julz, elo: 8100 },
        pos3: { player: players.john, elo: 8200 },
        pos4: { player: players.owa, elo: 8300 },
        pos5: { player: players.vash, elo: 8400 },
    },
    qualification: QualificationType.DIRECT_INVITE,
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
};

const ehome = {
    id: "EHOME",
    name: "EHOME",
    roster: {
        pos1: { player: players._820, elo: 8500 },
        pos2: { player: players.qqq, elo: 8600 },
        pos3: { player: players.x, elo: 8400 },
        pos4: { player: players.lanm, elo: 8300 },
        pos5: { player: players.sjq, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sythe = {
    id: "Sythe",
    name: "Sythe Gaming",
    roster: {
        pos1: { player: players.hyhy, elo: 8500 },
        pos2: { player: players.xy, elo: 8600 },
        pos3: { player: players.tofu, elo: 8400 },
        pos4: { player: players.chawy, elo: 8300 },
        pos5: { player: players.roy, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const sgc = {
    id: "SGC",
    name: "Storm Games Clan",
    roster: {
        pos1: { player: players.cranich, elo: 8500 },
        pos2: { player: players.lacek, elo: 8600 },
        pos3: { player: players.tonci, elo: 8400 },
        pos4: { player: players.tulex, elo: 8300 },
        pos5: { player: players.warlog, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaCn = {
    id: "OK.Nirvana.cn",
    name: "OK.Nirvana.cn",
    roster: {
        pos1: { player: players.insence, elo: 8500 },
        pos2: { player: players.ksssssss, elo: 8600 },
        pos3: { player: players.banana, elo: 8400 },
        pos4: { player: players.yao, elo: 8300 },
        pos5: { player: players.seaking, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const okNirvanaInt = {
    id: "OK.Nirvana.Int",
    name: "OK.Nirvana.Int",
    roster: {
        pos1: { player: players.fear, elo: 8500 },
        pos2: { player: players.lacoste, elo: 8600 },
        pos3: { player: players.comeWithMe, elo: 8400 },
        pos4: { player: players.pajkatt, elo: 8300 },
        pos5: { player: players._1437, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const gosu = {
    id: "GosuGamers",
    name: "GosuGamers",
    roster: {
        pos1: { player: players.kuroky, elo: 8500 },
        pos2: { player: players.mirakel, elo: 8600 },
        pos3: { player: players.azen, elo: 8400 },
        pos4: { player: players.kebap, elo: 8300 },
        pos5: { player: players.kev, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const next = {
    id: "Next Evolution",
    name: "Next Evolution",
    roster: {
        pos1: { player: players.synderen, elo: 8500 },
        pos2: { player: players.angel, elo: 8600 },
        pos3: { player: players.miggel, elo: 8400 },
        pos4: { player: players.ryze, elo: 8300 },
        pos5: { player: players.eatenfish, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

const m5 = {
    id: "M5",
    name: "Moscow Five",
    roster: {
        pos1: { player: players.ns, elo: 8500 },
        pos2: { player: players.dread, elo: 8600 },
        pos3: { player: players.arsArt, elo: 8400 },
        pos4: { player: players.santa, elo: 8300 },
        pos5: { player: players.god, elo: 8200 },
    },
    qualification: QualificationType.DIRECT_INVITE,
};

export const dota2Ti2011: Event = {
    id: "TI1",
    name: "The International 2011",
    year: 2011,
    teams: [ mym, mith, navi, virus, mufc, tyloo, mineski, ig, ehome, sythe, sgc, okNirvanaCn, okNirvanaInt, gosu, next, m5 ]
};
