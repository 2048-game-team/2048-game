import React, { useState } from 'react'
import { MessageProps, MessageAuthor, MessageDate, SpaceBetween, SpaceMessageHeader } from 'pages/forum'
import { Avatar, Button, Card, Space, Tooltip } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import {} from 'pages/forum'
import { FormEditMessage } from 'pages/forum/forumTheme/forumThemeMessages/editMessage/ui'

export const ForumMessage: React.FC<MessageProps> = ({ message }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleButtonNewTheme = () => {
    setModalOpen(true)
  }

  return (
    <>
      <Card>
        <SpaceBetween>
          <Space wrap>
            <Avatar
              src={message.author.avatar}
              size='small'
              icon={<UserOutlined />}
            />
            <SpaceMessageHeader direction='vertical'>
              <MessageAuthor>
                {message.author.name}
              </MessageAuthor>
              <MessageDate>
                {message.date}
              </MessageDate>
            </SpaceMessageHeader>
          </Space>

          <Tooltip title='Редактировать'>
            <Button type='primary' onClick={handleButtonNewTheme}
                    shape='circle'
                    icon={<EditOutlined />} />
          </Tooltip>
        </SpaceBetween>

        <Space>
          {message.content}
        </Space>
      </Card>

      <FormEditMessage
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        content={message.content}
      />
    </>
  )
}
