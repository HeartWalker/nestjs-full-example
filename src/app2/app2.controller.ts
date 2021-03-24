import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app2.service';
import { App2View } from './app2.view';
@Controller("app2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return App2View()
  }
}
