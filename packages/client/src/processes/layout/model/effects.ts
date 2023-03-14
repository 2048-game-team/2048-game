import { createEffect } from 'effector';
import { OauthSignInRequest, UserResponse } from 'shared/api/swagger';
import axios, { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { Theme } from 'entities/ui';
import { apiPath } from 'shared/apiServer/apiPath';
import { UserThemePayload } from 'processes/layout/types';
import { serverUrl } from 'shared/envConsts';

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
  const res = await axios.post(serverUrl + apiPath.setTheme, data);
  return res.data;
});

export const updateThemeFx = createEffect<UserResponse, Theme, AxiosError>(
  async user => {
    const res = await axios.get(serverUrl + apiPath.getTheme + '/' + user.id);
    return res.data.theme;
  }
);
