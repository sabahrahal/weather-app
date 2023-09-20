import { type UseQueryResult, useQuery } from 'react-query'
import { type WeeklyWeather } from '../types'
import { getWeather } from '../APIs/api'

export const useWeekly = (latitude: string, longitude: string): UseQueryResult<WeeklyWeather> => {
  return useQuery({
    queryKey: ['weeklyWeather', latitude],
    queryFn: async () => await getWeather(latitude, longitude),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: Infinity
  })
}
