import React, { useEffect, useState } from 'react';
import { Card, Image } from 'antd';
import { StartButton, StartSpace, StartTypography } from './styles';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import gameLogo from './gameLogo.gif';
import { aboutGameText } from './const';
import { oauthSignIn } from 'processes/layout/model/model';
import { useEvent } from 'effector-react/ssr';
import { YANDEX_OAUTH_REDIRECT_URL } from 'shared/envConsts';

export const Start = () => {
  const oauthSignInFn = useEvent(oauthSignIn);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isVisibleAboutCard, setIsVisibleAboutCard] = useState<boolean>(false);

  // Проверка OAuth Яндекса
  const code = searchParams.get('code');
  useEffect(() => {
    if (code) {
      oauthSignInFn({ code, redirect_uri: YANDEX_OAUTH_REDIRECT_URL });
    }
  }, [code]);

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
