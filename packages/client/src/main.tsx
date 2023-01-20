import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithProviders } from 'app';
import { startServiceWorker } from 'processes/serviceWorker';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(<AppWithProviders />);

startServiceWorker();
