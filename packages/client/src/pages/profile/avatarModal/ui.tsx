import React, { useState } from 'react';
import { Button, Modal, Upload, UploadFile } from 'antd';
import { AvatarModalProps } from './types';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { setAvatar } from 'pages/profile/model';
import { UploadChangeParam } from 'antd/es/upload';

export const AvatarModal: React.FC<AvatarModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<File | undefined>();
  const [previewImage, setPreviewImage] = useState<string>();

  const handleChange = (info: UploadChangeParam<UploadFile<File>>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    setImageUrl(info.file.originFileObj);
    setPreviewImage(URL.createObjectURL(info.file.originFileObj as Blob));
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </div>
  );

  const updateAvatar = () => {
    if (imageUrl) {
      setAvatar({ avatar: imageUrl });
    }
    closeModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="Изменить аватар"
      open={isModalOpen}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={updateAvatar}
          disabled={!imageUrl}>
          Сохранить
        </Button>,
      ]}
      onCancel={closeModal}
      style={{ textAlign: 'center' }}
      width={360}
      centered>
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
