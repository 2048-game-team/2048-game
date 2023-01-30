import { Divider, Form, InputNumber, Modal } from 'antd';
import { $settings } from 'entities/settings';
import React, { FC, PropsWithChildren } from 'react';
import { useUnit } from 'effector-react';
import { getChangeHandler } from './getChangeHandler';
import { minCanvasSideSize, maxCanvasSideSize, canvasSizeStep } from './const';
import { routesPath } from 'processes/routes';
import { useNavigate } from 'react-router-dom';
import { minGameSize, maxGameSize } from 'entities/game-drive/const';

export const Settings: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const settings = useUnit($settings);
  const { gameRows, gameCols, gameHeight, gameWidth } = settings;

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  return (
    <Modal title="Настройки" open onCancel={handleCancel} footer={null}>
      <Form
        name="settings"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}>
        <Form.Item label="Ряды">
          <InputNumber
            min={minGameSize}
            max={maxGameSize}
            defaultValue={gameRows}
            onChange={getChangeHandler(settings, 'gameRows')}
          />
        </Form.Item>

        <Form.Item label="Столбцы">
          <InputNumber
            min={minGameSize}
            max={maxGameSize}
            defaultValue={gameCols}
            onChange={getChangeHandler(settings, 'gameCols')}
          />
        </Form.Item>

        <Divider />

        <Form.Item label="Ширина">
          <InputNumber
            min={minCanvasSideSize}
            max={maxCanvasSideSize}
            step={canvasSizeStep}
            defaultValue={gameWidth}
            onChange={getChangeHandler(settings, 'gameWidth')}
          />
        </Form.Item>

        <Form.Item label="Высота">
          <InputNumber
            min={minCanvasSideSize}
            max={maxCanvasSideSize}
            step={canvasSizeStep}
            defaultValue={gameHeight}
            onChange={getChangeHandler(settings, 'gameHeight')}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
