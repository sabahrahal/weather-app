import { App } from '../App'
import { Home } from '../pages/home/Home'

export const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
]
