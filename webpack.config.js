const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackInjector = require('html-webpack-injector');

const [pages, entry] = require("./pages")

module.exports = {
  devtool: "source-map",
  entry: {
    ...entry,
    styles_utils: './src/styles/main.scss'
  },
  output: {
    filename: "./[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
          },
          {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                data: '@import "src/styles/utils/index.scss";'
              }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    }),
    ...pages,
    new HtmlWebpackInjector(),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new MiniCssExtractPlugin({
      filename: "./[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};
