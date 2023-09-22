import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type Weather } from '../types'
import { getWeather } from '../APIs/api'

export const useWeather = (latitude: string, longitude: string): UseQueryResult<Weather> => {
  return useQuery({
    queryKey: ['weather', latitude],
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    queryFn: () => getWeather(latitude, longitude),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: Infinity
  })
}
