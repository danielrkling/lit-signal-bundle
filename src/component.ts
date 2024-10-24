import { Signal } from 'signal-polyfill';
import { directive } from 'lit/directive.js';
import { AsyncDirective, PartInfo } from 'lit/async-directive.js';
import { noChange } from 'lit';

export function component<T>(fn: (initialProps: T) => (props: T) => any) {
  return directive(
    class extends AsyncDirective {
      props: Signal.State<T>;
      pending: boolean;
      watcher: Signal.subtle.Watcher;
      template: Signal.Computed<any>;
      renderFn?: (props: T) => any;

      constructor(_partInfo: PartInfo) {
        super(_partInfo);
        this.props = new Signal.State(undefined as T, {
          equals: shallowEqualObjects,
        });
        this.template = new Signal.Computed(() =>
          this.renderFn?.(this.props.get())
        );
        this.pending = false;
        this.watcher = new Signal.subtle.Watcher(() => {
          if (!this.pending) {
            this.pending = true;
            queueMicrotask(() => {
              this.pending = false;
              this.setValue(this.template.get());
              this.watcher.watch(this.template);
            });
          }
        });
      }

      render(props: T) {
        this.props.set(props);
        if (!this.renderFn) {
          Signal.subtle.untrack(() => {
            this.renderFn = fn(props);
          });
          this.watcher.watch(this.template);
          return this.template.get();
        }

        return noChange;
      }

      disconnected() {
        console.log('dis');
        this.watcher.unwatch(this.template);
      }

      reconnected() {
        console.log('rec');
        this.watcher.watch(this.template);
      }
    }
  );
}

function shallowEqualObjects<T>(objA: T, objB: T): boolean {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];

    if (
      objA[key] !== objB[key] ||
      !Object.prototype.hasOwnProperty.call(objB, key)
    ) {
      return false;
    }
  }

  return true;
}
