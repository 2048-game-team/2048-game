import { Button, Divider, Form, Input, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import { createNewUser, signupCreateFx } from './model';
import './model/init';
import { SignUpRequest } from 'shared/api/swagger';
import { useUnit } from 'effector-react';
import { SpaceButtons } from 'pages/profile/styles';

export const SignUp = () => {
  const navigate = useNavigate();
  const loading = useUnit(signupCreateFx.pending);

  const handleCancel = () => {
    navigate(routesPath.home);
  };
  const onFinish = (data: SignUpRequest) => {
    createNewUser(data);
    navigate(routesPath.home);
  };

  return (
    <Modal title="Регистрация" open onCancel={handleCancel} footer={null}>
      <Form
        name="signup"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="on">
        <Form.Item
          label="Имя"
          name="first_name"
          rules={[{ required: true, message: 'Введите имя' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="second_name"
          rules={[{ required: true, message: 'Введите фамилию' }]}>
          <Input />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: 'Введите логин' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: 'Введите телефон' }]}>
          <Input />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Введите email' },
            { type: 'email', message: 'Неверный email' },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password />
        </Form.Item>

        <SpaceButtons>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}>
            Зарегистрироваться
          </Button>
        </SpaceButtons>
      </Form>
    </Modal>
  );
};
