import React, {useState} from 'react'
import {
    Avatar,
    Button,
    Card,
    Divider,
    Form,
    Input,
    Tooltip,
    Typography,
} from "antd";
import {LeftOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {routesPath} from "processes/routes";
import { AvatarModal } from './avatarModal';
import {ProfileFields} from "pages/profile/types";

export const Profile = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showAvatarModal = () => {
        setIsModalOpen(true)
    }

    const onFinish = (data: ProfileFields) => {
        console.log(data)
        navigate(routesPath.home)
    }

    const onFinishFailed = () => {
        console.log('Finish Failed')
    }

    return (
        <Card>
            <Typography>
                <Link
                    to={routesPath.home}
                >
                    <LeftOutlined />
                    Назад
                </Link>
                <Form
                    name='profile'
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 15 }}
                    initialValues={{ remember: true }}
                    autoComplete='off'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name='avatar'
                        wrapperCol={{ offset: 10, span: 26 }}
                    >
                        <Tooltip placement="top" title='Кликните для редактирования'>
                            <Avatar size={120}
                                    icon={<UserOutlined />}
                                    style={{ cursor: 'pointer'}}
                                    onClick={showAvatarModal}
                            />
                        </Tooltip>
                    </Form.Item>
                    <Form.Item
                        label='Логин'
                        name='login'
                        rules={[
                            { required: true, message: 'Пожалуйста введите логин!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[
                            { required: true, message: 'Пожалуйста введите email!' },
                            { type: 'email', message: 'Неверный email' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Пароль'
                        name='password'
                        rules={[
                            { required: true, message: 'Пожалуйста введите пароль!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label='Повторите пароль'
                        name='passwordRepeat'
                        rules={[
                            { required: true, message: 'Пожалуйста введите пароль!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Divider/>
                    <Form.Item wrapperCol={{ offset: 10, span: 26 }}>
                        <Button type='primary'
                                htmlType='submit'
                                size='large'
                        >
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Typography>
            <AvatarModal isModalOpen={isModalOpen}
                         onClose={()=>setIsModalOpen(false)}
                         onOk={()=>setIsModalOpen(false)}
            />
        </Card>
    )
}
