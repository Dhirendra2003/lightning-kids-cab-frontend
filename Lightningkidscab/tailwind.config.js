/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "#ff9e00",
       "secondary-hover": "#ff9e00",
       "input-label":'#212121'
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}