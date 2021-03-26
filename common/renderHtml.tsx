import { Config } from "../config/config";

let getScripts = () => {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:${Config.clientPort}`;
  }
};


export let renderHtml = (content) => {

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
  <script src="${getScripts()}"></script>
  </body>
  </html>`;
};
