import { render, html, signal } from "../dist/lit-signals.js";
// import { render,html, signal } from "../src"


const count = signal(0)

render(html`<button @click=${()=>count.set(count.get()+1)} >${count}</button>`, document.body)