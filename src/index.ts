import { Signal } from "signal-polyfill";
export { Signal };

export function signal<T>(initialValue: T, options?: Signal.Options<T>) {
  return new Signal.State(initialValue, options);
}
export function memo<T>(computation: () => T, options?: Signal.Options<T>) {
  return new Signal.Computed(computation, options);
}

export { SignalArray } from "signal-utils/array";
export { SignalObject } from "signal-utils/object";
export { SignalMap } from "signal-utils/map";
export { SignalSet } from "signal-utils/set";

// export { load } from "signal-utils/async-data";
export { effect } from "signal-utils/subtle/microtask-effect";
export { query} from './query.js'
export {asyncMemo, AsyncMemo} from './asyncMemo.js'
export { Form} from './form.js'


export function writableMemo<T>(computation: () => T, options?: Signal.Options<T>){
  const signal = new Signal.State(computation(),options)
  const update = new Signal.Computed(()=>{
    signal.set(computation())
  })
  let pending = false
  const watcher = new Signal.subtle.Watcher(()=>{
    if (!pending){
      pending = true
      queueMicrotask(()=>{
        pending=false
        update.get()      
      })    
    }
    watcher.watch()
  })
  watcher.watch(update)
  update.get()
  return signal
}