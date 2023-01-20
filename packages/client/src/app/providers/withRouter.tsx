import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { base } from 'root/vite.config';

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={base}>{children}</BrowserRouter>;
};
