import { AppWithProviders } from './src/app';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { fork, serialize } from 'effector';

const scope = fork();
export function scopeFn() {
  return serialize(scope);
}

const sheet = new ServerStyleSheet();
export function sheetFn() {
  return sheet.getStyleTags();
}

const cache = createCache();
export function antdCacheFn() {
  return extractStyle(cache);
}

export function render(url) {
  return renderToString(
    sheet.collectStyles(
      <StaticRouter location={url}>
        <StyleProvider cache={cache}>
          <AppWithProviders isSSR={true} scope={scope} />
        </StyleProvider>
      </StaticRouter>
    )
  );
}
