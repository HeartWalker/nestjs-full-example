import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from '@packages/common';
import { Config, ConfigOptions, EnvConfig } from './interface';



@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;
  private readonly Config: Config = {};
  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {

    // let envFile = path.join(process.cwd(), options.path || 'config/config.json');
    // this.envConfig = JSON.parse(fs.readFileSync(envFile, "utf8"));

    options.paths.map(v => {
      let name = path.basename(v).split(".")[0];
      //console.log("vvvvvvvvvv======================================:", v, name)
      this.Config[name] = JSON.parse(fs.readFileSync(v, "utf8"));

    })


  }

  get() {
    return this.Config;
  }

  getConfig(name: string) {
    return this.Config[name];
  }
}
