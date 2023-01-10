import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { GameSpace } from './styles';

const restart = () => { 
  console.log('Restart game.')
}

const HEIGHT = 400;
const WIDTH = 500;
const SCORE = 2484;

const GAME_STATE = [
  [0, 2, 4],
  [0, 0, 4],
  [0, 0, 0]
];

const drawGameField = (ctx: CanvasRenderingContext2D, GAME_STATE: number[][]) => {
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  console.log(GAME_STATE)
};

type GameCanvasProps = { width?: number, height?: number };

const GameCanvas: FC<GameCanvasProps> = ({ width = WIDTH, height = HEIGHT}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx: CanvasRenderingContext2D | null | undefined = canvasRef.current?.getContext('2d');
    if (ctx) { 
      drawGameField(ctx, GAME_STATE);
    }
  }, []);

  return <canvas ref={canvasRef} height={height} width={ width} />
};

export const Game: FC<PropsWithChildren> = () => {

  return (
    <GameSpace direction="vertical" align="center" size="large">
      <Typography.Title level={5}>Score: {SCORE}</Typography.Title>
      <GameCanvas width={WIDTH} height={HEIGHT} />
      <Button onClick={restart}>Рестарт</Button>
    </GameSpace>
  );
};
