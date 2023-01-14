import { createNewGame, $gameData } from 'entities/game-drive'
import { FC, useRef, useEffect } from 'react'
import { WIDTH, HEIGHT } from './const'
import { drawGame } from './drawGame'
import { GameCanvasProps } from '../types'
import { keyDownHandler } from './keyDownHandler'

export const GameCanvas: FC<GameCanvasProps> = ({
  width = WIDTH,
  height = HEIGHT,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    createNewGame()
    const ctx: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext('2d')

    if (ctx) {
      const unwatch = $gameData.watch(store => {
        drawGame(ctx, store.boardData, width, height)
      })

      window.addEventListener('keydown', keyDownHandler)

      return () => {
        unwatch()
        window.removeEventListener('keydown', keyDownHandler)
      }
    }
  }, [])

  return <canvas ref={canvasRef} height={height} width={width} />
}
