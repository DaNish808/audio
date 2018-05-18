const path = require('path');

module.exports = {
  entry: "./src",
  output: {
    filename: "main.js"
  },
  mode: "development",
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true
  }
}