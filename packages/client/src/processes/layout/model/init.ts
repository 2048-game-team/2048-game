import { sample } from 'effector';
import {
  $user,
  CheckAuthGate,
  oauthSignIn,
  setUserTheme,
  updateTheme,
} from 'processes/layout/model/model';
import {
  getUserFx,
  oauthSignInFx,
  setUserThemeFx,
  updateThemeFx,
} from 'processes/layout/model/effects';
import { signInFx } from 'pages/signin/model';
import { logoutFx } from 'pages/logout/model';
import { signupCreateFx } from 'pages/signup/model';
import { $theme } from 'entities/ui';

sample({
  clock: getUserFx.doneData,
  target: $user,
});

sample({
  clock: [
    signInFx.done,
    signupCreateFx.done,
    oauthSignInFx.done,
    CheckAuthGate.open,
  ],
  target: getUserFx,
});

sample({
  clock: logoutFx.done,
  fn: () => null,
  target: $user,
});

sample({ clock: oauthSignIn, target: oauthSignInFx });

sample({
  clock: setUserTheme,
  target: setUserThemeFx,
});

sample({
  clock: [updateTheme, getUserFx.doneData],
  filter: user => {
    return user !== null;
  },
  target: updateThemeFx,
});

sample({
  clock: updateThemeFx.doneData,
  target: $theme,
});
