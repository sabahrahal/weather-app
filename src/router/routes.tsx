import { App } from '../App'
import { City, Home, Weekly } from '../pages'

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
        path: '/city',
        element: <City/>
      },
      {
        path: '/city/weekly',
        element: <Weekly/>
      }
    ]
  }
]
