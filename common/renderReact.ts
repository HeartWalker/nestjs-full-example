import { ComponentType, FC, ReactElement } from "react";
import { RENDER_REACT } from "./metaData";


export function RenderReact(template: ComponentType) {
  return (target, key, descriptor) => {
    Reflect.defineMetadata(RENDER_REACT, template, descriptor.value);
    return descriptor;
  };
}