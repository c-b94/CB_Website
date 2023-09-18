import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,ts}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'pc': '768px',
      // => @media min-width {768px}
      'tablet': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'phone': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
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

