import React, { FC } from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import { SignInRequest } from 'shared/api/swagger';
import './model/init';
import { useStore } from 'effector-react';
import { signin, signInFx } from './model';
import { SpaceButtons } from './styles';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const loading = useStore(signInFx.pending);

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = (data: SignInRequest) => {
    signin(data);
    navigate(routesPath.home);
  };

  return (
    <Modal title="Вход" open onCancel={handleCancel} footer={null}>
      <Typography>
        <Form
          name="signin"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on">
          <Form.Item
            label="Логин"
            name="login"
            rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
            <Input.Password />
          </Form.Item>

          <SpaceButtons>
            <Link to={routesPath.signup}>Регистрация</Link>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}>
              Войти
            </Button>
          </SpaceButtons>
        </Form>
      </Typography>
    </Modal>
  );
};
