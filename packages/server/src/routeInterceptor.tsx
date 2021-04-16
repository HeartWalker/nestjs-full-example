import {
  Injectable,
  Inject,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
//import { EConfig } from "@packages/common";
//import { BuildConfig } from "../../../config/build.config";
import React, { ComponentType } from "react";

import { renderToString } from "react-dom/server";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { RENDER_REACT, ROUTE } from "@packages/common";
import { renderHtml } from "./renderHtml";
import { ConfigService } from "./config.service";

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  private configService;
  constructor(configService: ConfigService) {
    this.configService = configService.getConfig();
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    let hander = context.getHandler();
    let RenderReact: ComponentType = Reflect.getMetadata(RENDER_REACT, hander);
    let routeName = Reflect.getMetadata(ROUTE, hander);
    //console.log("====:", RenderReact, routeName, hander);
    let getScripts = () => {
      if (process.env.NODE_ENV === "development") {
        return [
          `http://localhost:${this.configService.clientPort}/${routeName}.js`,
        ];
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
          return `${this.configService.CDN}/${script}.`;
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
