import React from 'react';
import './model/init';
import { useGate, useUnit } from 'effector-react';
import {
  $leaderboard,
  CheckLeaderboardGate,
} from 'pages/leaderboard/model/model';
import { columns, leaderboardRequest } from 'pages/leaderboard/consts';
import { Space, Spin, Table, Typography } from 'antd';
import { getLeaderboardFx } from 'pages/leaderboard/model/effects';

export const Leaderboard = () => {
  useGate(CheckLeaderboardGate, leaderboardRequest);
  const leaderboard = useUnit($leaderboard);
  const loading = useUnit(getLeaderboardFx.pending);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!leaderboard) {
    return <Typography.Title>Нет таблицы</Typography.Title>;
  }

  return (
    <Space style={{ caretColor: 'transparent' }}>
      <Table columns={columns} dataSource={leaderboard} />
    </Space>
  );
};
