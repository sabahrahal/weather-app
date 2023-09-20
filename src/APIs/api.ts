import type { Weather, FetchCity, WeeklyWeather } from '../types'

const API_URL = {
  GET_CITIES: (cityName: string) => `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=es&format=json`,
  GET_WEATHER: (latitude: string, longitude: string) => `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&timezone=auto&forecast_days=1`,
  GET_WEEKLY_WEATHER: (latitude: string, longitude: string) => `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
}

export const getCities = async (cityName: string): Promise<FetchCity> => {
  try {
    const response = await fetch(API_URL.GET_CITIES(cityName))
    if (!response.ok) {
      throw new Error('Fetch data error')
    }
    const data = await response.json()
    return { results: data.results }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const getWeather = async (latitude: string, longitude: string): Promise<Weather> => {
  try {
    const response = await fetch(API_URL.GET_WEATHER(latitude, longitude))
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

export const getWeeklyWeather = async (latitude: string, longitude: string): Promise<WeeklyWeather> => {
  try {
    const response = await fetch(API_URL.GET_WEEKLY_WEATHER(latitude, longitude))
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
