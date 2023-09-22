import { type FC } from 'react'
import { type WeatherExtaInfo } from '../../../types'
import { BigCard, SmallCard } from '.'

interface Props {
  time: string
  isNow: boolean
  temperature: number
  WeatherExtaInfo: WeatherExtaInfo
}

export const HourCard: FC<Props> = ({ time, isNow, temperature, WeatherExtaInfo: { icon, description } }) => {
  return (
    <>
    {
      isNow
        ? <BigCard
          time={time}
          temperature={temperature}
          icon={icon}
          description={description}
          />
        : <SmallCard
          time={time}
          temperature={temperature}
          icon={icon}
          description={description}
          />
    }
    </>
  )
}
