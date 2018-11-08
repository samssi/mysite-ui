const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  favicon: "favicon.ico",
  filename: "index.html",
  inject: "body"
});

const DefinePluginConfig = new webpack.DefinePlugin({
  __AUTH_API_URL__: JSON.stringify("http://localhost:8100/api/v1/auth"),
  __CONTENT_API_URL__: JSON.stringify("http://localhost:8090/api/v1/content"),
  __IMAGES_API_URL__: JSON.stringify("http://localhost:8090/api/v1/content/public/static/images/")
});

module.exports = {
  mode: 'development',
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".eot", ".ttf", ".woff", ".woff2"]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/,loader: "style-loader!css-loader" },
      { test   : /\.(eot|ttf|woff|woff2)$/, loader : "file-loader" }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    DefinePluginConfig
  ]
}

