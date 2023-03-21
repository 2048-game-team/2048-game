import { createEffect } from 'effector';
import { SignInRequest, YandexServiceIdListParams } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { YANDEX_OAUTH_REDIRECT_URL, YANDEX_OAUTH_URL } from 'client/const';

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
  window.location.href = `${YANDEX_OAUTH_URL}?response_type=code&client_id=${res.data.service_id}&redirect_uri=${YANDEX_OAUTH_REDIRECT_URL}&force_confirm=yes`;
});
