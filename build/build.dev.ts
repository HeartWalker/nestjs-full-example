import webpack from 'webpack';
import webpackDevServer from "webpack-dev-server";
import { Config } from '../config/config';

import { WebpackConfig } from './webpack.config.dev';


const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(WebpackConfig, options);
const compiler = webpack(WebpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(Config.clientPort, 'localhost', (err) => {
  if (err) {
    console.log(err)
  } else {
    //console.log(stats)
  }
  console.log(`dev server listening on port ${Config.clientPort}`);
});



