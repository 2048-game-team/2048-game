import { render, screen } from '@testing-library/react';
import { WithTheme } from 'app/providers/withTheme';
import { SignUp } from 'pages/signup';
import userEvent from '@testing-library/user-event';
import { WithRouter } from 'app/providers/withRouter';
import { Provider } from 'effector-react/ssr';
import { AppWithProviders } from 'app/ui';
import { expect, it, describe, beforeEach } from 'vitest'
import { fork } from 'effector';

const scope = fork();

describe('<SignUpPage />', () => {
  it('should show errors with invalid data', async function () {
    render(<AppWithProviders scope={scope} location="/signup"/>);
    const signupButton = await screen.findByText('Зарегистрироваться');
    expect(signupButton).toBeDefined();
    await userEvent.click(signupButton);
    await screen.findByText("Введите пароль");
    expect(await screen.findAllByRole('alert')).toHaveLength(6);
  });
});
