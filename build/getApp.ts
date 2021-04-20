import { APPSCONFIG, ROUTES } from "../config/apps.config";
const path = require('path');



export let entryClient = Object.values(ROUTES).reduce(function (cur, arr) {

  cur[arr] = path.resolve(__dirname, APPSCONFIG[arr].clientPath);
  return cur
}, {});

export function getArgv() {
  //console.log("process.argv",process.argv)

  return process.argv.slice(2);
}

export function getApp() {
  return getArgv()[0];
}

export function getClientEntry(): { [key: string]: string } {
  let app = getApp();
  if (entryClient[app]) {
    entryClient = { [app]: entryClient[app] }
  }

  return entryClient;
}

export function getServerEntry(): string {
  let script = path.resolve(__dirname, "../src/main.ts");

  let app = getApp();
  if (Object.values(ROUTES).includes(app)) {
    script = path.resolve(__dirname, `../src/${app}/main.ts`);
  }

  return script;
}
