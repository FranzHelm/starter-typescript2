const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app/main.ts',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
     template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'src/assets'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
