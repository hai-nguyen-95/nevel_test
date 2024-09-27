import {
  ChickyRun,
  FutebolFever,
  MahjongWays,
  WildBandito,
  TreeOfFortune,
  MahjongWaysSquare,
  WildBanditoSquare,
  TreeOfFortuneSquare
} from "@/assets/img";

export const POSTER = [
  {
    id: 1,
    name: "Chicky Run",
    src: ChickyRun.src,
  },
  {
    id: 2,
    name: "Futebol Fever",
    src: FutebolFever.src,
  },
  {
    id: 3,
    name: "Mahjong Ways",
    src: MahjongWays.src,
  },
  {
    id: 4,
    name: "Wild Bandito",
    src: WildBandito.src,
  },
  {
    id: 5,
    name: "Tree of Fortune",
    src: TreeOfFortune.src,
  },
];

import {
  HomeBlack,
  AllGameBlack,
  FilterBlack,
  TimelineBlack,
  SearchBlack,
} from "@/assets/icons";

export const SIDEBAR_LIST = [
  {
    id: 1,
    name: "Home",
    fullName: "Games Home",
    src: HomeBlack.src,
  },
  {
    id: 2,
    name: "Timeline",
    src: TimelineBlack.src,
  },
  {
    id: 3,
    name: "All Games",
    src: AllGameBlack.src,
  },
];

export const SEARCH = {
  id: 4,
  name: "Search",
  src: SearchBlack.src,
};

export const FILTER = {
  id: 5,
  name: "Filter",
  src: FilterBlack.src,
};

export const ROUTER_LIST = [
  "Home",
  "Games",
  "News",
  "Math",
  "Company",
  "Events",
  "Partners",
];

export const ABOUT_US = [
  "Licensing",
  "Certification",
  "Responsible Gaming",
  "Exhibitions",
  "Copyright Protection",
  "Privacy Policy",
];

export const EVENTS = [
  "PG ICE 2017",
  "PG ICE 2018",
  "PG ICE 2019",
  "About ICE",
];

export const OUR_PARTNERS = ["Relax Gaming", "Leander Games"];

export const HOT_GAME = [
  {
    id: 1,
    name: "Mahjong Ways",
    desc: "4TECH™ has just launched their very first Mahjong inspired slot machine game",
    src: MahjongWays.src,
    squareSrc: MahjongWaysSquare.src,
  },
  {
    id: 2,
    name: "Wild Bandito",
    desc: "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activity",
    src: WildBandito.src,
    squareSrc: WildBanditoSquare.src,
  },
];

export const RELEASE_DATE_FILTER = ["AZ", "ZA"];

export const HOT_GAME_MB = {
  id: 1,
  name: "Tree Of Fortune",
  desc: "Legend has it that a farmer was granted a seed from a deity.",
  src: TreeOfFortune.src,
  squareSrc: TreeOfFortuneSquare.src,
  volatility: "Medium",
  rpt: "95.01",
  maximumWin: "5000",
};
