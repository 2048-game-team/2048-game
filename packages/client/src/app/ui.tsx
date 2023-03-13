import { routes } from 'processes/routes';
import { Suspense, FC, PropsWithChildren, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { WithProviders } from './providers';
import { Spin } from 'antd';
import { LayoutGame } from 'processes/layout';
import { TAppProps } from './types';
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
}) => {
  return (
    <WithProviders scope={scope} location={location}>
      <Application />
    </WithProviders>
  );
};
