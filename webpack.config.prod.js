var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './website/main'
  ],
  output: {
    path: path.join(__dirname, 'website', 'assets', 'js'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname, 'website', 'assets')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};