/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        'dark-text-link': '#76bedd',
        'light-text-500': '#3e4144',
        'light-text-400': '#3e4144',
        'light-text-300': '#3e4144',
        'light-text-200': '#3e4144',
        'light-text-100': '#3e4144',
        'light-text-link': '#ec6e4c'
      },
      colors:{
        'dark-page-background': '#3f4251',
        'dark-hover-background': '#434a51', 
        'dark-body-background': '#474d5d',
        'dark-modal-background': '#2e2f33',
        'dark-btn-background': '#76bedd',
        'dark-btn-background-hover': '#5f9db8',
        'light-body-background': '#c9eafd',
        'light-page-background': '#8bd3f8',
        'light-hover-background': '#5ab2da',
        'light-modal-background': '#5ab2da',
        'light-btn-background': '#ec6e4c',
        'light-btn-background-hover': '#bd563a',
        'toggle-buttom': '#76bedd',
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