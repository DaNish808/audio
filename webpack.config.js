const path = require('path');

module.exports = {
  entry: "./src",
  output: {
    filename: "main.js"
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true
  }
}