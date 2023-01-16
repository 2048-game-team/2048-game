import { sample } from 'effector';
import {
  $isAuth,
  $user,
  getUser,
  GetUserGate,
} from 'processes/layout/model/model';
import { getUserFx } from 'processes/layout/model/effects';
import { signinFx } from 'pages/signin/model';
import { logoutFx } from 'pages/logout/model';

sample({
  clock: getUserFx.doneData,
  target: $user,
});

sample({
  clock: [getUser, signinFx.done, GetUserGate.open],
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
