import { gameData, oneLineHandler, transposeMatrix } from './common'
import { insertNewNumber } from './insertNewNumber'
import { Movements, IMovementResult } from './types'

export const makeMove = (move: Movements) => {
  switch (move) {
    case Movements.Left: 
      leftMoveProcess()
      break
    case Movements.Top: 
      topMoveProcess()
      break
    case Movements.Right: 
      rightMoveProcess()
      break
    case Movements.Bottom: 
      bottomMoveProcess()
      break
  }
  insertNewNumber()
}

const leftMoveProcess = () => {
    gameData.boardData = gameData.boardData.map(row => {
      const res: IMovementResult = oneLineHandler(row);
      gameData.score += res.addToScore
      return res.newRaw
    })
  }
  
  const topMoveProcess = () => {
    transposeMatrix()
    leftMoveProcess()
    transposeMatrix()
  }
  
  const rightMoveProcess = () => {
    gameData.boardData = gameData.boardData.map(row => {
      const res: IMovementResult = oneLineHandler(row.reverse());
      gameData.score += res.addToScore
      return res.newRaw.reverse()
    })
  }
  
  const bottomMoveProcess = () => {
    transposeMatrix()
    rightMoveProcess()
    transposeMatrix()
  }