import { AppWithProviders } from 'app/ui';
import { render, screen } from '@testing-library/react';
import 'root/jest.mock';
import { fork } from 'effector';
import { BASE_URL } from 'root/const';
import { BrowserRouter } from 'react-router-dom';

const appContent = 'Старт!';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

const scope = fork();

test('Example test', async () => {
  render(<AppWithProviders scope={scope} />);
  expect(screen.getByText(appContent)).toBeDefined();
});
