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
        return `http://localhost:${Config.clientPort}/${routeName}.js`;
      } else {
        
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
