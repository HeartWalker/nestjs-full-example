

import fs from 'fs';
import { sync } from 'glob';



const readJSON = function (path: string): Promise<JSON> {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', function (error, data) {
      if (error) return reject(error);
      resolve(JSON.parse(data));
    });
  });
};

export const asyncReadJSON = async function (path: string) {
  let obj = {};
  let paths = sync(path, {});
  for (let p of paths) {
    let json = await readJSON(p);
    obj = { ...obj, ...json };
  }

  return obj;
};

