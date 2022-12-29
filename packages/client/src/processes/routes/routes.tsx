import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Login } from 'pages/login'
import { Start } from 'pages/start'
import { Game } from 'pages/game'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <Start /> },
  { path: routesPath.login, element: <Login /> },
  { path: routesPath.profile, element: <div>PROFILE</div> },
  { path: routesPath.logout, element: <div>LOGOUT</div> },
  { path: routesPath.game, element: <Game /> }
]
