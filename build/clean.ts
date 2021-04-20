
import { sync } from 'glob';
const fse = require('fs-extra')


let paths = [
  "./dist",
  "./tsconfig.prd.json",
  ...sync("./packages/**/lib", {}),
  ...sync("./packages/**/tsconfig.tsbuildinfo", {}),
];


paths.map(async (p) => {
  fse.remove(p, err => {
    if (err) return console.error(err)
    console.log("remove ", p, 'success!')
  })
})