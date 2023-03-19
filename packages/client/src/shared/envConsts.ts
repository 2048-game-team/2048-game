export const BASE_URL = import.meta.env.VITE_BASE_URL || '/2048-game';
export const YANDEX_OAUTH_URL =
  import.meta.env.VITE_YANDEX_OAUTH_URL || 'https://oauth.yandex.ru/authorize';
export const YANDEX_OAUTH_REDIRECT_URL =
  import.meta.env.VITE_YANDEX_OAUTH_REDIRECT_URL || 'http://localhost:3000';
export const SERVER_URL = 
  import.meta.env.NODE_ENV === 'development' ? 
  import.meta.env.VITE_SERVER_URL || 'http://localhost:3001' :
  '';
