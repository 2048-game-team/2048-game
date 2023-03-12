import { AppWithProviders } from 'app/ui';
import { render, screen } from '@testing-library/react';
import 'root/jest.mock';
import { fork } from 'effector';

const appContent = 'Старт!';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

const scope = fork();

test('Example test', async () => {
  render(<AppWithProviders scope={scope} env={process.env as ImportMetaEnv} />);
  expect(screen.getByText(appContent)).toBeDefined();
});
