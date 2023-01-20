import { Col, Divider, InputNumber, Row } from 'antd';
import { $settings } from 'entities/settings';
import { FC, PropsWithChildren } from 'react';
import { useStore } from 'effector-react';
import { getChangeHandler } from './getChangeHandler';
import { textRowSpan, valueRowSpan, minGameSize, maxGameSize, minCanvasSideSize, maxCanvasSideSize, canvasSizeStep } from './const';

export const Settings: FC<PropsWithChildren> = () => {
  const { gameRows, gameCols, gameHeight, gameWidth } = useStore($settings);

  return (
    <>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={textRowSpan}>Ряды:</Col>
        <Col span={valueRowSpan}>
          <InputNumber
            min={minGameSize}
            max={maxGameSize}
            defaultValue={gameRows}
            onChange={getChangeHandler(settings, 'gameRows')}
          />
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={textRowSpan}>Столбцы:</Col>
        <Col span={valueRowSpan}>
          <InputNumber
            min={minGameSize}
            max={maxGameSize}
            defaultValue={gameCols}
            onChange={getChangeHandler(settings, 'gameCols')}
          />
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={textRowSpan}>Ширина:</Col>
        <Col span={valueRowSpan}>
          <InputNumber
            min={minCanvasSideSize}
            max={maxCanvasSideSize}
            step={canvasSizeStep}
            defaultValue={gameWidth}
            onChange={getChangeHandler(settings, 'gameWidth')}
          />
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={textRowSpan}>Высота:</Col>
        <Col span={valueRowSpan}>
          <InputNumber
            min={minCanvasSideSize}
            max={maxCanvasSideSize}
            step={canvasSizeStep}
            defaultValue={gameHeight}
            onChange={getChangeHandler(settings, 'gameHeight')}
          />
        </Col>
      </Row>
    </>
  );
};
