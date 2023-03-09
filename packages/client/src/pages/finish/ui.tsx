import { useStore } from 'effector-react';
import { useGate, useUnit } from 'effector-react/ssr';
import { $gameData, $gameStatus, clearData } from 'entities/game-drive';
import { GameStatus, setGameStatus } from 'entities/game-drive';
import { Image, Typography } from 'antd';
import { FinishSpace, StartButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import finishLogo from './finishLogo.png';
import { FC, PropsWithChildren, useEffect } from 'react';
import { UpdateLeaderboardGate } from 'pages/finish/model/model';
import './model/init';
import { $user } from 'processes/layout/model/model';
import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';
import { sfx } from 'entities/music';
import { $settings } from 'entities/settings';

const { Title } = Typography;

export const Finish: FC<PropsWithChildren> = () => {
  const { score } = useStore($gameData);
  const status = useStore($gameStatus);
  const user = useUnit($user);

  useGate(UpdateLeaderboardGate, {
    user: {
      name: user?.display_name ?? `${user?.first_name} ${user?.second_name}`,
      avatar: user?.avatar,
    },
    [RATING_FIELD_NAME]: score,
  });
  const { soundVolume } = useUnit($settings);
  const navigate = useNavigate();

  useEffect(() => {
    sfx.playFinish(soundVolume);
    return clearData;
  }, []);

  const startGameHandler = () => {
    setGameStatus(GameStatus.OnGame);
    navigate(routesPath.game);
  };

  if (status !== GameStatus.Lost) {
    return (
      <Typography.Text>
        Игра еще не окончена. Вы попали на эту страницу по ошибке
      </Typography.Text>
    );
  }

  return (
    <FinishSpace direction="vertical" align="center">
      <Image alt="finish-logo" preview={false} src={finishLogo} />
      <Title level={2}>Игра окончена</Title>
      <Title level={3}>Ваш счет: {score}</Title>
      <StartButton type="primary" onClick={startGameHandler}>
        Играть еще
      </StartButton>
    </FinishSpace>
  );
};
