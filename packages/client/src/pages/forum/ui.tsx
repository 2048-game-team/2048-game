import React, { useState } from 'react';
import { Button } from 'antd';
import { ForumTheme } from './forumTheme/ui';
import { SpaceForum, SpaceEnd } from 'pages/forum';
import { FormNewTheme } from './newTheme/ui';

export const Forum: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonNewTheme = () => {
    setModalOpen(true);
  };

  return (
    <>
      <SpaceForum direction="vertical">
        <ForumTheme />

        <SpaceEnd>
          <Button type="primary" onClick={handleButtonNewTheme}>
            Новая тема
          </Button>
        </SpaceEnd>
      </SpaceForum>

      <FormNewTheme modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};
