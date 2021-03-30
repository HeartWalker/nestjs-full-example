import {
  Injectable,
  Inject,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Config } from "../config/config";
import React, { ComponentType } from "react";

import { renderToString } from "react-dom/server";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { RENDER_REACT, ROUTE } from "./metaData";
import { renderHtml } from "./renderHtml";

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  constructor() {}

  intercept(context: ExecutionContext, next: CallHandler) {
    let hander = context.getHandler();
    let RenderReact: ComponentType = Reflect.getMetadata(RENDER_REACT, hander);
    let routeName = Reflect.getMetadata(ROUTE, hander);
    //console.log("====:", RenderReact, routeName, hander);
    let getScripts = () => {
      if (process.env.NODE_ENV === "development") {
        return [`http://localhost:${Config.clientPort}/${routeName}.js`];
      } else {
        const asstes = require("../assets.json");
        let scripts = Object.entries(asstes)
          .filter((v) => {
            let name = v[0];
            if (
              name.includes(routeName) ||
              name.includes("common") ||
              name.includes("vendors")
            ) {
              return true;
            }
            return false;
          })
          .map((v) => {
            return v[1]["js"];
          });
        return scripts.map((script) => {
          return `${Config.CDN}/${script}.`;
        });
      }
    };

    return next.handle().pipe(
      map((data) => {
        return renderHtml({
          content: renderToString(<RenderReact {...data} />),
          scripts: getScripts(),
          data: data,
        });
      })
    );
  }
}
