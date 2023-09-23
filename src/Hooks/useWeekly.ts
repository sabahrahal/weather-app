import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type WeeklyWeather } from '../types'
import { getWeeklyWeather } from '../APIs/api'

export const useWeekly = (latitude: string, longitude: string): UseQueryResult<WeeklyWeather> => {
  return useQuery({
    queryKey: ['weeklyWeather', latitude],
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    queryFn: () => getWeeklyWeather(latitude, longitude),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: Infinity
  })
}
