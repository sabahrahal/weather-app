import { DateTime } from 'luxon'
import { getWeatherResources } from '../utils'
import type { WeatherExtaInfo, WeatherItem, Weather } from '../types'

export const syncHour = (data: Weather | undefined): WeatherItem[] => {
  if (data === null || data === undefined) {
    return []
  }

  const cityTime = DateTime.local().setZone(data.timezone)
  const { temperature_2m: temperature, time, weathercode } = data.hourly

  // Filtra las horas posteriores a la hora actual
  const currentHourIndex = time.findIndex((hour) => {
    const tempHour = DateTime.fromISO(hour)
    return cityTime.hour <= tempHour.hour
  })

  if (currentHourIndex === -1) {
    // No se encontraron horas futuras, devuelve un arreglo vacío
    return []
  }

  // Buscamos el día en el arreglo time
  const FindCurrentDay = time.findIndex((hour) => {
    const tempHour = DateTime.fromISO(hour)
    return cityTime.day <= tempHour.day
  })
  // Lo transformamos en fecha para despues en el map darle formato y devolverlo
  const currentDay = DateTime.fromISO(time[FindCurrentDay])

  // Limita los resultados a las próximas 24 horas
  const endIndex = Math.min(currentHourIndex + 24, time.length)
  const filteredTime = time.slice(currentHourIndex, endIndex)
  const filteredTemperature = temperature.slice(currentHourIndex, endIndex)
  const filteredWeathercode = weathercode.slice(currentHourIndex, endIndex)

  const weatherItems = filteredTime.map((hour, index) => {
    const tempHour = DateTime.fromISO(hour)
    const isNow = cityTime.hour === tempHour.hour
    const formatHour = tempHour.toFormat('h:mm a')

    return {
      time: formatHour.toString(),
      date: currentDay.toFormat('EEEE, LLLL d').toString(),
      isNow,
      temperature: Math.round(filteredTemperature[index] ?? 0),
      weatherExtraInfo: getWeatherResources(filteredWeathercode[index], formatHour) as WeatherExtaInfo
    }
  })

  return weatherItems
}
