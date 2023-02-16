import { useStore } from 'effector-react/ssr';
import { $isAuth } from 'processes/layout/model/model';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { routesPath } from './routesPath';

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useStore($isAuth);
  if (!isAuth) {
    // temporary log into console
    console.log('Access denied! User is not authorized.');
    return <Navigate to={routesPath.signin} />;
  }

  return <>{children}</>;
};
