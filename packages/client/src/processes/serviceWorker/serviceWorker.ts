export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(`/2048-game/sw.js`)
        .catch((error: string) => {
          console.log('SW failed: ', error);
        });
    });
  }
};
