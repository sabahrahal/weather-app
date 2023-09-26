export const mockDataDaily = {
  time: '4:00 PM',
  temperature: 20,
  temperatureMin: 10,
  temperatureMax: 22,
  icon: 'http://openweathermap.org/img/wn/01n@2x.png',
  description: 'Cloudy',
  isLink: false,
  searchResult: 'madrid',
  latitude: '40.4165',
  longitude: '-3.70256'
}

export const mockDataWeekly = {
  time: 'Tuesday, September 26',
  temperatureMin: 10,
  temperatureMax: 22,
  icon: 'http://openweathermap.org/img/wn/01n@2x.png',
  description: 'Cloudy',
  isLink: true,
  searchResult: 'madrid',
  latitude: '40.4165',
  longitude: '-3.70256'
}

export const cityDetailsResponse = {
  geonames: [
    {
      adminCode1: '29',
      lng: '-3.70256',
      distance: '0.00043',
      geonameId: 3117735,
      toponymName: 'Madrid',
      countryId: '2510769',
      fcl: 'P',
      population: 3255944,
      countryCode: 'ES',
      name: 'Madrid',
      fclName: 'city, village,...',
      adminCodes1: {
        ISO3166_2: 'MD'
      },
      countryName: 'Spain',
      fcodeName: 'capital of a political entity',
      adminName1: 'Madrid',
      lat: '40.4165',
      fcode: 'PPLC'
    }
  ]
}
