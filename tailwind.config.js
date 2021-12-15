const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-cl': 'radial-gradient(ellipse at center left, var(--tw-gradient-stops))', 
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
      }
    },
    colors: {
      purples: {
        red: '#5E044B',
        DEFAULT: '#160258'
      },
      lavender: '#f7f5ff',
      'lavender-blue': '#C2ADFF',
      green: '#0FAE96',
      revolver: '#2e1539',
      pinkswan: '#B6B6B6',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
