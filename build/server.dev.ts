import { getApp, getServerEntry } from "./getApp";

const nodemon = require('nodemon');



nodemon({ script: getServerEntry() }).on('start', function () {
  console.log('nodemon started');
  console.log('server started');
}).on('crash', function () {
  console.log('script crashed for some reason');
});
