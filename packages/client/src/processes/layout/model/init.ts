import { sample } from 'effector';
import { $user, checkAuthGate } from 'processes/layout/model/model';
import { getUserFx } from 'processes/layout/model/effects';
import { signinFx } from 'pages/signin/model';
import { logoutFx } from 'pages/logout/model';

sample({
  clock: getUserFx.doneData,
  target: $user,
});

sample({
  clock: [signinFx.done, checkAuthGate.open],
  target: getUserFx,
});

sample({
  clock: logoutFx.done,
  fn: () => null,
  target: $user,
});
