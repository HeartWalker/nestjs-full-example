import React, { FC } from "react";
import { ComponentType } from "react";
import { hydrate } from "react-dom"; 


export function bootstrap(component: ComponentType) {


  let App: FC = () => {
    return (
      <div></div>
    );
  };

  hydrate(<App />, document.getElementById("app"));
}