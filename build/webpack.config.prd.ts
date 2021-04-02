

import { Configuration } from "webpack";
import AssetsPlugin from "assets-webpack-plugin";
import { entryClient, getClientEntry } from "./getApp";

const path = require('path');


export let WebpackConfig: Configuration = {
  mode: "production",
  target: 'web',
  entry: entryClient,
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist/public"),
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
      fileTypes: ['js', 'jsx', "ts", "tsx"],
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