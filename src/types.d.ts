export interface CityDetails {
  adminCode1: string
  lng: string
  distance: string
  geonameId: number
  toponymName: string
  countryId: string
  fcl: string
  population: number
  countryCode: string
  name: string
  fclName: string
  adminCodes1: {
    ISO3166_2: string
  }
  countryName: string
  fcodeName: string
  adminName1: string
  lat: string
  fcode: string
}

export interface CityDetailsResponse {
  geonames: GeoName[]
}

export interface SearchCity {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  timezone: string
  population: number
  country_id: number
  country: string
  admin1: string
}

export interface SearchCitiesResponse {
  results: SearchCity[]
}

export interface Weather {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: {
    time: string
    temperature_2m: string
    weathercode: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    weathercode: number[]
  }
}

export interface WeatherItem {
  time: string
  date: string
  isNow: booelan
  temperature: number
  weatherExtraInfo: weatherExtraInfo
}

export interface WeatherExtaInfo {
  icon: string
  description: string
}

export interface WeeklyWeather {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: {
    time: string
    weathercode: string
    temperature_2m_max: string
    temperature_2m_min: string
  }
  daily: {
    time: string[]
    weathercode: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

export interface WeeklyReport {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
}

export interface WeeklyItem {
  time: string
  isNow: booelan
  temperatureMin: number
  temperatureMax: number
  weatherExtraInfo: WeatherExtaInfo
}

export interface Icon {
  width: string
  height: string
  color: string
}

export interface Card {
  time: string
  date?: string
  temperature?: number | undefined
  temperatureMin?: number
  temperatureMax?: number
  icon: string
  description: string
  isLink: boolean
  searchResult: string
  latitude: string
  longitude: string
}
