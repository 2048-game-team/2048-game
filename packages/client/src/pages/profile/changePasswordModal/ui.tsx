import React from 'react';
import { ChangePasswordModalProps } from './types';
import { Button, Form, Input, Modal } from 'antd';
import { useStore } from 'effector-react';
import { setPasswordFx } from 'pages/profile/model/effects';
import { ChangePasswordRequest } from 'shared/api/swagger';
import { SpaceButtons } from 'pages/profile/styles';
import { setPassword } from 'pages/profile/model';

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const loading = useStore(setPasswordFx.pending);

  const onFinish = (data: ChangePasswordRequest) => {
    setPassword(data);
    closeModal();
  };

  return (
    <Modal
      title="Изменить пароль"
      open={isModalOpen}
      centered
      onCancel={closeModal}
      footer={null}>
      <Form
        name="changePassword"
        labelCol={{ span: 6 }}
        autoComplete="off"
        onFinish={onFinish}>
        <Form.Item
          label="Пароль"
          name="oldPassword"
          rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Новый пароль"
          name="newPassword"
          rules={[{ required: true, message: 'Введите новый пароль' }]}>
          <Input.Password />
        </Form.Item>

        <SpaceButtons>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}>
            Сохранить
          </Button>
        </SpaceButtons>
      </Form>
    </Modal>
  );
};
