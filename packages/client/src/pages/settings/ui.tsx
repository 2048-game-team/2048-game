import { Col, Divider, InputNumber, Row } from 'antd';
import { $settings } from 'entities/settings';
import { FC, PropsWithChildren } from 'react';
import { useStore } from 'effector-react';
import { getChangeHandler } from './getChangeHandler';
import { textRowSpan, valueRowSpan, minGameSize, maxGameSize, minCanvasSideSize, maxCanvasSideSize, canvasSizeStep } from './const';

export const Settings: FC<PropsWithChildren> = () => {
  const settings = useStore($settings);
  const { gameRows, gameCols, gameHeight, gameWidth } = settings;

  return (
    <>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={textRowSpan}>Game rows:</Col>
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
        <Col span={textRowSpan}>Game cols:</Col>
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
        <Col span={textRowSpan}>Game width:</Col>
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
        <Col span={textRowSpan}>Game heidth:</Col>
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
