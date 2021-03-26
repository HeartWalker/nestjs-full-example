import React, { ComponentType, createElement, FC, ReactElement } from "react";
import { renderToNodeStream, renderToString } from "react-dom/server";
import { renderHtml } from "./renderHtml";
export function ServerRender(Component: ReactElement) {
  return renderHtml(renderToString(Component));
}
