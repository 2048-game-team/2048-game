import { Layout } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { FullLayout } from './styles';
import { Header } from 'processes/layout/header';
import './model/init';
import { useGate } from 'effector-react';
import { checkAuthGate } from 'processes/layout/model/model';

export const LayoutGame: FC<PropsWithChildren> = ({ children }) => {
  useGate(checkAuthGate);

  return (
    <Layout style={{ minHeight: '100%' }}>
      <FullLayout>
        <Header />
        <Layout.Content>{children}</Layout.Content>
      </FullLayout>
    </Layout>
  );
};
