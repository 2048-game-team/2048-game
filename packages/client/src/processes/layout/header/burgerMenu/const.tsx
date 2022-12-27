import React from 'react'
import { routesPath } from 'processes/routes'
import { LoginOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons'
import { NavItem } from './types'

export const navList: NavItem[] = [
  { path: routesPath.login, icon: <LoginOutlined />, title: 'Вход' },
  { path: routesPath.profile, icon: <ProfileOutlined />, title: 'Профиль пользователя' },
  { path: routesPath.logout, icon: <LogoutOutlined />, title: 'Выход' }
]