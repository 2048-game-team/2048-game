import { useStore } from 'effector-react';
import { $isAuth } from 'processes/layout/model/model';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => { 
  const isAuth = useStore($isAuth)
  if (!isAuth) { 
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
