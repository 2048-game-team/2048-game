import { FC, PropsWithChildren } from 'react'
import { useStore } from 'effector-react'
import { Typography } from 'antd'
import { GameSpace } from './styles'
import {
  $gameData,
} from 'entities/game-drive'
import { GameCanvas } from './gameCanvas'
import { RestartButton } from './restartButton'

export const Game: FC<PropsWithChildren> = () => {
  const { score } = useStore($gameData)

  return (
    <GameSpace direction="vertical" align="center" size="large">
      <Typography.Title level={5}>Score: {score}</Typography.Title>
      <GameCanvas />
      <RestartButton />
    </GameSpace>
  )
}
