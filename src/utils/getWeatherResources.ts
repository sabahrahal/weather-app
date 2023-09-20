import { WMO } from '.'
import { type WeatherExtaInfo } from '../types'
import { formatHour } from './formatHour'

export const getWeatherResources = (code: number, hour: string): WeatherExtaInfo | undefined => {
  const format = formatHour(hour)
  const wmoAcces = WMO[code]
  if (typeof wmoAcces === 'object' && wmoAcces !== null && format in wmoAcces) {
    return {
      icon: wmoAcces[format as 'day' | 'night'].image,
      description: wmoAcces[format as 'day' | 'night'].description
    }
  }

  return undefined
}
