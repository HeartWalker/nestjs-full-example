import React from 'react'
import { App2 } from "./app2";
import { ServerRender } from "../../common/server.render";

export let App2View = () => {
  return ServerRender(<App2/>);
};
