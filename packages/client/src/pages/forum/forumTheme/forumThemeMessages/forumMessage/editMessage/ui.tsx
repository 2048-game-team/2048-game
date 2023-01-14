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
import { FormMessageProps, Theme } from 'pages/forum';

export const FormEditMessage: React.FC<FormMessageProps> = ({
  modalOpen,
  setModalOpen,
  content,
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
        title="Редактировать комментарий"
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
            autoComplete="off"
            form={form}>
            <Form.Item
              label="Содержание"
              name="content"
              rules={[
                { required: true, message: 'Содержание не может быть пустым!' },
              ]}>
              <Input.TextArea rows={4} defaultValue={content} />
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
