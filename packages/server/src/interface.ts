export interface EnvConfig {
  [key: string]: string;
}

export interface Config {
  [key: string]: EnvConfig;
}

export interface ConfigOptions {
  paths: string[];
}
