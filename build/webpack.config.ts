import { Configuration } from "webpack";
import { APPS } from './apps.config'

const path = require('path');
var nodeExternals = require('webpack-node-externals');
let entry = APPS.reduce(function (cur, arr) {
  console.log(cur, arr, '1================')
  cur[arr.name] = path.resolve(__dirname, arr.path);
  return cur
}, {});



export let WebpackConfig: Configuration = {
  mode: 'development',
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [nodeExternals()],
};