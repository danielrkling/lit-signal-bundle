export {
  LitElement,
  adoptStyles,
  supportsAdoptingStyleSheets,
  css,
  CSSResult,
  noChange,
  getCompatibleStyle,
  unsafeCSS,
  defaultConverter,
  notEqual,
  ReactiveElement,
  isServer,
  mathml,
  nothing,
} from "lit";
export * from "lit/async-directive.js";
export * from "lit/directive-helpers.js";
export * from "lit/directive.js";
export * from "lit/directives/async-append.js";
export * from "lit/directives/async-replace.js";
export * from "lit/directives/cache.js";
export * from "lit/directives/choose.js";
export * from "lit/directives/class-map.js";
export * from "lit/directives/guard.js";
export * from "lit/directives/if-defined.js";
export * from "lit/directives/join.js";
export * from "lit/directives/keyed.js";
export * from "lit/directives/live.js";
export * from "lit/directives/map.js";
export * from "lit/directives/range.js";
export * from "lit/directives/ref.js";
export * from "lit/directives/repeat.js";
export * from "lit/directives/style-map.js";
export * from "lit/directives/template-content.js";
export * from "lit/directives/until.js";
export * from "lit/directives/when.js";

import { LitElement, Part, nothing } from "lit";
import { AsyncDirective, directive } from "lit/async-directive.js";

class OnMount extends AsyncDirective {
  render(): unknown {
    return nothing;
  }

  update(_part: Part, [fn]: [(elem: Element) => void]): unknown {
    if (_part.type == 6) {
      queueMicrotask(() => fn(_part.element));
    }
    return nothing;
  }
}
export const onMount = directive(OnMount);

class OnDismount extends AsyncDirective {
  render(): unknown {
    return nothing;
  }
  elem: Element | undefined;
  fn: ((elem: Element) => void) | undefined;

  update(_part: Part, [fn]: [(elem: Element) => void]): unknown {
    if (_part.type == 6) {
      this.fn = fn;
      this.elem = _part.element;
    }
    return nothing;
  }

  protected disconnected(): void {
    this.fn?.(this.elem!);
  }
}
export const onDismount = directive(OnDismount);

export function LightDOM<T extends new (...args: any[]) => LitElement>(
  base: T
): T {
  return class extends base {
    protected createRenderRoot(): this {
      return this;
    }
  };
}
