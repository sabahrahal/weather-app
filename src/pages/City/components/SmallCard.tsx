import { type FC } from 'react'

interface Props {
  time: string
  temperature: number
  icon: string
  description: string
}

export const SmallCard: FC<Props> = ({ time, temperature, icon, description }) => {
  return (
    <div className='flex flex-col items-center dark:bg-gray-600 rounded-lg p-2'>
        <img src={icon} width={70} height={70} alt={`${description} icon`} />
        <span className='text-xs dark:text-dark-text-400'>{description}</span>
        <span className='text-[40px] font-mono dark:text-dark-text-200'>{temperature}°C</span>
        <span className='text-sm dark:text-dark-text-300'>{time}</span>
    </div>
  )
}
