import { SetMetadata } from "@nestjs/common";
import { ROUTE } from "./metaData";

export function Route(route: string) {
  return (target, key, descriptor) => {
    Reflect.defineMetadata(ROUTE, route, descriptor.value);
    return descriptor;
  };
}