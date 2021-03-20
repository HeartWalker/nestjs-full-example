import { Controller, Get } from '@nestjs/common';
import { AppService } from './app1.service';

@Controller("app1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
