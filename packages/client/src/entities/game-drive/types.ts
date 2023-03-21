export type Array2D = number[][];
export type OneLine = number[];

export interface IGameData {
  boardData: Array2D;
  score: number;
}

export enum GameStatus {
  OnGame = 'on-game',
  Win = 'win',
  Lost = 'lost',
}

export enum Movements {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export type Cell = {
  x: number;
  y: number;
  value: number;
  maxWidth: number;
  maxHeight: number;
};

export type CellList = { row: number; col: number }[];

export interface IMovementResult {
  newLine: number[];
}

export interface ICollapsedData {
  line: number[];
  newValue: number;
}
