import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { Route } from '../../common/Route';

import { APPSCONFIG, ROUTES } from '../../config/apps.config';
import { AppService } from './app1.service';
import { RenderReact } from '../../common/renderReact';
import { App1 } from './app1';
//import { RouteInterceptor } from '../../common/routeInterceptor';

//@UseInterceptors(RouteInterceptor)
@Controller(APPSCONFIG.app1.name)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @RenderReact(App1)
  @Route(ROUTES.APP1)
  async getHello() {
    let date = await this.appService.getHello();

    return { date }
  }

}
