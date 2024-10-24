import { Signal } from "signal-polyfill";

export type ValidationError = | Error
  | string
  | null
  | undefined;

export type Validate<TValue> = (
  value: TValue
) =>
  | Promise<ValidationError> | ValidationError


export type ControlOptions<TValue> = {
  validate?: Validate<TValue>;
  initialValue?: TValue;
  fields?: {
    [K in keyof TValue]: Omit<ControlOptions<TValue[K]>, "initialValue">;
  };
};

export type Fields<TValue> = { [K in keyof TValue]: Control<TValue[K]> };

abstract class Control<TValue> {
  #validateFn: Validate<TValue> | undefined;
  initialValue: TValue | undefined;
  fields: Fields<TValue>;

  #error = new Signal.State<ValidationError>(null);
  #isValidating = new Signal.State(false);
  #isValidated = new Signal.State(false);

  constructor(options: ControlOptions<TValue> = {}) {
    this.#validateFn = options.validate;
    this.initialValue = options.initialValue;
    this.fields = {} as Fields<TValue>;
    for (const key in options.fields) {
      this.fields[key] = new Field(this, key, {
        ...options.fields[key],
        initialValue: options.initialValue?.[key],
      });
    }
  }

  get fieldArray(): Field<TValue>[] {
    return Object.values(this.fields);
  }

  async #validate(): Promise<boolean> {
    try {
      const error = await this.#validateFn?.(this.value);
      this.#error.set(error);
      return Boolean(error);
    } catch (error) {
      this.#error.set(error as Error);
      return Boolean(error);
    }
  }

  async validate(): Promise<boolean> {
    this.#isValidated.set(false);
    this.#isValidating.set(true);
    const result = await Promise.all([
      this.#validate(),
      ...this.fieldArray.map((f) => f.validate()),
    ]);
    this.#isValidated.set(true);
    this.#isValidating.set(false);
    return result.every(Boolean);
  }

  get error() {
    return this.#error.get();
  }

  get isValidated() {
    return this.#isValidated.get();
  }

  get isValidating() {
    return this.#isValidating.get();
  }

  get errors(): ValidationError[] {
    return [this.error]
      .concat(...this.fieldArray.map((f) => f.errors))
      .filter(Boolean);
  }

  #isPristine = new Signal.Computed(() => this.value === this.initialValue);
  get isPristine() {
    return this.#isPristine.get();
  }
  get isDirty() {
    return !this.isPristine;
  }

  #isInvalid: Signal.Computed<Boolean> = new Signal.Computed<Boolean>(
    () =>
      (this.isValidated && !!this.error) ||
      this.fieldArray.some((f) => f.isInvalid)
  );
  get isInvalid() {
    return this.#isInvalid.get();
  }
  get isValid() {
    return this.isValidated && !this.isInvalid;
  }

  // Getter for the value property
  get value(): TValue {
    throw new Error("Getter 'value' must be implemented in derived class.");
  }

  setValue(value: TValue) {
    this.#isValidated.set(false);
  }
}

export type FormOptions<TValue extends object> = ControlOptions<TValue> & {};

export class Form<TValue extends object = {}> extends Control<TValue> {
  #value: Signal.State<TValue>;

  constructor(options: FormOptions<TValue>) {
    super(options);

    this.#value = new Signal.State(options.initialValue ?? {} as TValue);
  }

  // Getter for the value property
  get value(): TValue {
    return this.#value.get();
  }

  setValue(value: TValue) {
    super.setValue(value);
    this.#value.set(value);
  }

  #submitCount = new Signal.State(0);
  #isSubmitted = new Signal.Computed(() => this.#submitCount.get() > 0);
  #isSubmitting = new Signal.State(false);
  #response = new Signal.State<unknown>(null);

  async handleSubmit(
    onValid?: (value: TValue, control: Form<TValue>) => unknown,
    onInvalid?: (value: TValue, control: Form<TValue>) => unknown
  ) {
    try {
      await this.validate();
      this.#isSubmitting.set(true);
      this.#response.set(null);

      if (this.isValid) {
        this.#response.set(await onValid?.(this.value, this));
      } else {
        this.focusError(); // Focus on the first field with validation error.
        this.#response.set(await onInvalid?.(this.value, this)); // Execute onInvalid callback and set response.
      }
    } catch (e) {
      this.#response.set(e); // Set response to error if validation fails.
    } finally {
      this.#isSubmitting.set(false); // Set form submitting status to false.
      this.#submitCount.set(this.#submitCount.get() + 1);
    }
  }

  get submitCount() {
    return this.#submitCount.get();
  }
  get isSubmitted() {
    return this.#isSubmitted.get();
  }
  get isSubmitting() {
    return this.#isSubmitting.get();
  }

  focusError() {
    for (const field of this.fieldArray) {
      if (field.focusError()) return true;
    }
    return false;
  }
}

class Field<
  TParent,
  TKey extends keyof TParent = keyof TParent,
  TValue = TParent[TKey]
> extends Control<TValue> {
  control: Control<TParent>;
  name: TKey;
  ref: { value?: HTMLElement };

  constructor(
    control: Control<TParent>,
    name: TKey,
    options?: ControlOptions<TValue>
  ) {
    super(options);
    this.control = control;
    this.name = name;
    this.ref = {};
  }

  #value = new Signal.Computed(() => this.control.value?.[this.name] as TValue);
  get value() {
    return this.#value.get();
  }
  setValue(value: TValue) {
    super.setValue(value);
    const controlValue = this.control.value;
    this.control.setValue({ ...controlValue, [this.name]: value });
  }

  focusError() {
    if (this.ref.value && this.isInvalid) {
      this.ref.value.focus();
      return true;
    }
    for (const field of this.fieldArray) {
      if (field.focusError()) return true;
    }
    return false;
  }
}
