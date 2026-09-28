const { plugins } = require("./postcss.config");

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}