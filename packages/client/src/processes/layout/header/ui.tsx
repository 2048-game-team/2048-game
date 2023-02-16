import { Avatar, Popover, Space, Typography } from 'antd';
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { UserMenu } from './userMenu';
import { BurgerMenu } from './burgerMenu';
import { useUnit } from 'effector-react/ssr';
import { $isAuth, $user } from 'processes/layout/model/model';
import { resourcesUrl } from 'shared/api/consts';
import { routesPath } from 'processes/routes';
import { Link } from 'react-router-dom';

export const Header = () => {
  const user = useUnit($user);
  const isAuth = useUnit($isAuth);

  const userName = isAuth
    ? user?.display_name ?? `${user?.first_name} ${user?.second_name}`
    : 'Гость';

  const avatarSrc = user?.avatar ? `${resourcesUrl}${user.avatar}` : null;

  const avatarIcon = isAuth ? <UserSwitchOutlined /> : <UserOutlined />;

  return (
    <Space
      align="center"
      style={{ marginBottom: '1rem', justifyContent: 'space-between' }}>
      <BurgerMenu />

      <Typography.Title style={{ marginBottom: 0, caretColor: 'transparent' }}>
        <Link to={routesPath.home}>2048</Link>
      </Typography.Title>

      <Popover
        title={userName}
        trigger={['hover', 'focus']}
        placement="bottomRight"
        content={UserMenu}>
        <Avatar icon={avatarIcon} src={avatarSrc} />
      </Popover>
    </Space>
  );
};
