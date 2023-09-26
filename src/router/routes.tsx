import { App } from '../App'
import { Home, Forecast, Daily, NotFoundPage } from '../pages'

export const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/forecast',
        element: <Forecast/>
      },
      {
        path: '/forecast/daily',
        element: <Daily/>
      },
      {
        path: '*',
        element: <NotFoundPage/>
      }
    ]
  }
]
