import { UserResponse } from 'shared/api/swagger';
import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';
import { Dispatch, SetStateAction } from 'react';

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

export interface GetUserByIdGateProps {
  user: User;
  userFn: Dispatch<SetStateAction<UserResponse | undefined>>;
  loadingFn: Dispatch<SetStateAction<boolean>>;
}
