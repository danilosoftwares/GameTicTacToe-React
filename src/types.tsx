export enum MarkGame {
  X = 1,
  O = 2,
  N = 3
}

export interface ListGame {
  name:string;
  odd:MarkGame;
}

export type TodoContextType = {
  GameWin: boolean;
  getOdd:  (name:string)  => MarkGame;
  setOdd: (name:string) => void;
  verifyWin: (list:Array<ListGame>, values:Array<string>) => void;
  restartGame: () => void;
};