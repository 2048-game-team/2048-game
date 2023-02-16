import { routes } from 'processes/routes';
import { Suspense, FC, PropsWithChildren, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { WithProviders } from './providers';
import { Spin } from 'antd';
import { LayoutGame } from 'processes/layout';
import { TAppProps } from './types';
import './index.css';

const Application = () => {
  const router = useRoutes(routes);
  const [domDownloaded, setDomDownloaded] = useState(false);

  useEffect(() => {
    setDomDownloaded(true);
  }, []);

  if (!domDownloaded) {
    return null;
  }

  return (
    <Suspense fallback={<Spin />}>
      <LayoutGame>{router}</LayoutGame>
    </Suspense>
  );
};

export const AppWithProviders: FC<PropsWithChildren<TAppProps>> = ({
  scope,
  location,
}) => {
  return (
    <WithProviders scope={scope} location={location}>
      <Application />
    </WithProviders>
  );
};
