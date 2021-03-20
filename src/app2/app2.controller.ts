import { Controller, Get } from '@nestjs/common';
import { AppService } from './app2.service';

@Controller("app2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
