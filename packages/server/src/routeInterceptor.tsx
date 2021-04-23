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
    this.configService = configService.get();
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    let hander = context.getHandler();
    let RenderReact: ComponentType = Reflect.getMetadata(RENDER_REACT, hander);
    let routeName = Reflect.getMetadata(ROUTE, hander);
    //console.log("====:", RenderReact, routeName, hander);

    let getAssets = (type: "js" | "css") => {
      if (process.env.NODE_ENV === "development") {
        return [
          `http://localhost:${this.configService.config.clientPort}/${routeName}.${type}`,
        ];
      } else {
        const asstes = this.configService.assets;
        //console.log("asssets==================", asstes);
        let assteArr = Object.entries(asstes)
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
            return v[1][type];
          });
        return assteArr.filter((v) => {
          return v && `${this.configService.config.CDN}/${v}`;
        });
      }
    };

    return next.handle().pipe(
      map((data) => {
        return renderHtml({
          content: renderToString(<RenderReact {...data} />),
          scripts: getAssets("js"),
          data: data,
          styles: getAssets("css"),
        });
      })
    );
  }
}
