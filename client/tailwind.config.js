import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#F4A30B',
        background: '#000000',
        backgroundAccent:'#525252',
        purple:'#c084fc',
        red:'#f87171'
      }
    },
  },
  plugins: [daisyui],
}

