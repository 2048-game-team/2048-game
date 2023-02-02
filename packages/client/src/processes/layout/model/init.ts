import { sample } from 'effector';
import {
  $user,
  CheckAuthGate,
  oauthSignIn,
} from 'processes/layout/model/model';
import { getUserFx, oauthSignInFx } from 'processes/layout/model/effects';
import { signInFx } from 'pages/signin/model';
import { logoutFx } from 'pages/logout/model';
import { signupCreateFx } from 'pages/signup/model';

sample({
  clock: getUserFx.doneData,
  target: $user,
});

sample({
  clock: [signInFx.done, signupCreateFx.done, oauthSignInFx.done, CheckAuthGate.open],
  target: getUserFx,
});

sample({
  clock: logoutFx.done,
  fn: () => null,
  target: $user,
});

sample({ clock: oauthSignIn, target: oauthSignInFx });
