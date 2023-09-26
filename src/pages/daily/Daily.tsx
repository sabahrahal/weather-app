import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useWeather } from '../../Hooks'
import { syncHour } from '../../utils'
import { ForecastLayout } from '../../components/forecast'
import { LoadingSpinner } from '../../components'
import { NotFoundPage } from '..'

export const Daily: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeather(latitude, longitude)
  const navigate = useNavigate()
  const backToPrevious = (): void => {
    navigate(-1)
  }
  if (isLoading) return <LoadingSpinner />
  const weatherItems = syncHour(data)
  return (
    <section>
        <h1 className='text-3xl pb-2 text-light-text-200 dark:text-dark-text-100 font-mono'>Today&apos;s Forecast</h1>
        <h2 onClick={backToPrevious} className='text-md cursor-pointer pb-2 text-light-text-link dark:text-dark-text-link font-mono underline underline-offset-2 flex items-center gap-1'>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        Back to weekly
        </h2>
        <div className='bg-light-page-background dark:bg-dark-page-background grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
        { isError && <NotFoundPage/> }
        {weatherItems.map(
          day => <ForecastLayout
            key={day.time}
            time={day.time}
            date={day.date}
            isNow={day.isNow}
            temperature={day.temperature}
            weatherExtraInfo={day.weatherExtraInfo}
        />)}
        </div>
  </section>
  )
}
