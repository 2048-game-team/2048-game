export type Array2D = number[][]

export interface IGameData  {
  boardData: Array2D,
  score: number, 
}

export enum GameStatus {
  OnGame = 'on-game',
  Win = 'win',
  Lost = 'lost'
}

export enum Movements {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom'
}

export type CellList = {row: number, col: number}[]

export interface IMovementResult {
    newRaw: number[],
    addToScore: number,
}
