import {Button, Modal, Upload, UploadFile, UploadProps} from "antd";
import React, {useState} from "react";
import {AvatarModalProps} from "./types";

export const AvatarModal = ({isModalOpen, onOk, onClose}:AvatarModalProps) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleOk = () => {
        onOk();
    };

    const handleCancel = () => {
        onClose();
    };

    if(!isModalOpen) {
        return null;
    }

    return (
        <Modal title="Добавление аватара"
               open={isModalOpen}
               footer={[
                   <Button key="submit"
                           type="primary"
                           onClick={handleOk}>
                       Сохранить
                   </Button>,
               ]}
               onCancel={handleCancel}
               style={{ textAlign: 'center' }}
        >
                <Upload
                    action=""
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                >
                    {fileList.length < 1 && '+ Загрузить'}
                </Upload>
        </Modal>
    )
}
