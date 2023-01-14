import { FC, PropsWithChildren, useEffect } from 'react'
import { useStore } from 'effector-react'
import { useNavigate } from 'react-router-dom'
import { GameSpace } from './styles'
import { GameCanvas } from './gameCanvas'
import { GameRestartButton } from './gameRestartButton'
import { GameInfo } from './gameInfo'
import { $gameStatus } from 'entities/game-drive'
import { GameStatus } from 'entities/game-drive'
import { routesPath } from 'processes/routes'

export const Game: FC<PropsWithChildren> = () => {
  const status = useStore($gameStatus)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === GameStatus.Lost) navigate(routesPath.finish)
  }, [status])

  return (
    <GameSpace direction="vertical" align="center" size="small">
      <GameInfo />
      <GameCanvas />
      <GameRestartButton />
    </GameSpace>
  )
}
