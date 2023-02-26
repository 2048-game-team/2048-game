import { Button } from 'antd';
import { useUnit } from 'effector-react';
import { createNewGame } from 'entities/game-drive';
import { $settings } from 'entities/settings';
import { FC, PropsWithChildren } from 'react';

export const GameRestartButton: FC<PropsWithChildren> = () => {
  const { gameRows, gameCols } = useUnit($settings);

  const restartHandler = () => {
    createNewGame(gameRows, gameCols);
  };

  return <Button onClick={restartHandler}>Рестарт</Button>;
};
