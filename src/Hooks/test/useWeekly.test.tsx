import * as ReactQuery from '@tanstack/react-query'
import { renderWithProviders } from '../../setupTest'
import { useWeekly } from '..'
import * as API from '../../APIs/api'

const renderWrapper = (latitude: string, logitude: string): any => {
  const apiSpy = jest.spyOn(API, 'getWeeklyWeather').mockResolvedValue({} as any)
  const useQuerySpy = jest.fn()
  jest.spyOn(ReactQuery, 'useQuery').mockImplementation(useQuerySpy)

  renderWithProviders(useWeekly(latitude, logitude))
  const [[passedParams]] = useQuerySpy.mock.calls

  return { useQuerySpy, apiSpy, passedParams }
}

describe('useSearchBar hook', () => {
  it('calls the query with the expected parameters', () => {
    const { useQuerySpy } = renderWrapper('223232', '-3232323')
    expect(useQuerySpy).toHaveBeenCalledTimes(1)
    expect(useQuerySpy).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ['weeklyWeather', '223232'],
        queryFn: expect.any(Function),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false
      })
    )
  })

  it('executes the expected query function', () => {
    const { passedParams, apiSpy } = renderWrapper('223232', '-3232323')
    passedParams.queryFn()
    expect(apiSpy).toHaveBeenCalledTimes(1)
  })
})
