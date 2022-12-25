import { FC, PropsWithChildren } from 'react'

import { ConfigProvider } from 'antd'

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>
}
