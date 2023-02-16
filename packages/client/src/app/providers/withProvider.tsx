import { FC, PropsWithChildren } from 'react';
import { Provider } from 'effector-react/ssr';
import { Scope } from 'effector';

export const WithProvider = (scope: Scope) => {
  const Comp: FC<PropsWithChildren> = ({ children }) => {
    return <Provider value={scope}>{children}</Provider>;
  };
  return Comp;
};
