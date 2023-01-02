import { createEvent, restore } from 'effector'
import { IGameData, GameStatus } from './types'

export const setGameData = createEvent<IGameData>()
export const setgameStatus = createEvent<GameStatus>()

export const $gameData = restore(setGameData, {boardData:[], score: 0})
export const $gameStatus = restore(setgameStatus, GameStatus.OnGame);


/*$gameStatus!: Store<GameStatusType>

rowCount!: number;
colCount!: number;

leftMove!: Event<void>
topMove!: Event<void>
rightMove!: Event<void>
bottomMove!: Event<void>
updateGameStatus!: Event<void>*/