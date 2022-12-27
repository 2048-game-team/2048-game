import React, {useState} from 'react'
import {
    Avatar,
    Button,
    Card,
    Divider,
    Form,
    Input,
    Modal,
    Tooltip,
    Typography,
    Upload,
    UploadFile,
    UploadProps
} from "antd";
import {LeftOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import ImgCrop from "antd-img-crop";

export const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const showAvatarModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <Card>
            <Typography>
                <Link
                    to='/'
                >
                    <LeftOutlined />
                    Назад
                </Link>
                <Form
                    name='profile'
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 17 }}
                    initialValues={{ remember: true }}
                    autoComplete='off'
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
            <Modal title="Добавление аватара"
                   open={isModalOpen}
                   footer={[
                       <Button key="back" onClick={handleCancel}>
                           Закрыть
                       </Button>,
                       <Button key="submit"
                               type="primary"
                               onClick={handleOk}>
                           Сохранить
                       </Button>,
                   ]}
                   onCancel={handleCancel}
            >
                <ImgCrop rotate>
                    <Upload
                        action=""
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                    >
                        {fileList.length < 1 && '+ Загрузить'}
                    </Upload>
                </ImgCrop>
            </Modal>
        </Card>
    )
}
