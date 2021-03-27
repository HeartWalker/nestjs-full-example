import { Configuration } from "webpack";
import { APPS,APPSCONFIG,ROUTES } from '../config/apps.config'

const path = require('path');
// let entry = Object.values(APPSCONFIG).reduce(function (cur, arr) {
  
//   cur[arr.name] = path.resolve(__dirname, arr.path);
//   return cur
// }, {});

let entry = Object.values(ROUTES).reduce(function (cur, arr) {
  
  cur[arr] = path.resolve(__dirname, APPSCONFIG[arr].clientPath);
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