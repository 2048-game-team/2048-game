import { useGate, useUnit } from 'effector-react';
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

const { Title } = Typography;

export const Finish: FC<PropsWithChildren> = () => {
  const { score } = useUnit($gameData);
  const status = useUnit($gameStatus);
  const user = useUnit($user);
  useGate(UpdateLeaderboardGate, {
    userId: user?.id,
    [RATING_FIELD_NAME]: score,
  });
  const navigate = useNavigate();

  useEffect(() => () => clearData(), []);

  const startGameHandler = () => {
    setGameStatus(GameStatus.OnGame);
    navigate(routesPath.game);
  };

  if (status !== GameStatus.Lost) {
    return <p>Игра еще не окончена. Вы попали на эту страницу по ошибке</p>;
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
