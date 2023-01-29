import { AuthRequired } from 'processes/layout/header/burgerMenu/types';

export const checkDisable = (
  authRequired: AuthRequired,
  isAuth: boolean
): boolean => {
  if (authRequired === AuthRequired.Irrelevant) {
    return false;
  } else {
    return authRequired === AuthRequired.Yes ? !isAuth : isAuth;
  }
};
