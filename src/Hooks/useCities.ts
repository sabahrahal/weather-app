import { useQuery } from 'react-query'

export const useCities = (cityName: string): fetchCity | undefined => {
  const API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=es&format=json`
  const getCities = async (): Promise<fetchCity> => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Fetch data error')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  const { data: cities } = useQuery(['cityName', cityName], async (): Promise<fetchCity | undefined> => {
    if (cityName.length >= 2) {
      const response = await getCities()
      return { results: response.results }
    }
    return undefined
  })

  return cities
}
