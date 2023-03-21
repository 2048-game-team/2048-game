import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BASE_URL } from 'client/const';

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={BASE_URL}>{children}</BrowserRouter>;
};
