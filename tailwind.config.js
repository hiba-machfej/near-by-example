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
      'white': '#FFFFFF',
      'teal':'#0d9488',
      'revolver':'#2e1539',
      'pinkswan':'#B6B6B6'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
