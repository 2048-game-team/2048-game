import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { ForumTopic } from './forumTopic/ui';
import { SpaceForum, SpaceEnd } from 'pages/forum';
import { FormNewTopic } from './newTopic/ui';

export const Forum: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonNewTopic = () => {
    setModalOpen(true);
  };

  return (
    <>
      <SpaceForum direction="vertical">
        <ForumTopic />

        <SpaceEnd>
          <Button type="primary" onClick={handleButtonNewTopic}>
            Новая тема
          </Button>
        </SpaceEnd>
      </SpaceForum>

      <FormNewTopic modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};
