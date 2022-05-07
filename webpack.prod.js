const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    strawberry: './src/strawberry.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // Works out of the box so no need to specify.
    // useful for CDN or if serving static files via express
    publicPath: '/static/'
  },
  mode: 'production',
  optimization: {
    // keeps common code in separate bundle. Reduces duplication of library codes inside bundle
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            // Specific babel plugins can be loaded as follows:
            // plugins: [ '@babel/plugin-proposal-class-properties' ]
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      template: 'src/page-template.hbs',
      title: 'Hello World',
      description: 'hello world page',
    }),
    new HtmlWebpackPlugin({
      filename: 'strawberry.html',
      chunks: ['strawberry'],
      template: 'src/page-template.hbs',
      title: 'Strawberry',
      description: 'Strawberry page',
    }),
  ],
};