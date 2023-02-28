import React from 'react';
import { ColumnsType } from 'antd/es/table/Table';
import { LeaderboardItem } from 'pages/leaderboard/types';
import { ColumnPlace } from 'pages/leaderboard/styles';
import { UserBox } from 'pages/leaderboard/userBox/ui';

export const RATING_FIELD_NAME = 'points-2048-v1';
export const TEAM_NAME = '2048-v1';

export const leaderboardRequest = {
  ratingFieldName: RATING_FIELD_NAME,
  cursor: 0,
  limit: 10,
};

export const columns: ColumnsType<LeaderboardItem> = [
  {
    title: 'Место',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    render: place => <ColumnPlace>{place}</ColumnPlace>,
  },
  {
    title: 'Участник',
    dataIndex: 'userId',
    key: 'userId',
    width: '1000px',
    render: userId => <UserBox userId={userId} />,
  },
  {
    title: 'Очки',
    dataIndex: 'points',
    key: 'points',
    align: 'center',
  },
];
