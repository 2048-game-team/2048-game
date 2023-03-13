import React, { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  notification,
  Tooltip,
  Typography,
} from 'antd';
import { FormMessageProps, NewMessage } from 'pages/forum';
import { useEvent, useUnit } from 'effector-react/ssr';
import { $user } from 'processes/layout/model/model';
import { createMessage } from 'pages/forum/model';
import { Emoji } from 'pages/forum/forumTopic/newMessage/emoji';

export const FormNewMessage: FC<FormMessageProps> = ({
  topicId,
  exMessageId,
  modalOpen,
  setModalOpen,
}) => {
  const user = useUnit($user);
  const createMessageFn = useEvent(createMessage);
  const [form] = Form.useForm();
  const [message, setMessage] = useState('');
  const [caretPosition, setCaretPosition] = useState(0);
  const [modalEmojiOpen, setModalEmojiOpen] = useState(false);

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

  const handleFinish = (data: NewMessage) => {
    if (user) {
      const newData = {
        ...data,
        topicId,
        userId: user.id,
        userName: user.display_name,
        userAvatar: user.avatar,
      };
      if (exMessageId) {
        newData.exMessageId = exMessageId;
      }
      createMessageFn(newData);
    }

    form.resetFields();
    setModalOpen(false);
  };

  const handleFinishFailed = () => {
    notification.error({
      message: 'Ошибка',
      description: 'Обнаружена ошибка заполнения полей формы',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaretPosition(e.target.selectionStart as number);
    setMessage(e.target.value);
  };

  const handleClick = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setCaretPosition((e.target as HTMLInputElement).selectionStart as number);
  };

  const handleEmojiClick = (emoji: string) => {
    const newString =
      message.slice(0, caretPosition) + emoji + message.slice(caretPosition);
    setMessage(newString);
    form.setFieldsValue({
      content: newString,
    });
    setModalEmojiOpen(false);
  };

  return (
    <>
      <Modal
        title="Новый комментарий"
        open={modalOpen}
        onCancel={handleCancel}
        footer={null}>
        <Typography>
          <Form
            name="message"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            autoComplete="on"
            form={form}>
            <Form.Item
              label="Содержание"
              name="content"
              rules={[
                { required: true, message: 'Содержание не может быть пустым!' },
              ]}>
              <Input.TextArea
                rows={4}
                value={message}
                onChange={handleChange}
                onClick={handleClick}
              />
            </Form.Item>

            <Divider />

            <Form.Item wrapperCol={{ offset: 8, span: 26 }}>
              <Tooltip title="Вставить emoji">
                <Button
                  type="ghost"
                  htmlType="button"
                  onClick={() => setModalEmojiOpen(true)}>
                  {'\u{1F642}'}
                </Button>
              </Tooltip>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </Typography>
      </Modal>

      <Emoji
        callback={handleEmojiClick}
        modalOpen={modalEmojiOpen}
        setModalOpen={setModalEmojiOpen}
      />
    </>
  );
};
