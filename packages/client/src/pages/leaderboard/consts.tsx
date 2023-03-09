import React from 'react';
import { ColumnsType } from 'antd/es/table/Table';
import { LeaderboardItem } from 'pages/leaderboard/types';
import { ColumnPlace } from 'pages/leaderboard/styles';
import { UserBox } from 'pages/leaderboard/userBox/ui';

export const RATING_FIELD_NAME = 'points-2048-v2';
export const TEAM_NAME = '2048-v2';

export const leaderboardRequest = {
  ratingFieldName: RATING_FIELD_NAME,
  cursor: 0,
  limit: 10,
};

export const columns: ColumnsType<LeaderboardItem> = [
  {
    title: 'Место',
    dataIndex: 'place',
    key: 'place',
    align: 'center',
    sorter: (a, b) => a.place - b.place,
    showSorterTooltip: false,
    render: place => <ColumnPlace>{place}</ColumnPlace>,
  },
  {
    title: 'Участник',
    dataIndex: 'user',
    key: 'user',
    sorter: (a, b) => {
      if (
        (a.user.name ? a.user.name : '') >= (b.user.name ? b.user.name : '')
      ) {
        return 1;
      } else {
        return -1;
      }
    },
    showSorterTooltip: false,
    width: '1000px',
    render: user => <UserBox user={user} />,
  },
  {
    title: 'Очки',
    dataIndex: 'points',
    key: 'points',
    align: 'center',
    sorter: (a, b) => a.points - b.points,
    showSorterTooltip: false,
  },
];
