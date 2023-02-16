import { routes } from 'processes/routes';
import { Suspense, FC, PropsWithChildren, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { WithProviders } from './providers';
import { Spin } from 'antd';
import { LayoutGame } from 'processes/layout';
import { TAppProps } from './types';
import './index.css';
import { Provider } from 'effector-react/ssr';

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
}) => {
  return (
    <Provider value={scope}>
      <WithProviders>
        <Application />
      </WithProviders>
    </Provider>
  );
};
