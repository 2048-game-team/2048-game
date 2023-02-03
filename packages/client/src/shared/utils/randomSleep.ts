export const randomSleep = async (ms: number) => {
  const delay = Math.random() * (0.8 * ms) + 0.2 * ms;
  await new Promise<void>(resolve => {
    const wait = setInterval(() => {
      clearInterval(wait);
      resolve();
    }, delay);
  });
};
