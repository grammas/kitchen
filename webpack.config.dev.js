const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3110',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      filename: 'index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3110,
    hot: true,
    progress: true,
    historyApiFallback: true,
  },
};
