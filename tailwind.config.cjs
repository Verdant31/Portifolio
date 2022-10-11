/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#333333',
          900: 'rgb(36, 36, 36)',
        },
      },
    },
  },
  plugins: [],
}
