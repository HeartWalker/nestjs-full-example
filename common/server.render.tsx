import React, { FC } from "react";
import { ComponentType } from "react";
import { hydrate,  } from "react-dom";
import { renderToNodeStream, renderToString } from "react-dom/server";

export function ServerRender(component: ComponentType) {

  return html(renderToString(component));
}
let html = (content) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
</head>
<body>
  ${content}
</body>
</html>`;
