import webpack from 'webpack';

import { WebpackConfig } from './webpack.config';


const compiler = webpack({
  ...WebpackConfig
  // [配置对象](/configuration/)
});

compiler.run((err, stats) => { // [Stats Object](#stats-object)
  // ...
  if(err){
    console.log(err)
  }else {
    //console.log(stats)
  }
});
// const watching = compiler.watch({
//   // [watchOptions](/configuration/watch/#watchoptions) 示例
//   aggregateTimeout: 300,
//   poll: undefined
// }, (err, stats) => { // [Stats Object](#stats-object)
//   // 这里打印 watch/build 结果...
//   if(err){
//     console.log(err)
//   }
//   //console.log(stats);
// });
