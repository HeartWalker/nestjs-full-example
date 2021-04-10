

import fs from 'fs';

export let readJSON = (path: string): Promise<JSON> => {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  })

}


