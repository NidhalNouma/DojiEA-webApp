(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{9642:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},2261:function(e,n,t){"use strict";t.d(n,{V:function(){return Q}});var r=t(9642),o=t(7294),u=t(133),i=t(8529),a=t(7471),l=t(2659),c=t(9016),s=t(5989),f=t(2506);function d(e,n,t){var r=(0,o.useRef)(n);r.current=n,(0,o.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}var p,v,m,g,y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function h(e){null==e||e.focus({preventScroll:!0})}function b(e,n){var t=Array.isArray(e)?e.slice().sort((function(e,n){var t=e.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})):function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(y))}(e),r=document.activeElement,o=function(){if(n&(p.First|p.Next))return m.Next;if(n&(p.Previous|p.Last))return m.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=function(){if(n&p.First)return 0;if(n&p.Previous)return Math.max(0,t.indexOf(r))-1;if(n&p.Next)return Math.max(0,t.indexOf(r))+1;if(n&p.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=n&p.NoScroll?{preventScroll:!0}:{},a=0,l=t.length,c=void 0;do{var s;if(a>=l||a+l<=0)return v.Error;var f=u+a;if(n&p.WrapAround)f=(f+l)%l;else{if(f<0)return v.Underflow;if(f>=l)return v.Overflow}null==(s=c=t[f])||s.focus(i),a+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),v.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(p||(p={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(v||(v={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(m||(m={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(g||(g={}));var E,w=t(7933);function C(e,n,t){void 0===n&&(n=E.All);var u=void 0===t?{}:t,i=u.initialFocus,a=u.containers,c=(0,o.useRef)("undefined"!==typeof window?document.activeElement:null),s=(0,o.useRef)(null),f=(0,w.t)(),m=Boolean(n&E.RestoreFocus),g=Boolean(n&E.InitialFocus);(0,o.useEffect)((function(){m&&(c.current=document.activeElement)}),[m]),(0,o.useEffect)((function(){if(m)return function(){h(c.current),c.current=null}}),[m]),(0,o.useEffect)((function(){if(g&&e.current){var n=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===n)return void(s.current=n)}else if(e.current.contains(n))return void(s.current=n);(null==i?void 0:i.current)?h(i.current):b(e.current,p.First)===v.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.current=document.activeElement}}),[e,i,g]),d("keydown",(function(t){n&E.TabLock&&e.current&&t.key===l.R.Tab&&(t.preventDefault(),b(e.current,(t.shiftKey?p.Previous:p.Next)|p.WrapAround)===v.Success&&(s.current=document.activeElement))})),d("focus",(function(t){if(n&E.FocusLock){var o=new Set(null==a?void 0:a.current);if(o.add(e),o.size){var u=s.current;if(u&&f.current){var i=t.target;i&&i instanceof HTMLElement?!function(e,n){for(var t,o=(0,r.Ul)(e);!(t=o()).done;){var u;if(null==(u=t.value.current)?void 0:u.contains(n))return!0}return!1}(o,i)?(t.preventDefault(),t.stopPropagation(),h(u)):(s.current=i,h(i)):h(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(E||(E={}));var S=t(852),T=new Set,O=new Map;function k(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function A(e){var n=O.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}var P=(0,o.createContext)(!1);function I(e){return o.createElement(P.Provider,{value:e.force},e.children)}var x=t(3935);function M(){var e=(0,o.useContext)(P),n=(0,o.useContext)(D),t=(0,o.useState)((function(){if(!e&&null!==n)return null;if("undefined"===typeof window)return null;var t=document.getElementById("headlessui-portal-root");if(t)return t;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=t[0],u=t[1];return(0,o.useEffect)((function(){null!==r&&(document.body.contains(r)||document.body.appendChild(r))}),[r]),(0,o.useEffect)((function(){e||null!==n&&u(n.current)}),[n,u,e]),r}var L=o.Fragment;function R(e){var n=e,t=M(),r=(0,o.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],u=(0,s.H)();return(0,S.e)((function(){if(t&&r)return t.appendChild(r),function(){var e;t&&(r&&(t.removeChild(r),t.childNodes.length<=0&&(null==(e=t.parentElement)||e.removeChild(t))))}}),[t,r]),u&&t&&r?(0,x.createPortal)((0,i.sY)({props:n,defaultTag:L,name:"Portal"}),r):null}var F=o.Fragment,D=(0,o.createContext)(null);R.Group=function(e){var n=e.target,t=(0,r.gK)(e,["target"]);return o.createElement(D.Provider,{value:n},(0,i.sY)({props:t,defaultTag:F,name:"Popover.Group"}))};var N=(0,o.createContext)(null);function j(){var e=(0,o.useContext)(N);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return e}var U,H,Y,V,B=t(3980),K=(0,o.createContext)((function(){}));function _(e){var n=e.children,t=e.onUpdate,r=e.type,u=e.element,i=(0,o.useContext)(K),a=(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==t||t.apply(void 0,n),i.apply(void 0,n)}),[i,t]);return(0,S.e)((function(){return a(U.Add,r,u),function(){return a(U.Remove,r,u)}}),[a,r,u]),o.createElement(K.Provider,{value:a},n)}K.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(U||(U={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(Y||(Y={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(V||(V={}));var Z=((H={})[V.SetTitleId]=function(e,n){return e.titleId===n.id?e:(0,r.gY)({},e,{titleId:n.id})},H),q=(0,o.createContext)(null);function W(e){var n=(0,o.useContext)(q);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+Q.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return n}function G(e,n){return(0,u.E)(n.type,Z,e,n)}q.displayName="DialogContext";var J=i.AN.RenderStrategy|i.AN.Static,z=(0,i.yV)((function(e,n){var t,c=e.open,p=e.onClose,v=e.initialFocus,m=(0,r.gK)(e,["open","onClose","initialFocus"]),g=(0,o.useState)(0),y=g[0],h=g[1],b=(0,B.oJ)();void 0===c&&null!==b&&(c=(0,u.E)(b,((t={})[B.ZM.Open]=!0,t[B.ZM.Closed]=!1,t)));var w=(0,o.useRef)(new Set),P=(0,o.useRef)(null),x=(0,a.T)(P,n),M=e.hasOwnProperty("open")||null!==b,L=e.hasOwnProperty("onClose");if(!M&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!M)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof c)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+c);if("function"!==typeof p)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+p);var F=c?Y.Open:Y.Closed,D=null!==b?b===B.ZM.Open:F===Y.Open,j=(0,o.useReducer)(G,{titleId:null,descriptionId:null}),H=j[0],K=j[1],Z=(0,o.useCallback)((function(){return p(!1)}),[p]),W=(0,o.useCallback)((function(e){return K({type:V.SetTitleId,id:e})}),[K]),z=(0,s.H)()&&F===Y.Open,$=y>1,Q=null!==(0,o.useContext)(q),X=$?"parent":"leaf";C(P,z?(0,u.E)(X,{parent:E.RestoreFocus,leaf:E.All}):E.None,{initialFocus:v,containers:w}),function(e,n){void 0===n&&(n=!0),(0,S.e)((function(){if(n&&e.current){var t=e.current;T.add(t);for(var o,u=(0,r.Ul)(O.keys());!(o=u()).done;){var i=o.value;i.contains(t)&&(A(i),O.delete(i))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var n,t=(0,r.Ul)(T);!(n=t()).done;){var o=n.value;if(e.contains(o))return}1===T.size&&(O.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),k(e))}})),function(){if(T.delete(t),T.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!O.has(e)){for(var n,t=(0,r.Ul)(T);!(n=t()).done;){var o=n.value;if(e.contains(o))return}O.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),k(e)}}));else for(var e,n=(0,r.Ul)(O.keys());!(e=n()).done;){var o=e.value;A(o),O.delete(o)}}}}),[n])}(P,!!$&&z),d("mousedown",(function(e){var n,t=e.target;F===Y.Open&&($||(null==(n=P.current)?void 0:n.contains(t))||Z())})),d("keydown",(function(e){e.key===l.R.Escape&&F===Y.Open&&($||(e.preventDefault(),e.stopPropagation(),Z()))})),(0,o.useEffect)((function(){if(F===Y.Open&&!Q){var e=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=t+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=n}}}),[F,Q]),(0,o.useEffect)((function(){if(F===Y.Open&&P.current){var e=new IntersectionObserver((function(e){for(var n,t=(0,r.Ul)(e);!(n=t()).done;){var o=n.value;0===o.boundingClientRect.x&&0===o.boundingClientRect.y&&0===o.boundingClientRect.width&&0===o.boundingClientRect.height&&Z()}}));return e.observe(P.current),function(){return e.disconnect()}}}),[F,P,Z]);var ee=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(N.Provider,{value:r},e.children)}}),[t])]}(),ne=ee[0],te=ee[1],re="headlessui-dialog-"+(0,f.M)(),oe=(0,o.useMemo)((function(){return[{dialogState:F,close:Z,setTitleId:W},H]}),[F,H,Z,W]),ue=(0,o.useMemo)((function(){return{open:F===Y.Open}}),[F]),ie={ref:x,id:re,role:"dialog","aria-modal":F===Y.Open||void 0,"aria-labelledby":H.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},ae=m;return o.createElement(_,{type:"Dialog",element:P,onUpdate:(0,o.useCallback)((function(e,n,t){var r;"Dialog"===n&&(0,u.E)(e,((r={})[U.Add]=function(){w.current.add(t),h((function(e){return e+1}))},r[U.Remove]=function(){w.current.add(t),h((function(e){return e-1}))},r))}),[])},o.createElement(I,{force:!0},o.createElement(R,null,o.createElement(q.Provider,{value:oe},o.createElement(R.Group,{target:P},o.createElement(I,{force:!1},o.createElement(te,{slot:ue,name:"Dialog.Description"},(0,i.sY)({props:(0,r.gY)({},ae,ie),slot:ue,defaultTag:"div",features:J,visible:D,name:"Dialog"}))))))))})),$=(0,i.yV)((function e(n,t){var u=W([Q.displayName,e.name].join("."))[0],l=u.dialogState,s=u.close,d=(0,a.T)(t),p="headlessui-dialog-overlay-"+(0,f.M)(),v=(0,o.useCallback)((function(e){if(e.target===e.currentTarget){if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}),[s]),m=(0,o.useMemo)((function(){return{open:l===Y.Open}}),[l]),g={ref:d,id:p,"aria-hidden":!0,onClick:v},y=n;return(0,i.sY)({props:(0,r.gY)({},y,g),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var Q=Object.assign(z,{Overlay:$,Title:function e(n){var t=W([Q.displayName,e.name].join("."))[0],u=t.dialogState,a=t.setTitleId,l="headlessui-dialog-title-"+(0,f.M)();(0,o.useEffect)((function(){return a(l),function(){return a(null)}}),[l,a]);var c=(0,o.useMemo)((function(){return{open:u===Y.Open}}),[u]),s={id:l},d=n;return(0,i.sY)({props:(0,r.gY)({},d,s),slot:c,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var n=j(),t="headlessui-description-"+(0,f.M)();(0,S.e)((function(){return n.register(t)}),[t,n.register]);var o=e,u=(0,r.gY)({},n.props,{id:t});return(0,i.sY)({props:(0,r.gY)({},o,u),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}})},2845:function(e,n,t){"use strict";t.d(n,{p:function(){return O}});var r,o,u,i=t(9642),a=t(7294),l=t(133),c=t(8529),s=t(7471),f=t(2659),d=t(9016),p=t(2506),v=t(3980),m=t(852);function g(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(o||(o={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(u||(u={}));var y=((r={})[u.ToggleDisclosure]=function(e){var n;return(0,i.gY)({},e,{disclosureState:(0,l.E)(e.disclosureState,(n={},n[o.Open]=o.Closed,n[o.Closed]=o.Open,n))})},r[u.CloseDisclosure]=function(e){return e.disclosureState===o.Closed?e:(0,i.gY)({},e,{disclosureState:o.Closed})},r[u.LinkPanel]=function(e){return!0===e.linkedPanel?e:(0,i.gY)({},e,{linkedPanel:!0})},r[u.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:(0,i.gY)({},e,{linkedPanel:!1})},r[u.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,i.gY)({},e,{buttonId:n.buttonId})},r[u.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,i.gY)({},e,{panelId:n.panelId})},r),h=(0,a.createContext)(null);function b(e){var n=(0,a.useContext)(h);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+O.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,b),t}return n}h.displayName="DisclosureContext";var E=(0,a.createContext)(null);function w(e){var n=(0,a.useContext)(E);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+O.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return n}E.displayName="DisclosureAPIContext";var C=(0,a.createContext)(null);function S(e,n){return(0,l.E)(n.type,y,e,n)}C.displayName="DisclosurePanelContext";var T=a.Fragment;function O(e){var n,t=e.defaultOpen,r=void 0!==t&&t,s=(0,i.gK)(e,["defaultOpen"]),f="headlessui-disclosure-button-"+(0,p.M)(),d="headlessui-disclosure-panel-"+(0,p.M)(),m=(0,a.useReducer)(S,{disclosureState:r?o.Open:o.Closed,linkedPanel:!1,buttonId:f,panelId:d}),g=m[0].disclosureState,y=m[1];(0,a.useEffect)((function(){return y({type:u.SetButtonId,buttonId:f})}),[f,y]),(0,a.useEffect)((function(){return y({type:u.SetPanelId,panelId:d})}),[d,y]);var b=(0,a.useCallback)((function(e){y({type:u.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(f):document.getElementById(f);null==n||n.focus()}),[y,f]),w=(0,a.useMemo)((function(){return{close:b}}),[b]),C=(0,a.useMemo)((function(){return{open:g===o.Open,close:b}}),[g,b]);return a.createElement(h.Provider,{value:m},a.createElement(E.Provider,{value:w},a.createElement(v.up,{value:(0,l.E)(g,(n={},n[o.Open]=v.ZM.Open,n[o.Closed]=v.ZM.Closed,n))},(0,c.sY)({props:s,slot:C,defaultTag:T,name:"Disclosure"}))))}var k=(0,c.yV)((function e(n,t){var r=b([O.name,e.name].join(".")),l=r[0],p=r[1],v=(0,a.useRef)(null),y=(0,s.T)(v,t),h=(0,a.useContext)(C),E=null!==h&&h===l.panelId,w=(0,a.useCallback)((function(e){var n;if(E){if(l.disclosureState===o.Closed)return;switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:u.ToggleDisclosure}),null==(n=document.getElementById(l.buttonId))||n.focus()}}else switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:u.ToggleDisclosure})}}),[p,E,l.disclosureState]),S=(0,a.useCallback)((function(e){switch(e.key){case f.R.Space:e.preventDefault()}}),[]),T=(0,a.useCallback)((function(e){var t;(0,d.P)(e.currentTarget)||(n.disabled||(E?(p({type:u.ToggleDisclosure}),null==(t=document.getElementById(l.buttonId))||t.focus()):p({type:u.ToggleDisclosure})))}),[p,n.disabled,l.buttonId,E]),k=(0,a.useMemo)((function(){return{open:l.disclosureState===o.Open}}),[l]),A=function(e,n){var t=(0,a.useState)((function(){return g(e)})),r=t[0],o=t[1];return(0,m.e)((function(){o(g(e))}),[e.type,e.as]),(0,m.e)((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,v),P=n,I=E?{ref:y,type:A,onKeyDown:w,onClick:T}:{ref:y,id:l.buttonId,type:A,"aria-expanded":n.disabled?void 0:l.disclosureState===o.Open,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:w,onKeyUp:S,onClick:T};return(0,c.sY)({props:(0,i.gY)({},P,I),slot:k,defaultTag:"button",name:"Disclosure.Button"})})),A=c.AN.RenderStrategy|c.AN.Static,P=(0,c.yV)((function e(n,t){var r=b([O.name,e.name].join(".")),l=r[0],f=r[1],d=w([O.name,e.name].join(".")).close,p=(0,s.T)(t,(function(){l.linkedPanel||f({type:u.LinkPanel})})),m=(0,v.oJ)(),g=null!==m?m===v.ZM.Open:l.disclosureState===o.Open;(0,a.useEffect)((function(){return function(){return f({type:u.UnlinkPanel})}}),[f]),(0,a.useEffect)((function(){var e;l.disclosureState!==o.Closed||null!=(e=n.unmount)&&!e||f({type:u.UnlinkPanel})}),[l.disclosureState,n.unmount,f]);var y=(0,a.useMemo)((function(){return{open:l.disclosureState===o.Open,close:d}}),[l,d]),h={ref:p,id:l.panelId},E=n;return a.createElement(C.Provider,{value:l.panelId},(0,c.sY)({props:(0,i.gY)({},E,h),slot:y,defaultTag:"div",features:A,visible:g,name:"Disclosure.Panel"}))}));O.Button=k,O.Panel=P},2659:function(e,n,t){"use strict";var r;t.d(n,{R:function(){return r}}),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}))},5131:function(e,n,t){"use strict";t.d(n,{u:function(){return P}});var r,o=t(9642),u=t(7294),i=t(133),a=t(8529),l=t(852),c=t(5989),s=t(2506),f=t(7933),d=t(3980);function p(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,o.Ul)(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function v(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function g(e,n,t,o,u,i){var a=p(),l=void 0!==i?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(i):function(){};return m.apply(void 0,[e].concat(u)),v.apply(void 0,[e].concat(n,t)),a.nextFrame((function(){m.apply(void 0,[e].concat(t)),v.apply(void 0,[e].concat(o)),a.add(function(e,n){var t=p();if(!e)return t.dispose;var o=getComputedStyle(e),u=[o.transitionDuration,o.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),i=u[0],a=u[1];return 0!==i?t.setTimeout((function(){n(r.Finished)}),i+a):n(r.Finished),t.add((function(){return n(r.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(o,n)),v.apply(void 0,[e].concat(u)),l(t)})))})),a.add((function(){return m.apply(void 0,[e].concat(n,t,o,u))})),a.add((function(){return l(r.Cancelled)})),a.dispose}function y(e){return void 0===e&&(e=""),(0,u.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(r||(r={}));var h,b=(0,u.createContext)(null);b.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(h||(h={}));var E=(0,u.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===h.Visible})).length>0}function C(e){var n=(0,u.useRef)(e),t=(0,u.useRef)([]),r=(0,f.t)();(0,u.useEffect)((function(){n.current=e}),[e]);var o=(0,u.useCallback)((function(e,o){var u;void 0===o&&(o=a.l4.Hidden);var l=t.current.findIndex((function(n){return n.id===e}));-1!==l&&((0,i.E)(o,((u={})[a.l4.Unmount]=function(){t.current.splice(l,1)},u[a.l4.Hidden]=function(){t.current[l].state=h.Hidden},u)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),l=(0,u.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==h.Visible&&(n.state=h.Visible):t.current.push({id:e,state:h.Visible}),function(){return o(e,a.l4.Unmount)}}),[t,o]);return(0,u.useMemo)((function(){return{children:t,register:l,unregister:o}}),[l,o,t])}function S(){}E.displayName="NestingContext";var T=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function O(e){for(var n,t={},r=(0,o.Ul)(T);!(n=r()).done;){var u,i=n.value;t[i]=null!=(u=e[i])?u:S}return t}var k=a.AN.RenderStrategy;function A(e){var n,t=e.beforeEnter,f=e.afterEnter,p=e.beforeLeave,v=e.afterLeave,m=e.enter,S=e.enterFrom,T=e.enterTo,A=e.entered,P=e.leave,I=e.leaveFrom,x=e.leaveTo,M=(0,o.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),L=(0,u.useRef)(null),R=(0,u.useState)(h.Visible),F=R[0],D=R[1],N=M.unmount?a.l4.Unmount:a.l4.Hidden,j=function(){var e=(0,u.useContext)(b);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),U=j.show,H=j.appear,Y=j.initial,V=function(){var e=(0,u.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=V.register,K=V.unregister,_=(0,s.M)(),Z=(0,u.useRef)(!1),q=C((function(){Z.current||(D(h.Hidden),K(_),ee.current.afterLeave())}));(0,l.e)((function(){if(_)return B(_)}),[B,_]),(0,l.e)((function(){var e;N===a.l4.Hidden&&_&&(U&&F!==h.Visible?D(h.Visible):(0,i.E)(F,((e={})[h.Hidden]=function(){return K(_)},e[h.Visible]=function(){return B(_)},e)))}),[F,_,B,K,U,N]);var W=y(m),G=y(S),J=y(T),z=y(A),$=y(P),Q=y(I),X=y(x),ee=function(e){var n=(0,u.useRef)(O(e));return(0,u.useEffect)((function(){n.current=O(e)}),[e]),n}({beforeEnter:t,afterEnter:f,beforeLeave:p,afterLeave:v}),ne=(0,c.H)();(0,u.useEffect)((function(){if(ne&&F===h.Visible&&null===L.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[L,F,ne]);var te=Y&&!H;(0,l.e)((function(){var e=L.current;if(e&&!te)return Z.current=!0,U&&ee.current.beforeEnter(),U||ee.current.beforeLeave(),U?g(e,W,G,J,z,(function(e){Z.current=!1,e===r.Finished&&ee.current.afterEnter()})):g(e,$,Q,X,z,(function(e){Z.current=!1,e===r.Finished&&(w(q)||(D(h.Hidden),K(_),ee.current.afterLeave()))}))}),[ee,_,Z,K,q,L,te,U,W,G,J,$,Q,X]);var re={ref:L},oe=M;return u.createElement(E.Provider,{value:q},u.createElement(d.up,{value:(0,i.E)(F,(n={},n[h.Visible]=d.ZM.Open,n[h.Hidden]=d.ZM.Closed,n))},(0,a.sY)({props:(0,o.gY)({},oe,re),defaultTag:"div",features:k,visible:F===h.Visible,name:"Transition.Child"})))}function P(e){var n,t=e.show,r=e.appear,l=void 0!==r&&r,c=e.unmount,s=(0,o.gK)(e,["show","appear","unmount"]),f=(0,d.oJ)();void 0===t&&null!==f&&(t=(0,i.E)(f,((n={})[d.ZM.Open]=!0,n[d.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var p=(0,u.useState)(t?h.Visible:h.Hidden),v=p[0],m=p[1],g=C((function(){m(h.Hidden)})),y=function(){var e=(0,u.useRef)(!0);return(0,u.useEffect)((function(){e.current=!1}),[]),e.current}(),S=(0,u.useMemo)((function(){return{show:t,appear:l||!y,initial:y}}),[t,l,y]);(0,u.useEffect)((function(){t?m(h.Visible):w(g)||m(h.Hidden)}),[t,g]);var T={unmount:c};return u.createElement(E.Provider,{value:g},u.createElement(b.Provider,{value:S},(0,a.sY)({props:(0,o.gY)({},T,{as:u.Fragment,children:u.createElement(A,Object.assign({},T,s))}),defaultTag:u.Fragment,features:k,visible:v===h.Visible,name:"Transition"})))}P.Child=function(e){var n=null!==(0,u.useContext)(b),t=null!==(0,d.oJ)();return!n&&t?u.createElement(P,Object.assign({},e)):u.createElement(A,Object.assign({},e))},P.Root=P},2506:function(e,n,t){"use strict";t.d(n,{M:function(){return l}});var r=t(7294),o=t(852),u=t(5989),i=0;function a(){return++i}function l(){var e=(0,u.H)(),n=(0,r.useState)(e?a:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(a())}),[t]),null!=t?""+t:void 0}},7933:function(e,n,t){"use strict";t.d(n,{t:function(){return o}});var r=t(7294);function o(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},852:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(7294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},5989:function(e,n,t){"use strict";t.d(n,{H:function(){return u}});var r=t(7294),o={serverHandoffComplete:!1};function u(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},7471:function(e,n,t){"use strict";t.d(n,{T:function(){return u}});var r=t(9642),o=t(7294);function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var u=(0,o.useRef)(n);return(0,o.useEffect)((function(){u.current=n}),[n]),(0,o.useCallback)((function(e){for(var n,t=(0,r.Ul)(u.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[u])}},3980:function(e,n,t){"use strict";t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return i}});var r,o=t(7294),u=(0,o.createContext)(null);function i(){return(0,o.useContext)(u)}function a(e){var n=e.value,t=e.children;return o.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},9016:function(e,n,t){"use strict";function r(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}t.d(n,{P:function(){return r}})},133:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,u):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},8529:function(e,n,t){"use strict";t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return l}});var r,o,u=t(9642),i=t(7294),a=t(133);function l(e){var n=e.props,t=e.slot,i=e.defaultTag,l=e.features,s=e.visible,f=void 0===s||s,d=e.name;if(f)return c(n,t,i,d);var p=null!=l?l:r.None;if(p&r.Static){var v=n.static,m=void 0!==v&&v,g=(0,u.gK)(n,["static"]);if(m)return c(g,t,i,d)}if(p&r.RenderStrategy){var y,h=n.unmount,b=void 0===h||h,E=(0,u.gK)(n,["unmount"]),w=b?o.Unmount:o.Hidden;return(0,a.E)(w,((y={})[o.Unmount]=function(){return null},y[o.Hidden]=function(){return c((0,u.gY)({},E,{hidden:!0,style:{display:"none"}}),t,i,d)},y))}return c(n,t,i,d)}function c(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),l=a.as,c=void 0===l?t:l,s=a.children,d=a.refName,p=void 0===d?"ref":d,v=(0,u.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},g="function"===typeof s?s(n):s;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),c===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(g,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},a=(0,u.Ul)(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),g.props,["onClick"]),m))}return(0,i.createElement)(c,Object.assign({},f(v,["ref"]),c!==i.Fragment&&m),g)}function s(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,u.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var u,i=(u=t(7294))&&u.__esModule?u:{default:u},a=t(6273),l=t(387),c=t(7190);var s={};function f(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),u=i.default.useMemo((function(){var n=o(a.resolveHref(r,e.href,!0),2),t=n[0],u=n[1];return{href:t,as:e.as?a.resolveHref(r,e.as):u||t}}),[r,e.href,e.as]),d=u.href,p=u.as,v=e.children,m=e.replace,g=e.shallow,y=e.scroll,h=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,E=o(c.useIntersection({rootMargin:"200px"}),2),w=E[0],C=E[1],S=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=C&&t&&a.isLocalURL(d),n="undefined"!==typeof h?h:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(r,d,p,{locale:n})}),[p,d,C,h,t,r]);var T={ref:S,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:u,locale:l,scroll:i}))}(e,r,d,p,m,g,y,h)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof h?h:r&&r.locale,k=r&&r.isLocaleDomain&&a.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);T.href=k||a.addBasePath(a.addLocale(p,O,r&&r.defaultLocale))}return i.default.cloneElement(n,T)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!a,c=u.useRef(),s=o(u.useState(!1),2),f=s[0],d=s[1],p=o(u.useState(n?n.current:null),2),v=p[0],m=p[1],g=u.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,u=r.observer,i=r.elements;return i.set(e,n),u.observe(e),function(){i.delete(e),u.unobserve(e),0===i.size&&(u.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[r,v,t,f]);return u.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),u.useEffect((function(){n&&m(n.current)}),[n]),[g,f]};var u=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,n,t){e.exports=t(8418)},3801:function(e,n,t){"use strict";t.d(n,{Oqj:function(){return o},b0D:function(){return u}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}}}]);