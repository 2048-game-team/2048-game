import { Space, Switch, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Theme } from 'entities/ui/state'
import { switchTheme } from 'entities/ui/reducer'

export const UserMenu = () => {
  const { theme } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const toggleTheme = () =>
    dispatch(
      switchTheme({ theme: theme === Theme.Dark ? Theme.Light : Theme.Dark })
    )

  const checked = theme === Theme.Light

  return (
    <Space>
      <Space align="center" style={{ justifyContent: 'space-between' }}>
        <Typography.Text>Тема</Typography.Text>
        <Switch
          checkedChildren="День"
          unCheckedChildren="Ночь"
          checked={checked}
          onChange={toggleTheme}
        />
      </Space>
    </Space>
  )
}
