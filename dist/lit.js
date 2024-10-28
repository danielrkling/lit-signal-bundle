var X=globalThis,Z=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),kt=new WeakMap,V=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=kt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&kt.set(e,t))}return t}toString(){return this.cssText}},Ut=s=>new V(typeof s=="string"?s:s+"",void 0,ft),re=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new V(e,s,ft)},mt=(s,t)=>{if(Z)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),r=X.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},J=Z?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Ut(e)})(s):s;var{is:oe,defineProperty:ne,getOwnPropertyDescriptor:ae,getOwnPropertyNames:ce,getOwnPropertySymbols:he,getPrototypeOf:le}=Object,F=globalThis,Ot=F.trustedTypes,de=Ot?Ot.emptyScript:"",pe=F.reactiveElementPolyfillSupport,q=(s,t)=>s,$t={toAttribute(s,t){switch(t){case Boolean:s=s?de:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ht=(s,t)=>!oe(s,t),Mt={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Ht};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&ne(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){let{get:r,set:o}=ae(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){let c=r?.call(this);o.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=le(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,i=[...ce(e),...he(e)];for(let r of i)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:$t).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:$t;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Ht)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[q("elementProperties")]=new Map,E[q("finalized")]=new Map,pe?.({ReactiveElement:E}),(F.reactiveElementVersions??=[]).push("2.0.4");var _t=globalThis,Q=_t.trustedTypes,Dt=Q?Q.createPolicy("lit-html",{createHTML:s=>s}):void 0,xt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+w,ue=`<${At}>`,R=document,B=()=>R.createComment(""),j=s=>s===null||typeof s!="object"&&typeof s!="function",gt=Array.isArray,Bt=s=>gt(s)||typeof s?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Lt=/>/g,S=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,qt=/"/g,jt=/^(?:script|style|textarea|title)$/i,yt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Pe=yt(1),Se=yt(2),Te=yt(3),d=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),It=new WeakMap,T=R.createTreeWalker(R,129);function Wt(s,t){if(!gt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}var zt=(s,t)=>{let e=s.length-1,i=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=I;for(let c=0;c<e;c++){let a=s[c],f,m,h=-1,$=0;for(;$<a.length&&(n.lastIndex=$,m=n.exec(a),m!==null);)$=n.lastIndex,n===I?m[1]==="!--"?n=Nt:m[1]!==void 0?n=Lt:m[2]!==void 0?(jt.test(m[2])&&(r=RegExp("</"+m[2],"g")),n=S):m[3]!==void 0&&(n=S):n===S?m[0]===">"?(n=r??I,h=-1):m[1]===void 0?h=-2:(h=n.lastIndex-m[2].length,f=m[1],n=m[3]===void 0?S:m[3]==='"'?qt:Vt):n===qt||n===Vt?n=S:n===Nt||n===Lt?n=I:(n=S,r=void 0);let u=n===S&&s[c+1].startsWith("/>")?" ":"";o+=n===I?a+ue:h>=0?(i.push(f),a.slice(0,h)+xt+a.slice(h)+w+u):a+w+(h===-2?c:u)}return[Wt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},W=class s{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0,c=t.length-1,a=this.parts,[f,m]=zt(t,e);if(this.el=s.createElement(f,i),T.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=T.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(xt)){let $=m[n++],u=r.getAttribute(h).split(w),x=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:x[2],strings:u,ctor:x[1]==="."?tt:x[1]==="?"?et:x[1]==="@"?st:U}),r.removeAttribute(h)}else h.startsWith(w)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(jt.test(r.tagName)){let h=r.textContent.split(w),$=h.length-1;if($>0){r.textContent=Q?Q.emptyScript:"";for(let u=0;u<$;u++)r.append(h[u],B()),T.nextNode(),a.push({type:2,index:++o});r.append(h[$],B())}}}else if(r.nodeType===8)if(r.data===At)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:o}),h+=w.length-1}o++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}};function k(s,t,e=s,i){if(t===d)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl,o=j(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=r:e._$Cl=r),r!==void 0&&(t=k(s,r._$AS(s,t.values),r,i)),t}var G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??R).importNode(e,!0);T.currentNode=r;let o=T.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let f;a.type===2?f=new H(o,o.nextSibling,this,t):a.type===1?f=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(f=new it(o,this,t)),this._$AV.push(f),a=i[++c]}n!==a?.index&&(o=T.nextNode(),n++)}return T.currentNode=R,r}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},H=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),j(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==d&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new G(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new W(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,r=0;for(let o of t)r===e.length?e.push(i=new s(this.O(B()),this.O(B()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(t,e=this,i,r){let o=this.strings,n=!1;if(o===void 0)t=k(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==d,n&&(this._$AH=t);else{let c=t,a,f;for(t=o[0],a=0;a<o.length-1;a++)f=k(this,c[i+a],e,a),f===d&&(f=this._$AH[a]),n||=!j(f)||f!==this._$AH[a],f===l?t=l:t!==l&&(t+=(f??"")+o[a+1]),this._$AH[a]=f}n&&!r&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tt=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}},et=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},st=class extends U{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??l)===d)return;let i=this._$AH,r=t===l&&i!==l||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==l&&(i===l||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}},Yt={M:xt,P:w,A:At,C:1,L:zt,R:G,D:Bt,V:k,I:H,H:U,N:et,U:st,B:tt,F:it},fe=_t.litHtmlPolyfillSupport;fe?.(W,H),(_t.litHtmlVersions??=[]).push("3.2.1");var rt=(s,t,e)=>{let i=e?.renderBefore??t,r=i._$litPart$;if(r===void 0){let o=e?.renderBefore??null;i._$litPart$=r=new H(t.insertBefore(B(),o),o,void 0,e??{})}return r._$AI(s),r};var D=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return d}};D._$litElement$=!0,D.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:D});var me=globalThis.litElementPolyfillSupport;me?.({LitElement:D});var Oe={_$AK:(s,t,e)=>{s._$AK(t,e)},_$AL:s=>s._$AL};(globalThis.litElementVersions??=[]).push("4.1.1");var Ne=!1;var{I:$e}=Yt,Xt=s=>s===null||typeof s!="object"&&typeof s!="function",ze={HTML:1,SVG:2,MATHML:3},bt=(s,t)=>t===void 0?s?._$litType$!==void 0:s?._$litType$===t,Zt=s=>s?._$litType$?.h!=null,Ye=s=>s?._$litDirective$!==void 0,Ke=s=>s?._$litDirective$,ot=s=>s.strings===void 0,Kt=()=>document.createComment(""),g=(s,t,e)=>{let i=s._$AA.parentNode,r=t===void 0?s._$AB:t._$AA;if(e===void 0){let o=i.insertBefore(Kt(),r),n=i.insertBefore(Kt(),r);e=new $e(o,n,s,s.options)}else{let o=e._$AB.nextSibling,n=e._$AM,c=n!==s;if(c){let a;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(a=s._$AU)!==n._$AU&&e._$AP(a)}if(o!==r||c){let a=e._$AA;for(;a!==o;){let f=a.nextSibling;i.insertBefore(a,r),a=f}}}return e},y=(s,t,e=s)=>(s._$AI(t,e),s),ve={},P=(s,t=ve)=>s._$AH=t,z=s=>s._$AH,nt=s=>{s._$AP?.(!1,!0);let t=s._$AA,e=s._$AB.nextSibling;for(;t!==e;){let i=t.nextSibling;t.remove(),t=i}},at=s=>{s._$AR()};var _={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},p=s=>(...t)=>({_$litDirective$:s,values:t}),v=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Y=(s,t)=>{let e=s._$AN;if(e===void 0)return!1;for(let i of e)i._$AO?.(t,!1),Y(i,t);return!0},ct=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Jt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Ae(t)}};function _e(s){this._$AN!==void 0?(ct(this),this._$AM=s,Jt(this)):this._$AM=s}function xe(s,t=!1,e=0){let i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)Y(i[o],!1),ct(i[o]);else i!=null&&(Y(i,!1),ct(i));else Y(this,s)}var Ae=s=>{s.type==_.CHILD&&(s._$AP??=xe,s._$AQ??=_e)},A=class extends v{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Jt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Y(this,t),ct(this))}setValue(t){if(ot(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Ft=async(s,t)=>{for await(let e of s)if(await t(e)===!1)return},N=class{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}},L=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}};var K=class extends A{constructor(){super(...arguments),this._$CK=new N(this),this._$CX=new L}render(t,e){return d}update(t,[e,i]){if(this.isConnected||this.disconnected(),e===this._$CJ)return d;this._$CJ=e;let r=0,{_$CK:o,_$CX:n}=this;return Ft(e,async c=>{for(;n.get();)await n.get();let a=o.deref();if(a!==void 0){if(a._$CJ!==e)return!1;i!==void 0&&(c=i(c,r)),a.commitValue(c,r),r++}return!0}),d}commitValue(t,e){this.setValue(t)}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},ds=p(K);var $s=p(class extends K{constructor(s){if(super(s),s.type!==_.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(s,t){return this._$Ctt=s,super.update(s,t)}commitValue(s,t){t===0&&at(this._$Ctt);let e=g(this._$Ctt);y(e,s)}});var Qt=s=>Zt(s)?s._$litType$.h:s.strings,ws=p(class extends v{constructor(s){super(s),this.et=new WeakMap}render(s){return[s]}update(s,[t]){let e=bt(this.it)?Qt(this.it):null,i=bt(t)?Qt(t):null;if(e!==null&&(i===null||e!==i)){let r=z(s).pop(),o=this.et.get(e);if(o===void 0){let n=document.createDocumentFragment();o=rt(l,n),o.setConnected(!1),this.et.set(e,o)}P(o,[r]),g(o,void 0,r)}if(i!==null){if(e===null||e!==i){let r=this.et.get(i);if(r!==void 0){let o=z(r).pop();at(s),g(s,void 0,o),P(s,[o])}}this.it=t}else this.it=void 0;return this.render(t)}});var ks=(s,t,e)=>{for(let i of t)if(i[0]===s)return(0,i[1])();return e?.()};var Ns=p(class extends v{constructor(s){if(super(s),s.type!==_.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=s.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let r=!!t[i];r===this.st.has(i)||this.nt?.has(i)||(r?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return d}});var ge={},Ws=p(class extends v{constructor(){super(...arguments),this.ot=ge}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return d}else if(this.ot===t)return d;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var Js=s=>s??l;function*ti(s,t){let e=typeof t=="function";if(s!==void 0){let i=-1;for(let r of s)i>-1&&(yield e?t(i):t),i++,yield r}}var ai=p(class extends v{constructor(){super(...arguments),this.key=l}render(s,t){return this.key=s,t}update(s,[t,e]){return t!==this.key&&(P(s),this.key=t),e}});var mi=p(class extends v{constructor(s){if(super(s),s.type!==_.PROPERTY&&s.type!==_.ATTRIBUTE&&s.type!==_.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ot(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===d||t===l)return t;let e=s.element,i=s.name;if(s.type===_.PROPERTY){if(t===e[i])return d}else if(s.type===_.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return d}else if(s.type===_.ATTRIBUTE&&e.getAttribute(i)===t+"")return d;return P(s),t}});function*Ai(s,t){if(s!==void 0){let e=0;for(let i of s)yield t(i,e++)}}function*Ci(s,t,e=1){let i=t===void 0?0:s;t??=s;for(let r=i;e>0?r<t:t<r;r+=e)yield r}var ki=()=>new Et,Et=class{},Ct=new WeakMap,Ui=p(class extends A{render(s){return l}update(s,[t]){let e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),l}rt(s){if(this.isConnected||(s=void 0),typeof this.Y=="function"){let t=this.ht??globalThis,e=Ct.get(t);e===void 0&&(e=new WeakMap,Ct.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){return typeof this.Y=="function"?Ct.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Gt=(s,t,e)=>{let i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},qi=p(class extends v{constructor(s){if(super(s),s.type!==_.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);let r=[],o=[],n=0;for(let c of s)r[n]=i?i(c,n):n,o[n]=e(c,n),n++;return{values:o,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){let r=z(s),{values:o,keys:n}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=n,o;let c=this.ut??=[],a=[],f,m,h=0,$=r.length-1,u=0,x=o.length-1;for(;h<=$&&u<=x;)if(r[h]===null)h++;else if(r[$]===null)$--;else if(c[h]===n[u])a[u]=y(r[h],o[u]),h++,u++;else if(c[$]===n[x])a[x]=y(r[$],o[x]),$--,x--;else if(c[h]===n[x])a[x]=y(r[h],o[x]),g(s,a[x+1],r[h]),h++,x--;else if(c[$]===n[u])a[u]=y(r[$],o[u]),g(s,r[h],r[$]),$--,u++;else if(f===void 0&&(f=Gt(n,u,x),m=Gt(c,h,$)),f.has(c[h]))if(f.has(c[$])){let C=m.get(n[u]),ut=C!==void 0?r[C]:null;if(ut===null){let Rt=g(s,r[h]);y(Rt,o[u]),a[u]=Rt}else a[u]=y(ut,o[u]),g(s,r[h],ut),r[C]=null;u++}else nt(r[$]),$--;else nt(r[h]),h++;for(;u<=x;){let C=g(s,a[x+1]);y(C,o[u]),a[u++]=C}for(;h<=$;){let C=r[h++];C!==null&&nt(C)}return this.ut=n,P(s,a),d}});var te="important",ye=" !"+te,Ki=p(class extends v{constructor(s){if(super(s),s.type!==_.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let i=s[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){let{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let r=t[i];if(r!=null){this.ft.add(i);let o=typeof r=="string"&&r.endsWith(ye);i.includes("-")||o?e.setProperty(i,o?r.slice(0,-11):r,o?te:""):e[i]=r}}return d}});var tr=p(class extends v{constructor(s){if(super(s),s.type!==_.CHILD)throw Error("templateContent can only be used in child bindings")}render(s){return this.vt===s?d:(this.vt=s,document.importNode(s.content,!0))}});var ee=s=>!Xt(s)&&typeof s.then=="function",se=1073741823,wt=class extends A{constructor(){super(...arguments),this._$Cwt=se,this._$Cbt=[],this._$CK=new N(this),this._$CX=new L}render(...t){return t.find(e=>!ee(e))??d}update(t,e){let i=this._$Cbt,r=i.length;this._$Cbt=e;let o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<e.length&&!(c>this._$Cwt);c++){let a=e[c];if(!ee(a))return this._$Cwt=c,a;c<r&&a===i[c]||(this._$Cwt=se,r=0,Promise.resolve(a).then(async f=>{for(;n.get();)await n.get();let m=o.deref();if(m!==void 0){let h=m._$Cbt.indexOf(a);h>-1&&h<m._$Cwt&&(m._$Cwt=h,m.setValue(f))}}))}return d}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},lr=p(wt);function fr(s,t,e){return s?t(s):e?.(s)}var b=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i??!1}};function ie(s){return s}var O=class{constructor(t,e,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){let o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new b(this.context,this.t,this.subscribe))}};var ht=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:i}]of this.subscriptions)e(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};var Pt=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},M=class extends ht{constructor(t,e,i){super(e.context!==void 0?e.initialValue:i),this.onContextRequest=r=>{let o=r.composedPath()[0];r.context===this.context&&o!==this.host&&(r.stopPropagation(),this.addCallback(r.callback,o,r.subscribe))},this.onProviderRequest=r=>{let o=r.composedPath()[0];if(r.context!==this.context||o===this.host)return;let n=new Set;for(let[c,{consumerHost:a}]of this.subscriptions)n.has(c)||(n.add(c),a.dispatchEvent(new b(this.context,c,!0)));r.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pt(this.context))}};var lt=class{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{let e=this.pendingContextRequests.get(t.context);if(e===void 0)return;this.pendingContextRequests.delete(t.context);let{requests:i}=e;for(let{elementRef:r,callbackRef:o}of i){let n=r.deref(),c=o.deref();n===void 0||c===void 0||n.dispatchEvent(new b(t.context,c,!0))}},this.onContextRequest=t=>{if(t.subscribe!==!0)return;let e=t.composedPath()[0],i=t.callback,r=this.pendingContextRequests.get(t.context);r===void 0&&this.pendingContextRequests.set(t.context,r={callbacks:new WeakMap,requests:[]});let o=r.callbacks.get(e);o===void 0&&r.callbacks.set(e,o=new WeakSet),o.has(i)||(o.add(i),r.requests.push({elementRef:new WeakRef(e),callbackRef:new WeakRef(i)}))}}attach(t){t.addEventListener("context-request",this.onContextRequest),t.addEventListener("context-provider",this.onContextProvider)}detach(t){t.removeEventListener("context-request",this.onContextRequest),t.removeEventListener("context-provider",this.onContextProvider)}};function dt({context:s}){return(t,e)=>{let i=new WeakMap;if(typeof e=="object")return e.addInitializer(function(){i.set(this,new M(this,{context:s}))}),{get(){return t.get.call(this)},set(r){return i.get(this)?.setValue(r),t.set.call(this,r)},init(r){return i.get(this)?.setValue(r),r}};{t.constructor.addInitializer(n=>{i.set(n,new M(n,{context:s}))});let r=Object.getOwnPropertyDescriptor(t,e),o;if(r===void 0){let n=new WeakMap;o={get(){return n.get(this)},set(c){i.get(this).setValue(c),n.set(this,c)},configurable:!0,enumerable:!0}}else{let n=r.set;o={...r,set(c){i.get(this).setValue(c),n?.call(this,c)}}}return void Object.defineProperty(t,e,o)}}}function pt({context:s,subscribe:t}){return(e,i)=>{typeof i=="object"?i.addInitializer(function(){new O(this,{context:s,callback:r=>{e.set.call(this,r)},subscribe:t})}):e.constructor.addInitializer(r=>{new O(r,{context:s,callback:o=>{r[i]=o},subscribe:t})})}}var Ir=dt,Br=pt;function zr(s){return class extends s{createRenderRoot(){return this}}}var St=class extends A{render(){return l}update(t,[e]){return t.type==6&&(this.fn=e,this.elem=t.element),l}disconnected(){this.fn?.(this.elem)}},Fr=p(St);var Tt=class extends A{render(){return l}update(t,[e]){return t.type==6&&queueMicrotask(()=>e(t.element)),l}},so=p(Tt);export{A as AsyncDirective,K as AsyncReplaceDirective,V as CSSResult,O as ContextConsumer,b as ContextEvent,M as ContextProvider,lt as ContextRoot,v as Directive,zr as LightDOM,D as LitElement,_ as PartType,E as ReactiveElement,ze as TemplateResultType,wt as UntilDirective,Oe as _$LE,Yt as _$LH,mt as adoptStyles,$s as asyncAppend,ds as asyncReplace,ws as cache,ks as choose,Ns as classMap,at as clearPart,pt as consume,Br as contextProvided,Ir as contextProvider,ie as createContext,ki as createRef,re as css,$t as defaultConverter,p as directive,z as getCommittedValue,J as getCompatibleStyle,Ke as getDirectiveClass,Ws as guard,Pe as html,Js as ifDefined,g as insertPart,Zt as isCompiledTemplateResult,Ye as isDirectiveResult,Xt as isPrimitive,Ne as isServer,ot as isSingleExpression,bt as isTemplateResult,ti as join,ai as keyed,mi as live,Ai as map,Te as mathml,d as noChange,Ht as notEqual,l as nothing,Fr as onDismount,so as onMount,dt as provide,Ci as range,Ui as ref,nt as removePart,rt as render,qi as repeat,y as setChildPartValue,P as setCommittedValue,Ki as styleMap,Z as supportsAdoptingStyleSheets,Se as svg,tr as templateContent,Ut as unsafeCSS,lr as until,fr as when};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/async-replace.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/async-append.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/cache.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/choose.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/guard.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/keyed.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/template-content.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
