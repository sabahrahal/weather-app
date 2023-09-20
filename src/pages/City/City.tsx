import { useLocation } from 'react-router-dom'
import { useWeather } from '../../Hooks/useWeather'
import { DateTime } from 'luxon'
import { DayCard } from './components/DayCard'
import { getWeatherResources } from '../../utils'
import queryString from 'query-string'
import type { WeatherExtaInfo, WeatherElement } from '../../types'

export const City: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeather(latitude, longitude)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading data</div>
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
      weatherIcon: getWeatherResources(weathercode?.[index], formatHour) as WeatherExtaInfo
    }
  })
  return (
    <section className='dark:bg-dark-main-500 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 rounded-lg py-4 px-4'>
      {weatherItems?.map(
        weatherItem => <DayCard
        key={weatherItem.time}
        time={weatherItem.time}
        isNow={weatherItem.isNow}
        temperature={weatherItem.temperature}
        WeatherExtaInfo={weatherItem.weatherIcon}/>)}
    </section>
  )
}
