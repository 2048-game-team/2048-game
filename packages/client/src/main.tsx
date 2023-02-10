import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithProviders } from 'app';
import { startServiceWorker } from 'processes/serviceWorker';
import { fork, ValueMap } from 'effector';

declare global {
  interface Window {
    __INITIAL_STATE__: ValueMap;
  }
}

const scope = fork(window.__INITIAL_STATE__);

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <AppWithProviders isSSR={false} scope={scope} />
);

startServiceWorker();
