import React, { FC } from 'react';
import { MessagesProps, SpaceMessages } from 'pages/forum';
import { ForumMessage } from './forumMessage/ui';

export const ForumTopicMessages: FC<MessagesProps> = ({
  topicId,
  messages,
}) => {
  if (!messages) {
    return null;
  }

  return (
    <SpaceMessages direction="vertical">
      {messages.map(message => (
        <ForumMessage key={message.id} topicId={topicId} message={message} />
      ))}
    </SpaceMessages>
  );
};
