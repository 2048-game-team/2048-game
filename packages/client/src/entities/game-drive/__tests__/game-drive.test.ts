import { GameDrive } from 'entities/game-drive/game-drive'
import { IGameData, GameStatusType } from 'entities/game-drive/types'
import 'root/jest.mock'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
/*global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)*/

const testDimension = 3;
const gameDrive = new GameDrive(testDimension, testDimension);

const compareArrays = (a: number[], b: number[]) => {
  return JSON.stringify(a) === JSON.stringify(b)
};

test('Init board test', () => {
  let gameData: IGameData = {boardData: [], score: 0}
  gameDrive.$gameData?.watch(data => gameData = data)
  const expectRows = []
  expectRows.push([0,0,0])
  expectRows.push([0,2,0])
  expectRows.push([0,0,0])
  for(let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], expectRows[i])).toEqual(true)

  let gameStatus: GameStatusType = 'on-game'
  gameDrive.$gameStatus?.watch(data => {gameStatus = data})
  expect(gameStatus).toEqual('on-game') 
})

test('Try left movement', () => {
  gameDrive.leftMove()
  let gameData: IGameData = {boardData: [], score: 0}
  gameDrive.$gameData?.watch(data => gameData = data)
  const expectRows = []
  expectRows.push([0,0,0])
  expectRows.push([2,0,0])
  expectRows.push([0,0,0])
  for(let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], expectRows[i])).toEqual(true)
  expect(gameData?.score).toEqual(1)
  let gameStatus: GameStatusType = 'on-game'
  gameDrive.$gameStatus?.watch(data => {gameStatus = data})
  expect(gameStatus).toEqual('on-game') 
})

test('Try top movement', () => {
  gameDrive.topMove()
  let gameData: IGameData = {boardData: [], score: 0}
  gameDrive.$gameData?.watch(data => gameData = data)
  const expectRows = []
  expectRows.push([2,0,0])
  expectRows.push([0,0,0])
  expectRows.push([0,0,0])
  for(let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], expectRows[i])).toEqual(true)
  expect(gameData?.score).toEqual(2)
  let gameStatus: GameStatusType = 'on-game'
  gameDrive.$gameStatus?.watch(data => {gameStatus = data})
  expect(gameStatus).toEqual('on-game') 
})

test('Try right movement', () => {
  gameDrive.rightMove()
  let gameData: IGameData = {boardData: [], score: 0}
  gameDrive.$gameData?.watch(data => gameData = data)
  const expectRows = []
  expectRows.push([0,2,0])
  expectRows.push([0,0,0])
  expectRows.push([0,0,0])
  for(let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], expectRows[i])).toEqual(true)
  expect(gameData?.score).toEqual(3)
  let gameStatus: GameStatusType = 'on-game'
  gameDrive.$gameStatus?.watch(data => {gameStatus = data})
  expect(gameStatus).toEqual('on-game') 
})

test('Try bottom movement', () => {
  gameDrive.bottomMove()
  let gameData: IGameData = {boardData: [], score: 0}
  gameDrive.$gameData?.watch(data => gameData = data)
  const expectRows = []
  expectRows.push([0,0,0])
  expectRows.push([0,2,0])
  expectRows.push([0,0,0])
  for(let i = 0; i < testDimension; i++)
    expect(compareArrays(gameData?.boardData[i], expectRows[i])).toEqual(true)
  expect(gameData?.score).toEqual(4)
  let gameStatus: GameStatusType = 'on-game'
  gameDrive.$gameStatus?.watch(data => {gameStatus = data})
  expect(gameStatus).toEqual('win') 
})