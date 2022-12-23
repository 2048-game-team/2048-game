import { AppWithProviders } from 'app/ui'
import { render, screen } from '@testing-library/react'

const appContent = 'Домашняя страница приложения'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(<AppWithProviders />)
  expect(screen.getByText(appContent)).toBeDefined()
})
