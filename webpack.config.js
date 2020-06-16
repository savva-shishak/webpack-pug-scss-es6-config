const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
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
        use: [{
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
                sourceMap: true
            }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    }),
    ...pages('index', 'colors', 'textfields', 'fonts'),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/images', to: './assets/images' },
      { from: './src/assets/fonts', to: './assets/fonts' },
    ])
  ]
};

function pages() {
  return [].map.call(arguments, page =>  new HtmlWebPackPlugin({
    template: "./src/template/pages/" + page + ".pug",
    filename: "./" + page + ".html"
  }))
}