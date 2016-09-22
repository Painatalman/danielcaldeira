var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './scripts/main.js'),
  output: {
    path: path.resolve(__dirname, './public/scripts'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  }
};
