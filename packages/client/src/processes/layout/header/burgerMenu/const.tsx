import React from 'react';
import { routesPath } from 'processes/routes';
import {
  ControlOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlaySquareOutlined,
  ProfileOutlined,
  TrophyOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { AuthRequired, NavItem } from './types';

export const navList: NavItem[] = [
  {
    path: routesPath.signin,
    icon: <LoginOutlined />,
    title: 'Вход',
    authRequired: AuthRequired.No,
  },
  {
    path: routesPath.game,
    icon: <PlaySquareOutlined />,
    title: 'Играть',
    authRequired: AuthRequired.Irrelevant,
  },
  {
    path: routesPath.profile,
    icon: <ProfileOutlined />,
    title: 'Профиль пользователя',
    authRequired: AuthRequired.Yes,
  },
  {
    path: routesPath.forum,
    icon: <WechatOutlined />,
    title: 'Форум',
    authRequired: AuthRequired.Yes,
  },
  {
    path: routesPath.leaderboard,
    icon: <TrophyOutlined />,
    title: 'Таблица лидеров',
    authRequired: AuthRequired.Yes,
  },
  {
    path: routesPath.settings,
    icon: <ControlOutlined />,
    title: 'Настройки',
    authRequired: AuthRequired.Irrelevant,
  },
  {
    path: routesPath.logout,
    icon: <LogoutOutlined />,
    title: 'Выход',
    authRequired: AuthRequired.Yes,
  },
];
