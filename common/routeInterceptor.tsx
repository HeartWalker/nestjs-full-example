import {
  Injectable,
  Inject,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import React, { ComponentType } from "react";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { RENDER_REACT, ROUTE } from "./metaData";
import { ServerRender } from "./server.render";

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  constructor() {}

  intercept(context: ExecutionContext, next: CallHandler) {
    let hander = context.getHandler();
    let RenderReact: ComponentType = Reflect.getMetadata(RENDER_REACT, hander);
    let routeName = Reflect.getMetadata(ROUTE, hander);
    //console.log("====:", RenderReact, routeName, hander);

    return next.handle().pipe(
      map((data) => {
        return ServerRender(<RenderReact {...data} />);
      })
    );
  }
}
