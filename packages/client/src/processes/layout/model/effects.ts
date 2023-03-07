import { createEffect } from 'effector';
import { OauthSignInRequest, UserResponse } from 'shared/api/swagger';
import axios, { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { Theme } from 'entities/ui';
import { ServerUrl } from 'root/const';
import { apiPath } from 'shared/apiServer/apiPath';

export const getUserFx = createEffect<void, UserResponse | null, AxiosError>(
  async () => {
    const res = await practicumApi.auth.userList();
    return res.data;
  }
);

export const oauthSignInFx = createEffect<OauthSignInRequest, void, AxiosError>(
  async oauthSignInRequest => {
    await practicumApi.oauth.yandexCreate(oauthSignInRequest);
  }
);

export const setUserThemeFx = createEffect<
  { theme: Theme; userId: number },
  { theme: Theme; userId: number },
  AxiosError
>(async data => {
  const res = await axios.post(ServerUrl + apiPath.setTheme, data);
  return res.data;
});

export const updateThemeFx = createEffect<
  UserResponse | null,
  Theme,
  AxiosError
>(async user => {
  if (user) {
    const res = await axios.get(ServerUrl + apiPath.getTheme + '/' + user.id);
    return res.data.theme;
  }
});
