import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithProviders } from 'app';
import { startServiceWorker } from 'processes/serviceWorker';

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <AppWithProviders isSSR={false} />
);

startServiceWorker();
