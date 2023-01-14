import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Forum } from 'pages/forum'
import { Start } from 'pages/start'
import { SignIn } from 'pages/signin'
import { Logout } from 'pages/logout'
import { Game } from 'pages/game'
import { SignUp } from 'pages/signup'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <Start /> },
  { path: routesPath.signin, element: <SignIn /> },
  { path: routesPath.signup, element: <SignUp /> },
  { path: routesPath.profile, element: <div>PROFILE</div> },
  { path: routesPath.forum, element: <Forum /> },
  { path: routesPath.logout, element: <Logout /> },
  { path: routesPath.game, element: <div>GAME</div> },
  { path: routesPath.game, element: <Game /> }
]
