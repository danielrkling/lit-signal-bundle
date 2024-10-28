import { render as defaultRender, RenderOptions } from 'lit';
import { SignalHost } from './host';

export function render(value: unknown, container: HTMLElement | DocumentFragment, options?: RenderOptions | undefined){
    return defaultRender(value, container, {...options, host: new SignalHost()})
}
