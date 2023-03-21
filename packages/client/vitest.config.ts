import { configDefaults, defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    exclude: [...configDefaults.exclude, '**/dist-ssr/**'],
    environment: 'jsdom',
    setupFiles: ['setup-vitest.js'],
    alias: [
      { find: 'processes/', replacement: 'src/processes/' },
      { find: 'app/', replacement: 'src/app/' },
      { find: 'pages/', replacement: 'src/pages/' },
      { find: 'entities/', replacement: 'src/entities/' },
      { find: 'shared/', replacement: 'src/shared/' },
    ],
  },
});
