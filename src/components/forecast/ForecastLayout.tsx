import { type FC } from 'react'
import { type WeatherExtaInfo } from '../../types'
import { BigCard, SmallCard } from './'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

interface Props {
  time: string
  date?: string
  isNow: boolean
  temperature?: number
  temperatureMin?: number
  temperatureMax?: number
  weatherExtraInfo: WeatherExtaInfo
}

export const ForecastLayout: FC<Props> = ({ time, date, isNow, temperature, temperatureMin, temperatureMax, weatherExtraInfo: { icon, description } }) => {
  const { search } = useLocation()
  const { search: searchResult, latitude, longitude } = queryString.parse(search) as { search: string, latitude: string, longitude: string }
  return (
    <>
    {
      isNow
        ? <BigCard
            time={time}
            date={date}
            temperature={temperature}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            icon={icon}
            description={description}
            isLink={temperature === undefined}
            searchResult={searchResult}
            latitude={latitude}
            longitude={longitude}
          />
        : <SmallCard
            time={time}
            temperature={temperature}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            icon={icon}
            description={description}
            isLink={temperature === undefined}
            searchResult={searchResult}
            latitude={latitude}
            longitude={longitude}
           />
    }
    </>
  )
}
