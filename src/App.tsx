import { Outlet } from 'react-router-dom'
import { Footer, SearchBar } from './components'
import { useState } from 'react'

export const App = (): JSX.Element => {
  const [backgroundBlur, setBackgroundBlur] = useState(false)
  return (
    <>
    <SearchBar setBackgroundBlur={setBackgroundBlur}/>
    <main className={`${backgroundBlur && 'opacity-25'} flex-grow pt-[40px]`}>
        {<Outlet/>}
    </main>
    <Footer />
    </>
  )
}
