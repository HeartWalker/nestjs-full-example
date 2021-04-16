import * as fs from 'fs';
import * as path from 'path';

let cons = fs.readFileSync(path.join(process.cwd(), 'config/config.json'),'utf8');
export let Config = JSON.parse(cons);