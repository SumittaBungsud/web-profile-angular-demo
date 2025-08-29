import{Ea as j,Fa as Z1,Ga as X1,Ha as i2,Ia as g,J as B,Ja as K1,K as I1,L as h,M as l2,Ma as $2,Na as o2,O as Z,Oa as r2,Q as d,R as T,T as _1,Va as Q1,W as s2,a as g2,b as B2,ea as x2,fa as H2,fb as J1,ha as n2,i as R1,ia as O1,ib as c3,ja as U2,jb as e3,ka as B1,la as t2,ma as j2,na as H1,oa as a2,pa as H,qa as X,ra as U1,sa as j1,ta as $1,ua as V1,va as G1,vb as l3,wa as W1,wb as s3,xa as q1,ya as U,za as Y1}from"./chunk-AOMFV2MW.js";var r3=null;function K(){return r3}function f3(c){r3??=c}var N2=class{};var x=new Z(""),u3=(()=>{class c{historyGo(e){throw new Error("")}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>T(U4),providedIn:"platform"})}return c})();var U4=(()=>{class c extends u3{_location;_history;_doc=T(x);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return K().getBaseHref(this._doc)}onPopState(e){let l=K().getGlobalEventTarget(this._doc,"window");return l.addEventListener("popstate",e,!1),()=>l.removeEventListener("popstate",e)}onHashChange(e){let l=K().getGlobalEventTarget(this._doc,"window");return l.addEventListener("hashchange",e,!1),()=>l.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,l,n){this._history.pushState(e,l,n)}replaceState(e,l,n){this._history.replaceState(e,l,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>new c,providedIn:"platform"})}return c})();function m3(c,s){return c?s?c.endsWith("/")?s.startsWith("/")?c+s.slice(1):c+s:s.startsWith("/")?c+s:`${c}/${s}`:c:s}function n3(c){let s=c.match(/#|\?|$/),e=s&&s.index||c.length,l=e-(c[e-1]==="/"?1:0);return c.slice(0,l)+c.slice(e)}function $(c){return c&&c[0]!=="?"?"?"+c:c}var G2=(()=>{class c{historyGo(e){throw new Error("")}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>T($4),providedIn:"root"})}return c})(),j4=new Z(""),$4=(()=>{class c extends G2{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,l){super(),this._platformLocation=e,this._baseHref=l??this._platformLocation.getBaseHrefFromDOM()??T(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return m3(this._baseHref,e)}path(e=!1){let l=this._platformLocation.pathname+$(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${l}${n}`:l}pushState(e,l,n,t){let a=this.prepareExternalUrl(n+$(t));this._platformLocation.pushState(e,l,a)}replaceState(e,l,n,t){let a=this.prepareExternalUrl(n+$(t));this._platformLocation.replaceState(e,l,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(l){return new(l||c)(d(u3),d(j4,8))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var V4=(()=>{class c{_subject=new R1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let l=this._locationStrategy.getBaseHref();this._basePath=q4(n3(t3(l))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,l=""){return this.path()==this.normalize(e+$(l))}normalize(e){return c.stripTrailingSlash(W4(this._basePath,t3(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,l="",n=null){this._locationStrategy.pushState(n,"",e,l),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+$(l)),n)}replaceState(e,l="",n=null){this._locationStrategy.replaceState(n,"",e,l),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+$(l)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(l=>{this._notifyUrlChangeListeners(l.url,l.state)}),()=>{let l=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(l,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",l){this._urlChangeListeners.forEach(n=>n(e,l))}subscribe(e,l,n){return this._subject.subscribe({next:e,error:l??void 0,complete:n??void 0})}static normalizeQueryParams=$;static joinWithSlash=m3;static stripTrailingSlash=n3;static \u0275fac=function(l){return new(l||c)(d(G2))};static \u0275prov=h({token:c,factory:()=>G4(),providedIn:"root"})}return c})();function G4(){return new V4(d(G2))}function W4(c,s){if(!c||!s.startsWith(c))return s;let e=s.substring(c.length);return e===""||["/",";","?","#"].includes(e[0])?e:s}function t3(c){return c.replace(/\/index.html$/,"")}function q4(c){if(new RegExp("^(https?:)?//").test(c)){let[,e]=c.split(/\/\/[^\/]+/);return e}return c}function z3(c,s){s=encodeURIComponent(s);for(let e of c.split(";")){let l=e.indexOf("="),[n,t]=l==-1?[e,""]:[e.slice(0,l),e.slice(l+1)];if(n.trim()===s)return decodeURIComponent(t)}return null}var d5=(()=>{class c{_viewContainer;_context=new V2;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,l){this._viewContainer=e,this._thenTemplateRef=l}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){a3("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){a3("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,l){return!0}static \u0275fac=function(l){return new(l||c)(g(K1),g(Z1))};static \u0275dir=r2({type:c,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return c})(),V2=class{$implicit=null;ngIf=null};function a3(c,s){if(!!!(!s||s.createEmbeddedView))throw new Error(`${c} must be a TemplateRef, but received '${I1(s)}'.`)}var p5=(()=>{class c{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,l,n){this._ngEl=e,this._differs=l,this._renderer=n}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,l){let[n,t]=e.split("."),a=n.indexOf("-")===-1?void 0:j.DashCase;l!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,t?`${l}${t}`:l,a):this._renderer.removeStyle(this._ngEl.nativeElement,n,a)}_applyChanges(e){e.forEachRemovedItem(l=>this._setStyle(l.key,null)),e.forEachAddedItem(l=>this._setStyle(l.key,l.currentValue)),e.forEachChangedItem(l=>this._setStyle(l.key,l.currentValue))}static \u0275fac=function(l){return new(l||c)(g(n2),g(l3),g(i2))};static \u0275dir=r2({type:c,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return c})();var Y4=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=o2({type:c});static \u0275inj=l2({})}return c})(),L3="browser",Z4="server";function W2(c){return c===Z4}var b2=class{};var Y2=class extends N2{supportsDOMEvents=!0},Z2=class c extends Y2{static makeCurrent(){f3(new c)}onAndCancel(s,e,l,n){return s.addEventListener(e,l,n),()=>{s.removeEventListener(e,l,n)}}dispatchEvent(s,e){s.dispatchEvent(e)}remove(s){s.remove()}createElement(s,e){return e=e||this.getDefaultDocument(),e.createElement(s)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(s){return s.nodeType===Node.ELEMENT_NODE}isShadowRoot(s){return s instanceof DocumentFragment}getGlobalEventTarget(s,e){return e==="window"?window:e==="document"?s:e==="body"?s.body:null}getBaseHref(s){let e=X4();return e==null?null:K4(e)}resetBaseElement(){f2=null}getUserAgent(){return window.navigator.userAgent}getCookie(s){return z3(document.cookie,s)}},f2=null;function X4(){return f2=f2||document.querySelector("base"),f2?f2.getAttribute("href"):null}function K4(c){return new URL(c,document.baseURI).pathname}var Q4=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),X2=new Z(""),g3=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,l){this._zone=l,e.forEach(n=>{n.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,l,n,t){return this._findPluginFor(l).addEventListener(e,l,n,t)}getZone(){return this._zone}_findPluginFor(e){let l=this._eventNameToPlugin.get(e);if(l)return l;if(l=this._plugins.find(t=>t.supports(e)),!l)throw new B(5101,!1);return this._eventNameToPlugin.set(e,l),l}static \u0275fac=function(l){return new(l||c)(d(X2),d(x2))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),D2=class{_doc;constructor(s){this._doc=s}manager},y2="ng-app-id";function d3(c){for(let s of c)s.remove()}function p3(c,s){let e=s.createElement("style");return e.textContent=c,e}function J4(c,s,e,l){let n=c.head?.querySelectorAll(`style[${y2}="${s}"],link[${y2}="${s}"]`);if(n)for(let t of n)t.removeAttribute(y2),t instanceof HTMLLinkElement?l.set(t.href.slice(t.href.lastIndexOf("/")+1),{usage:0,elements:[t]}):t.textContent&&e.set(t.textContent,{usage:0,elements:[t]})}function K2(c,s){let e=s.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",c),e}var x3=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,l,n,t={}){this.doc=e,this.appId=l,this.nonce=n,this.isServer=W2(t),J4(e,l,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,l){for(let n of e)this.addUsage(n,this.inline,p3);l?.forEach(n=>this.addUsage(n,this.external,K2))}removeStyles(e,l){for(let n of e)this.removeUsage(n,this.inline);l?.forEach(n=>this.removeUsage(n,this.external))}addUsage(e,l,n){let t=l.get(e);t?t.usage++:l.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(e,this.doc)))})}removeUsage(e,l){let n=l.get(e);n&&(n.usage--,n.usage<=0&&(d3(n.elements),l.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])d3(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[l,{elements:n}]of this.inline)n.push(this.addElement(e,p3(l,this.doc)));for(let[l,{elements:n}]of this.external)n.push(this.addElement(e,K2(l,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,l){return this.nonce&&l.setAttribute("nonce",this.nonce),this.isServer&&l.setAttribute(y2,this.appId),e.appendChild(l)}static \u0275fac=function(l){return new(l||c)(d(x),d(U2),d(j2,8),d(t2))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),q2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},J2=/%COMP%/g;var N3="%COMP%",c0=`_nghost-${N3}`,e0=`_ngcontent-${N3}`,l0=!0,s0=new Z("",{providedIn:"root",factory:()=>l0});function n0(c){return e0.replace(J2,c)}function t0(c){return c0.replace(J2,c)}function b3(c,s){return s.map(e=>e.replace(J2,c))}var M3=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,l,n,t,a,i,u,r=null,f=null){this.eventManager=e,this.sharedStylesHost=l,this.appId=n,this.removeStylesOnCompDestroy=t,this.doc=a,this.platformId=i,this.ngZone=u,this.nonce=r,this.tracingService=f,this.platformIsServer=W2(i),this.defaultRenderer=new u2(e,a,u,this.platformIsServer,this.tracingService)}createRenderer(e,l){if(!e||!l)return this.defaultRenderer;this.platformIsServer&&l.encapsulation===a2.ShadowDom&&(l=B2(g2({},l),{encapsulation:a2.Emulated}));let n=this.getOrCreateRenderer(e,l);return n instanceof S2?n.applyToHost(e):n instanceof m2&&n.applyStyles(),n}getOrCreateRenderer(e,l){let n=this.rendererByCompId,t=n.get(l.id);if(!t){let a=this.doc,i=this.ngZone,u=this.eventManager,r=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,L=this.platformIsServer,z=this.tracingService;switch(l.encapsulation){case a2.Emulated:t=new S2(u,r,l,this.appId,f,a,i,L,z);break;case a2.ShadowDom:return new Q2(u,r,e,l,a,i,this.nonce,L,z);default:t=new m2(u,r,l,f,a,i,L,z);break}n.set(l.id,t)}return t}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(l){return new(l||c)(d(g3),d(x3),d(U2),d(s0),d(x),d(t2),d(x2),d(j2),d(H1,8))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),u2=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(s,e,l,n,t){this.eventManager=s,this.doc=e,this.ngZone=l,this.platformIsServer=n,this.tracingService=t}destroy(){}destroyNode=null;createElement(s,e){return e?this.doc.createElementNS(q2[e]||e,s):this.doc.createElement(s)}createComment(s){return this.doc.createComment(s)}createText(s){return this.doc.createTextNode(s)}appendChild(s,e){(h3(s)?s.content:s).appendChild(e)}insertBefore(s,e,l){s&&(h3(s)?s.content:s).insertBefore(e,l)}removeChild(s,e){e.remove()}selectRootElement(s,e){let l=typeof s=="string"?this.doc.querySelector(s):s;if(!l)throw new B(-5104,!1);return e||(l.textContent=""),l}parentNode(s){return s.parentNode}nextSibling(s){return s.nextSibling}setAttribute(s,e,l,n){if(n){e=n+":"+e;let t=q2[n];t?s.setAttributeNS(t,e,l):s.setAttribute(e,l)}else s.setAttribute(e,l)}removeAttribute(s,e,l){if(l){let n=q2[l];n?s.removeAttributeNS(n,e):s.removeAttribute(`${l}:${e}`)}else s.removeAttribute(e)}addClass(s,e){s.classList.add(e)}removeClass(s,e){s.classList.remove(e)}setStyle(s,e,l,n){n&(j.DashCase|j.Important)?s.style.setProperty(e,l,n&j.Important?"important":""):s.style[e]=l}removeStyle(s,e,l){l&j.DashCase?s.style.removeProperty(e):s.style[e]=""}setProperty(s,e,l){s!=null&&(s[e]=l)}setValue(s,e){s.nodeValue=e}listen(s,e,l,n){if(typeof s=="string"&&(s=K().getGlobalEventTarget(this.doc,s),!s))throw new Error(`Unsupported event target ${s} for event ${e}`);let t=this.decoratePreventDefault(l);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(t=this.tracingService.wrapEventListener(s,e,t)),this.eventManager.addEventListener(s,e,t,n)}decoratePreventDefault(s){return e=>{if(e==="__ngUnwrap__")return s;(this.platformIsServer?this.ngZone.runGuarded(()=>s(e)):s(e))===!1&&e.preventDefault()}}};function h3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var Q2=class extends u2{sharedStylesHost;hostEl;shadowRoot;constructor(s,e,l,n,t,a,i,u,r){super(s,t,a,u,r),this.sharedStylesHost=e,this.hostEl=l,this.shadowRoot=l.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=n.styles;f=b3(n.id,f);for(let z of f){let M=document.createElement("style");i&&M.setAttribute("nonce",i),M.textContent=z,this.shadowRoot.appendChild(M)}let L=n.getExternalStyles?.();if(L)for(let z of L){let M=K2(z,t);i&&M.setAttribute("nonce",i),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(s){return s===this.hostEl?this.shadowRoot:s}appendChild(s,e){return super.appendChild(this.nodeOrShadowRoot(s),e)}insertBefore(s,e,l){return super.insertBefore(this.nodeOrShadowRoot(s),e,l)}removeChild(s,e){return super.removeChild(null,e)}parentNode(s){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(s)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},m2=class extends u2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(s,e,l,n,t,a,i,u,r){super(s,t,a,i,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=n;let f=l.styles;this.styles=r?b3(r,f):f,this.styleUrls=l.getExternalStyles?.(r)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},S2=class extends m2{contentAttr;hostAttr;constructor(s,e,l,n,t,a,i,u,r){let f=n+"-"+l.id;super(s,e,l,t,a,i,u,r,f),this.contentAttr=n0(f),this.hostAttr=t0(f)}applyToHost(s){this.applyStyles(),this.setAttribute(s,this.hostAttr,"")}createElement(s,e){let l=super.createElement(s,e);return super.setAttribute(l,this.contentAttr,""),l}},a0=(()=>{class c extends D2{constructor(e){super(e)}supports(e){return!0}addEventListener(e,l,n,t){return e.addEventListener(l,n,t),()=>this.removeEventListener(e,l,n,t)}removeEventListener(e,l,n,t){return e.removeEventListener(l,n,t)}static \u0275fac=function(l){return new(l||c)(d(x))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),C3=["alt","control","meta","shift"],i0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},o0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},r0=(()=>{class c extends D2{constructor(e){super(e)}supports(e){return c.parseEventName(e)!=null}addEventListener(e,l,n,t){let a=c.parseEventName(l),i=c.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>K().onAndCancel(e,a.domEventName,i,t))}static parseEventName(e){let l=e.toLowerCase().split("."),n=l.shift();if(l.length===0||!(n==="keydown"||n==="keyup"))return null;let t=c._normalizeKey(l.pop()),a="",i=l.indexOf("code");if(i>-1&&(l.splice(i,1),a="code."),C3.forEach(r=>{let f=l.indexOf(r);f>-1&&(l.splice(f,1),a+=r+".")}),a+=t,l.length!=0||t.length===0)return null;let u={};return u.domEventName=n,u.fullKey=a,u}static matchEventFullKeyCode(e,l){let n=i0[e.key]||e.key,t="";return l.indexOf("code.")>-1&&(n=e.code,t="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),C3.forEach(a=>{if(a!==n){let i=o0[a];i(e)&&(t+=a+".")}}),t+=n,t===l)}static eventCallback(e,l,n){return t=>{c.matchEventFullKeyCode(t,e)&&n.runGuarded(()=>l(t))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(l){return new(l||c)(d(x))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})();function V5(c,s){return s3(g2({rootComponent:c},f0(s)))}function f0(c){return{appProviders:[...d0,...c?.providers??[]],platformProviders:L0}}function u0(){Z2.makeCurrent()}function m0(){return new H2}function z0(){return O1(document),document}var L0=[{provide:t2,useValue:L3},{provide:B1,useValue:u0,multi:!0},{provide:x,useFactory:z0,deps:[]}];var d0=[{provide:_1,useValue:"root"},{provide:H2,useFactory:m0,deps:[]},{provide:X2,useClass:a0,multi:!0,deps:[x]},{provide:X2,useClass:r0,multi:!0,deps:[x]},M3,x3,g3,{provide:X1,useExisting:M3},{provide:b2,useClass:Q4,deps:[]},[]];var G5=(()=>{class c{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(l){return new(l||c)(d(x))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var c1=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:function(l){let n=null;return l?n=new(l||c):n=d(p0),n},providedIn:"root"})}return c})(),p0=(()=>{class c extends c1{_doc;constructor(e){super(),this._doc=e}sanitize(e,l){if(l==null)return null;switch(e){case U.NONE:return l;case U.HTML:return X(l,"HTML")?H(l):q1(this._doc,String(l)).toString();case U.STYLE:return X(l,"Style")?H(l):l;case U.SCRIPT:if(X(l,"Script"))return H(l);throw new B(5200,!1);case U.URL:return X(l,"URL")?H(l):W1(String(l));case U.RESOURCE_URL:if(X(l,"ResourceURL"))return H(l);throw new B(5201,!1);default:throw new B(5202,!1)}}bypassSecurityTrustHtml(e){return U1(e)}bypassSecurityTrustStyle(e){return j1(e)}bypassSecurityTrustScript(e){return $1(e)}bypassSecurityTrustUrl(e){return V1(e)}bypassSecurityTrustResourceUrl(e){return G1(e)}static \u0275fac=function(l){return new(l||c)(d(x))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function h0(c,s,e){return(s=g0(s))in c?Object.defineProperty(c,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[s]=e,c}function y3(c,s){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);s&&(l=l.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,l)}return e}function o(c){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?y3(Object(e),!0).forEach(function(l){h0(c,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):y3(Object(e)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(e,l))})}return c}function C0(c,s){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var l=e.call(c,s||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(c)}function g0(c){var s=C0(c,"string");return typeof s=="symbol"?s:s+""}var D3=()=>{},b1={},K3={},Q3=null,J3={mark:D3,measure:D3};try{typeof window<"u"&&(b1=window),typeof document<"u"&&(K3=document),typeof MutationObserver<"u"&&(Q3=MutationObserver),typeof performance<"u"&&(J3=performance)}catch{}var{userAgent:S3=""}=b1.navigator||{},R=b1,p=K3,w3=Q3,w2=J3,q5=!!R.document,E=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",c4=~S3.indexOf("MSIE")||~S3.indexOf("Trident/"),x0=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,N0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,e4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},b0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",T2="duotone",y0="sharp",D0="sharp-duotone",s4=[C,T2,y0,D0],S0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},w0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},A0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),v0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},k0=["fak","fa-kit","fakd","fa-kit-duotone"],A3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},E0=["kit"],F0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},T0=["fak","fakd"],P0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},v3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},A2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],I0=["fak","fa-kit","fakd","fa-kit-duotone"],_0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},O0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},B0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},a1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},H0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],i1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...R0,...H0],U0=["solid","regular","light","thin","duotone","brands"],n4=[1,2,3,4,5,6,7,8,9,10],j0=n4.concat([11,12,13,14,15,16,17,18,19,20]),$0=[...Object.keys(B0),...U0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A2.GROUP,A2.SWAP_OPACITY,A2.PRIMARY,A2.SECONDARY].concat(n4.map(c=>"".concat(c,"x"))).concat(j0.map(c=>"w-".concat(c))),V0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v="___FONT_AWESOME___",o1=16,t4="fa",a4="svg-inline--fa",G="data-fa-i2svg",r1="data-fa-pseudo-element",G0="data-fa-pseudo-element-pending",y1="data-prefix",D1="data-icon",k3="fontawesome-i2svg",W0="async",q0=["HTML","HEAD","STYLE","SCRIPT"],i4=(()=>{try{return!0}catch{return!1}})();function h2(c){return new Proxy(c,{get(s,e){return e in s?s[e]:s[C]}})}var o4=o({},e4);o4[C]=o(o(o(o({},{"fa-duotone":"duotone"}),e4[C]),A3.kit),A3["kit-duotone"]);var Y0=h2(o4),f1=o({},v0);f1[C]=o(o(o(o({},{duotone:"fad"}),f1[C]),v3.kit),v3["kit-duotone"]);var E3=h2(f1),u1=o({},a1);u1[C]=o(o({},u1[C]),P0.kit);var S1=h2(u1),m1=o({},O0);m1[C]=o(o({},m1[C]),F0.kit);var Y5=h2(m1),Z0=x0,r4="fa-layers-text",X0=N0,K0=o({},S0),Z5=h2(K0),Q0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],e1=b0,J0=[...E0,...$0],L2=R.FontAwesomeConfig||{};function c6(c){var s=p.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function e6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[e,l]=s,n=e6(c6(e));n!=null&&(L2[l]=n)});var f4={styleDefault:"solid",familyDefault:C,cssPrefix:t4,replacementClass:a4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};L2.familyPrefix&&(L2.cssPrefix=L2.familyPrefix);var c2=o(o({},f4),L2);c2.autoReplaceSvg||(c2.observeMutations=!1);var m={};Object.keys(f4).forEach(c=>{Object.defineProperty(m,c,{enumerable:!0,set:function(s){c2[c]=s,d2.forEach(e=>e(m))},get:function(){return c2[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(c){c2.cssPrefix=c,d2.forEach(s=>s(m))},get:function(){return c2.cssPrefix}});R.FontAwesomeConfig=m;var d2=[];function l6(c){return d2.push(c),()=>{d2.splice(d2.indexOf(c),1)}}var P=o1,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s6(c){if(!c||!E)return;let s=p.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let e=p.head.childNodes,l=null;for(let n=e.length-1;n>-1;n--){let t=e[n],a=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(l=t)}return p.head.insertBefore(s,l),c}var n6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p2(){let c=12,s="";for(;c-- >0;)s+=n6[Math.random()*62|0];return s}function e2(c){let s=[];for(let e=(c||[]).length>>>0;e--;)s[e]=c[e];return s}function w1(c){return c.classList?e2(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function u4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t6(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,'="').concat(u4(c[e]),'" '),"").trim()}function P2(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,": ").concat(c[e].trim(),";"),"")}function A1(c){return c.size!==S.size||c.x!==S.x||c.y!==S.y||c.rotate!==S.rotate||c.flipX||c.flipY}function a6(c){let{transform:s,containerWidth:e,iconWidth:l}=c,n={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(s.x*32,", ").concat(s.y*32,") "),a="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),i="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(t," ").concat(a," ").concat(i)},r={transform:"translate(".concat(l/2*-1," -256)")};return{outer:n,inner:u,path:r}}function i6(c){let{transform:s,width:e=o1,height:l=o1,startCentered:n=!1}=c,t="";return n&&c4?t+="translate(".concat(s.x/P-e/2,"em, ").concat(s.y/P-l/2,"em) "):n?t+="translate(calc(-50% + ".concat(s.x/P,"em), calc(-50% + ").concat(s.y/P,"em)) "):t+="translate(".concat(s.x/P,"em, ").concat(s.y/P,"em) "),t+="scale(".concat(s.size/P*(s.flipX?-1:1),", ").concat(s.size/P*(s.flipY?-1:1),") "),t+="rotate(".concat(s.rotate,"deg) "),t}var o6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function m4(){let c=t4,s=a4,e=m.cssPrefix,l=m.replacementClass,n=o6;if(e!==c||l!==s){let t=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(s),"g");n=n.replace(t,".".concat(e,"-")).replace(a,"--".concat(e,"-")).replace(i,".".concat(l))}return n}var F3=!1;function l1(){m.autoAddCss&&!F3&&(s6(m4()),F3=!0)}var r6={mixout(){return{dom:{css:m4,insertCss:l1}}},hooks(){return{beforeDOMElementCreation(){l1()},beforeI2svg(){l1()}}}},k=R||{};k[v]||(k[v]={});k[v].styles||(k[v].styles={});k[v].hooks||(k[v].hooks={});k[v].shims||(k[v].shims=[]);var w=k[v],z4=[],L4=function(){p.removeEventListener("DOMContentLoaded",L4),E2=1,z4.map(c=>c())},E2=!1;E&&(E2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),E2||p.addEventListener("DOMContentLoaded",L4));function f6(c){E&&(E2?setTimeout(c,0):z4.push(c))}function C2(c){let{tag:s,attributes:e={},children:l=[]}=c;return typeof c=="string"?u4(c):"<".concat(s," ").concat(t6(e),">").concat(l.map(C2).join(""),"</").concat(s,">")}function T3(c,s,e){if(c&&c[s]&&c[s][e])return{prefix:s,iconName:e,icon:c[s][e]}}var u6=function(s,e){return function(l,n,t,a){return s.call(e,l,n,t,a)}},s1=function(s,e,l,n){var t=Object.keys(s),a=t.length,i=n!==void 0?u6(e,n):e,u,r,f;for(l===void 0?(u=1,f=s[t[0]]):(u=0,f=l);u<a;u++)r=t[u],f=i(f,s[r],r,s);return f};function m6(c){let s=[],e=0,l=c.length;for(;e<l;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<l){let t=c.charCodeAt(e++);(t&64512)==56320?s.push(((n&1023)<<10)+(t&1023)+65536):(s.push(n),e--)}else s.push(n)}return s}function z1(c){let s=m6(c);return s.length===1?s[0].toString(16):null}function z6(c,s){let e=c.length,l=c.charCodeAt(s),n;return l>=55296&&l<=56319&&e>s+1&&(n=c.charCodeAt(s+1),n>=56320&&n<=57343)?(l-55296)*1024+n-56320+65536:l}function P3(c){return Object.keys(c).reduce((s,e)=>{let l=c[e];return!!l.icon?s[l.iconName]=l.icon:s[e]=l,s},{})}function L1(c,s){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:l=!1}=e,n=P3(s);typeof w.hooks.addPack=="function"&&!l?w.hooks.addPack(c,P3(s)):w.styles[c]=o(o({},w.styles[c]||{}),n),c==="fas"&&L1("fa",s)}var{styles:M2,shims:L6}=w,d4=Object.keys(S1),d6=d4.reduce((c,s)=>(c[s]=Object.keys(S1[s]),c),{}),v1=null,p4={},M4={},h4={},C4={},g4={};function p6(c){return~J0.indexOf(c)}function M6(c,s){let e=s.split("-"),l=e[0],n=e.slice(1).join("-");return l===c&&n!==""&&!p6(n)?n:null}var x4=()=>{let c=l=>s1(M2,(n,t,a)=>(n[a]=s1(t,l,{}),n),{});p4=c((l,n,t)=>(n[3]&&(l[n[3]]=t),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{l[i.toString(16)]=t}),l)),M4=c((l,n,t)=>(l[t]=t,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{l[i]=t}),l)),g4=c((l,n,t)=>{let a=n[2];return l[t]=t,a.forEach(i=>{l[i]=t}),l});let s="far"in M2||m.autoFetchSvg,e=s1(L6,(l,n)=>{let t=n[0],a=n[1],i=n[2];return a==="far"&&!s&&(a="fas"),typeof t=="string"&&(l.names[t]={prefix:a,iconName:i}),typeof t=="number"&&(l.unicodes[t.toString(16)]={prefix:a,iconName:i}),l},{names:{},unicodes:{}});h4=e.names,C4=e.unicodes,v1=R2(m.styleDefault,{family:m.familyDefault})};l6(c=>{v1=R2(c.styleDefault,{family:m.familyDefault})});x4();function k1(c,s){return(p4[c]||{})[s]}function h6(c,s){return(M4[c]||{})[s]}function V(c,s){return(g4[c]||{})[s]}function N4(c){return h4[c]||{prefix:null,iconName:null}}function C6(c){let s=C4[c],e=k1("fas",c);return s||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function I(){return v1}var b4=()=>({prefix:null,iconName:null,rest:[]});function g6(c){let s=C,e=d4.reduce((l,n)=>(l[n]="".concat(m.cssPrefix,"-").concat(n),l),{});return s4.forEach(l=>{(c.includes(e[l])||c.some(n=>d6[l].includes(n)))&&(s=l)}),s}function R2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=C}=s,l=Y0[e][c];if(e===T2&&!c)return"fad";let n=E3[e][c]||E3[e][l],t=c in w.styles?c:null;return n||t||null}function x6(c){let s=[],e=null;return c.forEach(l=>{let n=M6(m.cssPrefix,l);n?e=n:l&&s.push(l)}),{iconName:e,rest:s}}function R3(c){return c.sort().filter((s,e,l)=>l.indexOf(s)===e)}function I2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=s,l=null,n=i1.concat(I0),t=R3(c.filter(L=>n.includes(L))),a=R3(c.filter(L=>!i1.includes(L))),i=t.filter(L=>(l=L,!l4.includes(L))),[u=null]=i,r=g6(t),f=o(o({},x6(a)),{},{prefix:R2(u,{family:r})});return o(o(o({},f),D6({values:c,family:r,styles:M2,config:m,canonical:f,givenPrefix:l})),N6(e,l,f))}function N6(c,s,e){let{prefix:l,iconName:n}=e;if(c||!l||!n)return{prefix:l,iconName:n};let t=s==="fa"?N4(n):{},a=V(l,n);return n=t.iconName||a||n,l=t.prefix||l,l==="far"&&!M2.far&&M2.fas&&!m.autoFetchSvg&&(l="fas"),{prefix:l,iconName:n}}var b6=s4.filter(c=>c!==C||c!==T2),y6=Object.keys(a1).filter(c=>c!==C).map(c=>Object.keys(a1[c])).flat();function D6(c){let{values:s,family:e,canonical:l,givenPrefix:n="",styles:t={},config:a={}}=c,i=e===T2,u=s.includes("fa-duotone")||s.includes("fad"),r=a.familyDefault==="duotone",f=l.prefix==="fad"||l.prefix==="fa-duotone";if(!i&&(u||r||f)&&(l.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(l.prefix="fab"),!l.prefix&&b6.includes(e)&&(Object.keys(t).find(z=>y6.includes(z))||a.autoFetchSvg)){let z=A0.get(e).defaultShortPrefixId;l.prefix=z,l.iconName=V(l.prefix,l.iconName)||l.iconName}return(l.prefix==="fa"||n==="fa")&&(l.prefix=I()||"fas"),l}var d1=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,e=new Array(s),l=0;l<s;l++)e[l]=arguments[l];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(t=>{this.definitions[t]=o(o({},this.definitions[t]||{}),n[t]),L1(t,n[t]);let a=S1[C][t];a&&L1(a,n[t]),x4()})}reset(){this.definitions={}}_pullDefinitions(s,e){let l=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(l).map(n=>{let{prefix:t,iconName:a,icon:i}=l[n],u=i[2];s[t]||(s[t]={}),u.length>0&&u.forEach(r=>{typeof r=="string"&&(s[t][r]=i)}),s[t][a]=i}),s}},I3=[],Q={},J={},S6=Object.keys(J);function w6(c,s){let{mixoutsTo:e}=s;return I3=c,Q={},Object.keys(J).forEach(l=>{S6.indexOf(l)===-1&&delete J[l]}),I3.forEach(l=>{let n=l.mixout?l.mixout():{};if(Object.keys(n).forEach(t=>{typeof n[t]=="function"&&(e[t]=n[t]),typeof n[t]=="object"&&Object.keys(n[t]).forEach(a=>{e[t]||(e[t]={}),e[t][a]=n[t][a]})}),l.hooks){let t=l.hooks();Object.keys(t).forEach(a=>{Q[a]||(Q[a]=[]),Q[a].push(t[a])})}l.provides&&l.provides(J)}),e}function p1(c,s){for(var e=arguments.length,l=new Array(e>2?e-2:0),n=2;n<e;n++)l[n-2]=arguments[n];return(Q[c]||[]).forEach(a=>{s=a.apply(null,[s,...l])}),s}function W(c){for(var s=arguments.length,e=new Array(s>1?s-1:0),l=1;l<s;l++)e[l-1]=arguments[l];(Q[c]||[]).forEach(t=>{t.apply(null,e)})}function _(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return J[c]?J[c].apply(null,s):void 0}function M1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,e=c.prefix||I();if(s)return s=V(e,s)||s,T3(y4.definitions,e,s)||T3(w.styles,e,s)}var y4=new d1,A6=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},v6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(W("beforeI2svg",c),_("pseudoElements2svg",c),_("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,f6(()=>{E6({autoReplaceSvgRoot:s}),W("watch",c)})}},k6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:V(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=R2(c[0]);return{prefix:e,iconName:V(e,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(m.cssPrefix,"-"))>-1||c.match(Z0))){let s=I2(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||I(),iconName:V(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=I();return{prefix:s,iconName:V(s,c)||c}}}},b={noAuto:A6,config:m,dom:v6,parse:k6,library:y4,findIconDefinition:M1,toHtml:C2},E6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=p}=c;(Object.keys(w.styles).length>0||m.autoFetchSvg)&&E&&m.autoReplaceSvg&&b.dom.i2svg({node:s})};function _2(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>C2(e))}}),Object.defineProperty(c,"node",{get:function(){if(!E)return;let e=p.createElement("div");return e.innerHTML=c.html,e.children}}),c}function F6(c){let{children:s,main:e,mask:l,attributes:n,styles:t,transform:a}=c;if(A1(a)&&e.found&&!l.found){let{width:i,height:u}=e,r={x:i/u/2,y:.5};n.style=P2(o(o({},t),{},{"transform-origin":"".concat(r.x+a.x/16,"em ").concat(r.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:s}]}function T6(c){let{prefix:s,iconName:e,children:l,attributes:n,symbol:t}=c,a=t===!0?"".concat(s,"-").concat(m.cssPrefix,"-").concat(e):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},n),{},{id:a}),children:l}]}]}function E1(c){let{icons:{main:s,mask:e},prefix:l,iconName:n,transform:t,symbol:a,title:i,maskId:u,titleId:r,extra:f,watchable:L=!1}=c,{width:z,height:M}=e.found?e:s,F=T0.includes(l),O=[m.replacementClass,n?"".concat(m.cssPrefix,"-").concat(n):""].filter(Y=>f.classes.indexOf(Y)===-1).filter(Y=>Y!==""||!!Y).concat(f.classes).join(" "),y={children:[],attributes:o(o({},f.attributes),{},{"data-prefix":l,"data-icon":n,class:O,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(M)})},A=F&&!~f.classes.indexOf("fa-fw")?{width:"".concat(z/M*16*.0625,"em")}:{};L&&(y.attributes[G]=""),i&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(r||p2())},children:[i]}),delete y.attributes.title);let N=o(o({},y),{},{prefix:l,iconName:n,main:s,mask:e,maskId:u,transform:t,symbol:a,styles:o(o({},A),f.styles)}),{children:D,attributes:q}=e.found&&s.found?_("generateAbstractMask",N)||{children:[],attributes:{}}:_("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=D,N.attributes=q,a?T6(N):F6(N)}function _3(c){let{content:s,width:e,height:l,transform:n,title:t,extra:a,watchable:i=!1}=c,u=o(o(o({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")});i&&(u[G]="");let r=o({},a.styles);A1(n)&&(r.transform=i6({transform:n,startCentered:!0,width:e,height:l}),r["-webkit-transform"]=r.transform);let f=P2(r);f.length>0&&(u.style=f);let L=[];return L.push({tag:"span",attributes:u,children:[s]}),t&&L.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),L}function P6(c){let{content:s,title:e,extra:l}=c,n=o(o(o({},l.attributes),e?{title:e}:{}),{},{class:l.classes.join(" ")}),t=P2(l.styles);t.length>0&&(n.style=t);let a=[];return a.push({tag:"span",attributes:n,children:[s]}),e&&a.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),a}var{styles:n1}=w;function h1(c){let s=c[0],e=c[1],[l]=c.slice(4),n=null;return Array.isArray(l)?n={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.PRIMARY),fill:"currentColor",d:l[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:s,height:e,icon:n}}var R6={found:!1,width:512,height:512};function I6(c,s){!i4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function C1(c,s){let e=s;return s==="fa"&&m.styleDefault!==null&&(s=I()),new Promise((l,n)=>{if(e==="fa"){let t=N4(c)||{};c=t.iconName||c,s=t.prefix||s}if(c&&s&&n1[s]&&n1[s][c]){let t=n1[s][c];return l(h1(t))}I6(c,s),l(o(o({},R6),{},{icon:m.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var O3=()=>{},g1=m.measurePerformance&&w2&&w2.mark&&w2.measure?w2:{mark:O3,measure:O3},z2='FA "6.7.2"',_6=c=>(g1.mark("".concat(z2," ").concat(c," begins")),()=>D4(c)),D4=c=>{g1.mark("".concat(z2," ").concat(c," ends")),g1.measure("".concat(z2," ").concat(c),"".concat(z2," ").concat(c," begins"),"".concat(z2," ").concat(c," ends"))},F1={begin:_6,end:D4},v2=()=>{};function B3(c){return typeof(c.getAttribute?c.getAttribute(G):null)=="string"}function O6(c){let s=c.getAttribute?c.getAttribute(y1):null,e=c.getAttribute?c.getAttribute(D1):null;return s&&e}function B6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function H6(){return m.autoReplaceSvg===!0?k2.replace:k2[m.autoReplaceSvg]||k2.replace}function U6(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function j6(c){return p.createElement(c)}function S4(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?U6:j6}=s;if(typeof c=="string")return p.createTextNode(c);let l=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(t){l.setAttribute(t,c.attributes[t])}),(c.children||[]).forEach(function(t){l.appendChild(S4(t,{ceFn:e}))}),l}function $6(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var k2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(e=>{s.parentNode.insertBefore(S4(e),s)}),s.getAttribute(G)===null&&m.keepOriginalSource){let e=p.createComment($6(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(c){let s=c[0],e=c[1];if(~w1(s).indexOf(m.replacementClass))return k2.replace(c);let l=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let t=e[0].attributes.class.split(" ").reduce((a,i)=>(i===m.replacementClass||i.match(l)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});e[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",t.toNode.join(" "))}let n=e.map(t=>C2(t)).join(`
`);s.setAttribute(G,""),s.innerHTML=n}};function H3(c){c()}function w4(c,s){let e=typeof s=="function"?s:v2;if(c.length===0)e();else{let l=H3;m.mutateApproach===W0&&(l=R.requestAnimationFrame||H3),l(()=>{let n=H6(),t=F1.begin("mutate");c.map(n),t(),e()})}}var T1=!1;function A4(){T1=!0}function x1(){T1=!1}var F2=null;function U3(c){if(!w3||!m.observeMutations)return;let{treeCallback:s=v2,nodeCallback:e=v2,pseudoElementsCallback:l=v2,observeMutationsRoot:n=p}=c;F2=new w3(t=>{if(T1)return;let a=I();e2(t).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!B3(i.addedNodes[0])&&(m.searchPseudoElements&&l(i.target),s(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&l(i.target.parentNode),i.type==="attributes"&&B3(i.target)&&~Q0.indexOf(i.attributeName))if(i.attributeName==="class"&&O6(i.target)){let{prefix:u,iconName:r}=I2(w1(i.target));i.target.setAttribute(y1,u||a),r&&i.target.setAttribute(D1,r)}else B6(i.target)&&e(i.target)})}),E&&F2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function V6(){F2&&F2.disconnect()}function G6(c){let s=c.getAttribute("style"),e=[];return s&&(e=s.split(";").reduce((l,n)=>{let t=n.split(":"),a=t[0],i=t.slice(1);return a&&i.length>0&&(l[a]=i.join(":").trim()),l},{})),e}function W6(c){let s=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",n=I2(w1(c));return n.prefix||(n.prefix=I()),s&&e&&(n.prefix=s,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&l.length>0&&(n.iconName=h6(n.prefix,c.innerText)||k1(n.prefix,z1(c.innerText))),!n.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function q6(c){let s=e2(c.attributes).reduce((n,t)=>(n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n),{}),e=c.getAttribute("title"),l=c.getAttribute("data-fa-title-id");return m.autoA11y&&(e?s["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||p2()):(s["aria-hidden"]="true",s.focusable="false")),s}function Y6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:l,rest:n}=W6(c),t=q6(c),a=p1("parseNodeAttributes",{},c),i=s.styleParser?G6(c):[];return o({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:l,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:t}},a)}var{styles:Z6}=w;function v4(c){let s=m.autoReplaceSvg==="nest"?j3(c,{styleParser:!1}):j3(c);return~s.extra.classes.indexOf(r4)?_("generateLayersText",c,s):_("generateSvgReplacementMutation",c,s)}function X6(){return[...k0,...i1]}function $3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();let e=p.documentElement.classList,l=f=>e.add("".concat(k3,"-").concat(f)),n=f=>e.remove("".concat(k3,"-").concat(f)),t=m.autoFetchSvg?X6():l4.concat(Object.keys(Z6));t.includes("fa")||t.push("fa");let a=[".".concat(r4,":not([").concat(G,"])")].concat(t.map(f=>".".concat(f,":not([").concat(G,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=e2(c.querySelectorAll(a))}catch{}if(i.length>0)l("pending"),n("complete");else return Promise.resolve();let u=F1.begin("onTree"),r=i.reduce((f,L)=>{try{let z=v4(L);z&&f.push(z)}catch(z){i4||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise((f,L)=>{Promise.all(r).then(z=>{w4(z,()=>{l("active"),l("complete"),n("pending"),typeof s=="function"&&s(),u(),f()})}).catch(z=>{u(),L(z)})})}function K6(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;v4(c).then(e=>{e&&w4([e],s)})}function Q6(c){return function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(s||{}).icon?s:M1(s||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:M1(n||{})),c(l,o(o({},e),{},{mask:n}))}}var J6=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=S,symbol:l=!1,mask:n=null,maskId:t=null,title:a=null,titleId:i=null,classes:u=[],attributes:r={},styles:f={}}=s;if(!c)return;let{prefix:L,iconName:z,icon:M}=c;return _2(o({type:"icon"},c),()=>(W("beforeDOMElementCreation",{iconDefinition:c,params:s}),m.autoA11y&&(a?r["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||p2()):(r["aria-hidden"]="true",r.focusable="false")),E1({icons:{main:h1(M),mask:n?h1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:z,transform:o(o({},S),e),symbol:l,title:a,maskId:t,titleId:i,extra:{attributes:r,styles:f,classes:u}})))},c8={mixout(){return{icon:Q6(J6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=$3,c.nodeCallback=K6,c}}},provides(c){c.i2svg=function(s){let{node:e=p,callback:l=()=>{}}=s;return $3(e,l)},c.generateSvgReplacementMutation=function(s,e){let{iconName:l,title:n,titleId:t,prefix:a,transform:i,symbol:u,mask:r,maskId:f,extra:L}=e;return new Promise((z,M)=>{Promise.all([C1(l,a),r.iconName?C1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(F=>{let[O,y]=F;z([s,E1({icons:{main:O,mask:y},prefix:a,iconName:l,transform:i,symbol:u,maskId:f,title:n,titleId:t,extra:L,watchable:!0})])}).catch(M)})},c.generateAbstractIcon=function(s){let{children:e,attributes:l,main:n,transform:t,styles:a}=s,i=P2(a);i.length>0&&(l.style=i);let u;return A1(t)&&(u=_("generateAbstractTransformGrouping",{main:n,transform:t,containerWidth:n.width,iconWidth:n.width})),e.push(u||n.icon),{children:e,attributes:l}}}},e8={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=s;return _2({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:c,params:s});let l=[];return c(n=>{Array.isArray(n)?n.map(t=>{l=l.concat(t.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...e].join(" ")},children:l}]})}}}},l8={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:l=[],attributes:n={},styles:t={}}=s;return _2({type:"counter",content:c},()=>(W("beforeDOMElementCreation",{content:c,params:s}),P6({content:c.toString(),title:e,extra:{attributes:n,styles:t,classes:["".concat(m.cssPrefix,"-layers-counter"),...l]}})))}}}},s8={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=S,title:l=null,classes:n=[],attributes:t={},styles:a={}}=s;return _2({type:"text",content:c},()=>(W("beforeDOMElementCreation",{content:c,params:s}),_3({content:c,transform:o(o({},S),e),title:l,extra:{attributes:t,styles:a,classes:["".concat(m.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(s,e){let{title:l,transform:n,extra:t}=e,a=null,i=null;if(c4){let u=parseInt(getComputedStyle(s).fontSize,10),r=s.getBoundingClientRect();a=r.width/u,i=r.height/u}return m.autoA11y&&!l&&(t.attributes["aria-hidden"]="true"),Promise.resolve([s,_3({content:s.innerHTML,width:a,height:i,transform:n,title:l,extra:t,watchable:!0})])}}},n8=new RegExp('"',"ug"),V3=[1105920,1112319],G3=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),w0),V0),_0),N1=Object.keys(G3).reduce((c,s)=>(c[s.toLowerCase()]=G3[s],c),{}),t8=Object.keys(N1).reduce((c,s)=>{let e=N1[s];return c[s]=e[900]||[...Object.entries(e)][0][1],c},{});function a8(c){let s=c.replace(n8,""),e=z6(s,0),l=e>=V3[0]&&e<=V3[1],n=s.length===2?s[0]===s[1]:!1;return{value:z1(n?s[0]:s),isSecondary:l||n}}function i8(c,s){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(s),n=isNaN(l)?"normal":l;return(N1[e]||{})[n]||t8[e]}function W3(c,s){let e="".concat(G0).concat(s.replace(":","-"));return new Promise((l,n)=>{if(c.getAttribute(e)!==null)return l();let a=e2(c.children).filter(z=>z.getAttribute(r1)===s)[0],i=R.getComputedStyle(c,s),u=i.getPropertyValue("font-family"),r=u.match(X0),f=i.getPropertyValue("font-weight"),L=i.getPropertyValue("content");if(a&&!r)return c.removeChild(a),l();if(r&&L!=="none"&&L!==""){let z=i.getPropertyValue("content"),M=i8(u,f),{value:F,isSecondary:O}=a8(z),y=r[0].startsWith("FontAwesome"),A=k1(M,F),N=A;if(y){let D=C6(F);D.iconName&&D.prefix&&(A=D.iconName,M=D.prefix)}if(A&&!O&&(!a||a.getAttribute(y1)!==M||a.getAttribute(D1)!==N)){c.setAttribute(e,N),a&&c.removeChild(a);let D=Y6(),{extra:q}=D;q.attributes[r1]=s,C1(A,M).then(Y=>{let I4=E1(o(o({},D),{},{icons:{main:Y,mask:b4()},prefix:M,iconName:N,extra:q,watchable:!0})),O2=p.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(O2,c.firstChild):c.appendChild(O2),O2.outerHTML=I4.map(_4=>C2(_4)).join(`
`),c.removeAttribute(e),l()}).catch(n)}else l()}else l()})}function o8(c){return Promise.all([W3(c,"::before"),W3(c,"::after")])}function r8(c){return c.parentNode!==document.head&&!~q0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function q3(c){if(E)return new Promise((s,e)=>{let l=e2(c.querySelectorAll("*")).filter(r8).map(o8),n=F1.begin("searchPseudoElements");A4(),Promise.all(l).then(()=>{n(),x1(),s()}).catch(()=>{n(),x1(),e()})})}var f8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=q3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:e=p}=s;m.searchPseudoElements&&q3(e)}}},Y3=!1,u8={mixout(){return{dom:{unwatch(){A4(),Y3=!0}}}},hooks(){return{bootstrap(){U3(p1("mutationObserverCallbacks",{}))},noAuto(){V6()},watch(c){let{observeMutationsRoot:s}=c;Y3?x1():U3(p1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Z3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,l)=>{let n=l.toLowerCase().split("-"),t=n[0],a=n.slice(1).join("-");if(t&&a==="h")return e.flipX=!0,e;if(t&&a==="v")return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(t){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a;break}return e},s)},m8={mixout(){return{parse:{transform:c=>Z3(c)}}},hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-transform");return e&&(c.transform=Z3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:e,transform:l,containerWidth:n,iconWidth:t}=s,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),u="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(i," ").concat(u," ").concat(r)},L={transform:"translate(".concat(t/2*-1," -256)")},z={outer:a,inner:f,path:L};return{tag:"g",attributes:o({},z.outer),children:[{tag:"g",attributes:o({},z.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),z.path)}]}]}}}},t1={x:0,y:0,width:"100%",height:"100%"};function X3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function z8(c){return c.tag==="g"?c.children:[c]}var L8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-mask"),l=e?I2(e.split(" ").map(n=>n.trim())):b4();return l.prefix||(l.prefix=I()),c.mask=l,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:e,attributes:l,main:n,mask:t,maskId:a,transform:i}=s,{width:u,icon:r}=n,{width:f,icon:L}=t,z=a6({transform:i,containerWidth:f,iconWidth:u}),M={tag:"rect",attributes:o(o({},t1),{},{fill:"white"})},F=r.children?{children:r.children.map(X3)}:{},O={tag:"g",attributes:o({},z.inner),children:[X3(o({tag:r.tag,attributes:o(o({},r.attributes),z.path)},F))]},y={tag:"g",attributes:o({},z.outer),children:[O]},A="mask-".concat(a||p2()),N="clip-".concat(a||p2()),D={tag:"mask",attributes:o(o({},t1),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:z8(L)},D]};return e.push(q,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(A,")")},t1)}),{children:e,attributes:l}}}},d8={provides(c){let s=!1;R.matchMedia&&(s=R.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],l={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let t=o(o({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:o(o({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||a.children.push({tag:"animate",attributes:o(o({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},t),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:o(o({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:o(o({},t),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:o(o({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},p8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-symbol"),l=e===null?!1:e===""?!0:e;return c.symbol=l,c}}}},M8=[r6,c8,e8,l8,s8,f8,u8,m8,L8,d8,p8];w6(M8,{mixoutsTo:b});var X5=b.noAuto,k4=b.config,K5=b.library,E4=b.dom,F4=b.parse,Q5=b.findIconDefinition,J5=b.toHtml,T4=b.icon,c7=b.layer,h8=b.text,C8=b.counter;var g8=["*"],x8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},N8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},R4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),b8=c=>{let s=R4(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:s,"fa-rotate-by":c.rotate!=null&&!s,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(l=>e[l]?l:null).filter(l=>l)},P1=new WeakSet,P4="fa-auto-css";function y8(c,s){if(!s.autoAddCss||P1.has(c))return;if(c.getElementById(P4)!=null){s.autoAddCss=!1,P1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",P4),e.innerHTML=E4.css();let l=c.head.childNodes,n=null;for(let t=l.length-1;t>-1;t--){let a=l[t],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}c.head.insertBefore(e,n),s.autoAddCss=!1,P1.add(c)}var D8=c=>c.prefix!==void 0&&c.iconName!==void 0,S8=(c,s)=>D8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:s,iconName:c},w8=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){k4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),A8=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let l of e){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let n of l.icon[2])typeof n=="string"&&(this.definitions[l.prefix][n]=l)}}addIconPacks(...e){for(let l of e){let n=Object.keys(l).map(t=>l[t]);this.addIcons(...n)}}getIconDefinition(e,l){return e in this.definitions&&l in this.definitions[e]?this.definitions[e][l]:null}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),v8=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275dir=r2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[s2]})}}return c})(),k8=(()=>{class c{constructor(e,l){this.renderer=e,this.elementRef=l}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(l){return new(l||c)(g(i2),g(n2))}}static{this.\u0275cmp=$2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[s2],ngContentSelectors:g8,decls:1,vars:0,template:function(l,n){l&1&&(c3(),e3(0))},encapsulation:2})}}return c})(),d7=(()=>{class c{constructor(e,l,n,t,a){this.sanitizer=e,this.config=l,this.iconLibrary=n,this.stackItem=t,this.document=T(x),a!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){N8();return}if(e){let l=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(l!=null){let n=this.buildParams();y8(this.document,this.config);let t=T4(l,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(t.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let l=S8(e,this.config.defaultPrefix);if("icon"in l)return l;let n=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return n??(x8(l),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},l=typeof this.transform=="string"?F4.transform(this.transform):this.transform,n={};return e.rotate!=null&&!R4(e.rotate)&&(n["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:l,classes:b8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:n}}static{this.\u0275fac=function(l){return new(l||c)(g(c1),g(w8),g(A8),g(v8,8),g(k8,8))}}static{this.\u0275cmp=$2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,n){l&2&&(J1("innerHTML",n.renderedIconHTML,Y1),Q1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[s2],decls:0,vars:0,template:function(l,n){},encapsulation:2})}}return c})();var p7=(()=>{class c{static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275mod=o2({type:c})}static{this.\u0275inj=l2({})}}return c})();var h7={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var C7={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var E8={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},g7=E8;var x7={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};var N7={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};export{G2 as a,V4 as b,d5 as c,p5 as d,Y4 as e,V5 as f,G5 as g,d7 as h,p7 as i,h7 as j,C7 as k,g7 as l,x7 as m,N7 as n};
