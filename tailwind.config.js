/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'Helvetica', 'Arial','sans-serif'],
      josefin: ['Josefin Sans','sans-serif'],
    },
    extend: {
      colors: {
        'light-green': '#CCEE8E',
        'dark-green': '#3A451F',
        'tan-green': '#F0F3E5'
      }
    },
  },
  plugins: [],
}

