import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { base } from 'shared/const';

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={base}>{children}</BrowserRouter>;
};
