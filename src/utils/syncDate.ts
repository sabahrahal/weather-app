import { DateTime } from 'luxon'
import type { WeatherExtaInfo, WeeklyItem, WeeklyReport, WeeklyWeather } from '../types'
import { getWeatherResources } from '.'

export const syncDate = (data: WeeklyWeather | undefined): WeeklyItem[] => {
  if (data === null || data === undefined) {
    return []
  }
  const daily = data.daily
  const { time, weathercode, temperature_2m_max: temperatureMax, temperature_2m_min: temperaturaMin } = daily as WeeklyReport
  const date = DateTime.local().setZone(data.timezone)
  const weeklyItems = time.map((time, index) => {
    const tempDate = DateTime.fromISO(time)
    const formatDay = tempDate.toFormat('EEEE, LLLL d').toString()
    const isNow = date.day === tempDate.day
    return {
      time: formatDay,
      isNow,
      temperatureMin: Math.round(temperaturaMin?.[index]),
      temperatureMax: Math.round(temperatureMax?.[index]),
      weatherExtraInfo: getWeatherResources(weathercode?.[index]) as WeatherExtaInfo
    }
  })
  return weeklyItems
}
