
import { Module } from '@nestjs/common';
import { bootstrap } from '@packages/server';
import { App1 } from './app1/app1.module';
import { App2 } from './app2/app2.module';

@Module({
  imports: [App1, App2],
})
class AppModule { }


bootstrap(AppModule);