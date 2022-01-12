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
      green: '#2EC4B6',
      darkGreen: '#25A194',
      white: '#FFFFFF',
      transparent: 'transparent',
      black: colors.black,
      gray: colors.gray,
      greens: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
  ]
};
