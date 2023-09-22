import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useCityDetails } from '../../../Hooks/useCityName'

export const CityBanner: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  const { data } = useCityDetails(latitude, longitude)
  const cityDetails = data
  return (
    <div>CityBanner </div>
  )
}
