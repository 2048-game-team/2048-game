import { sample } from 'effector';
import { getLeaderboardFx } from 'pages/leaderboard/model/effects';
import {
  $leaderboard,
  CheckLeaderboardGate,
} from 'pages/leaderboard/model/model';

sample({
  clock: getLeaderboardFx.doneData,
  target: $leaderboard,
});

sample({
  clock: CheckLeaderboardGate.open,
  target: getLeaderboardFx,
});
