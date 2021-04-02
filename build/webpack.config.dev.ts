import { Configuration } from "webpack";
import { getClientEntry } from "./getApp";

const path = require('path');


export let WebpackConfig: Configuration = {
  mode: 'development',
  target: 'web',
  entry: getClientEntry(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public'),
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