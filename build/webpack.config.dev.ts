import { Configuration } from "webpack";
import { APPS } from '../config/apps.config'

const path = require('path');
let entry = APPS.reduce(function (cur, arr) {
  cur[arr.name] = path.resolve(__dirname, arr.path);
  return cur
}, {});

console.log(entry)

export let WebpackConfig: Configuration = {
  mode: 'development',
  target: 'web',
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
};