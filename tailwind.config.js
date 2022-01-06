const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom center, var(--tw-gradient-stops))', 
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
      lightLavender: '#ede8fe',
      // green: '#0AD3FF',
      green: '#2EC4B6',
      darkGreen: '#25A194',
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
