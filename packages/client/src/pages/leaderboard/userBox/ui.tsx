import React, { FC } from 'react';
import { RowUserProps } from 'pages/leaderboard/types';
import { Avatar, Typography } from 'antd';
import { resourcesUrl } from 'shared/api/consts';
import { UserOutlined } from '@ant-design/icons';
import { ColumnUser } from 'pages/leaderboard/styles';

export const UserBox: FC<RowUserProps> = ({ user }) => {
  const avatarSrc = user.avatar ? `${resourcesUrl}${user.avatar}` : null;
  const avatarIcon = <UserOutlined />;

  return (
    <ColumnUser>
      <Avatar icon={avatarIcon} src={avatarSrc} size="large" />
      <Typography.Text>{user.name}</Typography.Text>
    </ColumnUser>
  );
};
