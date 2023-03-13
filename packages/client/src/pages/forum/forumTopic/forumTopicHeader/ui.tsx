import React from 'react';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { TopicHeaderProps, TopicTitle, SpaceBetween } from 'pages/forum';

export const ForumTopicHeader = ({
  title,
  date,
  authorName,
  authorAvatar,
  active,
}: TopicHeaderProps) => {
  if (!active) {
    return <Space>{title}</Space>;
  }

  return (
    <SpaceBetween>
      <Space direction="vertical">
        <TopicTitle level={3}>{title}</TopicTitle>

        <Space wrap>
          <Avatar src={authorAvatar} icon={<UserOutlined />} size="small" />
          {authorName}
        </Space>
      </Space>

      <Space>{date}</Space>
    </SpaceBetween>
  );
};
