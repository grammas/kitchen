const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: { app: './src/index.tsx' },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      filename: 'index.html',
      favicon: 'public/favicon.ico'
    }),
    new CopyPlugin([
      { from: `${__dirname}/public/404.html`, to: '404.html' },
      { from: `${__dirname}/public/CNAME`, to: 'CNAME', toType: 'file' },
    ])
  ],
  optimization: {
    runtimeChunk: { name: 'app' },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const pkg = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${pkg.replace('@', '')}`;
          },
        },
      },
    },
  },
};
