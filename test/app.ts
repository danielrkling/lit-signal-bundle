import { signal, writableMemo, effect } from "../src/signals/index";
import { localCopy } from "signal-utils/local-copy";


const count1 = signal(0)

const count2 = localCopy(()=>count1.get())

console.log(count2.get())

const button1 = document.createElement("button");
button1.onclick = ()=>count1.set(count1.get()+1)

effect(()=>{
  button1.innerText ="1:"+ count1.get()
})

document.body.appendChild(button1)

const button2 = document.createElement("button");
button2.onclick = ()=>count2.set(count2.get()+1)

effect(()=>{
  button2.innerText ="2:"+ count2.get()
})

document.body.appendChild(button2)