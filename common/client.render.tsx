import React, { FC, ReactElement } from "react";
import { hydrate } from "react-dom";

export function clientRender(component: ReactElement) {
  let App: FC = () => {
    return <>{component}</>;
  };

  hydrate(<App />, document.getElementById("app"));
}
