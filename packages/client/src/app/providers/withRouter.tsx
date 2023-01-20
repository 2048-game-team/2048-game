import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as process from 'process';

const basename =
  process.env?.REACT_APP_DEPLOY === 'GITHUB_PAGES' ? '2048-game' : '/';

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={basename}>{children}</BrowserRouter>;
};
