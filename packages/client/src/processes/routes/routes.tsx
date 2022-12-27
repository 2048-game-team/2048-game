import { RouteObject } from 'react-router-dom'
import { routesPath } from './routesPath'
import { Login } from 'pages/login'
import { Profile } from 'pages/profile'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <div>Домашняя страница приложения</div> },
  { path: routesPath.login, element: <Login /> },
  { path: routesPath.profile, element: <Profile /> },
  { path: routesPath.logout, element: <div>LOGOUT</div> }
]
