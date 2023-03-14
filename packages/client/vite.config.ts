import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
