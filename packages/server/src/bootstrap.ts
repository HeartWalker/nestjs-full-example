import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { RouteInterceptor } from './routeInterceptor';


export async function bootstrapModule(appModule: any) {
  const app = await NestFactory.create<NestExpressApplication>(appModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new RouteInterceptor(configService));
  await app.listen(configService.getConfig().serverPort);
}


@Module({
  imports: [],

})
class BaseModule { }



export function bootstrap(arrModule: any[], options = { path: "config/config.json" }) {

  let AppModule = {
    module: BaseModule,
    imports: [ConfigModule.register(options), ...arrModule],
  }
  return bootstrapModule(AppModule)
}

