import { Configuration, DefinePlugin } from "webpack";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

import { getClientEntry } from "./getApp";

const path = require('path');

let outPath = '../dist/public';

export let WebpackConfig: Configuration = {
  mode: 'development',
  target: 'web',
  entry: getClientEntry(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, outPath),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new DefinePlugin({
      'process.env.target': JSON.stringify('web')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: [{
          loader: 'ts-loader',
        }]
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};