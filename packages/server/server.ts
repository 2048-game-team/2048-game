import dotenv from 'dotenv';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

dotenv.config();

import express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { API_URL } from './src/consts';
import { topics } from './src/router/topics';
import { messages } from './src/router/messages';
import { likes } from './src/router/likes';
import { themes } from './src/router/themes';
import { errorMiddleware } from './src/middlewares/error';

const BASE_URL = process.env.VITE_ROOT_PATH || '/';
const isDev = () => process.env.NODE_ENV === 'development';

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

app.get(`/api`, (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.use(`${API_URL}/topics`, topics);
app.use(`${API_URL}/messages`, messages);
app.use(`${API_URL}/likes`, likes);
app.use(`${API_URL}/themes`, themes);
app.use(errorMiddleware);

export async function startServer() {
  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(require.resolve('client/dist/index.html'));
  const srcPath = path.dirname(require.resolve('client'));
  const ssrClientPath = require.resolve('client/dist-ssr/client.cjs');

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  if (!isDev()) {
    app.use(
      `${BASE_URL}/assets`,
      express.static(path.resolve(distPath, 'assets'))
    );
    app.use(
      `${BASE_URL}/teamPhotos`,
      express.static(path.resolve(distPath, 'teamPhotos'))
    );
    app.use(
      `${BASE_URL}/sounds`,
      express.static(path.resolve(distPath, 'sounds'))
    );
    app.use(
      `${BASE_URL}/sw.js`,
      express.static(path.resolve(distPath, 'sw.js'))
    );
    // Без этих костылей на проде код падает
    global.window = {} as typeof global.window;
    global.FormData = {} as typeof global.FormData;
    global.Blob = {} as typeof global.Blob;
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        );
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        template = await vite!.transformIndexHtml(url, template);
      }

      let ssr;

      if (!isDev()) {
        ssr = await import(ssrClientPath);
      } else {
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        ssr = await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'));
      }

      const { render, sheetFn, scopeFn, antdCacheFn } = ssr;

      const appHtml = await render(url);
      const styles = await sheetFn();
      const antStyles = await antdCacheFn();
      const scope = await scopeFn();
      const storesValues = `window.__INITIAL_STATE__=${JSON.stringify(scope)}`;

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-styles-->`, styles)
        .replace(`<!--ssr-antd-->`, antStyles)
        .replace(`<!--ssr-state-->`, storesValues);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}
