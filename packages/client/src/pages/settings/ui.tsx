import { Col, Divider, Row } from 'antd';
import { FC, PropsWithChildren } from 'react';

export const Settings: FC<PropsWithChildren> = () => {
  return (
    // <Space direction="vertical" align="center" size="small">
    <>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={8}>Game rows:</Col>
        <Col span={16}>Second</Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col span={8}>Game cols:</Col>
        <Col span={16}>Second</Col>
      </Row>
    </>
  );
};
