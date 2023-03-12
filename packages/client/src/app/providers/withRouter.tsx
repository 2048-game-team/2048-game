import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { $envData } from 'app/model';

let baseUrl: string;
$envData.watch(env => ({ baseUrl } = env));

export const WithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={baseUrl}>{children}</BrowserRouter>;
};
