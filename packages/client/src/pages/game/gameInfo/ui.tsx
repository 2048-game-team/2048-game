import { Row, Space, Typography } from 'antd';
import { useUnit } from 'effector-react';
import { $gameData, $gameStatus } from 'entities/game-drive';
import { FC, PropsWithChildren } from 'react';

export const GameInfo: FC<PropsWithChildren> = () => {
  const { score } = useUnit($gameData);
  const status = useUnit($gameStatus);

  return (
    <Row>
      <Space align="center" size="large">
        <Typography.Text>Score: {score}</Typography.Text>
        <Typography.Text>Status: {status}</Typography.Text>
      </Space>
    </Row>
  );
};
