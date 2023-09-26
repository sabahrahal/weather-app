import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useWeekly } from '../../Hooks'
import { ForecastLayout } from '../../components/forecast'
import { syncDate } from '../../utils'
import { LoadingSpinner } from '../../components'
import { NotFoundPage } from '..'

export const Forecast: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeekly(latitude, longitude)
  if (isLoading) return <LoadingSpinner />
  const weeklyItems = syncDate(data)
  return (
    <section>
      <div className='bg-light-page-background dark:bg-dark-page-background grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
        { isError && <NotFoundPage/> }
        {weeklyItems.map(
          day => <ForecastLayout
          key={day.time}
          time={day.time}
          isNow={day.isNow}
          temperatureMin={day.temperatureMin}
          temperatureMax={day.temperatureMax}
          weatherExtraInfo={day.weatherExtraInfo}
        />)}
      </div>
    </section>
  )
}
