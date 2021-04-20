

import { sync } from 'glob';
import { getApp } from './getApp';
const fse = require('fs-extra')

let paths = sync("./packages/**/package.json", {});
let main = getApp();
paths.map(async (p) => {

  try {
    const packageObj = await fse.readJson(p);

    fse.writeJson(p, { ...packageObj, main: "./" + main }, { spaces: 2 });
    console.log(p, "main = ", main)
  } catch (err) {
    console.error(err)
  }
})