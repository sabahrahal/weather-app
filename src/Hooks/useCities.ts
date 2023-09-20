import { useQuery, type UseQueryResult } from 'react-query'
import { type FetchCity } from '../types'
import { getCities } from '../APIs/api'

export const useCities = (cityName: string): UseQueryResult<FetchCity> => {
  return useQuery({
    queryKey: ['cityName', cityName],
    queryFn: async () => await getCities(cityName),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: Infinity
  })
}
