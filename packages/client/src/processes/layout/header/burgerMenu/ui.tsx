import React from 'react'
import { Dropdown, MenuProps, Typography } from 'antd'
import { LoginOutlined, LogoutOutlined, MenuOutlined, ProfileOutlined } from '@ant-design/icons'
import { routesPath } from 'processes/routes'
import { Link } from 'react-router-dom'

export const BurgerMenu = () => {
  const navArr = [
    { path: routesPath.login,icon: <LoginOutlined />, title: 'Вход' },
    { path: routesPath.profile,icon: <ProfileOutlined />, title: 'Профиль пользователя' },
    { path: routesPath.logout,icon: <LogoutOutlined />, title: 'Выход' }
  ]

  const items: MenuProps['items'] = navArr.map((nav, i) => (
    {
      key: i,
      label: <Link to={nav.path}>{nav.title}</Link>,
      icon: nav.icon
    }
  ))


  return (
    <Dropdown menu={{ items }} placement='bottomLeft' arrow>
      <Typography style={{fontSize:'200%'}}>
        <MenuOutlined />
      </Typography>
    </Dropdown>
  )
}
