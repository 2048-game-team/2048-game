import { Button } from 'antd';
import { useStore } from 'effector-react';
import { createNewGame } from 'entities/game-drive';
import { $settings } from 'entities/settings';
import { FC, PropsWithChildren } from 'react';


const restartHandler = () => {
  const { gameRows, gameCols } = useStore($settings);
  createNewGame(gameRows, gameCols);
};

export const GameRestartButton: FC<PropsWithChildren> = () => {
  return <Button onClick={restartHandler}>Рестарт</Button>;
};
