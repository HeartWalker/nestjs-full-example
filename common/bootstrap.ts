import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { RouteInterceptor } from './routeInterceptor';


export async function bootstrap(appModule: any) {
  const app = await NestFactory.create<NestExpressApplication>(appModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new RouteInterceptor());
  await app.listen(3000);
}



