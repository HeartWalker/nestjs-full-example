

import { Configuration } from "webpack";
import AssetsPlugin from "assets-webpack-plugin";
import { APPS, APPSCONFIG, ROUTES } from '../config/apps.config'

const path = require('path');


// let entry = APPS.reduce(function (cur, arr) {
//   cur[arr.name] = path.resolve(__dirname, arr.path);
//   return cur
// }, {});
let entry = Object.values(ROUTES).reduce(function (cur, arr) {

  cur[arr] = path.resolve(__dirname, APPSCONFIG[arr].clientPath);
  return cur
}, {});
console.log(entry)

export let WebpackConfig: Configuration = {
  mode: "production",
  target: 'web',
  entry: entry,
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",

        }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new AssetsPlugin({
      path: path.join('dist/'),
      filename: "assets.json",
      removeFullPathAutoPrefix: true,
      prettyPrint: true,
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimizer: [],
    splitChunks: {
      chunks: "initial",
      name: "common",
      minSize: 20000,
      minRemainingSize: 0,
      //maxSize: 5,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          priority: -10,
          name: 'vendors'
        },
      },
    },
  },
};