/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-200': '#13aaa7',
        'primary-300': '#faa1a3',
        'primary-400': '#05b657',
        'primary-500': '#070dfa',
        'primary-600': '#faa1a3',
        'primary-700': '#82ded7',
        'secondary-200': '#388b86'
      }   
    }, 
  },
  plugins: [],
}
