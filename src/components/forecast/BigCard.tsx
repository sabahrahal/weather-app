import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { type Card } from '../../types'

export const BigCard: FC<Card> = ({ time, temperature, temperatureMin, temperatureMax, icon, description, isLink, searchResult, latitude, longitude }) => {
  const ParentElement = isLink ? Link : 'div'
  return (
    <ParentElement to={`/forecast/daily?search=${searchResult}&latitude=${latitude}&longitude=${longitude}`} className='flex order-first dark:bg-gray-600 rounded-lg p-2 col-span-2 md:col-span-3 items-center justify-between'>
      <div className='text-center'>
        <img src={icon} width={100} height={100} alt={`${description} icon`} />
        <span className='text-sm dark:text-dark-text-400'>{description}</span>
      </div>
      <div className='flex flex-col items-center'>
      { temperature === undefined
        ? <>
          <div className='flex items-center'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className='w-6 h-6 dark:text-dark-text-200'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            <span className='text-[60px] font-mono dark:text-dark-text-200'>{temperatureMin}</span>
            <sup className='text-[20px] dark:text-dark-text-300 font-mono'>°C</sup>
          </div>
          <div className='flex items-center'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-6 h-6 dark:text-dark-text-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <span className='text-[60px] font-mono dark:text-dark-text-200'>{temperatureMax}</span>
            <sup className='text-[20px] dark:text-dark-text-300 font-mono'>°C</sup>
          </div>
        </>
        : <div className='flex items-center'>
            <span className='text-[60px] font-mono dark:text-dark-text-200'>{temperature}°C</span>
            <sup className='text-[20px] dark:text-dark-text-300 font-mono'>°C</sup>
          </div>
      }
      <span className='dark:text-dark-text-300'>{time}</span>
      </div>
  </ParentElement>
  )
}
