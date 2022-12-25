import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWithProviders } from 'app'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
)
