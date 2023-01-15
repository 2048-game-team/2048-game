import { createNewGame, $gameData } from 'entities/game-drive';
import { FC, useRef, useEffect, PropsWithChildren } from 'react';
// import { WIDTH, HEIGHT } from './const';
import { drawGame } from './drawGame';
// import { GameCanvasProps } from './types';
import { keyDownHandler } from './keyDownHandler';
import { useStore } from 'effector-react';
import { $settings } from 'entities/settings';

export const GameCanvas: FC<PropsWithChildren> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { gameWidth, gameHeight, gameRows, gameCols } = useStore($settings);

  useEffect(() => {
    createNewGame(gameRows, gameCols);
    const ctx: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext('2d');

    if (ctx) {
      const unwatch = $gameData.watch(store => {
        drawGame(ctx, store.boardData, gameWidth, gameHeight);
      });

      window.addEventListener('keydown', keyDownHandler);

      return () => {
        unwatch();
        window.removeEventListener('keydown', keyDownHandler);
      };
    }
  }, [gameWidth, gameHeight]);

  return <canvas ref={canvasRef} height={gameHeight} width={gameWidth} />;
};
