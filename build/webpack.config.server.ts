import { Configuration } from "webpack";

const path = require("path");
var nodeExternals = require("webpack-node-externals");


let entry = "../src/main.ts"
export let WebpackConfig: Configuration = {
  mode: "production",
  target: "node",
  entry: path.resolve(__dirname, entry),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: [nodeExternals()],
};
