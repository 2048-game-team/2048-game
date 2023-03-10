import { sample } from 'effector';
import { setAvatar, setUserData, setPassword } from 'pages/profile/model/model';
import { getUserFx } from 'processes/layout/model/effects';
import {
  setAvatarFx,
  setUserDataFx,
  setPasswordFx,
} from 'pages/profile/model/effects';

sample({ clock: setAvatar, target: setAvatarFx });
sample({ clock: setUserData, target: setUserDataFx });

sample({
  clock: [setAvatarFx.done, setUserDataFx.done],
  target: getUserFx,
});

sample({ clock: setPassword, target: setPasswordFx });
