import { NestFactory } from '@nestjs/core';


export async function bootstrap(appModule: any) {
  const app = await NestFactory.create(appModule);
  await app.listen(3000);
}



