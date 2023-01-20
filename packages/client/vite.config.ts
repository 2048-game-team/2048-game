import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

const base =
  process.env?.REACT_APP_DEPLOY === 'GITHUB_PAGES' ? '/2048-game' : '';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react(), tsconfigPaths()],
});
