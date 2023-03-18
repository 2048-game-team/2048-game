export const BASE_URL = '/';
export const YANDEX_OAUTH_URL = 'https://oauth.yandex.ru/authorize';
export const YANDEX_OAUTH_REDIRECT_URL =
  process.env.VITE_GAME_URL || 'http://localhost:3000';
export const SERVER_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';
