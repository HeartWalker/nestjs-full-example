import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from '@packages/common';

import { ConfigService } from './config.service';
import { ConfigOptions } from './interface';

@Module({})
export class ConfigModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
