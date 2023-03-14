import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { baseUrl } from 'shared/envConsts';

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={baseUrl}>{children}</BrowserRouter>;
};
