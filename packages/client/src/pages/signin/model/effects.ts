import { createEffect } from 'effector';
import { SignInRequest, YandexServiceIdListParams } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { yandexOauthRedirectUri, yandexOauthUrl } from 'shared/envConsts';

export const signInFx = createEffect<SignInRequest, void, AxiosError>(
  async signInRequest => {
    await practicumApi.auth.signinCreate(signInRequest);
  }
);

export const oauthGetServiceIdFx = createEffect<
  YandexServiceIdListParams,
  void,
  AxiosError
>(async yandexServiceIdListParams => {
  const res = await practicumApi.oauth.yandexServiceIdList(
    yandexServiceIdListParams
  );
  window.location.href = `${yandexOauthUrl}?response_type=code&client_id=${res.data.service_id}&redirect_uri=${yandexOauthRedirectUri}&force_confirm=yes`;
});
