import {SignalWatcher,watch,withWatch,WatchDirective, html, svg} from '@lit-labs/signals'
import { LitElement } from 'lit';

export class Component extends SignalWatcher(LitElement){
    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this
    }

}