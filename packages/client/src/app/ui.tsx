import { routes } from 'processes/routes';
import { Suspense, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { WithProviders } from './providers';
import { Spin } from 'antd';
import { LayoutGame } from 'processes/layout';
import { TAppProps, IEnvData } from './types';
import { setEnvData } from './model';
import './index.css';
import React from 'react';

const Application = () => {
  const router = useRoutes(routes);
  return (
    <Suspense fallback={<Spin />}>
      <LayoutGame>{router}</LayoutGame>
    </Suspense>
  );
};

export const AppWithProviders: FC<PropsWithChildren<TAppProps>> = ({
  scope,
  location,
  env,
}) => {
  const envData: IEnvData = {
    baseUrl: env?.VITE_BASE_URL ?? '/2048-game',
    yandexOauthUrl:
      env?.VITE_YANDEX_OAUTH_URL ?? 'https://oauth.yandex.ru/authorize',
    yandexOauthRedirectUri:
      env?.VITE_YANDEX_OAUTH_REDIRECT_URI ?? 'http://localhost:3000',
    serverUrl: env?.VITE_SERVER_URL ?? 'http://localhost:3001/api/v1',
  };
  setEnvData(envData);
  return (
    <WithProviders scope={scope} location={location}>
      <Application />
    </WithProviders>
  );
};
