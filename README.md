# d3-scratch
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
