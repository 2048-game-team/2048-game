import { Layout } from 'antd'
import { FC, PropsWithChildren } from 'react'
import { FullLayout } from './styles'
import { Header } from 'processes/layout/header'

export const LayoutGame: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100%' }}>
      <FullLayout>
        <Header />
        <Layout.Content>{children}</Layout.Content>
      </FullLayout>
    </Layout>
  )
}
