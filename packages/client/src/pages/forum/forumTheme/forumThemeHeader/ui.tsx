import React from 'react'
import { Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { ThemeHeaderProps, ThemeTitle, SpaceBetween } from 'pages/forum'

export const ForumThemeHeader = ({ title, date, author, active }: ThemeHeaderProps) => {
  if (!active) {
    return (
      <Space>
        {title}
      </Space>
    )
  }

  return (
    <SpaceBetween>
      <Space direction='vertical'>
        <ThemeTitle level={3}>
          {title}
        </ThemeTitle>

        <Space wrap>
          <Avatar
            src={author.avatar}
            icon={<UserOutlined />}
            size='small'
          />
          {author.name}
        </Space>
      </Space>

      <Space>
        {date}
      </Space>
    </SpaceBetween>
  )
}
