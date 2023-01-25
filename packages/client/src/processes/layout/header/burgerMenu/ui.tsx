import React from 'react';
import { Dropdown, MenuProps, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { navList } from './const';

export const BurgerMenu = () => {
  const items: MenuProps['items'] = navList.map((nav, i) => ({
    key: i,
    label: <Link to={nav.path}>{nav.title}</Link>,
    icon: nav.icon,
  }));

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Typography style={{ fontSize: '200%' }}>
        <MenuOutlined />
      </Typography>
    </Dropdown>
  );
};
