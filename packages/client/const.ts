export const BASE_URL = import.meta.env.VITE_ROOT_PATH || '/';
export const YANDEX_OAUTH_URL =
  import.meta.env.VITE_YANDEX_OAUTH_URL || 'https://oauth.yandex.ru/authorize';
export const YANDEX_OAUTH_REDIRECT_URL =
  import.meta.env.VITE_GAME_URL || 'http://localhost:3000';
export const SERVER_URL =
  import.meta.env.NODE_ENV === 'development'
    ? import.meta.env.VITE_ROOT_PATH || 'http://localhost:3001'
    : '';
