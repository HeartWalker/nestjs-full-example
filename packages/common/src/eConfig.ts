

import path from 'path';
import { Glob, sync } from 'glob';
import { readJSON } from './readJSON';

let configPath = path.join(process.cwd(), 'config/config.json');

async function getConfig() {
  let config = {};

  let paths = sync(configPath, {});
  for (let p of paths) {
    let json = await readJSON(p);
    config = { ...config, ...json }
  }
  console.log("======")

  return config;

  // return new Glob(configPath, {}, (err, matches) => {
  //   console.log('"+++++++++"', matches);
  //   matches.map(v => {
  //     let json = readJSON(v)

  //   })
  //   config = { ...config, }
  // });
}




export let EConfig = getConfig();