import { FC, PropsWithChildren, useEffect } from 'react'
import { ConfigProvider, theme as themeConfig } from 'antd'
import 'antd/dist/reset.css'
import { useMediaPredicate } from 'react-media-hook'
import { useStore } from 'effector-react'
import { $theme, setTheme, Theme } from 'entities/ui'

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useStore($theme)
  const biggerThan400 = useMediaPredicate('(prefers-color-scheme: dark)')

  const algorithm =
    theme === Theme.Light
      ? themeConfig.defaultAlgorithm
      : themeConfig.darkAlgorithm

  useEffect(() => {
    if (biggerThan400) setTheme(Theme.Dark)
    else setTheme(Theme.Light)
  }, [biggerThan400])

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
