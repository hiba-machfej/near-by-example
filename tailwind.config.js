module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))'
      }, 
    },
    colors: {
      'purples': {
        red: '#5E044B',
        DEFAULT: '#160258',
      }, 
      'lavender': '#f7f5ff',
      'lavender-blue': '#C2ADFF',
      'green': '#0FAE96',
      'white': '#FFFFFF',
      'revolver':'#2e1539',
      'pinkswan':'#B6B6B6'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
