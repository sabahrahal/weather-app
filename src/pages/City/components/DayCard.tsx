import { type FC } from 'react'
import { type WeatherExtaInfo } from '../../../types'

interface Props {
  time: string
  isNow: boolean
  temperature: number
  WeatherExtaInfo: WeatherExtaInfo
}

export const DayCard: FC<Props> = ({ time, isNow, temperature, WeatherExtaInfo: { icon, description } }) => {
  return (
    <>
    {
      isNow
        ? <div className='flex order-first dark:bg-gray-600 rounded-lg p-2 col-span-4 items-center justify-between'>
            <div className='text-center'>
              <img src={icon} width={100} height={100} alt={`${description} icon`} />
              <span className='text-sm dark:text-dark-text-400'>{description}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[60px] font-mono dark:text-dark-text-200'>{temperature}°C</span>
              <div className='flex items-center justify-between'>
                  <span className='dark:text-dark-text-300'>{time}</span>
              </div>
            </div>
          </div>
        : <div className='flex flex-col items-center dark:bg-gray-600 rounded-lg p-2'>
            <img src={icon} width={70} height={70} alt={`${description} icon`} />
            <span className='text-xs dark:text-dark-text-400'>{description}</span>
            <span className='text-[40px] font-mono dark:text-dark-text-200'>{temperature}°C</span>
            <span className='text-sm dark:text-dark-text-300'>{time}</span>
          </div>
    }
    </>
  )
}
