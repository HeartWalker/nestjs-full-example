
import React from 'react'
import { App1 } from "./app1";
import { ServerRender } from "../../common/server.render";

export let App1View = ({date}) => {
  return ServerRender(<App1 date={date}/>);
};
