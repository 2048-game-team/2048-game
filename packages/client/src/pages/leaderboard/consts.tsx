import { ColumnsType } from 'antd/es/table/Table';
import { LeaderboardRow } from 'pages/leaderboard/types';
import { ColumnPlace } from 'pages/leaderboard/styles';
import { RowUser } from 'pages/leaderboard/rowUser/ui';
import React from 'react';

export const RATING_FIELD_NAME = 'leaderboardPoints';

export const leaderboardRequest = {
  ratingFieldName: RATING_FIELD_NAME,
  cursor: 0,
  limit: 10,
};

export const columns: ColumnsType<LeaderboardRow> = [
  {
    title: 'Место',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    render: place => <ColumnPlace>{place}</ColumnPlace>,
  },
  {
    title: 'Участник',
    dataIndex: 'user',
    key: 'user',
    width: '1000px',
    render: user => <RowUser user={user} />,
  },
  {
    title: 'Очки',
    dataIndex: 'points',
    key: 'points',
    align: 'center',
  },
];
