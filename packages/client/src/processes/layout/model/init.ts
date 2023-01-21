import { sample } from 'effector';
import { $isAuth, $user, CheckAuthGate } from 'processes/layout/model/model';
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

// Контроль стейта юзера
$user.watch(state => console.log('State $user: ', state));
$isAuth.watch(state => console.log('State $isAuth', state));
