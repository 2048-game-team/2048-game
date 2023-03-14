import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const BASE_URL = process.env.VITE_BASE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  base: `${BASE_URL}/`,
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
    },
  },
});
