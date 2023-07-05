/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      title: ['Bebas Neue', 'Helvetica', 'Arial','sans-serif'],
      body: ['Oswald','sans-serif'],
    },
    extend: {
      colors: {
        'light-green': '#CCEE8E',
        'dark-green': '#3A451F',
        'tan-green': '#F0F3E5',
        'prime-blue': '#0000FF',
        'prime-yellow': '#FFFF00',
        'prime-red': '#FF0000'
      }
    },
  },
  plugins: [],
}

