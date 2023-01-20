import { Button, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import { AvatarModalProps } from './types';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export const AvatarModal = ({
  isModalOpen,
  onOk,
  onClose,
}: AvatarModalProps) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    setImageUrl(info.file.originFileObj);
    setPreviewImage(URL.createObjectURL(info.file.originFileObj));
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </div>
  );

  const handleOk = () => {
    onOk();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="Добавление аватара"
      open={isModalOpen}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Сохранить
        </Button>,
      ]}
      onCancel={handleCancel}
      style={{ textAlign: 'center' }}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}>
        {imageUrl ? (
          <img
            src={previewImage}
            alt="avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Modal>
  );
};
