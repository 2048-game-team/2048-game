import { createEffect } from 'effector';
import { practicumApi } from 'shared/api/api';
import { AxiosError } from 'axios';
import { GetUserByIdGateProps } from 'pages/leaderboard/types';
import { randomSleep } from 'shared/utils/randomSleep';

export const getUserByIdFx = createEffect<
  GetUserByIdGateProps,
  void,
  AxiosError
>(async ({ userId, userFn, loadingFn }) => {
  const { data } = await practicumApi.user.userDetail(userId);

  // Имитация задержки при получении данных
  await randomSleep(2000);

  userFn(data);
  loadingFn(false);
});
