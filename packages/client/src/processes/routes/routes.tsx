import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Forum } from 'pages/forum'
import { Start } from 'pages/start'
import { Signin } from 'pages/signin'
import { Logout } from 'pages/logout'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <Start /> },
  { path: routesPath.signin, element: <Signin /> },
  { path: routesPath.profile, element: <div>PROFILE</div> },
  { path: routesPath.forum, element: <Forum /> },
  { path: routesPath.logout, element: <Logout /> },
  { path: routesPath.game, element: <div>GAME</div> },
]
