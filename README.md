# d3-scratch
fatal git error: lost data - redirect to [recovered repo](https://github.com/DaNish808/audio-play)

approaching d3 from scratch

## Notes 
- on things learned

### webpack
1. npm i webpack webpack-cli -S
2. directory structure
```
- webpack.config.js
- server.js
- src
  |- index.js
- dist
  |- index.html
  |- style.css
```
3. webpack.config.js
```
module.exports = {
  entry: "./src",
  output: {
    filename: "main.js"
  },
  mode: "development",
  watch: true
}
```
4. webpack-dev-server
- `npm i -S webpack-dev-server`
```
// in webpack.config.js export
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true, 
  open: true  // open on "npm run start"
}
```
```
// in package.json
"scripts": {
  "start": "nodemon --watch webpack.config.js --exec \"webpack-dev-server --mode development\"",
  "build": "webpack --mode production"
},
```
5. import media files
- `npm install file-loader --save-dev`
```
// in webpack.config.js export
module: {
  rules: [
    {
      test: /\.(png|jpg|gif|mp3|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    }
  ]
}
```

### HOW HAVE I NOT HEARD OF requestAnimationFrame() UNTIL NOW!?!?!?
