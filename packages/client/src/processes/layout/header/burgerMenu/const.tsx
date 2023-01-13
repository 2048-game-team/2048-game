import React from 'react'
import { routesPath } from 'processes/routes'
import {
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import { NavItem } from './types'

export const navList: NavItem[] = [
  { path: routesPath.login, icon: <LoginOutlined />, title: 'Вход' },
  {
    icon: <ProfileOutlined />,
    path: routesPath.profile,
    title: 'Профиль пользователя',
  },
  { path: routesPath.forum, icon: <WechatOutlined />, title: 'Форум' },
  {
    path: routesPath.logout,
    title: 'Выход',
    icon: <LogoutOutlined />,
  },
]
