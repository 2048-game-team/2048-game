import { createEffect } from 'effector';
import { LeaderboardRow } from 'pages/leaderboard/types';
import { AxiosError } from 'axios';
import { LeaderboardRequest } from 'shared/api/swagger';
import { practicumApi } from 'shared/api/api';
import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';

export const getLeaderboardFx = createEffect<
  LeaderboardRequest,
  LeaderboardRow[] | null,
  AxiosError
>(async leaderboardRequest => {
  const res = await practicumApi.leaderboard.postLeaderboard(
    leaderboardRequest
  );
  const leaderboardArr = res.data;

  const rows: LeaderboardRow[] = [];
  if (Array.isArray(leaderboardArr) && leaderboardArr.length > 0) {
    for (let i = 0; i < leaderboardArr.length; i++) {
      const res = await practicumApi.user.userDetail(leaderboardArr[i].data.id);
      const user = res.data;

      const row: LeaderboardRow = {
        key: (i + 1).toString(),
        points: leaderboardArr[i].data[RATING_FIELD_NAME],
        user,
      };

      rows.push(row);
    }
    return rows;
  }
  return null;
});
