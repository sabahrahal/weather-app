import { App } from '../App'
import { Home, Forecast, Daily } from '../pages'

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
      }
    ]
  }
]
