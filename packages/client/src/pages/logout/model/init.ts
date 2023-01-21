import { sample } from 'effector';
import { logout } from './model';
import { logoutFx } from './effects';
import { $isAuth } from 'processes/layout/model/model';

sample({
  clock: logout,
  source: $isAuth,
  filter: auth => Boolean(auth),
  target: logoutFx,
});
