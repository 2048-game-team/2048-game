import { createEffect } from 'effector';
import {
  UserResponse,
  ProfileAvatarUpdatePayload,
  UserUpdateRequest,
  ChangePasswordRequest,
  BadRequestError,
} from 'shared/api/swagger';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

export const setAvatarFx = createEffect<
  ProfileAvatarUpdatePayload,
  UserResponse,
  AxiosError
>(async avatar => {
  const res = await practicumApi.user.profileAvatarUpdate(avatar);
  return res.data;
});

export const setUserDataFx = createEffect<
  UserUpdateRequest,
  UserResponse,
  AxiosError
>(async userData => {
  const res = await practicumApi.user.profileUpdate(userData);
  return res.data;
});

export const setPasswordFx = createEffect<
  ChangePasswordRequest,
  BadRequestError | void,
  AxiosError
>(async password => {
  const res = await practicumApi.user.passwordUpdate(password);
  return res.data;
});
