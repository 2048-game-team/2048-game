import React, { FC, useState } from 'react';
import { RowUserProps } from 'pages/leaderboard/types';
import { Avatar, Spin, Typography } from 'antd';
import { resourcesUrl } from 'shared/api/consts';
import { UserOutlined } from '@ant-design/icons';
import { ColumnUser } from 'pages/leaderboard/styles';
import { useGate } from 'effector-react';
import { GetUserByIdGate } from 'pages/leaderboard/userBox/model/model';
import { UserResponse } from 'shared/api/swagger';
import './model/init'

export const UserBox: FC<RowUserProps> = ({ userId }) => {
  const [user, setUser] = useState<UserResponse>()
  const [loading, setLoading] = useState<boolean>(true)

  useGate(GetUserByIdGate, { userId, userFn: setUser.bind(this), loadingFn: setLoading.bind(this) })

  const avatarSrc = user?.avatar ? `${resourcesUrl}${user.avatar}` : null;
  const avatarIcon = <UserOutlined />;
  const userName =
    user?.display_name ?? `${user?.first_name} ${user?.second_name}`;

  if (loading) {
    return <Spin/>
  }

  return (
    <ColumnUser>
      <Avatar icon={avatarIcon} src={avatarSrc} size="large" />
      <Typography.Text>{userName}</Typography.Text>
    </ColumnUser>
  );
};
