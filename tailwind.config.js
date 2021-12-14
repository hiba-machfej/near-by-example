module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'purples': {
        red: '#5E044B',
        blue: '#22043D',
        DEFAULT: '#160258'
      }, 
      'white': '#FFFFFF'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
