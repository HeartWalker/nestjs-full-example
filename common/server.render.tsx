import React, { FC, ReactElement } from "react";
import { renderToNodeStream, renderToString } from "react-dom/server";
import { renderHtml } from "./renderHtml";
export function ServerRender(component: ReactElement) {
  return renderHtml(renderToString(component));
}


