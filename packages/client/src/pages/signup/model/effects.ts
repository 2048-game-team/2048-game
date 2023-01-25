import { createEffect } from 'effector';
import { SignUpRequest, SignUpResponse } from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

export const signupCreateFx = createEffect<
  SignUpRequest,
  SignUpResponse,
  AxiosError
>(async props => {
  const res = await practicumApi.auth.signupCreate(props);
  return res.data;
});
