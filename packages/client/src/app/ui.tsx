import { routes } from 'processes/routes'
import { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { WithProviders } from './providers'
import { Spin } from 'antd'

const Application = () => {
  const router = useRoutes(routes)

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return <Suspense fallback={<Spin />}>{router}</Suspense>
}

export const AppWithProviders = () => {
  return (
    <WithProviders>
      <Application />
    </WithProviders>
  )
}
