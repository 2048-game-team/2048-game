import { createEvent, restore } from 'effector';
import { createGate } from 'effector-react/ssr';
import { OauthSignInRequest, UserResponse } from 'shared/api/swagger';
import { getUserFx } from 'processes/layout/model/effects';
import { Theme } from 'entities/ui';

export const $user = restore<UserResponse | null>(getUserFx, null);

export const $isAuth = $user.map(user => user !== null);

export const CheckAuthGate = createGate({});

export const oauthSignIn = createEvent<OauthSignInRequest>();

export const setUserTheme = createEvent<{ theme: Theme; userId: number }>();

export const updateTheme = createEvent<UserResponse>();
