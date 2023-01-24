import React from 'react';
import './model/init';
import { useGate, useUnit } from 'effector-react';
import {
  $leaderboard,
  CheckLeaderboardGate,
} from 'pages/leaderboard/model/model';
import { leaderboardRequest } from 'pages/leaderboard/consts';
import { ColumnsType } from 'antd/es/table/Table';
import { LeaderboardRow } from 'pages/leaderboard/types';
import { Space, Table, Typography } from 'antd';
import { ColumnPlace } from 'pages/leaderboard/styles';
import { RowUser } from 'pages/leaderboard/rowUser/ui';

export const Leaderboard = () => {
  useGate(CheckLeaderboardGate, leaderboardRequest);
  const leaderboard = useUnit($leaderboard);

  const columns: ColumnsType<LeaderboardRow> = [
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

  if (!leaderboard) {
    return <Typography.Title>Нет таблицы</Typography.Title>;
  }

  return (
    <Space style={{ caretColor: 'transparent' }}>
      <Table columns={columns} dataSource={leaderboard} />
    </Space>
  );
};
