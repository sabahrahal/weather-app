import { type FC, useEffect, useState } from 'react'
import { ToggleButtom, SearchResult } from './search-bar'
import { useSearchBar } from '../Hooks/useSearchBar'
import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Modal } from './Modal'

interface Props {
  setBackgroundBlur: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBar: FC<Props> = ({ setBackgroundBlur }) => {
  const LIMIT = 5
  const [search, setSearch] = useState('')
  const queryClient = useQueryClient()
  const [counterFetch, setCounterFetch] = useState(useState<number>(() => {
    const storedCounter = window.localStorage.getItem('counterFetch')
    return storedCounter ? parseInt(storedCounter) : 0
  }))
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(value)
    if (value.length >= 2) {
      queryClient.invalidateQueries(['searchBar', value])
    }
  }
  useEffect(() => {
    window.localStorage.setItem('counterFetch', String(counterFetch))
    if (limitFetch) {
      setBackgroundBlur(true)
    } else {
      setBackgroundBlur(false)
    }
  }, [counterFetch, setBackgroundBlur])
  const limitFetch = counterFetch[0] >= LIMIT
  const { data: cities } = useSearchBar(search.trim().length >= 2 ? search : '')

  return (
    <section className='flex flex-col space-y-8 pt-10'>
      <div className='flex justify-between items-center'>
        <Link to="/" className='text-4xl dark:text-dark-text-100 text-light-text-100'>Weather App</Link>
        <ToggleButtom/>
      </div>
      <div className='bg-light-page-background dark:bg-dark-page-background text-light-text-300 dark:text-dark-text-300 rounded-t-lg py-1 relative z-10'>
        <div className='flex items-center px-4'>
          <svg className='w-6 h-6 dark:text-dark-text-400 text-light-text-400' fill='currentColor' viewBox="0 0 30 30">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <input type="text" name='search' value={search} onChange={handleChange} placeholder='search for location'
          className='py-2 px-2 w-full focus:outline-none bg-transparent font-mono text-lg dark:placeholder:text-dark-text-400 placeholder:text-light-text-400 disabled:opacity-25'
          disabled={limitFetch}/>
        </div>
        <div className={`${limitFetch ? 'top-[30vh] w-full rounded-3xl bg-light-hover-background dark:bg-dark-modal-background drop-shadow-2xl' : 'dark:bg-dark-page-background bg-light-page-background rounded-b-lg'} space-y-4 absolute w-full`}>
          {
            limitFetch
              ? <Modal />
              : cities?.results?.map(city => <SearchResult key={city.id} city={city} searchResult={ search } setSearchResult={ setSearch} setCounterFetch={setCounterFetch} counterFetch={counterFetch}/>)
          }
        </div>
      </div>
    </section>
  )
}
