const path = require('path');

module.exports = {
  entry: "./src",
  output: {
    filename: "main.js"
  },
  mode: "development",
  watch: true,
  devServer: {
    open: true
  }
}