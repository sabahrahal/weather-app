import { type FC } from 'react'
import Flag from 'react-world-flags'

interface Props {
  city: City
}

export const SearchResult: FC<Props> = ({ city }) => {
  return (
    <div className='flex dark:hover:bg-dark-main-100 px-4'>
       <Flag
        code={ city.country_code }
        height={40}
        width={40}
       />
       <div className='flex flex-col pl-2 py-2'>
        <p className='text-sm font-bold'>{city.name}, <span className='font-normal'>{city.country}</span></p>
        <span className='text-sm font-mono'>{city.admin1}</span>
       </div>
    </div>
  )
}
