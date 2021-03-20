
import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { App1 } from './app1/app1.module';
import { App2 } from './app2/app2.module';
import { bootstrap } from './bootstrap';

@Module({
  imports: [App1, App2],
})
class AppModule { }


bootstrap(AppModule);