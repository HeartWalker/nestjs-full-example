import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await 1;
    return new Date().getTime() + "";
  }
}
