import React, { FC } from 'react';
import { MessagesProps, SpaceMessages } from 'pages/forum';
import { ForumMessage } from './forumMessage/ui';

export const ForumTopicMessages: FC<MessagesProps> = ({ messages }) => {
  if (!messages) {
    return null;
  }

  return (
    <SpaceMessages direction="vertical">
      {messages.map(message => (
        <ForumMessage key={message.id} message={message} />
      ))}
    </SpaceMessages>
  );
};
