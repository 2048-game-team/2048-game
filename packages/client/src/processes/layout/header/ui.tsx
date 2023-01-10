import { Avatar, Popover, Space, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { UserMenu } from './userMenu'
import { BurgerMenu } from './burgerMenu'

export const Header = () => {
  return (
    <Space
      align="center"
      style={{ marginBottom: '1rem', justifyContent: 'space-between' }}>
      <BurgerMenu />

      <Typography.Title style={{ marginBottom: 0 }}>2048</Typography.Title>

      <Popover
        title="Ваня Иванов"
        trigger={['hover', 'click', 'focus']}
        placement="bottomRight"
        content={UserMenu}>
        <Avatar icon={<UserOutlined />} />
      </Popover>
    </Space>
  )
}
