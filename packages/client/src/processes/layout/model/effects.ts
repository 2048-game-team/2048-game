import { createEffect } from 'effector';
import { OauthSignInRequest, UserResponse } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { Theme } from 'entities/ui';
import { apiPath } from 'shared/apiServer/apiPath';
import { UserThemePayload } from 'processes/layout/types';
import { serverApi } from 'shared/apiServer/api';

export const getUserFx = createEffect<void, UserResponse, AxiosError>(
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
  UserThemePayload,
  UserThemePayload,
  AxiosError
>(async data => {
  const res = await serverApi.post(apiPath.setTheme, data);
  return res.data;
});

export const updateThemeFx = createEffect<UserResponse, Theme, AxiosError>(
  async user => {
    const res = await serverApi.get(apiPath.getTheme + '/' + user.id);
    return res.data.theme;
  }
);
