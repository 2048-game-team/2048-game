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
import { FormReMessage } from './reMessage/ui';
import { dateToStringForRender } from 'shared/utils/dateToString';
import { resourcesUrl } from 'shared/api/consts';
import { useEvent, useUnit } from 'effector-react/ssr';
import { createLike } from 'pages/forum/model';
import { $user } from 'processes/layout/model/model';
import { blue, red } from '@ant-design/colors';

export const ForumMessage: FC<MessageProps> = ({ message }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const user = useUnit($user);
  const createLikeFn = useEvent(createLike);

  const handleButtonNewTopic = () => {
    setModalOpen(true);
  };

  const handleLike = () => {
    if (user) {
      createLikeFn({
        messageId: message.id,
        userId: user.id,
        userName: user.display_name,
        userAvatar: user.avatar,
      });
    }
  };

  return (
    <>
      <Card>
        <SpaceBetween>
          <Space wrap>
            <Avatar
              src={`${resourcesUrl}${message.user.avatar}`}
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

          <Tooltip title="Ответить">
            <Button
              type="primary"
              onClick={handleButtonNewTopic}
              shape="circle"
              icon={<EditOutlined />}
            />
          </Tooltip>
        </SpaceBetween>

        {message.exMessage && (
          <SpaceExMessage
            direction="vertical"
            style={{ borderColor: blue.primary }}>
            <Space wrap>
              <Avatar
                src={`${resourcesUrl}${message.exMessage.user.avatar}`}
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

        <SpaceFooter onClick={handleLike}>
          {message.likes && message.likes?.length > 0 ? (
            <Badge count={message.likes?.length} color={red[4]} size="small">
              <HeartFilled
                style={{
                  color: red.primary,
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              />
            </Badge>
          ) : (
            <HeartOutlined
              style={{
                color: red.primary,
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            />
          )}
        </SpaceFooter>
      </Card>

      <FormReMessage
        topicId={message.topicId}
        exMessageId={message.id}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};
