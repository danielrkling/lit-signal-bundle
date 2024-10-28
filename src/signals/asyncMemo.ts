import { Signal } from "signal-polyfill";

export type AsyncMemoFetch<T> = () => Promise<T>;
export type AsyncMemoOptions<T> = {
  initialValue: T;
  staleTime: number;
};

export type AsyncMemoStatus =
  | "initial"
  | "stale"
  | "resolved"
  | "rejected"
  | "fetching";

export function asyncMemo<T>(
  fn: () => Promise<T>,
  options: AsyncMemoOptions<T>
) {
  return new AsyncMemo<T>(fn, options);
}

export class AsyncMemo<T> {
  #fn: () => Promise<T>;

  staleTime: number | undefined;

  #computed: Signal.Computed<this>;
  constructor(fn: () => Promise<T>, options?: AsyncMemoOptions<T>) {
    this.#fn = fn;
    this.#value = new Signal.State(options?.initialValue);

    this.staleTime = options?.staleTime;
    this.#computed = new Signal.Computed(() => {
      this.refresh();
      return this;
    });
  }

  async refresh() {
    this.#status.set("fetching");
    try {
      const value = await this.#fn();
      this.setValue(value);
    } catch (e) {
      this.#status.set("rejected");
      this.#error.set(e);
    }
  }

  #value: Signal.State<T|undefined>;
  get value() {
    if (this.#status.get() === "stale") {
      this.refresh();
    }
    this.#computed.get();
    return this.#value.get();
  }

  setValue(value: T) {
    this.#status.set("resolved");
    this.#value.set(value);
    this.#error.set(null);
    this.#startStaleTimer();
  }

  #error = new Signal.State<unknown>(null);
  get error() {
    return this.#status.get() === "rejected" ? this.#error.get() : null;
  }

  #status = new Signal.State<AsyncMemoStatus>("initial");
  get status() {
    this.#computed.get();
    return this.#status.get();
  }

  get isPending() {
    const status = this.status;
    return status === "fetching" || status === "initial";
  }

  get isResolved() {
    return this.status === "resolved";
  }

  get isRejected() {
    return this.status === "rejected";
  }

  #staleTimer: number | undefined;
  #startStaleTimer() {
    clearTimeout(this.#staleTimer);
    if (this.staleTime !== undefined) {
      this.#staleTimer = setTimeout(
        () => this.#status.set("stale"),
        this.staleTime
      );
    }
  }
}