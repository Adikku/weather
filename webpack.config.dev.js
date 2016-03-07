var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //debug: true,
  devtool: 'cheap-module-eval-source-map',
  //devtool: '#eval-source-map',
  context: path.join(__dirname, 'app'),
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './main'
  ],

  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/js/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],

  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader") }
  	]
  }
};
