import { render, screen } from '@testing-library/react'
import { WithTheme } from 'app/providers/withTheme'
import { SignUp } from 'pages/signup'
import userEvent from '@testing-library/user-event'
import { WithRouter } from 'app/providers/withRouter'

describe('<SignUpPage />', () => {
  beforeEach(() => {
    render(
      <WithTheme>
        <WithRouter>
          <SignUp />
        </WithRouter>
      </WithTheme>
    )
  })

  it('should show errors with invalid data', async function () {
    await userEvent.click(screen.getByText('Зарегистрироваться'))

    expect(await screen.findAllByRole('alert')).toHaveLength(6)
  })
})
