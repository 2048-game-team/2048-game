import { AppWithProviders } from 'app/ui';
import { render, screen } from '@testing-library/react';
import 'root/jest.mock';

const appContent = 'Старт!';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  render(<AppWithProviders />);
  expect(screen.getByText(appContent)).toBeDefined();
});
