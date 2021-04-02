import webpack from 'webpack';

import { WebpackConfig } from './webpack.config.prd';


const compiler = webpack({
  ...WebpackConfig,
  // [配置对象](/configuration/)
});

compiler.run((err, stats) => { // [Stats Object](#stats-object)
  // ...
  if (err) {
    console.log(err)
  } else {
    //console.log(stats)
  }
});

