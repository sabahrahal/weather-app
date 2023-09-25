import { type FC } from 'react'
import { Link } from 'react-router-dom'
import Flag from 'react-world-flags'
import type { Card } from '../../types'
import { useCityDetails } from '../../Hooks'

export const BigCard: FC<Card> = ({ time, date, temperature, temperatureMin, temperatureMax, icon, description, isLink, searchResult, latitude, longitude }) => {
  const ParentElement = isLink ? Link : 'div'
  const { data, isLoading } = useCityDetails(latitude, longitude)
  const { name, countryCode } = data || {} // eslint-disable-line
  return (
    <ParentElement to={`/forecast/daily?search=${searchResult}&latitude=${latitude}&longitude=${longitude}`} className='flex order-first flex-col xs:flex-row bg-light-body-background dark:bg-gray-600 rounded-lg bg-light-400 p-2 col-span-2 md:col-span-3 items-center justify-between drop-shadow-md'>
      { isLoading && <div>Loading...</div> }
      <div className='flex flex-col items-center xs:items-start xs:w-1/3'>
        <Flag
          code={ countryCode }
          height={100}
          width={100}
          className='mb-4 rounded-lg'
        />
        <span className='text-light-text-200 dark:text-dark-text-200'>{ name }</span>
        {
          date === undefined
            ? <span className='text-light-text-200 dark:text-dark-text-300 text-sm'>{ time }</span>
            : <span className='text-light-text-200 dark:text-dark-text-300 text-sm'>{ date }</span>
        }
      </div>
      <div className='flex flex-col items-center xs:w-1/3'>
      { temperature === undefined
        ? <>
            <div className='flex items-center'>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-light-text-300 dark:text-dark-text-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              <span className='text-[60px] font-mono dark:text-dark-text-100'>{temperatureMax}</span>
              <sup className='text-[20px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
            </div>
            <div className='flex items-center justify-center'>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 text-light-text-300 dark:text-dark-text-300'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              <span className='text-[60px] font-mono dark:text-dark-text-100 text-light-text-100'>{temperatureMin}</span>
              <sup className='text-[20px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
            </div>
          </>
        : <div className='flex flex-col items-center justify-center'>
            <div className='mb-4 flex items-center justify-center'>
              <span className='text-[60px] font-mono dark:text-dark-text-200'>{temperature}</span>
              <sup className='text-[20px] text-light-text-300 dark:text-dark-text-300 font-mono'>°C</sup>
            </div>
            <span className='dark:text-dark-text-300 text-light-text-300 text-sm'>{time}</span>
          </div>
      }
      </div>
      <div className='xs:w-1/3 text-center xs:text-right'>
        <img className='ml-auto' src={icon} width={100} height={100} alt={`${description} icon`} />
        <span className='text-sm dark:text-dark-text-300 text-light-text-300'>{description}</span>
      </div>
  </ParentElement>
  )
}
