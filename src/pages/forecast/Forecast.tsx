import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useWeekly } from '../../Hooks'
import { DateTime } from 'luxon'
import { getWeatherResources } from '../../utils'
import type { WeatherExtaInfo, weeklyReport } from '../../types'
import { ForecastLayout } from '../../components/forecast'

export const Forecast: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeekly(latitude, longitude)
  if (isLoading) return <div>Loading...</div>
  const daily = data?.daily
  const date = DateTime.local().setZone(data?.timezone)
  const { time, weathercode, temperature_2m_max: temperatureMax, temperature_2m_min: temperaturaMin } = daily as weeklyReport
  const weeklyItem = time.map((time, index) => {
    const tempDate = DateTime.fromISO(time)
    const isNow = date.day === tempDate.day
    const formatDay = tempDate.toFormat('EEEE, LLLL d')
    return {
      time: formatDay.toString(),
      isNow,
      temperatureMin: Math.round(temperaturaMin?.[index]),
      temperatureMax: Math.round(temperatureMax?.[index]),
      weatherExtraInfo: getWeatherResources(weathercode?.[index]) as WeatherExtaInfo
    }
  })
  return (
    <section>
      { isLoading && <div></div> }
      { isError && <div></div> }
      <div className='dark:bg-dark-main-500 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
        {weeklyItem.map(
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
