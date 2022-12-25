import { routes } from 'processes/routes'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { WithProviders } from './providers'
import { Spin } from 'antd'
import { LayoutGame } from 'processes/layout'
import './index.css'
import { WithTheme } from 'app/providers/withTheme'

const Application = () => {
  const router = useRoutes(routes)

  return (
    <Suspense fallback={<Spin />}>
      <LayoutGame>{router}</LayoutGame>
    </Suspense>
  )
}

export const AppWithProviders = () => {
  return (
    <WithProviders>
      <WithTheme>
        <Application />
      </WithTheme>
    </WithProviders>
  )
}
