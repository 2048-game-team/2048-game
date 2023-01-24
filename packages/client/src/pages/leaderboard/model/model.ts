import { restore } from 'effector';
import { LeaderboardRow } from 'pages/leaderboard/types';
import { getLeaderboardFx } from 'pages/leaderboard/model/effects';
import { LeaderboardRequest } from 'shared/api/swagger';
import { createGate } from 'effector-react';

export const $leaderboard = restore<LeaderboardRow[] | null>(
  getLeaderboardFx,
  null
);

export const CheckLeaderboardGate = createGate<LeaderboardRequest>();
