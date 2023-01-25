import { UserResponse } from 'shared/api/swagger';

export interface LeaderboardRow {
  key: string;
  user: UserResponse;
  points: number;
}

export type RowUserProps = {
  user: UserResponse;
};
