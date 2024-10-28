import { LitElement } from "lit";

export function LightDOM<T extends new (...args: any[]) => LitElement>(
  base: T
): T {
  return class extends base {
    protected createRenderRoot(): this {
      return this;
    }
  };
}
