import { IGameData, GameStatus, IMovementResult, CellList, Array2D } from './types'
import { setGameData, setGameStatus } from './model'

const defaultBoardSize = { rows: 4, cols: 4 }
const maxBoardSize = { rows: 40, cols: 40 }
const winCreteria = 2048
let gameData: IGameData = {boardData: [], score: 0}

export const createNewGame = (rowCount?: number, colCount?: number) => {
  rowCount = rowCount ?? defaultBoardSize.rows
  colCount = colCount ?? defaultBoardSize.cols
  if(rowCount <= 0 || rowCount > maxBoardSize.rows || colCount <= 0 || colCount > maxBoardSize.cols) {
    throw new Error('Invalid board size')
  }
  gameData.boardData = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(0))
  gameData.score = 0
  setGameData(gameData)
  setGameStatus(GameStatus.OnGame)
  insertNewNumber()
  insertNewNumber() 
}

export const setGame = (data: IGameData) => {
  gameData = data
  setGameData(gameData)
}

export const leftMove = () => {
  makeNewGameData('left')
}

export const topMove = () => {
  makeNewGameData('top')
}

export const rightMove = () => {
  makeNewGameData('right')
}

export const bottomMove = () => {
  makeNewGameData('bottom')
}

const makeNewGameData = (move: 'left' | 'top' | 'right' | 'bottom') => {
  switch (move) {
    case 'left': 
      leftMoveProcess()
      break
    case 'top': 
      topMoveProcess()
      break
    case 'right': 
      rightMoveProcess()
      break
    case 'bottom': 
      bottomMoveProcess()
      break
  }
  setGameData(gameData)
  insertNewNumber()
}

const leftMoveProcess = () => {
  gameData.boardData = gameData.boardData.map(row => {
    const res: IMovementResult = makeMove(row);
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
    const res: IMovementResult = makeMove(row.reverse());
    gameData.score += res.addToScore
    return res.newRaw.reverse()
  })
}

const bottomMoveProcess = () => {
  transposeMatrix()
  rightMoveProcess()
  transposeMatrix()
}

const insertNewNumber = () => {
  const newNumber = Math.random() < 0.9 ? 2 : 4
  const freeCells = getFreeCells()
  if(freeCells.length > 0){
    const randomCellIdx = getRandomInt(freeCells.length)
    gameData.boardData[freeCells[randomCellIdx].row][freeCells[randomCellIdx].col] = newNumber
    setGameData(gameData)
  }
  if(freeCells.length <= 1){
    if(noWayToMove()) setGameStatus(GameStatus.Lost)
  }
}

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const getFreeCells = (): CellList => {
  const res: CellList = [];
  gameData.boardData.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if(col === 0) res.push({row: rowIndex, col: colIndex})
    })
  })
  return res
}

const makeMove = (raw: number[]): IMovementResult => {
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

const noWayToMove = (): boolean => {
  const horPossible = isCoupleInRow()
  transposeMatrix()
  const vertPossible = isCoupleInRow()
  transposeMatrix()
  return !horPossible && !vertPossible
}

const isCoupleInRow = (): boolean => {
  return gameData.boardData.reduce((res, row) => {
    let prev = -1
    return res || row.reduce((rowRes, value) => {
      const res = prev === value
      prev = value
      return rowRes || res
    }, false)
  }, false)
}

const transposeMatrix = () => {
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