import { BASE_URL } from 'shared/envConsts';

export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(`${BASE_URL}/sw.js`)
        .catch((error: string) => {
          console.log('SW failed: ', error);
        });
    });
  }
};
