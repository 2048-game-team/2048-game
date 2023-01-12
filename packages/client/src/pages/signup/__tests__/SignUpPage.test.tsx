import { render, screen } from '@testing-library/react'
import { WithTheme } from 'app/providers/withTheme'
import { SignUpPage } from 'pages/signup'
import userEvent from '@testing-library/user-event'

describe('<SignUpPage />', () => {
  beforeEach(() => {
    render(
      <WithTheme>
        <SignUpPage />
      </WithTheme>
    )
  })

  it('should show errors with invalid data', async function () {
    await userEvent.click(screen.getByText('Зарегистрироваться'))

    expect(await screen.findAllByRole('alert')).toHaveLength(6)
  })
})
