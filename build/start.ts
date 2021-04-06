


const concurrently = require("concurrently");

import { getApp } from "./getApp";

let app = getApp() || "";

concurrently([
  { command: `yarn run dev:client ${app}` },
  { command: `yarn run dev:server ${app}` },
]);