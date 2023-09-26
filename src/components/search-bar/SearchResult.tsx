import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Flag from 'react-world-flags'
import { type SearchCity } from '../../types'

interface Props {
  city: SearchCity
  searchResult: string
  setSearchResult: React.Dispatch<React.SetStateAction<string>>
  counterFetch: [number, React.Dispatch<React.SetStateAction<number>>]
  setCounterFetch: React.Dispatch<React.SetStateAction<[number, React.Dispatch<React.SetStateAction<number>>]>>
}

export const SearchResult: FC<Props> = ({ city: { latitude, longitude, country, country_code: countryCode, name, admin1: state }, searchResult, setSearchResult, setCounterFetch, counterFetch }) => {
  const navigate = useNavigate()
  const cityNavigate = (): void => {
    const newCounterValue = counterFetch[0] + 1
    const dispatch = counterFetch[1]
    setCounterFetch([newCounterValue, dispatch])
    navigate(`/forecast?search=${searchResult}&latitude=${latitude}&longitude=${longitude}`)
    setSearchResult('')
  }
  return (
    <div className='flex hover:bg-light-hover-background dark:hover:bg-dark-hover-background px-4 cursor-pointer last:rounded-b-lg' onClick={cityNavigate}>
       <Flag
        code={ countryCode }
        height={40}
        width={40}
       />
       <div className='flex flex-col pl-2 py-2'>
        <p className='text-sm font-bold'>{name}, <span className='font-normal'>{country}</span></p>
        <span className='text-sm font-mono'>{state}</span>
       </div>
    </div>
  )
}
