import { AppWithProviders } from 'app/ui';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { fork } from 'effector';
import { baseURL } from 'shared/api/consts';
import {
  logRedirectTest,
  someSecretText,
  XSSScript,
  injureUserResponse,
} from './const';
import { expect, it, beforeAll, afterEach, afterAll } from 'vitest'
const scope = fork();

const server = setupServer(
  rest.get(`${baseURL}/auth/user`, (req, res, ctx) => {
    return res(ctx.json(injureUserResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const logBackup = console.log;
const logMessages: unknown[] = [];

console.log = (...args) => {
  logMessages.push(logMessages, ...args);
  logBackup.apply(console, args);
};

it('XSS vulnerability check', async () => {
  console.log(logRedirectTest);
  expect(logMessages[logMessages.length - 1]).toEqual(logRedirectTest);

  const { container } = render(
    <AppWithProviders scope={scope} location="/"/>
  );

  const avatar = container.getElementsByClassName('ant-avatar-circle')[0];
  expect(avatar).toBeDefined();

  const user = userEvent.setup();
  await user.click(avatar);
  const nickName = await screen.findByText(XSSScript);
  expect(nickName).toBeDefined();
  expect(logMessages[logMessages.length - 1]).not.toEqual(someSecretText);
});
