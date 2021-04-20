import { getApp, getServerEntry } from './getApp';
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

let tsJSON = {
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": false,
    "rootDir": "./"
  },
  "files": []
}

let entry = getServerEntry();

let tsCP = path.resolve(__dirname, `../tsconfig.prd.json`);


//let tsJSON = JSON.parse(fs.readFileSync(tsCP));

tsJSON.files = [entry];


let data = JSON.stringify(tsJSON);
fs.writeFileSync(tsCP, data);

exec(`tsc -b ${tsCP}`, {}, (err, stdout, stderr) => {

  if (err) {
    console.log("build server error:", err);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

