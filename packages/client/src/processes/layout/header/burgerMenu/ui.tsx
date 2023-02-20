import React, { FC } from 'react';
import { Dropdown, MenuProps, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { navList } from './const';
import { useUnit } from 'effector-react/ssr';
import { $isAuth } from 'processes/layout/model/model';
import { checkDisable } from './utils';

export const BurgerMenu: FC = () => {
  const isAuth = useUnit($isAuth);

  const items: MenuProps['items'] = navList.map((nav, i) => ({
    key: i,
    label: <Link to={nav.path}>{nav.title}</Link>,
    icon: nav.icon,
    disabled: checkDisable(nav.authRequired, isAuth),
  }));

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Typography style={{ fontSize: '200%' }}>
        <MenuOutlined />
      </Typography>
    </Dropdown>
  );
};
