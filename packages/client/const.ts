export const BASE_URL = import.meta.env?.VITE_ROOT_PATH || '/2048-game';
export const YANDEX_OAUTH_URL = 'https://oauth.yandex.ru/authorize';
export const YANDEX_OAUTH_REDIRECT_URL =
  process.env.VITE_GAME_URL || 'http://localhost:3000';
export const SERVER_URL =
  process.env.VITE_BACKEND_URL || 'http://localhost:3001/api/v1';
