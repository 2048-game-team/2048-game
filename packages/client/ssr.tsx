import { AppWithProviders } from './src/app';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { fork, serialize } from 'effector';
import { BASE_URL } from './const';
import React from 'react';

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

export function render(url: string) {
  const urlParts = url.split(`${BASE_URL}`);
  const loc = urlParts.length === 2 ? urlParts[urlParts.length - 1] : "/";
  return renderToString(
    sheet.collectStyles(
      <StyleProvider cache={cache}>
        <AppWithProviders scope={scope} location={loc} />
      </StyleProvider>
    )
  );
}
