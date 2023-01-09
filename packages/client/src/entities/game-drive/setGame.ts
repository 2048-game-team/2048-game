import { gameData } from './common'
import { IGameData } from './types'
import { setGameData } from './model'

export const setGame = (data: IGameData) => {
  gameData.boardData = data.boardData
  gameData.score = data.score
  setGameData(gameData)
}