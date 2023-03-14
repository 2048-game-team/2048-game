import { baseUrl } from 'shared/envConsts';

export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(`${baseUrl}/sw.js`)
        .catch((error: string) => {
          console.log('SW failed: ', error);
        });
    });
  }
};
