import { createStore } from 'effector';
import { LeaderboardRow } from 'pages/leaderboard/types';
import { LeaderboardRequest } from 'shared/api/swagger';
import { createGate } from 'effector-react/ssr';

export const $leaderboard = createStore<LeaderboardRow[] | null>(null);

export const CheckLeaderboardGate = createGate<LeaderboardRequest>({});
