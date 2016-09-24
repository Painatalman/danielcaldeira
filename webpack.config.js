var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './scripts/main.js'),
  output: {
    path: path.resolve(__dirname, './public/scripts'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  eslint: {
    configFile: './.eslintrc.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'scripts')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'scripts')
        ],
        loader: 'eslint'
      }
    ]
  }
};
