import React, { useState } from 'react';
import { Image, Card } from 'antd';
import { StartSpace, StartButton, StartTypography } from './styles';
import {Link, useNavigate} from 'react-router-dom';
import { routesPath } from 'processes/routes';
import gameLogo from './gameLogo.gif';
import { aboutGameText } from './const';

export const Start = () => {
  const navigate = useNavigate();

  const [isVisibleAboutCard, setIsVisibleAboutCard] = useState<boolean>(false);

  const startGameHandler = () => {
    navigate(routesPath.game);
  };

  const toggleAboutCardVisibleHandler = () => {
    setIsVisibleAboutCard(!isVisibleAboutCard);
  };

  return (
    <StartSpace direction="vertical" align="center">
      <Image alt="game-logo" preview={false} src={gameLogo} />
      <StartButton type="primary" onClick={startGameHandler}>
        Старт!
      </StartButton>
      <StartTypography onClick={toggleAboutCardVisibleHandler}>
        Как играть?
      </StartTypography>
      {isVisibleAboutCard && <Card>{aboutGameText}</Card>}
      <Link to={routesPath.team}>О команде</Link>
    </StartSpace>
  );
};
