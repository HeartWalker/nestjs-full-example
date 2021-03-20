const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
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
  optimization: {
    minimizer: [],
    splitChunks: {
      chunks: "initial",
      minSize: 20000,
      minRemainingSize: 0,
      //maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          priority: -10,
        },
      },
    },
  },
  //externals: [nodeExternals()],
};
