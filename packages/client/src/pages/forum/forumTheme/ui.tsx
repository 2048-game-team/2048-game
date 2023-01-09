import React, { useState } from 'react'
import { Button, Collapse } from 'antd'
import { ForumThemeHeader } from './forumThemeHeader/ui'
import { ForumThemeMessages } from './forumThemeMessages/ui'
import { SpaceTheme, SpaceEnd } from 'pages/forum'
import { mocForumData } from '../mocData'
import { FormNewMessage } from './newMessage/ui'

export const ForumTheme: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string | string[]>()
  const [modalOpen, setModalOpen] = useState(false)

  const toggleTheme = (key: string | string[]) => {
    setActiveTheme(key)
  }

  const handleButtonNewMessage = () => {
    setModalOpen(true)
  }

  return (
    <>
      <Collapse accordion onChange={toggleTheme}>
        {
          mocForumData.map(theme => (
            <Collapse.Panel
              key={theme.id}
              header={
                <ForumThemeHeader
                  title={theme.title}
                  date={theme.date}
                  author={theme.author}
                  active={theme.id === activeTheme}
                />
              }
            >
              <SpaceTheme direction='vertical'>
                {theme.content}

                <ForumThemeMessages messages={theme.messages} />

                <SpaceEnd>
                  <Button type='primary' onClick={handleButtonNewMessage}>
                    Добавить комментарий
                  </Button>
                </SpaceEnd>
              </SpaceTheme>
            </Collapse.Panel>
          ))
        }
      </Collapse>

      <FormNewMessage modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}
