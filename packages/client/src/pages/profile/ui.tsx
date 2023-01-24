import React, { useState } from 'react';
import { Avatar, Button, Divider, Form, Input, Modal, Tooltip } from 'antd';
import { UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import { AvatarModal } from './avatarModal';
import { UserUpdateRequest } from 'shared/api/swagger';
import { useStore } from 'effector-react';
import { $user } from 'processes/layout/model/model';
import { SpaceProfile, SpaceAvatar, SpaceButtons } from './styles';
import './model/init';
import { setUserData, setUserDataFx } from 'pages/profile/model';
import { resourcesUrl } from 'shared/api/consts';
import { ChangePasswordModal } from 'pages/profile/changePasswordModal';

export const Profile = () => {
  const user = useStore($user);
  const navigate = useNavigate();
  const [isModalAvatarOpen, setIsModalAvatarOpen] = useState(false);
  const [isModalChangePasswordOpen, setIsModalChangePasswordOpen] =
    useState(false);
  const loading = useStore(setUserDataFx.pending);
  const avatarSrc = user?.avatar ? `${resourcesUrl}${user.avatar}` : null;

  const showAvatarModal = () => {
    setIsModalAvatarOpen(true);
  };
  const showChangePasswordModal = () => {
    setIsModalChangePasswordOpen(true);
  };

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = (data: UserUpdateRequest) => {
    setUserData(data);
    navigate(routesPath.home);
  };

  return (
    <>
      <Modal
        title="Профиль"
        open
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        footer={null}>
        <SpaceProfile direction="vertical">
          <SpaceAvatar>
            <Tooltip placement="top" title="Кликните для редактирования">
              <Avatar
                size={120}
                icon={<UserSwitchOutlined />}
                style={{ cursor: 'pointer' }}
                onClick={showAvatarModal}
                src={avatarSrc}
              />
            </Tooltip>
          </SpaceAvatar>

          <Form
            name="profile"
            labelCol={{ span: 6 }}
            initialValues={{ remember: true }}
            autoComplete="on"
            onFinish={onFinish}>
            <Form.Item
              label="Имя"
              name="first_name"
              initialValue={user?.first_name}
              rules={[{ required: true, message: 'Введите имя' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Фамилия"
              name="second_name"
              initialValue={user?.second_name}
              rules={[{ required: true, message: 'Введите фамилию' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Ник"
              name="display_name"
              initialValue={user?.display_name}
              rules={[{ required: true, message: 'Введите отображаемое имя' }]}>
              <Input />
            </Form.Item>

            <Divider />

            <Form.Item
              label="Логин"
              name="login"
              initialValue={user?.login}
              rules={[{ required: true, message: 'Введите логин' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              initialValue={user?.email}
              rules={[
                { required: true, message: 'Введите email' },
                { type: 'email', message: 'Неверный email' },
              ]}>
              <Input />
            </Form.Item>

            <Divider />

            <Form.Item
              label="Телефон"
              name="phone"
              initialValue={user?.phone}
              rules={[{ required: true, message: 'Введите телефон' }]}>
              <Input />
            </Form.Item>

            <SpaceButtons>
              <Button
                key="changePassword"
                type="link"
                htmlType="button"
                onClick={showChangePasswordModal}>
                Изменить пароль
              </Button>

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
        </SpaceProfile>
      </Modal>

      <AvatarModal
        isModalOpen={isModalAvatarOpen}
        closeModal={() => setIsModalAvatarOpen(false)}
      />

      <ChangePasswordModal
        isModalOpen={isModalChangePasswordOpen}
        closeModal={() => setIsModalChangePasswordOpen(false)}
      />
    </>
  );
};
