import { RouteObject } from 'react-router-dom'

import { routesPath } from './routesPath'

export const routes: RouteObject[] = [
  { path: routesPath.home, element: <div>Домашняя страница приложения</div> },
]
