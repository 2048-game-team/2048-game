import { createEvent, restore } from 'effector'
import { IGameData, GameStatus } from './types'

export const setGameData = createEvent<IGameData>()
export const setgameStatus = createEvent<GameStatus>()

export const $gameData = restore(setGameData, {boardData:[], score: 0})
export const $gameStatus = restore(setgameStatus, GameStatus.OnGame);