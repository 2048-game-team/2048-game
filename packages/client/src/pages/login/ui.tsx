import React from 'react';
import { Button, Divider, Form, Input, Modal, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginFields } from 'pages/login';
import { routesPath } from 'processes/routes';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = (data: LoginFields) => {
    console.log(data);
    navigate(routesPath.home);
  };

  const onFinishFailed = () => {
    console.log('Finish Failed');
  };

  return (
    <Modal title="Вход" open={true} onCancel={handleCancel} footer={null}>
      <Typography>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Пожалуйста введите email!' },
              { type: 'email', message: 'Неверный email' },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
            <Input.Password />
          </Form.Item>

          <Divider />

          <Form.Item wrapperCol={{ offset: 8, span: 26 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to={routesPath.register}>Регистрация</Link>
          </Form.Item>
        </Form>
      </Typography>
    </Modal>
  );
};
