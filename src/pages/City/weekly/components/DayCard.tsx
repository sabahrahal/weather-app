import { type FC } from 'react'
import { type WeatherExtaInfo } from '../../../../types'
import { BigCard, SmallCard } from './'

interface Props {
  date: string
  isToday: boolean
  temperatureMin: number
  temperatureMax: number
  weatherExtraInfo: WeatherExtaInfo
}

export const DayCard: FC<Props> = ({ date, isToday, temperatureMin, temperatureMax, weatherExtraInfo: { icon, description } }) => {
  return (
    <>
    {
      isToday
        ? <BigCard
            date={date}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            icon={icon}
            description={description}
          />
        : <SmallCard
            date={date}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            icon={icon}
            description={description}
           />
    }
    </>
  )
}
