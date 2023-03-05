import React, { FC, useState } from 'react';
import {
  MessageProps,
  MessageAuthor,
  MessageDate,
  SpaceBetween,
  SpaceMessageHeader,
  SpaceFooter,
  SpaceExMessage,
} from 'pages/forum';
import { Avatar, Badge, Button, Card, Space, Tooltip } from 'antd';
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {} from 'pages/forum';
import { FormEditMessage } from './editMessage/ui';
import { dateToStringForRender } from 'shared/utils/dateToString';

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
              src={message.user.avatar}
              size="small"
              icon={<UserOutlined />}
            />
            <SpaceMessageHeader direction="vertical">
              <MessageAuthor>{message.user.name}</MessageAuthor>
              <MessageDate>
                {dateToStringForRender(message.updatedAt)}
              </MessageDate>
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

        {message.exMessage && (
          <SpaceExMessage direction="vertical">
            <Space wrap>
              <Avatar
                src={message.exMessage.user.avatar}
                size="small"
                icon={<UserOutlined />}
              />
              <SpaceMessageHeader direction="vertical">
                <MessageAuthor>{message.exMessage.user.name}</MessageAuthor>
                <MessageDate>
                  {dateToStringForRender(message.exMessage.updatedAt)}
                </MessageDate>
              </SpaceMessageHeader>
            </Space>
            <SpaceBetween>{message.exMessage.content}</SpaceBetween>
          </SpaceExMessage>
        )}

        <SpaceBetween>{message.content}</SpaceBetween>

        <SpaceFooter onClick={() => console.log('click')}>
          {message.likes && message.likes?.length > 0 ? (
            <Badge count={message.likes?.length} color="red">
              <HeartFilled
                style={{ color: 'red', fontSize: '1.5rem', cursor: 'pointer' }}
              />
            </Badge>
          ) : (
            <HeartOutlined
              style={{ color: 'red', fontSize: '1.5rem', cursor: 'pointer' }}
            />
          )}
        </SpaceFooter>
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
