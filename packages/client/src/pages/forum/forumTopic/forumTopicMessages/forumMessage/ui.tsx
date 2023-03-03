import React, { FC, useState } from 'react';
import {
  MessageProps,
  MessageAuthor,
  MessageDate,
  SpaceBetween,
  SpaceMessageHeader,
} from 'pages/forum';
import { Avatar, Button, Card, Space, Tooltip } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import {} from 'pages/forum';
import { FormEditMessage } from './editMessage/ui';

export const ForumMessage: FC<MessageProps> = ({ topicId, message }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonNewTopic = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Card>
        <SpaceBetween>
          <Space wrap>
            <Avatar
              src={message.userAvatar}
              size="small"
              icon={<UserOutlined />}
            />
            <SpaceMessageHeader direction="vertical">
              <MessageAuthor>{message.userName}</MessageAuthor>
              <MessageDate>{message.updatedAt}</MessageDate>
            </SpaceMessageHeader>
          </Space>

          <Tooltip title="Редактировать">
            <Button
              type="primary"
              onClick={handleButtonNewTopic}
              shape="circle"
              icon={<EditOutlined />}
            />
          </Tooltip>
        </SpaceBetween>

        <Space>{message.content}</Space>
      </Card>

      <FormEditMessage
        topicId={topicId}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        content={message.content}
      />
    </>
  );
};
