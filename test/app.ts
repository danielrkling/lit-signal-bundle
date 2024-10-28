import { render, html, signal } from "../lit+signals/src"

const count = signal(0)

render(html`<button @click=${()=>count.set(count.get()+1)} >${count}</button>`, document.body)