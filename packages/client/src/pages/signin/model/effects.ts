import { createEffect } from 'effector';
import { SignInRequest } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

export const signinFx = createEffect<SignInRequest, void, AxiosError>(
  async signInRequest => {
    await practicumApi.auth.signinCreate(signInRequest);
  }
);
