import { FC, PropsWithChildren } from 'react';
import { StaticRouter } from 'react-router-dom/server';

export const WithStaticRouter = (location: string) => {
  const Comp: FC<PropsWithChildren> = ({ children }) => {
    return <StaticRouter location={location}>{children}</StaticRouter>;
  };
  return Comp;
};
