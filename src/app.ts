import { html, LitElement, render } from 'lit';
import { Signal } from 'signal-polyfill';
import { component } from './component';
import { cache } from 'lit/directives/cache.js';
import {SignalWatcher} from '@lit-labs/signals'

const count = new Signal.State(0)

class Counter extends SignalWatcher(LitElement) {

  count = new Signal.State(0)


  render() {
    return html`
      <button @click=${this.#decrement}>-</button>
      ${this.count.get()}
      <button @click=${this.#increment}>+</button>
    `;
  }

  #decrement() {
    this.count.set(this.count.get() - 1);
  }

  #increment() {
    this.count.set(this.count.get() + 1);
  }

}
customElements.define("c-counter", Counter)

render(html`<c-counter  .count=${count} ></c-counter><c-counter  .count=${count} ></c-counter>`, document.body);
