import { UserResponse } from 'shared/api/swagger';
import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';
import { Dispatch, SetStateAction } from 'react';

export type RowUserProps = {
  userId: number;
};

export interface LeaderboardData {
  userId?: number;
  [RATING_FIELD_NAME]: number;
}

export interface LeaderboardItem {
  key: number;
  userId: number;
  points: number;
}

export interface GetUserByIdGateProps {
  userId: number;
  userFn: Dispatch<SetStateAction<UserResponse | undefined>>;
  loadingFn: Dispatch<SetStateAction<boolean>>;
}
