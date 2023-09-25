import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useWeather } from '../../Hooks'
import { syncHour } from '../../utils'
import { ForecastLayout } from '../../components/forecast'

export const Daily: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeather(latitude, longitude)
  if (isLoading) return <div>Loading...</div>
  const weatherItems = syncHour(data)
  return (
    <section>
        { isLoading && <div></div> }
        { isError && <div></div> }
        <div className='bg-light-page-background dark:bg-dark-page-background grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
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
