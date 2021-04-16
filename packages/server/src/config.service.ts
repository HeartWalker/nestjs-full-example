import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from '@packages/common';
import { ConfigOptions, EnvConfig } from './interface';



@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    //const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    //const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    let envFile = path.join(process.cwd(), options.path || 'config/config.json');
    this.envConfig = JSON.parse(fs.readFileSync(envFile, "utf8"));

  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getConfig() {
    return this.envConfig;
  }
}
