import { RouteObject } from 'react-router-dom';
import { routesPath } from './routesPath';
import { Forum } from 'pages/forum';
import { Start } from 'pages/start';
import { SignIn } from 'pages/signin';
import { Logout } from 'pages/logout';
import { Game } from 'pages/game';
import { SignUp } from 'pages/signup';
import { Finish } from 'pages/finish';
import { Settings } from 'pages/settings'
import { Profile } from 'pages/profile';
import { PrivateRoute } from './ui';

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <Start /> },
  {
    path: routesPath.profile,
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  { path: routesPath.signin, element: <SignIn /> },
  { path: routesPath.signup, element: <SignUp /> },
  { path: routesPath.forum, element: <Forum /> },
  { path: routesPath.logout, element: <Logout /> },
  { path: routesPath.game, element: <Game /> },
  { path: routesPath.finish, element: <Finish /> },
  { path: routesPath.settings, element: <Settings />},
];
