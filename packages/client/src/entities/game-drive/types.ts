export type Array2D = number[][]

export interface IGameData  {
    boardData: Array2D,
    score: number, 
}

export type GameStatusType = "on-game" | "win" | "lost";