import { sample } from 'effector';
import { signin } from './model';
import { signInFx } from './effects';
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
