import webpack from 'webpack';
import webpackDevServer from "webpack-dev-server";
import { BuildConfig } from '../config/build.config';
import { WebpackConfig } from './webpack.config.dev';


const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};


webpackDevServer.addDevServerEntrypoints(WebpackConfig, options);
const compiler = webpack(WebpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(BuildConfig.clientPort, 'localhost', (err, stats) => {
  console.log("==============：")
  if (err) {
    console.log(err)
  } else {
    console.log(stats)
  }
  console.log(`dev server listening on port ${BuildConfig.clientPort}`);
});


