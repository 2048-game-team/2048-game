import { createEffect } from 'effector';
import { OauthSignInRequest, UserResponse } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

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
