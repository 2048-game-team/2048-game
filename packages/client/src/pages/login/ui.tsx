import React from 'react'
import { Button, Divider, Form, Input, message, Modal, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { routesPath } from 'processes/routes'
import { SignInRequest } from 'shared/api/swagger'
import { loginFx } from 'processes/http/httpService'

export const Login: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(routesPath.home)
  }

  const onFinish = async (data: SignInRequest) => {
    try {
      await loginFx(data)
      navigate(routesPath.home)
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: (e as { response: { data: { reason: string } } }).response.data
          .reason,
      })
    }
  }

  const onFinishFailed = () => {
    messageApi.open({
      type: 'error',
      content: 'Ошибка в заполнении полей формы',
    })
  }

  return (
    <>
      {contextHolder}
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
              label="Логин"
              name="login"
              rules={[
                { required: true, message: 'Пожалуйста введите логин!' },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                { required: true, message: 'Пожалуйста введите пароль!' },
              ]}>
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
    </>
  )
}
