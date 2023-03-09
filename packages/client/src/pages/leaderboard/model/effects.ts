import { createEffect } from 'effector';
import { LeaderboardItem } from 'pages/leaderboard/types';
import { AxiosError } from 'axios';
import { LeaderboardRequest } from 'shared/api/swagger';
import { practicumApi } from 'shared/api/api';
import { RATING_FIELD_NAME } from 'pages/leaderboard/consts';

export const getLeaderboardFx = createEffect<
  LeaderboardRequest,
  LeaderboardItem[] | null,
  AxiosError
>(async leaderboardRequest => {
  const { data } = await practicumApi.leaderboard.postLeaderboard(
    leaderboardRequest
  );

  if (Array.isArray(data) && data.length > 0) {
    return data.map((item, key) => ({
      place: key + 1,
      user: {
        name: item.data.user.name,
        avatar: item.data.user.avatar,
      },
      points: item.data[RATING_FIELD_NAME],
    }));
  }

  return null;
});
