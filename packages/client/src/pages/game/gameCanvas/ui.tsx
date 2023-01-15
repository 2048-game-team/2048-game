import { createNewGame, $gameData } from 'entities/game-drive';
import { FC, useRef, useEffect } from 'react';
import { WIDTH, HEIGHT } from './const';
import { drawGame } from './drawGame';
import { GameCanvasProps } from '../types';
import { getKeydownHandler } from './keydownHandler';

export const GameCanvas: FC<GameCanvasProps> = ({
  width = WIDTH,
  height = HEIGHT,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createNewGame();
    const ctx: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext('2d');

    if (ctx) {
      const unwatch = $gameData.watch(store => {
        drawGame(ctx, store.boardData, width, height);
      });

      const keydownHandler = getKeydownHandler(canvasRef.current); 
      window.addEventListener('keydown', keydownHandler);

      return () => {
        unwatch();
        window.removeEventListener('keydown', keydownHandler);
      };
    }
  }, []);

  return <canvas ref={canvasRef} height={height} width={width} />;
};
