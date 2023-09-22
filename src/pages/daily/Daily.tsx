import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useWeather } from '../../Hooks'
import { DateTime } from 'luxon'
import { getWeatherResources } from '../../utils'
import { ForecastLayout } from '../../components/forecast'
import type { WeatherExtaInfo, WeatherElement } from '../../types'

export const Daily: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeather(latitude, longitude)
  if (isLoading) return <div>Loading...</div>
  const hourlyData = data?.hourly
  const cityHour = DateTime.local().setZone(data?.timezone)
  const { temperature_2m: temperature, time, weathercode } = hourlyData as WeatherElement
  const weatherItems = time?.map((hour, index) => {
    const tempHour = DateTime.fromISO(hour)
    const isNow = cityHour.hour === tempHour.hour
    const formatHour = tempHour.toFormat('h:mm a')
    return {
      time: formatHour.toString(),
      isNow,
      temperature: Math.round(temperature?.[index]),
      weatherExtraInfo: getWeatherResources(weathercode?.[index], formatHour) as WeatherExtaInfo
    }
  })
  return (
    <section>
        { isLoading && <div></div> }
        { isError && <div></div> }
        <div className='dark:bg-dark-main-500 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
        {weatherItems.map(
          day => <ForecastLayout
            key={day.time}
            time={day.time}
            isNow={day.isNow}
            temperature={day.temperature}
            weatherExtraInfo={day.weatherExtraInfo}
        />)}
        </div>
  </section>
  )
}
