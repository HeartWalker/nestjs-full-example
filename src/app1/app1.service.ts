import { Injectable } from '@nestjs/common';
import { App1View } from './app1.view';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await 1;
    return new Date().getTime() + "";
  }
}
