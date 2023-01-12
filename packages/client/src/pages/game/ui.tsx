import { FC, PropsWithChildren, useEffect } from 'react'
import { GameSpace } from './styles'
import { setGame } from 'entities/game-drive'
import { GameCanvas } from './gameCanvas'
import { GameRestartButton } from './gameRestartButton'
import { GameInfo } from './gameInfo'

export const Game: FC<PropsWithChildren> = () => {
  useEffect(() => {
    return () => setGame({ boardData: [], score: 0 })
  }, [])

  return (
    <GameSpace direction="vertical" align="center" size="small">
      <GameInfo />
      <GameCanvas />
      <GameRestartButton />
    </GameSpace>
  )
}
