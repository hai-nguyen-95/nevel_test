export interface PosterProps {
  id: number;
  name: string;
  src: string;
}

export interface SideBarProps {
  id: number;
  name: string;
  fullName?: string;
  src: string;
}

export interface HotGameProps {
  id: number;
  name: string;
  desc: string;
  src: string;
  squareSrc: string;
  volatility: string;
  rpt: string;
  maximumWin: string;
}

export interface HotCategoryProps {
  id: number;
  name: string;
  desc: string;
  icon: string;
  squareSrc1: string;
  squareSrc2: string;
  squareSrc3: string;
  squareSrc4: string;
  squareSrc5: string;
}

export interface BreakpointType {
  [key: string]: boolean,
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean,
  xl: boolean
}
