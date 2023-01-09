import React from 'react'
import { MessagesProps, SpaceMessages } from 'pages/forum'
import { ForumMessage } from 'pages/forum/forumTheme/forumThemeMessages/forumMessage/ui'

export const ForumThemeMessages = ({ messages }: MessagesProps) => {
  if (!messages) {
    return null
  }

  return (
    <SpaceMessages direction='vertical'>
        {messages.map(message => (
          <ForumMessage
            key={message.id}
            message={message}
          />
        ))}
    </SpaceMessages>
  )
}
