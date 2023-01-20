import { Avatar, Popover, Space, Typography } from 'antd';
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { UserMenu } from './userMenu';
import { BurgerMenu } from './burgerMenu';
import { useStore } from 'effector-react';
import { $isAuth, $user } from 'processes/layout/model/model';

export const Header = () => {
  const user = useStore($user);
  const isAuth = useStore($isAuth);

  const userName = isAuth
    ? user?.display_name ?? `${user?.first_name} ${user?.second_name}`
    : 'Неизвестный';

  const avatarSrc = user?.avatar
    ? `https://ya-praktikum.tech/api/v2/resources${user.avatar}`
    : null;

  const avatarIcon = isAuth ? <UserSwitchOutlined /> : <UserOutlined />;

  return (
    <Space
      align="center"
      style={{ marginBottom: '1rem', justifyContent: 'space-between' }}>
      <BurgerMenu />

      <Typography.Title style={{ marginBottom: 0 }}>2048</Typography.Title>

      <Popover
        title={userName}
        trigger={['hover', 'click', 'focus']}
        placement="bottomRight"
        content={UserMenu}>
        <Avatar icon={avatarIcon} src={avatarSrc} />
      </Popover>
    </Space>
  );
};
