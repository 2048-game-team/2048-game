import { FC, PropsWithChildren } from 'react'
import { ConfigProvider, theme as themeConfig } from 'antd'
import 'antd/dist/reset.css'
import { useSelector } from 'react-redux'
import { Theme } from 'entities/ui/state'

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useSelector(state => state.ui)

  const algorithm =
    theme === Theme.Light
      ? themeConfig.defaultAlgorithm
      : themeConfig.darkAlgorithm

  return (
    <ConfigProvider
      theme={{
        algorithm,
        token: {
          colorPrimary: '#ec7c14',
          fontSize: 16,
        },
      }}>
      {children}
    </ConfigProvider>
  )
}
