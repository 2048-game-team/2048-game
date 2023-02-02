import { sample } from 'effector';
import { getLeaderboardFx } from 'pages/leaderboard/model/effects';
import {
  $leaderboard,
  CheckLeaderboardGate,
} from 'pages/leaderboard/model/model';

sample({
  clock: CheckLeaderboardGate.open,
  target: getLeaderboardFx,
});

sample({
  clock: getLeaderboardFx.doneData,
  target: $leaderboard,
});
