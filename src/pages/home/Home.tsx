import { useState } from 'react'
import { ToggleButtom } from './components/ToggleButtom'
import { useQuery } from 'react-query'
import { SearchResult } from './components/SearchResult'

const getCities = async (value: string): Promise<fetchCity> => {
  try {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=es&format=json`)
    if (!response.ok) {
      throw new Error('Fetch data error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const Home = (): JSX.Element => {
  const [cityName, setCityName] = useState('')
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    setCityName(value)
  }

  const { data: cities } = useQuery(['cityName', cityName], async (): Promise<fetchCity | undefined > => {
    if (cityName.length >= 2) {
      const response = await getCities(cityName)
      console.log(cities)
      return response
    }
    return undefined
  })

  return (
    <section className='container sm:max-w-sm-custom md:max-w-md-custom lg:max-w-md-custom px-2 h-screen flex flex-col space-y-8 pt-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl text-dark-text-100'>Weather App</h1>
        <ToggleButtom/>
      </div>
      <div className='border dark:bg-dark-main-500 dark:text-dark-text-300 rounded-lg py-1'>
        <div className='flex items-center px-4'>
          <svg className='w-6 h-6 dark:text-dark-text-400' fill='currentColor' viewBox="0 0 30 30">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <input type="text" name='city' value={cityName} onChange={handleChange} placeholder='search for location' className='py-2 px-2 w-full focus:outline-none bg-transparent font-mono text-lg'/>
        </div>
        <div className='space-y-4'>
          {
            cities?.results?.map(city => <SearchResult key={city.id} city={city}/>)
          }
        </div>
      </div>
        <p className='text-center dark:text-dark-text-100 font-[500]'>Developed by <a href="https://github.com/sabahrahal/weather-app" target='_blank' className='dark:text-dark-text-link hover:underline-offset-2 hover:underline duration-150' rel='noreferrer'>Sabah Rahal</a></p>
    </section>
  )
}
