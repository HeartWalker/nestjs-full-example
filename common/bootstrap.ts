import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RouteInterceptor } from './routeInterceptor';


export async function bootstrap(appModule: any) {
  const app = await NestFactory.create<NestExpressApplication>(appModule);
  app.useGlobalInterceptors(new RouteInterceptor());
  await app.listen(3000);
}



