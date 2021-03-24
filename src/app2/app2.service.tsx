

import { Injectable } from '@nestjs/common';

import { App2View } from "./app2.view";

@Injectable()
export class AppService {
  getHello(): string {
    return App2View() ;
  }
}
