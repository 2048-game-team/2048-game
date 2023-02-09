import React from 'react';
import { AppWithProviders } from './src/app';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppWithProviders isSSR={true} />
    </StaticRouter>
  );
}
