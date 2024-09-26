import { ChickyRun, FutebolFever, MahjongWays, WildBandito, TreeOfFortune } from "@/assets/img";

export const POSTER = [
  {
    id: 1,
    name: "Chicky Run",
    src: ChickyRun.src
  },
  {
    id: 2,
    name: "Futebol Fever",
    src: FutebolFever.src
  },
  {
    id: 3,
    name: "Mahjong Ways",
    src: MahjongWays.src
  },
  {
    id: 4,
    name: "Wild Bandito",
    src: WildBandito.src
  },
  {
    id: 5,
    name: "Tree of Fortune",
    src: TreeOfFortune.src
  }
]

export const ROUTER_LIST = [
  "HOME",
  "GAMES",
  "NEWS",
  "MATH",
  "COMPANY",
  "EVENTS",
  "PARTNERS",
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