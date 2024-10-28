import { Part, nothing } from "lit";
import { AsyncDirective, directive } from "lit/async-directive.js";

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
