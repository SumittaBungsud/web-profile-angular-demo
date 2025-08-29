import{Ea as X,Fa as Z1,Ga as X1,Ha as g2,Ia as D,J as B,Ja as K1,K as I1,L as h,M as l2,Ma as $2,Na as a2,O as Y,Oa as x2,Q as d,R as T,T as _1,Va as Q1,W as s2,a as M2,b as B2,ea as h2,fa as H2,fb as J1,ha as C2,i as R1,ia as O1,ib as c3,ja as U2,jb as e3,ka as B1,la as n2,ma as j2,na as H1,oa as t2,pa as H,qa as Z,ra as U1,sa as j1,ta as $1,ua as V1,va as G1,vb as l3,wa as W1,xa as q1,ya as U,za as Y1}from"./chunk-IAXE4VGL.js";var o3=null;function K(){return o3}function r3(c){o3??=c}var N2=class{};var g=new Y(""),f3=(()=>{class c{historyGo(e){throw new Error("")}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>T(H4),providedIn:"platform"})}return c})();var H4=(()=>{class c extends f3{_location;_history;_doc=T(g);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return K().getBaseHref(this._doc)}onPopState(e){let l=K().getGlobalEventTarget(this._doc,"window");return l.addEventListener("popstate",e,!1),()=>l.removeEventListener("popstate",e)}onHashChange(e){let l=K().getGlobalEventTarget(this._doc,"window");return l.addEventListener("hashchange",e,!1),()=>l.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,l,n){this._history.pushState(e,l,n)}replaceState(e,l,n){this._history.replaceState(e,l,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>new c,providedIn:"platform"})}return c})();function u3(c,s){return c?s?c.endsWith("/")?s.startsWith("/")?c+s.slice(1):c+s:s.startsWith("/")?c+s:`${c}/${s}`:c:s}function s3(c){let s=c.match(/#|\?|$/),e=s&&s.index||c.length,l=e-(c[e-1]==="/"?1:0);return c.slice(0,l)+c.slice(e)}function j(c){return c&&c[0]!=="?"?"?"+c:c}var G2=(()=>{class c{historyGo(e){throw new Error("")}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:()=>T(j4),providedIn:"root"})}return c})(),U4=new Y(""),j4=(()=>{class c extends G2{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,l){super(),this._platformLocation=e,this._baseHref=l??this._platformLocation.getBaseHrefFromDOM()??T(g).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return u3(this._baseHref,e)}path(e=!1){let l=this._platformLocation.pathname+j(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${l}${n}`:l}pushState(e,l,n,t){let a=this.prepareExternalUrl(n+j(t));this._platformLocation.pushState(e,l,a)}replaceState(e,l,n,t){let a=this.prepareExternalUrl(n+j(t));this._platformLocation.replaceState(e,l,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(l){return new(l||c)(d(f3),d(U4,8))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var $4=(()=>{class c{_subject=new R1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let l=this._locationStrategy.getBaseHref();this._basePath=W4(s3(n3(l))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,l=""){return this.path()==this.normalize(e+j(l))}normalize(e){return c.stripTrailingSlash(G4(this._basePath,n3(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,l="",n=null){this._locationStrategy.pushState(n,"",e,l),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+j(l)),n)}replaceState(e,l="",n=null){this._locationStrategy.replaceState(n,"",e,l),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+j(l)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(l=>{this._notifyUrlChangeListeners(l.url,l.state)}),()=>{let l=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(l,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",l){this._urlChangeListeners.forEach(n=>n(e,l))}subscribe(e,l,n){return this._subject.subscribe({next:e,error:l??void 0,complete:n??void 0})}static normalizeQueryParams=j;static joinWithSlash=u3;static stripTrailingSlash=s3;static \u0275fac=function(l){return new(l||c)(d(G2))};static \u0275prov=h({token:c,factory:()=>V4(),providedIn:"root"})}return c})();function V4(){return new $4(d(G2))}function G4(c,s){if(!c||!s.startsWith(c))return s;let e=s.substring(c.length);return e===""||["/",";","?","#"].includes(e[0])?e:s}function n3(c){return c.replace(/\/index.html$/,"")}function W4(c){if(new RegExp("^(https?:)?//").test(c)){let[,e]=c.split(/\/\/[^\/]+/);return e}return c}function m3(c,s){s=encodeURIComponent(s);for(let e of c.split(";")){let l=e.indexOf("="),[n,t]=l==-1?[e,""]:[e.slice(0,l),e.slice(l+1)];if(n.trim()===s)return decodeURIComponent(t)}return null}var d5=(()=>{class c{_viewContainer;_context=new V2;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,l){this._viewContainer=e,this._thenTemplateRef=l}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){t3("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){t3("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,l){return!0}static \u0275fac=function(l){return new(l||c)(D(K1),D(Z1))};static \u0275dir=x2({type:c,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return c})(),V2=class{$implicit=null;ngIf=null};function t3(c,s){if(!!!(!s||s.createEmbeddedView))throw new Error(`${c} must be a TemplateRef, but received '${I1(s)}'.`)}var q4=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=a2({type:c});static \u0275inj=l2({})}return c})(),z3="browser",Y4="server";function W2(c){return c===Y4}var b2=class{};var Y2=class extends N2{supportsDOMEvents=!0},Z2=class c extends Y2{static makeCurrent(){r3(new c)}onAndCancel(s,e,l,n){return s.addEventListener(e,l,n),()=>{s.removeEventListener(e,l,n)}}dispatchEvent(s,e){s.dispatchEvent(e)}remove(s){s.remove()}createElement(s,e){return e=e||this.getDefaultDocument(),e.createElement(s)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(s){return s.nodeType===Node.ELEMENT_NODE}isShadowRoot(s){return s instanceof DocumentFragment}getGlobalEventTarget(s,e){return e==="window"?window:e==="document"?s:e==="body"?s.body:null}getBaseHref(s){let e=Z4();return e==null?null:X4(e)}resetBaseElement(){i2=null}getUserAgent(){return window.navigator.userAgent}getCookie(s){return m3(document.cookie,s)}},i2=null;function Z4(){return i2=i2||document.querySelector("base"),i2?i2.getAttribute("href"):null}function X4(c){return new URL(c,document.baseURI).pathname}var K4=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),X2=new Y(""),C3=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,l){this._zone=l,e.forEach(n=>{n.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,l,n,t){return this._findPluginFor(l).addEventListener(e,l,n,t)}getZone(){return this._zone}_findPluginFor(e){let l=this._eventNameToPlugin.get(e);if(l)return l;if(l=this._plugins.find(t=>t.supports(e)),!l)throw new B(5101,!1);return this._eventNameToPlugin.set(e,l),l}static \u0275fac=function(l){return new(l||c)(d(X2),d(h2))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),D2=class{_doc;constructor(s){this._doc=s}manager},y2="ng-app-id";function L3(c){for(let s of c)s.remove()}function d3(c,s){let e=s.createElement("style");return e.textContent=c,e}function Q4(c,s,e,l){let n=c.head?.querySelectorAll(`style[${y2}="${s}"],link[${y2}="${s}"]`);if(n)for(let t of n)t.removeAttribute(y2),t instanceof HTMLLinkElement?l.set(t.href.slice(t.href.lastIndexOf("/")+1),{usage:0,elements:[t]}):t.textContent&&e.set(t.textContent,{usage:0,elements:[t]})}function K2(c,s){let e=s.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",c),e}var g3=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,l,n,t={}){this.doc=e,this.appId=l,this.nonce=n,this.isServer=W2(t),Q4(e,l,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,l){for(let n of e)this.addUsage(n,this.inline,d3);l?.forEach(n=>this.addUsage(n,this.external,K2))}removeStyles(e,l){for(let n of e)this.removeUsage(n,this.inline);l?.forEach(n=>this.removeUsage(n,this.external))}addUsage(e,l,n){let t=l.get(e);t?t.usage++:l.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(e,this.doc)))})}removeUsage(e,l){let n=l.get(e);n&&(n.usage--,n.usage<=0&&(L3(n.elements),l.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])L3(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[l,{elements:n}]of this.inline)n.push(this.addElement(e,d3(l,this.doc)));for(let[l,{elements:n}]of this.external)n.push(this.addElement(e,K2(l,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,l){return this.nonce&&l.setAttribute("nonce",this.nonce),this.isServer&&l.setAttribute(y2,this.appId),e.appendChild(l)}static \u0275fac=function(l){return new(l||c)(d(g),d(U2),d(j2,8),d(n2))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),q2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},J2=/%COMP%/g;var x3="%COMP%",J4=`_nghost-${x3}`,c0=`_ngcontent-${x3}`,e0=!0,l0=new Y("",{providedIn:"root",factory:()=>e0});function s0(c){return c0.replace(J2,c)}function n0(c){return J4.replace(J2,c)}function N3(c,s){return s.map(e=>e.replace(J2,c))}var p3=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,l,n,t,a,i,u,r=null,f=null){this.eventManager=e,this.sharedStylesHost=l,this.appId=n,this.removeStylesOnCompDestroy=t,this.doc=a,this.platformId=i,this.ngZone=u,this.nonce=r,this.tracingService=f,this.platformIsServer=W2(i),this.defaultRenderer=new o2(e,a,u,this.platformIsServer,this.tracingService)}createRenderer(e,l){if(!e||!l)return this.defaultRenderer;this.platformIsServer&&l.encapsulation===t2.ShadowDom&&(l=B2(M2({},l),{encapsulation:t2.Emulated}));let n=this.getOrCreateRenderer(e,l);return n instanceof S2?n.applyToHost(e):n instanceof r2&&n.applyStyles(),n}getOrCreateRenderer(e,l){let n=this.rendererByCompId,t=n.get(l.id);if(!t){let a=this.doc,i=this.ngZone,u=this.eventManager,r=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,L=this.platformIsServer,z=this.tracingService;switch(l.encapsulation){case t2.Emulated:t=new S2(u,r,l,this.appId,f,a,i,L,z);break;case t2.ShadowDom:return new Q2(u,r,e,l,a,i,this.nonce,L,z);default:t=new r2(u,r,l,f,a,i,L,z);break}n.set(l.id,t)}return t}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(l){return new(l||c)(d(C3),d(g3),d(U2),d(l0),d(g),d(n2),d(h2),d(j2),d(H1,8))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),o2=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(s,e,l,n,t){this.eventManager=s,this.doc=e,this.ngZone=l,this.platformIsServer=n,this.tracingService=t}destroy(){}destroyNode=null;createElement(s,e){return e?this.doc.createElementNS(q2[e]||e,s):this.doc.createElement(s)}createComment(s){return this.doc.createComment(s)}createText(s){return this.doc.createTextNode(s)}appendChild(s,e){(M3(s)?s.content:s).appendChild(e)}insertBefore(s,e,l){s&&(M3(s)?s.content:s).insertBefore(e,l)}removeChild(s,e){e.remove()}selectRootElement(s,e){let l=typeof s=="string"?this.doc.querySelector(s):s;if(!l)throw new B(-5104,!1);return e||(l.textContent=""),l}parentNode(s){return s.parentNode}nextSibling(s){return s.nextSibling}setAttribute(s,e,l,n){if(n){e=n+":"+e;let t=q2[n];t?s.setAttributeNS(t,e,l):s.setAttribute(e,l)}else s.setAttribute(e,l)}removeAttribute(s,e,l){if(l){let n=q2[l];n?s.removeAttributeNS(n,e):s.removeAttribute(`${l}:${e}`)}else s.removeAttribute(e)}addClass(s,e){s.classList.add(e)}removeClass(s,e){s.classList.remove(e)}setStyle(s,e,l,n){n&(X.DashCase|X.Important)?s.style.setProperty(e,l,n&X.Important?"important":""):s.style[e]=l}removeStyle(s,e,l){l&X.DashCase?s.style.removeProperty(e):s.style[e]=""}setProperty(s,e,l){s!=null&&(s[e]=l)}setValue(s,e){s.nodeValue=e}listen(s,e,l,n){if(typeof s=="string"&&(s=K().getGlobalEventTarget(this.doc,s),!s))throw new Error(`Unsupported event target ${s} for event ${e}`);let t=this.decoratePreventDefault(l);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(t=this.tracingService.wrapEventListener(s,e,t)),this.eventManager.addEventListener(s,e,t,n)}decoratePreventDefault(s){return e=>{if(e==="__ngUnwrap__")return s;(this.platformIsServer?this.ngZone.runGuarded(()=>s(e)):s(e))===!1&&e.preventDefault()}}};function M3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var Q2=class extends o2{sharedStylesHost;hostEl;shadowRoot;constructor(s,e,l,n,t,a,i,u,r){super(s,t,a,u,r),this.sharedStylesHost=e,this.hostEl=l,this.shadowRoot=l.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=n.styles;f=N3(n.id,f);for(let z of f){let M=document.createElement("style");i&&M.setAttribute("nonce",i),M.textContent=z,this.shadowRoot.appendChild(M)}let L=n.getExternalStyles?.();if(L)for(let z of L){let M=K2(z,t);i&&M.setAttribute("nonce",i),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(s){return s===this.hostEl?this.shadowRoot:s}appendChild(s,e){return super.appendChild(this.nodeOrShadowRoot(s),e)}insertBefore(s,e,l){return super.insertBefore(this.nodeOrShadowRoot(s),e,l)}removeChild(s,e){return super.removeChild(null,e)}parentNode(s){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(s)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},r2=class extends o2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(s,e,l,n,t,a,i,u,r){super(s,t,a,i,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=n;let f=l.styles;this.styles=r?N3(r,f):f,this.styleUrls=l.getExternalStyles?.(r)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},S2=class extends r2{contentAttr;hostAttr;constructor(s,e,l,n,t,a,i,u,r){let f=n+"-"+l.id;super(s,e,l,t,a,i,u,r,f),this.contentAttr=s0(f),this.hostAttr=n0(f)}applyToHost(s){this.applyStyles(),this.setAttribute(s,this.hostAttr,"")}createElement(s,e){let l=super.createElement(s,e);return super.setAttribute(l,this.contentAttr,""),l}},t0=(()=>{class c extends D2{constructor(e){super(e)}supports(e){return!0}addEventListener(e,l,n,t){return e.addEventListener(l,n,t),()=>this.removeEventListener(e,l,n,t)}removeEventListener(e,l,n,t){return e.removeEventListener(l,n,t)}static \u0275fac=function(l){return new(l||c)(d(g))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})(),h3=["alt","control","meta","shift"],a0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},i0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},o0=(()=>{class c extends D2{constructor(e){super(e)}supports(e){return c.parseEventName(e)!=null}addEventListener(e,l,n,t){let a=c.parseEventName(l),i=c.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>K().onAndCancel(e,a.domEventName,i,t))}static parseEventName(e){let l=e.toLowerCase().split("."),n=l.shift();if(l.length===0||!(n==="keydown"||n==="keyup"))return null;let t=c._normalizeKey(l.pop()),a="",i=l.indexOf("code");if(i>-1&&(l.splice(i,1),a="code."),h3.forEach(r=>{let f=l.indexOf(r);f>-1&&(l.splice(f,1),a+=r+".")}),a+=t,l.length!=0||t.length===0)return null;let u={};return u.domEventName=n,u.fullKey=a,u}static matchEventFullKeyCode(e,l){let n=a0[e.key]||e.key,t="";return l.indexOf("code.")>-1&&(n=e.code,t="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),h3.forEach(a=>{if(a!==n){let i=i0[a];i(e)&&(t+=a+".")}}),t+=n,t===l)}static eventCallback(e,l,n){return t=>{c.matchEventFullKeyCode(t,e)&&n.runGuarded(()=>l(t))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(l){return new(l||c)(d(g))};static \u0275prov=h({token:c,factory:c.\u0275fac})}return c})();function $5(c,s){return l3(M2({rootComponent:c},r0(s)))}function r0(c){return{appProviders:[...L0,...c?.providers??[]],platformProviders:z0}}function f0(){Z2.makeCurrent()}function u0(){return new H2}function m0(){return O1(document),document}var z0=[{provide:n2,useValue:z3},{provide:B1,useValue:f0,multi:!0},{provide:g,useFactory:m0,deps:[]}];var L0=[{provide:_1,useValue:"root"},{provide:H2,useFactory:u0,deps:[]},{provide:X2,useClass:t0,multi:!0,deps:[g]},{provide:X2,useClass:o0,multi:!0,deps:[g]},p3,g3,C3,{provide:X1,useExisting:p3},{provide:b2,useClass:K4,deps:[]},[]];var V5=(()=>{class c{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(l){return new(l||c)(d(g))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var c1=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275prov=h({token:c,factory:function(l){let n=null;return l?n=new(l||c):n=d(d0),n},providedIn:"root"})}return c})(),d0=(()=>{class c extends c1{_doc;constructor(e){super(),this._doc=e}sanitize(e,l){if(l==null)return null;switch(e){case U.NONE:return l;case U.HTML:return Z(l,"HTML")?H(l):q1(this._doc,String(l)).toString();case U.STYLE:return Z(l,"Style")?H(l):l;case U.SCRIPT:if(Z(l,"Script"))return H(l);throw new B(5200,!1);case U.URL:return Z(l,"URL")?H(l):W1(String(l));case U.RESOURCE_URL:if(Z(l,"ResourceURL"))return H(l);throw new B(5201,!1);default:throw new B(5202,!1)}}bypassSecurityTrustHtml(e){return U1(e)}bypassSecurityTrustStyle(e){return j1(e)}bypassSecurityTrustScript(e){return $1(e)}bypassSecurityTrustUrl(e){return V1(e)}bypassSecurityTrustResourceUrl(e){return G1(e)}static \u0275fac=function(l){return new(l||c)(d(g))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function M0(c,s,e){return(s=C0(s))in c?Object.defineProperty(c,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[s]=e,c}function b3(c,s){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);s&&(l=l.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,l)}return e}function o(c){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?b3(Object(e),!0).forEach(function(l){M0(c,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):b3(Object(e)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(e,l))})}return c}function h0(c,s){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var l=e.call(c,s||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(c)}function C0(c){var s=h0(c,"string");return typeof s=="symbol"?s:s+""}var y3=()=>{},b1={},X3={},K3=null,Q3={mark:y3,measure:y3};try{typeof window<"u"&&(b1=window),typeof document<"u"&&(X3=document),typeof MutationObserver<"u"&&(K3=MutationObserver),typeof performance<"u"&&(Q3=performance)}catch{}var{userAgent:D3=""}=b1.navigator||{},R=b1,p=X3,S3=K3,w2=Q3,W5=!!R.document,E=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",J3=~D3.indexOf("MSIE")||~D3.indexOf("Trident/"),g0=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,x0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,c4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},N0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},e4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",T2="duotone",b0="sharp",y0="sharp-duotone",l4=[C,T2,b0,y0],D0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},S0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},w0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),A0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},v0=["fak","fa-kit","fakd","fa-kit-duotone"],w3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},k0=["kit"],E0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},F0=["fak","fakd"],T0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},A3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},A2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R0=["fak","fa-kit","fakd","fa-kit-duotone"],I0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},O0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},a1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},B0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],i1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...P0,...B0],H0=["solid","regular","light","thin","duotone","brands"],s4=[1,2,3,4,5,6,7,8,9,10],U0=s4.concat([11,12,13,14,15,16,17,18,19,20]),j0=[...Object.keys(O0),...H0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A2.GROUP,A2.SWAP_OPACITY,A2.PRIMARY,A2.SECONDARY].concat(s4.map(c=>"".concat(c,"x"))).concat(U0.map(c=>"w-".concat(c))),$0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v="___FONT_AWESOME___",o1=16,n4="fa",t4="svg-inline--fa",V="data-fa-i2svg",r1="data-fa-pseudo-element",V0="data-fa-pseudo-element-pending",y1="data-prefix",D1="data-icon",v3="fontawesome-i2svg",G0="async",W0=["HTML","HEAD","STYLE","SCRIPT"],a4=(()=>{try{return!0}catch{return!1}})();function d2(c){return new Proxy(c,{get(s,e){return e in s?s[e]:s[C]}})}var i4=o({},c4);i4[C]=o(o(o(o({},{"fa-duotone":"duotone"}),c4[C]),w3.kit),w3["kit-duotone"]);var q0=d2(i4),f1=o({},A0);f1[C]=o(o(o(o({},{duotone:"fad"}),f1[C]),A3.kit),A3["kit-duotone"]);var k3=d2(f1),u1=o({},a1);u1[C]=o(o({},u1[C]),T0.kit);var S1=d2(u1),m1=o({},_0);m1[C]=o(o({},m1[C]),E0.kit);var q5=d2(m1),Y0=g0,o4="fa-layers-text",Z0=x0,X0=o({},D0),Y5=d2(X0),K0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],e1=N0,Q0=[...k0,...j0],u2=R.FontAwesomeConfig||{};function J0(c){var s=p.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function c6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[e,l]=s,n=c6(J0(e));n!=null&&(u2[l]=n)});var r4={styleDefault:"solid",familyDefault:C,cssPrefix:n4,replacementClass:t4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u2.familyPrefix&&(u2.cssPrefix=u2.familyPrefix);var c2=o(o({},r4),u2);c2.autoReplaceSvg||(c2.observeMutations=!1);var m={};Object.keys(r4).forEach(c=>{Object.defineProperty(m,c,{enumerable:!0,set:function(s){c2[c]=s,m2.forEach(e=>e(m))},get:function(){return c2[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(c){c2.cssPrefix=c,m2.forEach(s=>s(m))},get:function(){return c2.cssPrefix}});R.FontAwesomeConfig=m;var m2=[];function e6(c){return m2.push(c),()=>{m2.splice(m2.indexOf(c),1)}}var P=o1,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l6(c){if(!c||!E)return;let s=p.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let e=p.head.childNodes,l=null;for(let n=e.length-1;n>-1;n--){let t=e[n],a=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(l=t)}return p.head.insertBefore(s,l),c}var s6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z2(){let c=12,s="";for(;c-- >0;)s+=s6[Math.random()*62|0];return s}function e2(c){let s=[];for(let e=(c||[]).length>>>0;e--;)s[e]=c[e];return s}function w1(c){return c.classList?e2(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function f4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n6(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,'="').concat(f4(c[e]),'" '),"").trim()}function P2(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,": ").concat(c[e].trim(),";"),"")}function A1(c){return c.size!==S.size||c.x!==S.x||c.y!==S.y||c.rotate!==S.rotate||c.flipX||c.flipY}function t6(c){let{transform:s,containerWidth:e,iconWidth:l}=c,n={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(s.x*32,", ").concat(s.y*32,") "),a="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),i="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(t," ").concat(a," ").concat(i)},r={transform:"translate(".concat(l/2*-1," -256)")};return{outer:n,inner:u,path:r}}function a6(c){let{transform:s,width:e=o1,height:l=o1,startCentered:n=!1}=c,t="";return n&&J3?t+="translate(".concat(s.x/P-e/2,"em, ").concat(s.y/P-l/2,"em) "):n?t+="translate(calc(-50% + ".concat(s.x/P,"em), calc(-50% + ").concat(s.y/P,"em)) "):t+="translate(".concat(s.x/P,"em, ").concat(s.y/P,"em) "),t+="scale(".concat(s.size/P*(s.flipX?-1:1),", ").concat(s.size/P*(s.flipY?-1:1),") "),t+="rotate(".concat(s.rotate,"deg) "),t}var i6=`:root, :host {
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
}`;function u4(){let c=n4,s=t4,e=m.cssPrefix,l=m.replacementClass,n=i6;if(e!==c||l!==s){let t=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(s),"g");n=n.replace(t,".".concat(e,"-")).replace(a,"--".concat(e,"-")).replace(i,".".concat(l))}return n}var E3=!1;function l1(){m.autoAddCss&&!E3&&(l6(u4()),E3=!0)}var o6={mixout(){return{dom:{css:u4,insertCss:l1}}},hooks(){return{beforeDOMElementCreation(){l1()},beforeI2svg(){l1()}}}},k=R||{};k[v]||(k[v]={});k[v].styles||(k[v].styles={});k[v].hooks||(k[v].hooks={});k[v].shims||(k[v].shims=[]);var w=k[v],m4=[],z4=function(){p.removeEventListener("DOMContentLoaded",z4),E2=1,m4.map(c=>c())},E2=!1;E&&(E2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),E2||p.addEventListener("DOMContentLoaded",z4));function r6(c){E&&(E2?setTimeout(c,0):m4.push(c))}function p2(c){let{tag:s,attributes:e={},children:l=[]}=c;return typeof c=="string"?f4(c):"<".concat(s," ").concat(n6(e),">").concat(l.map(p2).join(""),"</").concat(s,">")}function F3(c,s,e){if(c&&c[s]&&c[s][e])return{prefix:s,iconName:e,icon:c[s][e]}}var f6=function(s,e){return function(l,n,t,a){return s.call(e,l,n,t,a)}},s1=function(s,e,l,n){var t=Object.keys(s),a=t.length,i=n!==void 0?f6(e,n):e,u,r,f;for(l===void 0?(u=1,f=s[t[0]]):(u=0,f=l);u<a;u++)r=t[u],f=i(f,s[r],r,s);return f};function u6(c){let s=[],e=0,l=c.length;for(;e<l;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<l){let t=c.charCodeAt(e++);(t&64512)==56320?s.push(((n&1023)<<10)+(t&1023)+65536):(s.push(n),e--)}else s.push(n)}return s}function z1(c){let s=u6(c);return s.length===1?s[0].toString(16):null}function m6(c,s){let e=c.length,l=c.charCodeAt(s),n;return l>=55296&&l<=56319&&e>s+1&&(n=c.charCodeAt(s+1),n>=56320&&n<=57343)?(l-55296)*1024+n-56320+65536:l}function T3(c){return Object.keys(c).reduce((s,e)=>{let l=c[e];return!!l.icon?s[l.iconName]=l.icon:s[e]=l,s},{})}function L1(c,s){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:l=!1}=e,n=T3(s);typeof w.hooks.addPack=="function"&&!l?w.hooks.addPack(c,T3(s)):w.styles[c]=o(o({},w.styles[c]||{}),n),c==="fas"&&L1("fa",s)}var{styles:L2,shims:z6}=w,L4=Object.keys(S1),L6=L4.reduce((c,s)=>(c[s]=Object.keys(S1[s]),c),{}),v1=null,d4={},p4={},M4={},h4={},C4={};function d6(c){return~Q0.indexOf(c)}function p6(c,s){let e=s.split("-"),l=e[0],n=e.slice(1).join("-");return l===c&&n!==""&&!d6(n)?n:null}var g4=()=>{let c=l=>s1(L2,(n,t,a)=>(n[a]=s1(t,l,{}),n),{});d4=c((l,n,t)=>(n[3]&&(l[n[3]]=t),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{l[i.toString(16)]=t}),l)),p4=c((l,n,t)=>(l[t]=t,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{l[i]=t}),l)),C4=c((l,n,t)=>{let a=n[2];return l[t]=t,a.forEach(i=>{l[i]=t}),l});let s="far"in L2||m.autoFetchSvg,e=s1(z6,(l,n)=>{let t=n[0],a=n[1],i=n[2];return a==="far"&&!s&&(a="fas"),typeof t=="string"&&(l.names[t]={prefix:a,iconName:i}),typeof t=="number"&&(l.unicodes[t.toString(16)]={prefix:a,iconName:i}),l},{names:{},unicodes:{}});M4=e.names,h4=e.unicodes,v1=R2(m.styleDefault,{family:m.familyDefault})};e6(c=>{v1=R2(c.styleDefault,{family:m.familyDefault})});g4();function k1(c,s){return(d4[c]||{})[s]}function M6(c,s){return(p4[c]||{})[s]}function $(c,s){return(C4[c]||{})[s]}function x4(c){return M4[c]||{prefix:null,iconName:null}}function h6(c){let s=h4[c],e=k1("fas",c);return s||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function I(){return v1}var N4=()=>({prefix:null,iconName:null,rest:[]});function C6(c){let s=C,e=L4.reduce((l,n)=>(l[n]="".concat(m.cssPrefix,"-").concat(n),l),{});return l4.forEach(l=>{(c.includes(e[l])||c.some(n=>L6[l].includes(n)))&&(s=l)}),s}function R2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=C}=s,l=q0[e][c];if(e===T2&&!c)return"fad";let n=k3[e][c]||k3[e][l],t=c in w.styles?c:null;return n||t||null}function g6(c){let s=[],e=null;return c.forEach(l=>{let n=p6(m.cssPrefix,l);n?e=n:l&&s.push(l)}),{iconName:e,rest:s}}function P3(c){return c.sort().filter((s,e,l)=>l.indexOf(s)===e)}function I2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=s,l=null,n=i1.concat(R0),t=P3(c.filter(L=>n.includes(L))),a=P3(c.filter(L=>!i1.includes(L))),i=t.filter(L=>(l=L,!e4.includes(L))),[u=null]=i,r=C6(t),f=o(o({},g6(a)),{},{prefix:R2(u,{family:r})});return o(o(o({},f),y6({values:c,family:r,styles:L2,config:m,canonical:f,givenPrefix:l})),x6(e,l,f))}function x6(c,s,e){let{prefix:l,iconName:n}=e;if(c||!l||!n)return{prefix:l,iconName:n};let t=s==="fa"?x4(n):{},a=$(l,n);return n=t.iconName||a||n,l=t.prefix||l,l==="far"&&!L2.far&&L2.fas&&!m.autoFetchSvg&&(l="fas"),{prefix:l,iconName:n}}var N6=l4.filter(c=>c!==C||c!==T2),b6=Object.keys(a1).filter(c=>c!==C).map(c=>Object.keys(a1[c])).flat();function y6(c){let{values:s,family:e,canonical:l,givenPrefix:n="",styles:t={},config:a={}}=c,i=e===T2,u=s.includes("fa-duotone")||s.includes("fad"),r=a.familyDefault==="duotone",f=l.prefix==="fad"||l.prefix==="fa-duotone";if(!i&&(u||r||f)&&(l.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(l.prefix="fab"),!l.prefix&&N6.includes(e)&&(Object.keys(t).find(z=>b6.includes(z))||a.autoFetchSvg)){let z=w0.get(e).defaultShortPrefixId;l.prefix=z,l.iconName=$(l.prefix,l.iconName)||l.iconName}return(l.prefix==="fa"||n==="fa")&&(l.prefix=I()||"fas"),l}var d1=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,e=new Array(s),l=0;l<s;l++)e[l]=arguments[l];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(t=>{this.definitions[t]=o(o({},this.definitions[t]||{}),n[t]),L1(t,n[t]);let a=S1[C][t];a&&L1(a,n[t]),g4()})}reset(){this.definitions={}}_pullDefinitions(s,e){let l=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(l).map(n=>{let{prefix:t,iconName:a,icon:i}=l[n],u=i[2];s[t]||(s[t]={}),u.length>0&&u.forEach(r=>{typeof r=="string"&&(s[t][r]=i)}),s[t][a]=i}),s}},R3=[],Q={},J={},D6=Object.keys(J);function S6(c,s){let{mixoutsTo:e}=s;return R3=c,Q={},Object.keys(J).forEach(l=>{D6.indexOf(l)===-1&&delete J[l]}),R3.forEach(l=>{let n=l.mixout?l.mixout():{};if(Object.keys(n).forEach(t=>{typeof n[t]=="function"&&(e[t]=n[t]),typeof n[t]=="object"&&Object.keys(n[t]).forEach(a=>{e[t]||(e[t]={}),e[t][a]=n[t][a]})}),l.hooks){let t=l.hooks();Object.keys(t).forEach(a=>{Q[a]||(Q[a]=[]),Q[a].push(t[a])})}l.provides&&l.provides(J)}),e}function p1(c,s){for(var e=arguments.length,l=new Array(e>2?e-2:0),n=2;n<e;n++)l[n-2]=arguments[n];return(Q[c]||[]).forEach(a=>{s=a.apply(null,[s,...l])}),s}function G(c){for(var s=arguments.length,e=new Array(s>1?s-1:0),l=1;l<s;l++)e[l-1]=arguments[l];(Q[c]||[]).forEach(t=>{t.apply(null,e)})}function _(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return J[c]?J[c].apply(null,s):void 0}function M1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,e=c.prefix||I();if(s)return s=$(e,s)||s,F3(b4.definitions,e,s)||F3(w.styles,e,s)}var b4=new d1,w6=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},A6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(G("beforeI2svg",c),_("pseudoElements2svg",c),_("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,r6(()=>{k6({autoReplaceSvgRoot:s}),G("watch",c)})}},v6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:$(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=R2(c[0]);return{prefix:e,iconName:$(e,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(m.cssPrefix,"-"))>-1||c.match(Y0))){let s=I2(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||I(),iconName:$(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=I();return{prefix:s,iconName:$(s,c)||c}}}},N={noAuto:w6,config:m,dom:A6,parse:v6,library:b4,findIconDefinition:M1,toHtml:p2},k6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=p}=c;(Object.keys(w.styles).length>0||m.autoFetchSvg)&&E&&m.autoReplaceSvg&&N.dom.i2svg({node:s})};function _2(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>p2(e))}}),Object.defineProperty(c,"node",{get:function(){if(!E)return;let e=p.createElement("div");return e.innerHTML=c.html,e.children}}),c}function E6(c){let{children:s,main:e,mask:l,attributes:n,styles:t,transform:a}=c;if(A1(a)&&e.found&&!l.found){let{width:i,height:u}=e,r={x:i/u/2,y:.5};n.style=P2(o(o({},t),{},{"transform-origin":"".concat(r.x+a.x/16,"em ").concat(r.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:s}]}function F6(c){let{prefix:s,iconName:e,children:l,attributes:n,symbol:t}=c,a=t===!0?"".concat(s,"-").concat(m.cssPrefix,"-").concat(e):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},n),{},{id:a}),children:l}]}]}function E1(c){let{icons:{main:s,mask:e},prefix:l,iconName:n,transform:t,symbol:a,title:i,maskId:u,titleId:r,extra:f,watchable:L=!1}=c,{width:z,height:M}=e.found?e:s,F=F0.includes(l),O=[m.replacementClass,n?"".concat(m.cssPrefix,"-").concat(n):""].filter(q=>f.classes.indexOf(q)===-1).filter(q=>q!==""||!!q).concat(f.classes).join(" "),b={children:[],attributes:o(o({},f.attributes),{},{"data-prefix":l,"data-icon":n,class:O,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(M)})},A=F&&!~f.classes.indexOf("fa-fw")?{width:"".concat(z/M*16*.0625,"em")}:{};L&&(b.attributes[V]=""),i&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(r||z2())},children:[i]}),delete b.attributes.title);let x=o(o({},b),{},{prefix:l,iconName:n,main:s,mask:e,maskId:u,transform:t,symbol:a,styles:o(o({},A),f.styles)}),{children:y,attributes:W}=e.found&&s.found?_("generateAbstractMask",x)||{children:[],attributes:{}}:_("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=y,x.attributes=W,a?F6(x):E6(x)}function I3(c){let{content:s,width:e,height:l,transform:n,title:t,extra:a,watchable:i=!1}=c,u=o(o(o({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")});i&&(u[V]="");let r=o({},a.styles);A1(n)&&(r.transform=a6({transform:n,startCentered:!0,width:e,height:l}),r["-webkit-transform"]=r.transform);let f=P2(r);f.length>0&&(u.style=f);let L=[];return L.push({tag:"span",attributes:u,children:[s]}),t&&L.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),L}function T6(c){let{content:s,title:e,extra:l}=c,n=o(o(o({},l.attributes),e?{title:e}:{}),{},{class:l.classes.join(" ")}),t=P2(l.styles);t.length>0&&(n.style=t);let a=[];return a.push({tag:"span",attributes:n,children:[s]}),e&&a.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),a}var{styles:n1}=w;function h1(c){let s=c[0],e=c[1],[l]=c.slice(4),n=null;return Array.isArray(l)?n={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(e1.PRIMARY),fill:"currentColor",d:l[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:s,height:e,icon:n}}var P6={found:!1,width:512,height:512};function R6(c,s){!a4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function C1(c,s){let e=s;return s==="fa"&&m.styleDefault!==null&&(s=I()),new Promise((l,n)=>{if(e==="fa"){let t=x4(c)||{};c=t.iconName||c,s=t.prefix||s}if(c&&s&&n1[s]&&n1[s][c]){let t=n1[s][c];return l(h1(t))}R6(c,s),l(o(o({},P6),{},{icon:m.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var _3=()=>{},g1=m.measurePerformance&&w2&&w2.mark&&w2.measure?w2:{mark:_3,measure:_3},f2='FA "6.7.2"',I6=c=>(g1.mark("".concat(f2," ").concat(c," begins")),()=>y4(c)),y4=c=>{g1.mark("".concat(f2," ").concat(c," ends")),g1.measure("".concat(f2," ").concat(c),"".concat(f2," ").concat(c," begins"),"".concat(f2," ").concat(c," ends"))},F1={begin:I6,end:y4},v2=()=>{};function O3(c){return typeof(c.getAttribute?c.getAttribute(V):null)=="string"}function _6(c){let s=c.getAttribute?c.getAttribute(y1):null,e=c.getAttribute?c.getAttribute(D1):null;return s&&e}function O6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function B6(){return m.autoReplaceSvg===!0?k2.replace:k2[m.autoReplaceSvg]||k2.replace}function H6(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function U6(c){return p.createElement(c)}function D4(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?H6:U6}=s;if(typeof c=="string")return p.createTextNode(c);let l=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(t){l.setAttribute(t,c.attributes[t])}),(c.children||[]).forEach(function(t){l.appendChild(D4(t,{ceFn:e}))}),l}function j6(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var k2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(e=>{s.parentNode.insertBefore(D4(e),s)}),s.getAttribute(V)===null&&m.keepOriginalSource){let e=p.createComment(j6(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(c){let s=c[0],e=c[1];if(~w1(s).indexOf(m.replacementClass))return k2.replace(c);let l=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let t=e[0].attributes.class.split(" ").reduce((a,i)=>(i===m.replacementClass||i.match(l)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});e[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",t.toNode.join(" "))}let n=e.map(t=>p2(t)).join(`
`);s.setAttribute(V,""),s.innerHTML=n}};function B3(c){c()}function S4(c,s){let e=typeof s=="function"?s:v2;if(c.length===0)e();else{let l=B3;m.mutateApproach===G0&&(l=R.requestAnimationFrame||B3),l(()=>{let n=B6(),t=F1.begin("mutate");c.map(n),t(),e()})}}var T1=!1;function w4(){T1=!0}function x1(){T1=!1}var F2=null;function H3(c){if(!S3||!m.observeMutations)return;let{treeCallback:s=v2,nodeCallback:e=v2,pseudoElementsCallback:l=v2,observeMutationsRoot:n=p}=c;F2=new S3(t=>{if(T1)return;let a=I();e2(t).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!O3(i.addedNodes[0])&&(m.searchPseudoElements&&l(i.target),s(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&l(i.target.parentNode),i.type==="attributes"&&O3(i.target)&&~K0.indexOf(i.attributeName))if(i.attributeName==="class"&&_6(i.target)){let{prefix:u,iconName:r}=I2(w1(i.target));i.target.setAttribute(y1,u||a),r&&i.target.setAttribute(D1,r)}else O6(i.target)&&e(i.target)})}),E&&F2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $6(){F2&&F2.disconnect()}function V6(c){let s=c.getAttribute("style"),e=[];return s&&(e=s.split(";").reduce((l,n)=>{let t=n.split(":"),a=t[0],i=t.slice(1);return a&&i.length>0&&(l[a]=i.join(":").trim()),l},{})),e}function G6(c){let s=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",n=I2(w1(c));return n.prefix||(n.prefix=I()),s&&e&&(n.prefix=s,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&l.length>0&&(n.iconName=M6(n.prefix,c.innerText)||k1(n.prefix,z1(c.innerText))),!n.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function W6(c){let s=e2(c.attributes).reduce((n,t)=>(n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n),{}),e=c.getAttribute("title"),l=c.getAttribute("data-fa-title-id");return m.autoA11y&&(e?s["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||z2()):(s["aria-hidden"]="true",s.focusable="false")),s}function q6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function U3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:l,rest:n}=G6(c),t=W6(c),a=p1("parseNodeAttributes",{},c),i=s.styleParser?V6(c):[];return o({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:l,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:t}},a)}var{styles:Y6}=w;function A4(c){let s=m.autoReplaceSvg==="nest"?U3(c,{styleParser:!1}):U3(c);return~s.extra.classes.indexOf(o4)?_("generateLayersText",c,s):_("generateSvgReplacementMutation",c,s)}function Z6(){return[...v0,...i1]}function j3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();let e=p.documentElement.classList,l=f=>e.add("".concat(v3,"-").concat(f)),n=f=>e.remove("".concat(v3,"-").concat(f)),t=m.autoFetchSvg?Z6():e4.concat(Object.keys(Y6));t.includes("fa")||t.push("fa");let a=[".".concat(o4,":not([").concat(V,"])")].concat(t.map(f=>".".concat(f,":not([").concat(V,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=e2(c.querySelectorAll(a))}catch{}if(i.length>0)l("pending"),n("complete");else return Promise.resolve();let u=F1.begin("onTree"),r=i.reduce((f,L)=>{try{let z=A4(L);z&&f.push(z)}catch(z){a4||z.name==="MissingIcon"&&console.error(z)}return f},[]);return new Promise((f,L)=>{Promise.all(r).then(z=>{S4(z,()=>{l("active"),l("complete"),n("pending"),typeof s=="function"&&s(),u(),f()})}).catch(z=>{u(),L(z)})})}function X6(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A4(c).then(e=>{e&&S4([e],s)})}function K6(c){return function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(s||{}).icon?s:M1(s||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:M1(n||{})),c(l,o(o({},e),{},{mask:n}))}}var Q6=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=S,symbol:l=!1,mask:n=null,maskId:t=null,title:a=null,titleId:i=null,classes:u=[],attributes:r={},styles:f={}}=s;if(!c)return;let{prefix:L,iconName:z,icon:M}=c;return _2(o({type:"icon"},c),()=>(G("beforeDOMElementCreation",{iconDefinition:c,params:s}),m.autoA11y&&(a?r["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||z2()):(r["aria-hidden"]="true",r.focusable="false")),E1({icons:{main:h1(M),mask:n?h1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:z,transform:o(o({},S),e),symbol:l,title:a,maskId:t,titleId:i,extra:{attributes:r,styles:f,classes:u}})))},J6={mixout(){return{icon:K6(Q6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=j3,c.nodeCallback=X6,c}}},provides(c){c.i2svg=function(s){let{node:e=p,callback:l=()=>{}}=s;return j3(e,l)},c.generateSvgReplacementMutation=function(s,e){let{iconName:l,title:n,titleId:t,prefix:a,transform:i,symbol:u,mask:r,maskId:f,extra:L}=e;return new Promise((z,M)=>{Promise.all([C1(l,a),r.iconName?C1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(F=>{let[O,b]=F;z([s,E1({icons:{main:O,mask:b},prefix:a,iconName:l,transform:i,symbol:u,maskId:f,title:n,titleId:t,extra:L,watchable:!0})])}).catch(M)})},c.generateAbstractIcon=function(s){let{children:e,attributes:l,main:n,transform:t,styles:a}=s,i=P2(a);i.length>0&&(l.style=i);let u;return A1(t)&&(u=_("generateAbstractTransformGrouping",{main:n,transform:t,containerWidth:n.width,iconWidth:n.width})),e.push(u||n.icon),{children:e,attributes:l}}}},c8={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=s;return _2({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:c,params:s});let l=[];return c(n=>{Array.isArray(n)?n.map(t=>{l=l.concat(t.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...e].join(" ")},children:l}]})}}}},e8={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:l=[],attributes:n={},styles:t={}}=s;return _2({type:"counter",content:c},()=>(G("beforeDOMElementCreation",{content:c,params:s}),T6({content:c.toString(),title:e,extra:{attributes:n,styles:t,classes:["".concat(m.cssPrefix,"-layers-counter"),...l]}})))}}}},l8={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=S,title:l=null,classes:n=[],attributes:t={},styles:a={}}=s;return _2({type:"text",content:c},()=>(G("beforeDOMElementCreation",{content:c,params:s}),I3({content:c,transform:o(o({},S),e),title:l,extra:{attributes:t,styles:a,classes:["".concat(m.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(s,e){let{title:l,transform:n,extra:t}=e,a=null,i=null;if(J3){let u=parseInt(getComputedStyle(s).fontSize,10),r=s.getBoundingClientRect();a=r.width/u,i=r.height/u}return m.autoA11y&&!l&&(t.attributes["aria-hidden"]="true"),Promise.resolve([s,I3({content:s.innerHTML,width:a,height:i,transform:n,title:l,extra:t,watchable:!0})])}}},s8=new RegExp('"',"ug"),$3=[1105920,1112319],V3=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),S0),$0),I0),N1=Object.keys(V3).reduce((c,s)=>(c[s.toLowerCase()]=V3[s],c),{}),n8=Object.keys(N1).reduce((c,s)=>{let e=N1[s];return c[s]=e[900]||[...Object.entries(e)][0][1],c},{});function t8(c){let s=c.replace(s8,""),e=m6(s,0),l=e>=$3[0]&&e<=$3[1],n=s.length===2?s[0]===s[1]:!1;return{value:z1(n?s[0]:s),isSecondary:l||n}}function a8(c,s){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(s),n=isNaN(l)?"normal":l;return(N1[e]||{})[n]||n8[e]}function G3(c,s){let e="".concat(V0).concat(s.replace(":","-"));return new Promise((l,n)=>{if(c.getAttribute(e)!==null)return l();let a=e2(c.children).filter(z=>z.getAttribute(r1)===s)[0],i=R.getComputedStyle(c,s),u=i.getPropertyValue("font-family"),r=u.match(Z0),f=i.getPropertyValue("font-weight"),L=i.getPropertyValue("content");if(a&&!r)return c.removeChild(a),l();if(r&&L!=="none"&&L!==""){let z=i.getPropertyValue("content"),M=a8(u,f),{value:F,isSecondary:O}=t8(z),b=r[0].startsWith("FontAwesome"),A=k1(M,F),x=A;if(b){let y=h6(F);y.iconName&&y.prefix&&(A=y.iconName,M=y.prefix)}if(A&&!O&&(!a||a.getAttribute(y1)!==M||a.getAttribute(D1)!==x)){c.setAttribute(e,x),a&&c.removeChild(a);let y=q6(),{extra:W}=y;W.attributes[r1]=s,C1(A,M).then(q=>{let R4=E1(o(o({},y),{},{icons:{main:q,mask:N4()},prefix:M,iconName:x,extra:W,watchable:!0})),O2=p.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(O2,c.firstChild):c.appendChild(O2),O2.outerHTML=R4.map(I4=>p2(I4)).join(`
`),c.removeAttribute(e),l()}).catch(n)}else l()}else l()})}function i8(c){return Promise.all([G3(c,"::before"),G3(c,"::after")])}function o8(c){return c.parentNode!==document.head&&!~W0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function W3(c){if(E)return new Promise((s,e)=>{let l=e2(c.querySelectorAll("*")).filter(o8).map(i8),n=F1.begin("searchPseudoElements");w4(),Promise.all(l).then(()=>{n(),x1(),s()}).catch(()=>{n(),x1(),e()})})}var r8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=W3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:e=p}=s;m.searchPseudoElements&&W3(e)}}},q3=!1,f8={mixout(){return{dom:{unwatch(){w4(),q3=!0}}}},hooks(){return{bootstrap(){H3(p1("mutationObserverCallbacks",{}))},noAuto(){$6()},watch(c){let{observeMutationsRoot:s}=c;q3?x1():H3(p1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Y3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,l)=>{let n=l.toLowerCase().split("-"),t=n[0],a=n.slice(1).join("-");if(t&&a==="h")return e.flipX=!0,e;if(t&&a==="v")return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(t){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a;break}return e},s)},u8={mixout(){return{parse:{transform:c=>Y3(c)}}},hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-transform");return e&&(c.transform=Y3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:e,transform:l,containerWidth:n,iconWidth:t}=s,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),u="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(i," ").concat(u," ").concat(r)},L={transform:"translate(".concat(t/2*-1," -256)")},z={outer:a,inner:f,path:L};return{tag:"g",attributes:o({},z.outer),children:[{tag:"g",attributes:o({},z.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),z.path)}]}]}}}},t1={x:0,y:0,width:"100%",height:"100%"};function Z3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function m8(c){return c.tag==="g"?c.children:[c]}var z8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-mask"),l=e?I2(e.split(" ").map(n=>n.trim())):N4();return l.prefix||(l.prefix=I()),c.mask=l,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:e,attributes:l,main:n,mask:t,maskId:a,transform:i}=s,{width:u,icon:r}=n,{width:f,icon:L}=t,z=t6({transform:i,containerWidth:f,iconWidth:u}),M={tag:"rect",attributes:o(o({},t1),{},{fill:"white"})},F=r.children?{children:r.children.map(Z3)}:{},O={tag:"g",attributes:o({},z.inner),children:[Z3(o({tag:r.tag,attributes:o(o({},r.attributes),z.path)},F))]},b={tag:"g",attributes:o({},z.outer),children:[O]},A="mask-".concat(a||z2()),x="clip-".concat(a||z2()),y={tag:"mask",attributes:o(o({},t1),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:m8(L)},y]};return e.push(W,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(A,")")},t1)}),{children:e,attributes:l}}}},L8={provides(c){let s=!1;R.matchMedia&&(s=R.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],l={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let t=o(o({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:o(o({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||a.children.push({tag:"animate",attributes:o(o({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},t),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:o(o({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:o(o({},t),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:o(o({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},d8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-symbol"),l=e===null?!1:e===""?!0:e;return c.symbol=l,c}}}},p8=[o6,J6,c8,e8,l8,r8,f8,u8,z8,L8,d8];S6(p8,{mixoutsTo:N});var Z5=N.noAuto,v4=N.config,X5=N.library,k4=N.dom,E4=N.parse,K5=N.findIconDefinition,Q5=N.toHtml,F4=N.icon,J5=N.layer,M8=N.text,h8=N.counter;var C8=["*"],g8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},x8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},P4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),N8=c=>{let s=P4(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:s,"fa-rotate-by":c.rotate!=null&&!s,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(l=>e[l]?l:null).filter(l=>l)},P1=new WeakSet,T4="fa-auto-css";function b8(c,s){if(!s.autoAddCss||P1.has(c))return;if(c.getElementById(T4)!=null){s.autoAddCss=!1,P1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",T4),e.innerHTML=k4.css();let l=c.head.childNodes,n=null;for(let t=l.length-1;t>-1;t--){let a=l[t],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}c.head.insertBefore(e,n),s.autoAddCss=!1,P1.add(c)}var y8=c=>c.prefix!==void 0&&c.iconName!==void 0,D8=(c,s)=>y8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:s,iconName:c},S8=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){v4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),w8=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let l of e){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let n of l.icon[2])typeof n=="string"&&(this.definitions[l.prefix][n]=l)}}addIconPacks(...e){for(let l of e){let n=Object.keys(l).map(t=>l[t]);this.addIcons(...n)}}getIconDefinition(e,l){return e in this.definitions&&l in this.definitions[e]?this.definitions[e][l]:null}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),A8=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275dir=x2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[s2]})}}return c})(),v8=(()=>{class c{constructor(e,l){this.renderer=e,this.elementRef=l}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(l){return new(l||c)(D(g2),D(C2))}}static{this.\u0275cmp=$2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[s2],ngContentSelectors:C8,decls:1,vars:0,template:function(l,n){l&1&&(c3(),e3(0))},encapsulation:2})}}return c})(),L7=(()=>{class c{constructor(e,l,n,t,a){this.sanitizer=e,this.config=l,this.iconLibrary=n,this.stackItem=t,this.document=T(g),a!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){x8();return}if(e){let l=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(l!=null){let n=this.buildParams();b8(this.document,this.config);let t=F4(l,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(t.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let l=D8(e,this.config.defaultPrefix);if("icon"in l)return l;let n=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return n??(g8(l),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},l=typeof this.transform=="string"?E4.transform(this.transform):this.transform,n={};return e.rotate!=null&&!P4(e.rotate)&&(n["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:l,classes:N8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:n}}static{this.\u0275fac=function(l){return new(l||c)(D(c1),D(S8),D(w8),D(A8,8),D(v8,8))}}static{this.\u0275cmp=$2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,n){l&2&&(J1("innerHTML",n.renderedIconHTML,Y1),Q1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[s2],decls:0,vars:0,template:function(l,n){},encapsulation:2})}}return c})();var d7=(()=>{class c{static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275mod=a2({type:c})}static{this.\u0275inj=l2({})}}return c})();var M7={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var h7={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var k8={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},C7=k8;var g7={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};var x7={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};export{G2 as a,$4 as b,d5 as c,q4 as d,$5 as e,V5 as f,L7 as g,d7 as h,M7 as i,h7 as j,C7 as k,g7 as l,x7 as m};
