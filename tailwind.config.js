/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'Helvetica', 'Arial','sans-serif']
    },
    extend: {
      colors: {
        'light-green': '#CCEE8E',
        'dark-green': '#3A451F'
      }
    },
  },
  plugins: [],
}

