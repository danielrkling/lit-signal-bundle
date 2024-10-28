var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// lit+signals/src/index.ts
var src_exports = {};
__export(src_exports, {
  Computed: () => o3,
  SignalHost: () => SignalHost,
  SignalWatcher: () => e,
  State: () => l2,
  WatchDirective: () => h2,
  computed: () => i4,
  html: () => l,
  render: () => render,
  signal: () => r2,
  svg: () => r,
  watch: () => o,
  withWatch: () => m
});

// node_modules/@lit-labs/signals/index.js
var signals_exports = {};
__export(signals_exports, {
  Computed: () => o3,
  SignalWatcher: () => e,
  State: () => l2,
  WatchDirective: () => h2,
  computed: () => i4,
  html: () => l,
  signal: () => r2,
  svg: () => r,
  watch: () => o,
  withWatch: () => m
});
__reExport(signals_exports, signal_polyfill_star);
import { Signal as t4 } from "./signals.js";
import * as signal_polyfill_star from "./signals.js";

// node_modules/@lit-labs/signals/lib/signal-watcher.js
import { Signal as t } from "./signals.js";
var i = Symbol("SignalWatcherBrand");
var s = new FinalizationRegistry(({ watcher: t5, signal: i5 }) => {
  t5.unwatch(i5);
});
var h = /* @__PURE__ */ new WeakMap();
function e(e2) {
  return true === e2[i] ? (console.warn("SignalWatcher should not be applied to the same class more than once."), e2) : class extends e2 {
    constructor() {
      super(...arguments), this._$St = new t.State(0), this._$Si = false, this._$So = true, this._$Sh = /* @__PURE__ */ new Set();
    }
    _$Sl() {
      if (void 0 !== this._$Su) return;
      this._$Sv = new t.Computed(() => {
        this._$St.get(), super.performUpdate();
      });
      const i5 = this._$Su = new t.subtle.Watcher(function() {
        const t5 = h.get(this);
        void 0 !== t5 && (false === t5._$Si && t5.requestUpdate(), this.watch());
      });
      h.set(i5, this), s.register(this, { watcher: i5, signal: this._$Sv }), i5.watch(this._$Sv);
    }
    _$Sp() {
      void 0 !== this._$Su && (this._$Su.unwatch(this._$Sv), this._$Sv = void 0, this._$Su = void 0);
    }
    performUpdate() {
      this.isUpdatePending && (this._$Sl(), this._$Si = true, this._$St.set(this._$St.get() + 1), this._$Si = false, this._$Sv.get());
    }
    update(t5) {
      try {
        this._$So ? (this._$So = false, super.update(t5)) : this._$Sh.forEach((t6) => t6.commit());
      } finally {
        this.isUpdatePending = false, this._$Sh.clear();
      }
    }
    requestUpdate(t5, i5, s3) {
      this._$So = true, super.requestUpdate(t5, i5, s3);
    }
    connectedCallback() {
      super.connectedCallback(), this.requestUpdate();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), queueMicrotask(() => {
        false === this.isConnected && this._$Sp();
      });
    }
    _(t5) {
      this._$Sh.add(t5);
      const i5 = this._$So;
      this.requestUpdate(), this._$So = i5;
    }
    m(t5) {
      this._$Sh.delete(t5);
    }
  };
}

// node_modules/@lit-labs/signals/lib/watch.js
import { directive as i2 } from "./lit.js";
import { AsyncDirective as t2 } from "./lit.js";
import { Signal as s2 } from "./signals.js";
var h2 = class extends t2 {
  _$Sl() {
    if (void 0 !== this._$Su) return;
    this._$SW = new s2.Computed(() => {
      var i6;
      return null === (i6 = this._$Sj) || void 0 === i6 ? void 0 : i6.get();
    });
    const i5 = this._$Su = new s2.subtle.Watcher(() => {
      var t5;
      null === (t5 = this._$SO) || void 0 === t5 || t5._(this), i5.watch();
    });
    i5.watch(this._$SW);
  }
  _$Sp() {
    var i5;
    void 0 !== this._$Su && (this._$Su.unwatch(this._$SW), this._$SW = void 0, this._$Su = void 0, null === (i5 = this._$SO) || void 0 === i5 || i5.m(this));
  }
  commit() {
    this.setValue(s2.subtle.untrack(() => {
      var i5;
      return null === (i5 = this._$SW) || void 0 === i5 ? void 0 : i5.get();
    }));
  }
  render(i5) {
    return s2.subtle.untrack(() => i5.get());
  }
  update(i5, [t5]) {
    var h3, o4;
    return null !== (h3 = this._$SO) && void 0 !== h3 || (this._$SO = null === (o4 = i5.options) || void 0 === o4 ? void 0 : o4.host), t5 !== this._$Sj && void 0 !== this._$Sj && this._$Sp(), this._$Sj = t5, this._$Sl(), s2.subtle.untrack(() => this._$SW.get());
  }
  disconnected() {
    this._$Sp();
  }
  reconnected() {
    this._$Sl();
  }
};
var o = i2(h2);

// node_modules/@lit-labs/signals/lib/html-tag.js
import { html as o2, svg as t3 } from "./lit.js";
import { Signal as i3 } from "./signals.js";
var m = (o4) => (t5, ...m2) => o4(t5, ...m2.map((o5) => o5 instanceof i3.State || o5 instanceof i3.Computed ? o(o5) : o5));
var l = m(o2);
var r = m(t3);

// node_modules/@lit-labs/signals/index.js
var l2 = t4.State;
var o3 = t4.Computed;
var r2 = (l3, o4) => new t4.State(l3, o4);
var i4 = (l3, o4) => new t4.Computed(l3, o4);

// lit+signals/src/index.ts
__reExport(src_exports, signals_exports);

// lit+signals/src/host.ts
var SignalHost = class {
  constructor() {
    this.isPendingUpdate = false;
    this.__pendingWatches = /* @__PURE__ */ new Set();
  }
  _updateWatchDirective(d) {
    this.__pendingWatches.add(d);
    this.requestUpdate();
  }
  _clearWatchDirective(d) {
    this.__pendingWatches.delete(d);
  }
  requestUpdate() {
    if (this.isPendingUpdate) {
      return;
    }
    this.isPendingUpdate = true;
    queueMicrotask(() => {
      try {
        this.__pendingWatches.forEach((d) => d.commit());
      } catch (e2) {
      } finally {
        this.__pendingWatches.clear();
      }
      this.isPendingUpdate = false;
    });
  }
};

// lit+signals/src/render.ts
import { render as defaultRender } from "./lit.js";
function render(value, container, options) {
  return defaultRender(value, container, { ...options, host: new SignalHost() });
}
export {
  o3 as Computed,
  SignalHost,
  e as SignalWatcher,
  l2 as State,
  h2 as WatchDirective,
  i4 as computed,
  l as html,
  render,
  r2 as signal,
  r as svg,
  o as watch,
  m as withWatch
};
/*! Bundled license information:

@lit-labs/signals/lib/signal-watcher.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/watch.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/html-tag.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
