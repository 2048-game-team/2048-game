import { IGameData, GameStatus, IMovementResult, Array2D } from './types'
import { setGameStatus } from './model'

export const gameData: IGameData = {boardData: [], score: 0}

const winCreteria = 2048

export const oneLineHandler = (raw: number[]): IMovementResult => {
  let addToScore = 0
  const rawLength = raw.length
  const onlyNumbers = raw.filter(item => item > 0)
  let i = onlyNumbers.length - 1
  while (i > 0) {
    if(onlyNumbers[i - 1] === onlyNumbers[i]) {
      onlyNumbers.splice(i, 1)
      onlyNumbers[i - 1] = 2 * onlyNumbers[i - 1]
      addToScore += onlyNumbers[i - 1]
      if(onlyNumbers[i - 1] >= winCreteria) setGameStatus(GameStatus.Win)
      i--
    }
    i--
  }
  raw = onlyNumbers.concat(new Array(rawLength - onlyNumbers.length).fill(0))
  return { newRaw: raw, addToScore: addToScore }
}


export const transposeMatrix = () => {
  if(!gameData.boardData[0].length) throw new Error('Invalid matrix')
  const res: Array2D = 
    new Array(gameData.boardData[0].length).fill(null).map(() => new Array(gameData.boardData.length).fill(0))
  gameData.boardData.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      res[colIndex][rowIndex] = value
    })
  })
  gameData.boardData = res
}