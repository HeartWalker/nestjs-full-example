import React from "react";
import serialize from "serialize-javascript";

export let renderHtml = ({ content, scripts, data }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
  </head>
  <body>
  <div id="app">${content}</div>
  <script>window.INITIAL_STATE=${serialize(data, {
    isJSON: true,
  })}</script>
  <script src="${scripts}"></script>
  </body>
  </html>`;
};
