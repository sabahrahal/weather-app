import * as ReactQuery from '@tanstack/react-query'
import { renderWithProviders } from '../../setupTest'
import { useSearchBar } from '..'
import * as API from '../../APIs/api'

const renderWrapper = (cityName: string): any => {
  const apiSpy = jest.spyOn(API, 'getSearchBarResults').mockResolvedValue({} as any)
  const useQuerySpy = jest.fn()
  jest.spyOn(ReactQuery, 'useQuery').mockImplementation(useQuerySpy)

  renderWithProviders(useSearchBar(cityName))
  const [[passedParams]] = useQuerySpy.mock.calls

  return { useQuerySpy, apiSpy, passedParams }
}

describe('useSearchBar hook', () => {
  it('calls the query with the expected parameters', () => {
    const { useQuerySpy } = renderWrapper('Madrid')
    expect(useQuerySpy).toHaveBeenCalledTimes(1)
    expect(useQuerySpy).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ['searchBar', 'Madrid'],
        queryFn: expect.any(Function),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false,
        cacheTime: 0
      })
    )
  })

  it('executes the expected query function', () => {
    const { passedParams, apiSpy } = renderWrapper('Madrid')
    passedParams.queryFn()
    expect(apiSpy).toHaveBeenCalledTimes(1)
  })
})
