import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type SearchCitiesResponse } from '../types'
import { getSearchBarResults } from '../APIs/api'

export const useSearchBar = (cityName: string): UseQueryResult<SearchCitiesResponse> => {
  return useQuery({
    queryKey: ['searchBar', cityName],
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    queryFn: () => getSearchBarResults(cityName),
    enabled: cityName.trim().length >= 2,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    cacheTime: 0
  })
}
