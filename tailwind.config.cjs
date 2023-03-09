/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fadeIn': {
          '0%': { opacity:0},
          '100%': { opacity:1} 
        },
        'fadeFromLeft': {
          '0%': {opacity: 0, left: '-100%'},
          '100%': {opacity: 1, left:'0%'},
        },
        'fadeFromRight': {
          '0%': {opacity: 0, right: '-100%'},
          '100%': {opacity: 1, right:'0%'},
        },
        'float': {
          '50%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0)'}
        },
        'shadowGrow': {
          '50%': {transform: 'scale(150%)'},
          '100%': {transform: 'scale(100%)'}
        }
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'fadeIn': 'fadeIn 5s ease',
        'fadeFromLeft': 'fadeFromLeft 2s ease-out',
        'fadeFromRight': 'fadeFromRight 2s ease-out',
        'floatSlow': 'float 3s infinite ease-in-out',
        'shadow': 'shadowGrow 3s infinite ease-in-out'
      },
    },
  },
  plugins: [],
}
