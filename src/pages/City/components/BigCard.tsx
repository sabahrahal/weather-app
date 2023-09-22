import { type FC } from 'react'

interface Props {
  time: string
  temperature: number
  icon: string
  description: string
}

export const BigCard: FC<Props> = ({ time, temperature, icon, description }) => {
  return (
    <div className='flex order-first dark:bg-gray-600 rounded-lg p-2 col-span-2 md:col-span-4 items-center justify-between'>
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
  )
}
