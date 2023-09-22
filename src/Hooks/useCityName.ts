import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type CityDetails } from '../types'
import { getCityDetails } from '../APIs/api'

export const useCityDetails = (latitude: string, longitude: string): UseQueryResult<CityDetails> => {
  return useQuery({
    queryKey: ['city'],
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    queryFn: () => getCityDetails(latitude, longitude),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false
  })
}
