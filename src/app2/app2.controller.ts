import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { Route } from '../../common/Route';
import { RenderReact } from '../../common/renderReact';
import { APPSCONFIG, ROUTES } from '../../config/apps.config';
import { AppService } from './app2.service';
import { App2 } from './app2';
//import { RouteInterceptor } from '../../common/routeInterceptor';

//@UseInterceptors(RouteInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(APPSCONFIG[ROUTES.APP2].routePath)
  @Route(ROUTES.APP2)
  @RenderReact(App2)
  getHello(): string {
    //return this.appService.getHello();
    return ""
  }
}
