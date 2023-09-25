import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { type Card } from '../../types'

export const SmallCard: FC<Card> = ({ time, temperature, temperatureMin, temperatureMax, icon, description, isLink, searchResult, latitude, longitude }) => {
  const ParentElement = isLink ? Link : 'div'
  return (
    <ParentElement to={`/forecast/daily?search=${searchResult}&latitude=${latitude}&longitude=${longitude}`} className='flex flex-col items-center justify-center text-center bg-light-body-background dark:bg-gray-600 bg-light-400 rounded-lg p-2 drop-shadow-md'>
        <img src={icon} width={80} height={80} alt={`${description} icon`} />
        <span className='text-xs text-light-text-300 dark:text-dark-text-300'>{description}</span>
        {
          temperature === undefined
            ? <>
                <div className='flex items-center justify-center'>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-dark-text-300 text-light-text-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                  <span className='text-[40px] font-mono dark:text-dark-text-100'>{temperatureMax}</span>
                  <sup className='text-[10px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
                </div>
                <div className='flex items-center justify-center'>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 text-light-text-300 dark:text-dark-text-300'>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                  <span className='text-[40px] font-mono text-light-text-300 dark:text-dark-text-200'>{temperatureMin}</span>
                  <sup className='text-[10px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
                </div>
            </>
            : <div className='flex items-center justify-center'>
                <span className='text-[40px] font-mono text-light-text-100 dark:text-dark-text-100'>{temperature}</span>
                <sup className='text-[10px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
              </div>
        }

        <span className='text-sm text-light-text-300 dark:text-dark-text-300'>{time}</span>
    </ParentElement>
  )
}
