import { sample } from 'effector';
import { UpdateLeaderboardGate } from 'pages/finish/model/model';
import { leaderboardCreateFx } from 'pages/finish/model/effects';

sample({
  clock: UpdateLeaderboardGate.open,
  target: leaderboardCreateFx
})
