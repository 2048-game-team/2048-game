import { createNewGame, setGame, makeMove } from 'entities/game-drive'
import { IGameData, GameStatus, Movements } from 'entities/game-drive/types'
import { $gameData, $gameStatus } from 'entities/game-drive/model'
import 'root/jest.mock'

const testDimension = 3
let gameData: IGameData
let gameStatus: GameStatus

$gameData?.watch(data => (gameData = data))
$gameStatus?.watch(data => (gameStatus = data))

const compareArrays = (a: number[], b: number[]) => {
  return JSON.stringify(a) === JSON.stringify(b)
}

test('Init board test', () => {
  createNewGame(testDimension, testDimension)
  const chipSum = gameData?.boardData.reduce(
    (sum, row) => sum + row.reduce((sum, col) => sum + col, 0),
    0
  )
  expect([4, 6, 8].includes(chipSum as number)).toEqual(true)
  expect(gameStatus).toEqual(GameStatus.OnGame)
})

test('Set board test', () => {
  const setRows = []
  setRows.push([0, 0, 0])
  setRows.push([0, 2, 0])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })

  for (let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], setRows[i])).toEqual(true)
})

test('Try left movement', () => {
  makeMove(Movements.Left)
  expect(gameData.boardData[1][0]).toEqual(2)
})

test('Try right movement', () => {
  const setRows = []
  setRows.push([0, 0, 0])
  setRows.push([0, 2, 0])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Right)
  expect(gameData.boardData[1][2]).toEqual(2)
})

test('Try top movement', () => {
  const setRows = []
  setRows.push([0, 0, 0])
  setRows.push([0, 2, 0])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Top)
  expect(gameData.boardData[0][1]).toEqual(2)
})

test('Try bottom movement', () => {
  const setRows = []
  setRows.push([0, 0, 0])
  setRows.push([0, 2, 0])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Bottom)
  expect(gameData.boardData[2][1]).toEqual(2)
})

test('Test1 chips collapse', () => {
  const setRows = []
  setRows.push([2, 0, 0])
  setRows.push([2, 0, 0])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Top)
  expect(gameData.boardData[0][0]).toEqual(4)
})

test('Test2 chips collapse', () => {
  const setRows = []
  setRows.push([2, 0, 0])
  setRows.push([0, 0, 0])
  setRows.push([2, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Top)
  expect(gameData.boardData[0][0]).toEqual(4)
})

test('Test3 chips collapse', () => {
  const setRows = []
  setRows.push([2, 0, 0])
  setRows.push([2, 0, 0])
  setRows.push([2, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Top)
  expect(gameData.boardData[0][0]).toEqual(2)
  expect(gameData.boardData[1][0]).toEqual(4)
})

test('Test4 chips collapse', () => {
  const setRows = []
  setRows.push([0, 0, 0])
  setRows.push([4, 0, 4])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Right)
  expect(gameData.boardData[1][2]).toEqual(8)
})

test('Test5 chips collapse', () => {
  const setRows = []
  setRows.push([0, 0, 16])
  setRows.push([0, 0, 16])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Bottom)
  expect(gameData.boardData[2][2]).toEqual(32)
})

test('Test6 chips collapse, score test', () => {
  const setRows = []
  setRows.push([0, 16, 16])
  setRows.push([16, 0, 16])
  setRows.push([0, 0, 0])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Left)
  expect(gameData.boardData[0][0]).toEqual(32)
  expect(gameData.boardData[1][0]).toEqual(32)
  expect(gameData.score).toEqual(64)
})

test('Test on-game status', () => {
  const setRows = []
  setRows.push([8, 2, 2])
  setRows.push([16, 32, 1024])
  setRows.push([8, 16, 2])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Bottom)
  expect(gameStatus).toEqual(GameStatus.OnGame)
})

test('Test win status', () => {
  const setRows = []
  setRows.push([8, 8, 2])
  setRows.push([16, 0, 1024])
  setRows.push([0, 0, 1024])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Bottom)
  expect(gameStatus).toEqual(GameStatus.Win)
})

test('Test lost status', () => {
  const setRows = []
  setRows.push([8, 16, 0])
  setRows.push([16, 32, 1024])
  setRows.push([8, 16, 2])

  setGame({ boardData: setRows, score: 0 })
  makeMove(Movements.Bottom)
  expect(gameStatus).toEqual(GameStatus.Lost)
})
