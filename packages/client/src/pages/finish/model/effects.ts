import { createEffect } from 'effector';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';
import { RATING_FIELD_NAME, TEAM_NAME } from 'pages/leaderboard/consts';
import { LeaderboardData } from 'pages/leaderboard/types';
import { setMessage } from 'entities/notification/model';

export const leaderboardCreateFx = createEffect<
  LeaderboardData,
  void,
  AxiosError
>(async leaderboardData => {
  if (leaderboardData.user.name) {
    await practicumApi.leaderboard.leaderboardCreate({
      data: leaderboardData,
      ratingFieldName: RATING_FIELD_NAME,
      teamName: TEAM_NAME,
    });
  } else {
    setMessage({
      type: 'warning',
      message: 'Выполните вход чтобы попасть в таблицу лидеров!',
    });
  }
});
