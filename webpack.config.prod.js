const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  favicon: "favicon.ico",
  filename: "index.html",
  inject: "body"
});

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin();

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify("production")
  },
  __AUTH_API_URL__: JSON.stringify(setupAuthApi()),
  __CONTENT_API_URL__: JSON.stringify(setupContentApi()),
  __IMAGES_API_URL__: JSON.stringify(setupImagesApi())
});

function setupAuthApi() {
  return process.env.APP_CONTEXT == "production" ? "https://mysite.samssi.com/api/v1/auth" : "http://localhost:8100/api/v1/auth";
}

function setupContentApi() {
  return process.env.APP_CONTEXT == "production" ? "https://mysite.samssi.com/api/v1/content" : "http://localhost:8090/api/v1/content";
}

function setupImagesApi() {
  return process.env.APP_CONTEXT == "production" ? "https://mysite.samssi.com/api/v1/content/public/static/images/" : "http://localhost:8090/api/v1/content/public/static/images/";
}

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".eot", ".ttf", ".woff", ".woff2"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/,loader: "style-loader!css-loader" },
      { test   : /\.(eot|ttf|woff|woff2)$/, loader : "file-loader" }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    DefinePluginConfig,
    UglifyJsPluginConfig
  ]
}

