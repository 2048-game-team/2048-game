import { FC, PropsWithChildren, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import { GameSpace } from './styles';
import { GameCanvas } from './gameCanvas';
import { GameRestartButton } from './gameRestartButton';
import { UndoRedoButtons } from './undoRedoButtons';
import { GameInfo } from './gameInfo';
import { $gameStatus } from 'entities/game-drive';
import { GameStatus } from 'entities/game-drive';
import { routesPath } from 'processes/routes';
import { $settings } from 'entities/settings';
import { useMusic, soundUrl } from 'entities/music';

export const Game: FC<PropsWithChildren> = () => {
  const status = useUnit($gameStatus);
  const { musicVolume } = useUnit($settings);
  const navigate = useNavigate();

  useMusic({ url: soundUrl.background, volume: musicVolume });

  useEffect(() => {
    if (status === GameStatus.Lost) navigate(routesPath.finish);
  }, [status]);

  return (
    <GameSpace direction="vertical" align="center" size="small">
      <GameInfo />
      <GameCanvas />
      <GameRestartButton />
      <UndoRedoButtons />
    </GameSpace>
  );
};
