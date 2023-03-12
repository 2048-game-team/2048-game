import { $envData } from 'app/model';

let baseUrl: string;
$envData.watch(env => ({ baseUrl } = env));

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
