import { Outlet } from 'react-router-dom'

export const App = (): JSX.Element => {
  return (
    <main className='dark:bg-dark-main-100'>
        {<Outlet/>}
    </main>
  )
}
