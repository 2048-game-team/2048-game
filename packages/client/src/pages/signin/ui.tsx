import React, { FC } from 'react';
import { Button, Divider, Form, Input, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import { SignInRequest } from 'shared/api/swagger';
import './model/init';
import { useEvent, useUnit } from 'effector-react/ssr';
import { oauthGetServiceId, signin, signInFx } from './model';
import { ButtonYandex, SpaceButtons, SpaceYandex } from './styles';
import { YandexIcon } from 'pages/signin/yandexIcon';
import { YANDEX_OAUTH_REDIRECT_URL } from 'shared/envConsts';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const loading = useUnit(signInFx.pending);
  const [signinFn, oauthGetServiceIdFn] = useEvent([signin, oauthGetServiceId]);

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = (data: SignInRequest) => {
    signinFn(data);
    navigate(routesPath.home);
  };

  const handleOauth = () => {
    oauthGetServiceIdFn({ redirect_uri: YANDEX_OAUTH_REDIRECT_URL });
  };

  return (
    <Modal title="Вход" open onCancel={handleCancel} footer={null}>
      <SpaceYandex>
        <ButtonYandex size="large" onClick={handleOauth} icon={YandexIcon}>
          Войти с Яндекс ID
        </ButtonYandex>
      </SpaceYandex>

      <Divider />
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
    </Modal>
  );
};
