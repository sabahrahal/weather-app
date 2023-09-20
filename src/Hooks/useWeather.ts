import { type UseQueryResult, useQuery } from 'react-query'
import { type Weather } from '../types'
import { getWeather } from '../APIs/api'

export const useWeather = (latitude: string, longitude: string): UseQueryResult<Weather> => {
  return useQuery({
    queryKey: ['weather', latitude],
    queryFn: async () => await getWeather(latitude, longitude),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: Infinity
  })
}
