import React, { ComponentType, FC, ReactElement } from "react";
import { hydrate } from "react-dom";
declare let window: {
  INITIAL_STATE: Object;
};

export function clientRender(Component:ComponentType<any>) {
  let data = window.INITIAL_STATE;
  // let App = () => {
  //   return <Component {...data}/>;
  // };

  hydrate(<Component {...data}/>, document.getElementById("app"));
}
