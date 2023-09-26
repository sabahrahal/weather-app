
# Weather App

This application allows you to check the weather forecast for the location of your choice.

It displays a list of suggested cities (as entered in a search form) and when one of them is clicked, the app provides a 7-day forecast and current weather features, such as: temperature, minimum and maximum temperature, cloudiness.

By default, it runs in dark mode, but allows the user to change the theme to dark mode.



### Tech Stack

This project was build with [Vite](https://vitejs.dev/guide/).

**Core technologies** 
* React 
* React-Router 
* TanStack 
* TailwindCSS 


### Screenshots

![App Screenshot](/public/screenshot.jpg)


### API

> This project features data from [Open Meteo](https://open-meteo.com/) and [Geonames API](http://www.geonames.org/)

### Run Locally

Clone the project

```bash
  git clone https://github.com/sabahrahal/weather-app
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

To view it in your browser, open http://localhost:5173
### Scripts

To start the app in `development` mode run
```bash
npm run dev
```

`build`
```bash
npm build
```

`lint`
```
npm lint
```

`test`
```
npm test
```



### styles

You can customize the theme colors in the `tailwind.config.js` file

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Sora']
      },
      textColor:{
          //Customize text colors
        'dark-text-500': '#9194a3',
        'dark-text-400': '#797c8b',
        'dark-text-300': '#b2b5bf',
        'dark-text-200': '#e8e9eb',
        'dark-text-100': '#fafafb',
        'dark-text-link': '#76bedd',
        'light-text-500': '#3e4144',
        'light-text-400': '#3e4144',
        'light-text-300': '#3e4144',
        'light-text-200': '#3e4144',
        'light-text-100': '#3e4144',
        'light-text-link': '#ec6e4c'
      },
      colors:{
          //Customize the theme backgrounds and buttons
        'dark-page-background': '#3f4251',
        'dark-hover-background': '#434a51', 
        'dark-body-background': '#474d5d',
        'dark-modal-background': '#2e2f33',
        'dark-btn-background': '#76bedd',
        'light-body-background': '#c9eafd',
        'light-page-background': '#8bd3f8',
        'light-hover-background': '#5ab2da',
        'light-modal-background': '#5ab2da',
        'light-btn-background': '#ec6e4c',
        'toggle-buttom': '#76bedd',
      },
    },
  },
  plugins: [],
}
```

You can also change the icons in file `./utils/WMO.TS` , example: 

```javascript
0: {
    day: {
      description: 'Sunny',
      image: 'http://openweathermap.org/img/wn/01d@2x.png' //change the day icon
    },
    night: {
      description: 'Clear',
      image: 'http://openweathermap.org/img/wn/01n@2x.png' //change night icon
    }
  },
```


