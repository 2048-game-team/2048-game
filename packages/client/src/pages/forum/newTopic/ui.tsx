import React, { FC } from 'react';
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  notification,
  Typography,
} from 'antd';
import { FormTopicProps, NewTopic } from 'pages/forum';
import { useEvent, useUnit } from 'effector-react/ssr';
import { $user } from 'processes/layout/model/model';
import { createTopic } from 'pages/forum/model';

export const FormNewTopic: FC<FormTopicProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const user = useUnit($user)
  const createTopicFn = useEvent(createTopic)
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

  const handleFinish = (data: NewTopic) => {
    console.log({
      ...data,
      userId: user?.id,
      userName: user?.display_name,
      userAvatar: user?.avatar,
    });

    if (user) {
      createTopicFn({
        ...data,
        userId: user.id,
        userName: user.display_name,
        userAvatar: user.avatar,
      });
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

  return (
    <>
      <Modal
        title="Новая тема"
        open={modalOpen}
        onCancel={handleCancel}
        footer={null}>
        <Typography>
          <Form
            name="topic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            autoComplete="on"
            form={form}>
            <Form.Item
              label="Название темы"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите название темы!',
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Содержание"
              name="content"
              rules={[
                { required: true, message: 'Содержание не может быть пустым!' },
              ]}>
              <Input.TextArea rows={4} />
            </Form.Item>

            <Divider />

            <Form.Item wrapperCol={{ offset: 8, span: 26 }}>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </Typography>
      </Modal>
    </>
  );
};
