import { createEvent } from 'effector';
import {
  ProfileAvatarUpdatePayload,
  UserUpdateRequest,
  ChangePasswordRequest,
} from 'shared/api/swagger';

export const getUser = createEvent();
export const setAvatar = createEvent<ProfileAvatarUpdatePayload>();
export const setUserData = createEvent<UserUpdateRequest>();
export const setPassword = createEvent<ChangePasswordRequest>();
