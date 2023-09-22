import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useWeekly } from '../../../Hooks/useWeekly'
import { DateTime } from 'luxon'
import { getWeatherResources } from '../../../utils'
import { DayCard } from './components/DayCard'
import type { WeatherExtaInfo, weeklyReport } from '../../../types'

export const Weekly: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data, isLoading, isError } = useWeekly(latitude, longitude)
  if (isLoading) return <div>Loading...</div>
  const daily = data?.daily
  const date = DateTime.local().setZone(data?.timezone)
  const { time, weathercode, temperature_2m_max: temperatureMax, temperature_2m_min: temperaturaMin } = daily as weeklyReport
  const weeklyItem = time.map((time, index) => {
    const tempDate = DateTime.fromISO(time)
    const isToday = date.day === tempDate.day
    const formatDay = tempDate.toFormat('EEEE, LLLL d')
    return {
      date: formatDay.toString(),
      isToday,
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
          day => <DayCard
          key={day.date}
          date={day.date}
          isToday={day.isToday}
          temperatureMin={day.temperatureMin}
          temperatureMax={day.temperatureMax}
          weatherExtraInfo={day.weatherExtraInfo}
        />)}
      </div>
    </section>
  )
}
