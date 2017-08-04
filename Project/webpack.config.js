var config = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
   devtool: "source-map",
    resolve: {
      extensions: ['.js', '.jsx']
    },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        loader: "babel-loader",
        query:
        {
          presets:['react', 'es2015']
        }
      }
    ]
  },
  externals: {
    "jquery": "jQuery"
  }
}

module.exports = config;