import { createNewGame, $gameData } from 'entities/game-drive';
import { FC, useRef, useEffect, PropsWithChildren } from 'react';
import { drawGame } from './drawGame';
import { useStore } from 'effector-react';
import { $settings } from 'entities/settings';
import { getKeydownHandler } from './keydownHandler';

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

      const keydownHandler = getKeydownHandler(canvasRef.current); 
      window.addEventListener('keydown', keydownHandler);

      return () => {
        unwatch();
        window.removeEventListener('keydown', keydownHandler);
      };
    }
  }, [gameWidth, gameHeight]);

  return <canvas ref={canvasRef} height={gameHeight} width={gameWidth} />;
};
