import { Outlet } from 'react-router-dom'
import { Footer, SearchBar } from './components'

export const App = (): JSX.Element => {
  return (
    <>
    <SearchBar/>
    <main className='flex-grow pt-[40px]'>
        {<Outlet/>}
    </main>
    <Footer />
    </>
  )
}
