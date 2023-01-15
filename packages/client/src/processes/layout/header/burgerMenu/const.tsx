import React from 'react';
import { routesPath } from 'processes/routes';
import {
  ControlOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { NavItem } from './types';

export const navList: NavItem[] = [
  {
    path: routesPath.signin,
    icon: <LoginOutlined />,
    title: 'Вход',
  },
  {
    path: routesPath.profile,
    icon: <ProfileOutlined />,
    title: 'Профиль пользователя',
  },
  {
    path: routesPath.forum,
    icon: <WechatOutlined />,
    title: 'Форум',
  },
  {
    path: routesPath.settings,
    icon: <ControlOutlined />,
    title: 'Настройки',
  },
  {
    path: routesPath.logout,
    icon: <LogoutOutlined />,
    title: 'Выход',
  },
];
