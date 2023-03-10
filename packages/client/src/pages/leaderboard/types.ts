import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';

interface User {
  name?: string;
  avatar?: string;
}

export type RowUserProps = {
  user: User;
};

export interface LeaderboardData {
  user: User;
  [RATING_FIELD_NAME]: number;
}

export interface LeaderboardItem {
  key: number;
  user: User;
  points: number;
}

export interface LeaderboardResponse {
  data: {
    user: User;
    [RATING_FIELD_NAME]: number;
  };
}
