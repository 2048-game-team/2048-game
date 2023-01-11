import { Button } from 'antd'
import { createNewGame } from 'entities/game-drive'
import { FC, PropsWithChildren } from 'react'

const restartHandler = () => {
  createNewGame()
}

export const RestartButton: FC<PropsWithChildren> = () => {
  return <Button onClick={restartHandler}>Рестарт</Button>
}
