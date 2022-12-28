import {Button, Modal, Upload, UploadFile, UploadProps} from "antd";
import ImgCrop from "antd-img-crop";
import React, {useState} from "react";
import {AvatarModalProps} from "./types";

export const AvatarModal = ({isModalOpen=false, onClose, onOk}:AvatarModalProps) => {

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    return !isModalOpen ? null : (
        <Modal title="Добавление аватара"
               open={isModalOpen}
               footer={[
                   <Button key="submit"
                           type="primary"
                           onClick={onOk}>
                       Сохранить
                   </Button>,
               ]}
               onCancel={onClose}
               style={{ textAlign: 'center' }}
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
    )
}
