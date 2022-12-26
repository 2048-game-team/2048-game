import { Space, Switch, Typography } from 'antd'
import { $theme, setTheme, Theme } from 'entities/ui'
import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

export const UserMenu = () => {
  const theme = useStore($theme)

  const toggleTheme = () =>
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)

  const checked = theme === Theme.Light

  return (
    <Space direction='vertical'>
      <Space wrap>
        <Link to='/login'>Вход</Link>
      </Space>

      <Space wrap>
        <Link to='/profile'>Профиль пользователя</Link>
      </Space>

      <Space wrap>
        <Link to='/logout'>Выход</Link>
      </Space>

      <Space wrap>
        <Typography.Text>Тема</Typography.Text>
        <Switch
          checkedChildren='День'
          unCheckedChildren='Ночь'
          checked={checked}
          onChange={toggleTheme}
        />
      </Space>
    </Space>
  )
}
