import { FC, PropsWithChildren, useRef } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { GameSpace } from './styles';

const restart = () => { 
  console.log('Restart game.')
}

const height = 500;
const width = 500;
const score = 2484;

export const Game: FC<PropsWithChildren> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Row>
      <Col span={24}>
        <GameSpace direction="vertical" align="center" size="large">
          <Typography.Title level={5}>Score: { score}</Typography.Title>
          <canvas ref={canvasRef} height={height} width={ width} />
          <Button onClick={restart}>Рестарт</Button>
        </GameSpace>
      </Col>
    </Row>
  );
};
