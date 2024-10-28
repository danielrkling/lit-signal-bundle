import { Signal } from "signal-polyfill"

export function writableMemo<T>(computation: () => T, options?: Signal.Options<T>) {
    const signal = new Signal.State(computation(), options)
    const update = new Signal.Computed(() => {
        signal.set(computation())
    })
    let pending = false
    const watcher = new Signal.subtle.Watcher(() => {
        if (!pending) {
            pending = true
            queueMicrotask(() => {
                update.get()
                pending = false
            })
        }
        watcher.watch()
    })
    watcher.watch(update)
    update.get()
    return signal
}