import { sample } from 'effector';
import { $user, CheckAuthGate } from 'processes/layout/model/model';
import { getUserFx } from 'processes/layout/model/effects';
import { signInFx } from 'pages/signin/model';
import { logoutFx } from 'pages/logout/model';

sample({
  clock: getUserFx.doneData,
  target: $user,
});

sample({
  clock: [signInFx.done, CheckAuthGate.open],
  target: getUserFx,
});

sample({
  clock: logoutFx.done,
  fn: () => null,
  target: $user,
});
