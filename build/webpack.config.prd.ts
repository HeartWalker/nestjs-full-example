
import { Configuration, DefinePlugin } from "webpack";
import AssetsPlugin from "assets-webpack-plugin";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

import { entryClient, getClientEntry } from "./getApp";


let outPath = path.resolve(__dirname, "../dist") //'../dist/public';
let staticPath = "public";

export let WebpackConfig: Configuration = {
  mode: "production",
  target: 'web',
  entry: entryClient,
  output: {
    filename: staticPath + "/[name].[contenthash].js",
    path: outPath,
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
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outPath,
            },
          },
          'css-loader',
        ],
      }

    ],
  },
  plugins: [
    new CopyPlugin({
      patterns:
        [
          {
            context: "config",
            from: "*.json",
            to: "config",
          },
        ]
    }),
    new DefinePlugin({
      'process.env.target': JSON.stringify('web')
    }),
    new AssetsPlugin({
      path: path.join('dist/config'),
      fileTypes: ['js', 'jsx', "ts", "tsx", "css"],
      filename: "assets.json",
      removeFullPathAutoPrefix: true,
      prettyPrint: true,
      includeAllFileTypes: false
    }),
    new MiniCssExtractPlugin({
      filename: staticPath + '/[name].[contenthash].css',
      chunkFilename: "[name].[contenthash].css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
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