import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Flag from 'react-world-flags'
import { type SearchCity } from '../../types'

interface Props {
  city: SearchCity
  searchResult: string
  setSearchResult: React.Dispatch<React.SetStateAction<string>>
}

export const SearchResult: FC<Props> = ({ city, searchResult, setSearchResult }) => {
  const navigate = useNavigate()
  const cityNavigate = (): void => {
    navigate(`/forecast?search=${searchResult}&latitude=${city.latitude}&longitude=${city.longitude}`)
    setSearchResult('')
  }
  return (
    <div className='flex dark:hover:bg-dark-main-400 px-4 cursor-pointer last:rounded-b-lg' onClick={cityNavigate}>
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
