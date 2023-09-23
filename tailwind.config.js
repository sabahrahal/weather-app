/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs' : '420px'
      },
      fontFamily:{
        'sans': ['Sora']
      },
      textColor:{
        'dark-text-500': '#9194a3',
        'dark-text-400': '#797c8b',
        'dark-text-300': '#b2b5bf',
        'dark-text-200': '#e8e9eb',
        'dark-text-100': '#fafafb',
        'dark-text-link': '#76bedd'
      },
      colors:{
        'dark-main-500': '#3f4251',
        'dark-main-400': '#434a51',
        'dark-main-200': '#373b47', 
        'dark-main-100': '#474d5d'
      },
      maxWidth: {
				'sm-custom': '540px',
				'md-custom': '720px', 
				'lg-custom': '960px'
			  },
    },
    container: {
      center: true
    }
  },
  plugins: [],
}