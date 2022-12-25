import { FC, PropsWithChildren, useEffect } from 'react'
import { ConfigProvider, theme as themeConfig } from 'antd'
import 'antd/dist/reset.css'
import { useDispatch, useSelector } from 'react-redux'
import { Theme } from 'entities/ui/state'
import { switchTheme } from 'entities/ui/reducer'
import { useMediaPredicate } from 'react-media-hook'

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useSelector(state => state.ui)
  const dispatch = useDispatch()
  const biggerThan400 = useMediaPredicate('(prefers-color-scheme: dark)')

  const algorithm =
    theme === Theme.Light
      ? themeConfig.defaultAlgorithm
      : themeConfig.darkAlgorithm

  useEffect(() => {
    if (biggerThan400) {
      dispatch(switchTheme({ theme: Theme.Dark }))
    } else {
      dispatch(switchTheme({ theme: Theme.Light }))
    }
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
