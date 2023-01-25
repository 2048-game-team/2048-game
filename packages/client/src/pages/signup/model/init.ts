import { sample } from 'effector';
import { createNewUser } from './model';
import { signupCreateFx } from './effects';

sample({
  clock: createNewUser,
  target: signupCreateFx,
});
