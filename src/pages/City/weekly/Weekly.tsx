import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const Weekly: React.FC = () => {
  const { search } = useLocation()
  const { latitude, longitude } = queryString.parse(search) as { latitude: string, longitude: string }
  return (
    <div>weekly</div>
  )
}
