import { sample } from 'effector';
import { GetUserByIdGate } from 'pages/leaderboard/userBox/model/model';
import { getUserByIdFx } from 'pages/leaderboard/userBox/model/effects';

sample({
  clock: GetUserByIdGate.open,
  target: getUserByIdFx,
});
