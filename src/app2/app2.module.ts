import { Module } from '@nestjs/common';
import { AppController } from './app2.controller';
import { AppService } from './app2.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class App2 {}
