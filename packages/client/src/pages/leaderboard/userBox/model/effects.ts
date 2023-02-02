import { createEffect } from 'effector';
import { practicumApi } from 'shared/api/api';
import { AxiosError } from 'axios';
import { GetUserByIdGateProps } from 'pages/leaderboard/types';

export const getUserByIdFx = createEffect<
  GetUserByIdGateProps,
  void,
  AxiosError
>(async ({ userId, userFn, loadingFn }) => {
  const { data } = await practicumApi.user.userDetail(userId);

  // Имитация задержки при получении данных
  const delay = Math.random() * 4000 + 500;
  await new Promise<void>(resolve => {
    const wait = setInterval(() => {
      clearInterval(wait);
      resolve();
    }, delay);
  });

  userFn(data);
  loadingFn(false);
});
