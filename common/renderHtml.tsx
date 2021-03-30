import React from "react";
import serialize from "serialize-javascript";

export let renderHtml = ({
  content,
  scripts,
  data,
}: {
  content: string;
  scripts: string[];
  data: Object;
}) => {
  let scriptHtml = scripts.reduce((arr, cur) => {
    return arr + `<script src="${cur}"></script>`;
  }, "");
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
  ${scriptHtml}
  </body>
  </html>`;
};
