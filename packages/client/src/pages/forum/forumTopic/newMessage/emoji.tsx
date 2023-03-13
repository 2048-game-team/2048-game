import { emoji, FormEmojiProps } from 'pages/forum';
import { FC } from 'react';
import { Button, Modal } from 'antd';

export const Emoji: FC<FormEmojiProps> = ({
  callback,
  modalOpen,
  setModalOpen,
}) => {
  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title="Emoji"
      open={modalOpen}
      onCancel={handleCancel}
      footer={null}
      aria-hidden>
      {emoji.map(el => (
        <Button
          type="ghost"
          key={el.unicode}
          onClick={() => callback(el.unicode)}>
          {el.unicode}
        </Button>
      ))}
    </Modal>
  );
};
