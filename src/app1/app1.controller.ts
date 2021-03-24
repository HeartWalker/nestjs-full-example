import { Controller, Get } from '@nestjs/common';
import { AppService } from './app1.service';
import { App1View } from './app1.view';

@Controller("app1")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    let date = await this.appService.getHello();

    return App1View({ date })
  }

}
