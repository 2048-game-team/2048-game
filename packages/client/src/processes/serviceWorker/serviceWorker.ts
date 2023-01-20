export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch((error: string) => {
        console.log('SW failed: ', error);
      });
    });
  }
};
