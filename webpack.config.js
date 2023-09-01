const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/modules/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Course Navigator',
      template: './src/index.html',
      favicon: "./src/assets/favicon.png"
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      { 
        test: /\.mpeg$/,
        type: 'asset/resource',
      },

    ]
  },
  optimization: {
    runtimeChunk: 'single',
  },
};