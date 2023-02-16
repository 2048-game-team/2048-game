import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithProviders } from 'app';
import { startServiceWorker } from 'processes/serviceWorker';
import { fork, ValueMap } from 'effector';
import { BASE_URL } from 'root/const';
import { BrowserRouter } from 'react-router-dom';

declare global {
  interface Window {
    __INITIAL_STATE__: ValueMap;
  }
}

const scope = fork({ values: window.__INITIAL_STATE__ });

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <BrowserRouter basename={BASE_URL}>
    <AppWithProviders scope={scope} />
  </BrowserRouter>
);

startServiceWorker();
