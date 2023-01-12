import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Login } from 'pages/login'
import { Profile } from 'pages/profile'
import { Forum } from 'pages/forum'
import { Start } from 'pages/start'
import { Game } from 'pages/game'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <Start /> },
  { path: routesPath.login, element: <Login /> },
  { path: routesPath.profile, element: <Profile /> },
  { path: routesPath.forum, element: <Forum /> },
  { path: routesPath.logout, element: <div>LOGOUT</div> },
  { path: routesPath.game, element: <Game /> }
]
