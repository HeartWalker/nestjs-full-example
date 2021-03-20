import { Module } from '@nestjs/common';
import { AppController } from './app1.controller';
import { AppService } from './app1.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class App1 {}
