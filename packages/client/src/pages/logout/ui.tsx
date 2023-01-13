import React from 'react'
import {
  Button,
  Divider,
  Form,
  message,
  Modal,
  Popconfirm,
  Typography,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { routesPath } from 'processes/routes'
import { loginFx, logoutFx } from 'processes/http/httpService'

export const Logout: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(routesPath.home)
  }

  const onFinish = async () => {
    try {
      await logoutFx()
      navigate(routesPath.home)
    } catch (e) {
      messageApi.open({
        type: 'error',
        content: (e as { response: { data: { reason: string } } }).response.data
          .reason,
      })
    }
  }

  return (
    <>
      {contextHolder}
      <Modal title="Выход" open={true} onCancel={handleCancel} footer={null}>
        <Typography>
          <Form
            name="logout"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off">
            <Typography.Text style={{ display: 'block', textAlign: 'center' }}>
              Вы действительно хотите выйти?
            </Typography.Text>
            <Divider />

            <Form.Item wrapperCol={{ offset: 10, span: 26 }}>
              <Button type="primary" htmlType="submit">
                Выйти
              </Button>
            </Form.Item>
          </Form>
        </Typography>
      </Modal>
    </>
  )
}
