const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    app1: "./src/app1/app1.client.tsx",
    app2: "./src/app2/app2.client.tsx",
  },
  output: {
    filename: "[name].js",
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
          name: 'commons'
        },
      },
    },
  },
};
