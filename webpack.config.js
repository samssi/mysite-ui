const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const DefinePluginConfig = new webpack.DefinePlugin({
  __AUTH_API_URL__: JSON.stringify(setupAuthApi()),
  __CONTENT_API_URL__: JSON.stringify(setupContentApi())
});

function setupAuthApi() {
  return process.env.NODE_ENV == "production" ? "https://mysite.samssi.com/auth/api/v1" : 'http://localhost:8100/api/v1';
}

function setupContentApi() {
  return process.env.NODE_ENV == "production" ? "https://mysite.samssi.com/content/api/v1" : "http://localhost:8090/api/v1";
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.eot', '.ttf', '.woff', '.woff2']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/,loader: 'style-loader!css-loader' },
      { test   : /\.(eot|ttf|woff|woff2)$/, loader : 'file-loader' }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    DefinePluginConfig
  ]
}

