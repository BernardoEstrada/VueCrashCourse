const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    // './**/*.html',
    // './**/*.vue',
    // './**/*.js',
    // './**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
