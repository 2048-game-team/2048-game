import { sample } from 'effector';
import { oauthGetServiceId, signin } from './model';
import { oauthGetServiceIdFx, signInFx } from './effects';
import { setMessage } from 'entities/notification/model';
import { MessageProps } from 'entities/notification/types';

sample({ clock: signin, target: signInFx });

sample({
  clock: signInFx.fail,
  fn: (): MessageProps => {
    return {
      type: 'error',
      message: 'Ошибка авторизации. Проверьте корректность логина и пароля',
    };
  },
  target: setMessage,
});

sample({ clock: oauthGetServiceId, target: oauthGetServiceIdFx });
