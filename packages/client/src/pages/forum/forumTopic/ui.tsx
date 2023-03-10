import React, { FC, useState } from 'react';
import { Button, Collapse, Typography } from 'antd';
import { ForumTopicHeader } from './forumTopicHeader/ui';
import { ForumTopicMessages } from './forumTopicMessages/ui';
import { SpaceTopic, SpaceEnd } from 'pages/forum';
import { FormNewMessage } from './newMessage/ui';
import '../model/init';
import { useGate, useUnit } from 'effector-react/ssr';
import { $forumData, GetForumDataGate } from 'pages/forum/model';
import { dateToStringForRender } from 'shared/utils/dateToString';
import { resourcesUrl } from 'shared/api/consts';

export const ForumTopic: FC = () => {
  const [activeTopic, setActiveTopic] = useState<string | string[]>();
  const [modalOpen, setModalOpen] = useState(false);
  const forumData = useUnit($forumData);
  useGate(GetForumDataGate);

  const toggleTopic = (key: string | string[]) => {
    setActiveTopic(key);
  };

  const handleButtonNewMessage = () => {
    setModalOpen(true);
  };

  if (!forumData || forumData.length === 0) {
    return <Typography.Title>Форум пока пустой</Typography.Title>;
  }

  return (
    <>
      <Collapse accordion onChange={toggleTopic}>
        {forumData.map(topic => (
          <Collapse.Panel
            key={topic.id.toString()}
            header={
              <ForumTopicHeader
                title={topic.title}
                date={dateToStringForRender(topic.updatedAt)}
                authorName={topic.user.name}
                authorAvatar={`${resourcesUrl}${topic.user.avatar}`}
                active={topic.id.toString() === activeTopic}
              />
            }>
            <SpaceTopic direction="vertical">
              {topic.content}

              <ForumTopicMessages messages={topic.messages} />

              <SpaceEnd>
                <Button type="primary" onClick={handleButtonNewMessage}>
                  Добавить комментарий
                </Button>
              </SpaceEnd>
            </SpaceTopic>
          </Collapse.Panel>
        ))}
      </Collapse>

      <FormNewMessage
        topicId={Number(activeTopic)}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};
