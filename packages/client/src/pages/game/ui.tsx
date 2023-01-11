import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { Button, Typography } from 'antd'
import { GameSpace } from './styles'
import { drawGame } from './drawGame'
import {
  createNewGame,
  $gameData,
  Movements,
  makeMove,
} from 'entities/game-drive'

const restart = () => {
  createNewGame(3, 3)
  console.log('Restart game.')
}

const HEIGHT = 400
const WIDTH = 500
const SCORE = 2484

const keyMoveMap: Record<string, Movements> = {
  ArrowLeft: Movements.Left,
  ArrowUp: Movements.Top,
  ArrowRight: Movements.Right,
  ArrowDown: Movements.Bottom,
}

type GameCanvasProps = { width?: number; height?: number }

const GameCanvas: FC<GameCanvasProps> = ({
  width = WIDTH,
  height = HEIGHT,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    createNewGame(3, 3)
    const ctx: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext('2d')

    if (ctx) {
      const unwatch = $gameData.watch(store => {
        drawGame(ctx, store.boardData, width, height)
      })

      const keyDownHandler: EventListenerOrEventListenerObject = (event) => {
        const { key } = event as KeyboardEvent;
        if (key in keyMoveMap) {
          makeMove(keyMoveMap[key])
        }
      }

      window.addEventListener('keydown', keyDownHandler)
      return () => {
        unwatch()
        window.removeEventListener('keydown', keyDownHandler)
      }
    }
  }, [])

  return <canvas ref={canvasRef} height={height} width={width} />
}

export const Game: FC<PropsWithChildren> = () => {
  return (
    <GameSpace direction="vertical" align="center" size="large">
      <Typography.Title level={5}>Score: {SCORE}</Typography.Title>
      <GameCanvas width={WIDTH} height={HEIGHT} />
      <Button onClick={restart}>Рестарт</Button>
    </GameSpace>
  )
}
