import { type FC } from 'react'

interface Props {
  date: string
  temperatureMin: number
  temperatureMax: number
  icon: string
  description: string
}

export const SmallCard: FC<Props> = ({ date, temperatureMin, temperatureMax, icon, description }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center dark:bg-gray-600 rounded-lg p-2'>
        <img src={icon} width={80} height={80} alt={`${description} icon`} />
        <span className='text-xs dark:text-dark-text-400'>{description}</span>
        <div className='flex items-center justify-center'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className='w-6 h-6 dark:text-dark-text-200'>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            <span className='text-[40px] font-mono dark:text-dark-text-200'>{temperatureMin}</span>
            <sup className='text-[10px] dark:text-dark-text-300 font-mono'>°C</sup>
        </div>
        <div className='flex items-center justify-center'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-6 h-6 dark:text-dark-text-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <span className='text-[40px] font-mono dark:text-dark-text-200'>{temperatureMax}</span>
            <sup className='text-[10px] dark:text-dark-text-300 font-mono'>°C</sup>
        </div>
        <span className='text-sm dark:text-dark-text-300'>{date}</span>
    </div>
  )
}
