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

export type CellList = {row: number, col: number}[]

export interface IMovementResult {
    newRaw: number[],
    addToScore: number,
}
