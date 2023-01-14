import React from 'react';
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  notification,
  Typography,
} from 'antd';
import { FormThemeProps, Theme } from 'pages/forum';

export const FormNewTheme: React.FC<FormThemeProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

  const handleFinish = (data: Theme) => {
    console.log(data);
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
            name="theme"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            autoComplete="off"
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
              name="context"
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
