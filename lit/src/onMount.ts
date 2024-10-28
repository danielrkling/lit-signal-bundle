import { Part, nothing } from "lit";
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
