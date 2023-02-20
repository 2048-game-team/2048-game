import { createStore } from 'effector';
import { LeaderboardItem } from 'pages/leaderboard/types';
import { LeaderboardRequest } from 'shared/api/swagger';
import { createGate } from 'effector-react/ssr';

export const $leaderboard = createStore<LeaderboardItem[] | null>(null);

export const CheckLeaderboardGate = createGate<LeaderboardRequest>({});
