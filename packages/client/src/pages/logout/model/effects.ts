import { createEffect } from 'effector';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

export const logoutFx = createEffect<void, void, AxiosError>(async () => {
  await practicumApi.auth.logoutCreate();
});
