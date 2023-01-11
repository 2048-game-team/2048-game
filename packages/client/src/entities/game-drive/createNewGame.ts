import { gameData } from './common'
import { insertNewNumber } from './insertNewNumber'
import { GameStatus } from './types'
import { setGameData, setGameStatus } from './model'

const defaultBoardSize = { rows: 4, cols: 4 }
const maxBoardSize = { rows: 40, cols: 40 }

export const createNewGame = (rowCount?: number, colCount?: number) => {
  rowCount = rowCount ?? defaultBoardSize.rows
  colCount = colCount ?? defaultBoardSize.cols
  if (
    rowCount <= 0 ||
    rowCount > maxBoardSize.rows ||
    colCount <= 0 ||
    colCount > maxBoardSize.cols
  ) {
    throw new Error('Invalid board size')
  }
  gameData.boardData = new Array(rowCount)
    .fill(null)
    .map(() => new Array(colCount).fill(0))
  gameData.score = 0
  setGameStatus(GameStatus.OnGame)
  setGameData({ ...gameData })
  insertNewNumber()
  insertNewNumber()
}
