import { AppWithProviders } from 'app/ui';
import { render, screen } from '@testing-library/react';
import { fork } from 'effector';
import { expect, it } from 'vitest';

const appContent = 'Старт!';

const scope = fork();

it('Example test', async () => {
  render(<AppWithProviders scope={scope} location="/" />);
  expect(screen.getByText(appContent)).toBeDefined();
});
