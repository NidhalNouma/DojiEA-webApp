(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{584:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Membership",function(){return s(695)}])},366:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(5893),n=s(7294),l=s(3352);function a(e){var t=e.select,s=e.selected,n=e.top,a=void 0!==n&&n;return(0,r.jsx)("div",{className:" flex flex-col sm:flex-row justify-center mb-6 sm:mb-0",children:l.Hj.map((function(e,n){return(0,r.jsx)(o,{val:e,top:a,selected:e.id===(null===s||void 0===s?void 0:s.id)||!(!e.expire||!a||s),onClick:function(){return t(!!a||e)}},n)}))})}function o(e){var t=e.val,s=e.selected,l=e.onClick,a=e.top,o=t.name,i=t.Price,c=t.accounts,d=t.expire,u=(t.show,t.lifetime),x=(s?"".concat(a?"sm:-mt-4":"sm:-mb-4"," shadow-lg z-10 "):" ")+(a?"rounded-t-lg":"rounded-b-lg")+" flex-1 lg:flex-initial lg:w-1/4 bg-c2 mt-4 flex flex-col ";return(0,r.jsxs)("div",{className:x,children:[d?(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)("div",{className:"text-c4 p-8 pb-2 text-3xl font-bold text-center",children:o}),(0,r.jsxs)("div",{className:"text-c4 p-2 pt-0 text-center",children:["Offer Expire in ",d," days"]})]}):(0,r.jsx)("div",{className:"text-slate-100 w-full p-8 text-3xl font-bold text-center",children:o}),(0,r.jsxs)("div",{className:"border-0 border-slate-700 border-t border-solid text-sm",children:[(0,r.jsxs)("div",{className:"text-teal-500 font-bold text-center border-0 border-slate-700 border-b border-solid py-4",children:[c," Real Account License"]}),(0,r.jsx)("div",{className:"text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4",children:"Unlimited Demo Account"}),(0,r.jsx)("div",{className:"text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4",children:"Free Update Forever"}),(0,r.jsx)("div",{className:"text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4",children:"All Broker"}),(0,r.jsx)("div",{className:"text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4",children:"All Desktop Support"})]}),(0,r.jsx)("div",{className:"mt-auto text-center pt-8 pb-10",children:(0,r.jsxs)("span",{className:"text-teal-500 border-slate-300 border-b-4 text-center text-xl px-2 py-4 pb-1 rounded",children:["$",i,(0,r.jsx)("span",{className:"ml-1 text-slate-300 text-base",children:u?"life time":"/ Month"})]})}),(0,r.jsx)("div",{className:"w-full text-center mb-8 mt-auto px-10 sm:px-0",children:(0,r.jsx)("button",{onClick:l,className:"px-8 py-3 rounded-full text-c2 font-medium bg-slate-100 w-full sm:w-auto sm:ml-4",children:a?"Sign Up":s?"Selected":"Select"})})]})}},695:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var r=s(5893),n=s(7294),l=s(9879),a=s(9629),o=s(7673),i=s(2395),c=s(1422),d=s(8389),u=s(366),x=s(4051),m=s.n(x),b=s(7322),p=s(8233),f=s(9929);function h(e,t,s,r,n,l,a){try{var o=e[l](a),i=o.value}catch(c){return void s(c)}o.done?t(i):Promise.resolve(i).then(r,n)}function v(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var l=e.apply(t,s);function a(e){h(l,r,n,a,o,"next",e)}function o(e){h(l,r,n,a,o,"throw",e)}a(void 0)}))}}function j(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function N(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){j(e,t,s[t])}))}return e}var w=function(e){var t=(0,a.SE)(),s=t.user,l=t.setUser,o=e.title,c=e.price,d=e.id,u=e.done,x=(0,n.useState)(null),h=x[0],j=x[1],w=(0,n.useState)(0),g=w[0],y=w[1],k=function(){var e=v(m().mark((function e(){var t,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(h),h){e.next=4;break}return y(g+1),e.abrupt("return");case 4:return e.next=6,(0,f.Gt)(s.uid,s.customerId,h.id,d);case 6:(t=e.sent)&&(r=N({},s,{stripe:N({},s.stripe,{subscription:t})}),l(r),u(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){window.scroll({top:document.body.scrollHeight,left:0,behavior:"smooth"})}),[c]),(0,r.jsxs)("div",{className:"mt-20 bg-c2 rounded-lg p-4",children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)(i.H4,{label:"Enter your card details."}),(0,r.jsx)(i.H4,{label:"Your subscription will start now."}),(0,r.jsxs)("p",{className:"text-slate-400 pt-4",children:["\u2192 Total due now ",(0,r.jsxs)("span",{className:"text-c4",children:["$",c]})]}),(0,r.jsxs)("p",{className:"text-slate-400 pt-1",children:[" ","\u2192 Subscribing to"," ",(0,r.jsx)("span",{className:"text-slate-300 font-bold",children:o})]})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(p.Z,{opend:g,selected:h,onSelect:function(e){return j(e)}}),(0,r.jsx)(b.q5,{label:h?"Pay":"Add Payment Card",className:"rounded-lg mt-5",onClick:v(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=4;break}y(!0),e.next=6;break;case 4:return e.next=6,k();case 6:case"end":return e.stop()}}),e)})))})]})]})},g=s(5871),y=s(2269),k=s(8662),P=s(3352);var S=function(){var e,t,s=(0,a.SE)().user,l=null===s||void 0===s||null===(e=s.stripe)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.data,d=(0,n.useState)(null),x=d[0],m=d[1],b=(0,n.useState)(!1),p=b[0],f=b[1],h=(0,n.useState)(!1),v=h[0],j=h[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 relative",children:[(0,r.jsxs)("div",{className:"pt-12 pb-12 md:pt-20 md:pb-20",children:[(0,r.jsx)(i.H1,{label:"Membership"}),(null===l||void 0===l?void 0:l.length)>0&&(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto py-3 sm:px-6 lg:px-8",children:[(0,r.jsx)(i.H4,{label:"You have ".concat(null===l||void 0===l?void 0:l.length," available plan")}),(0,r.jsx)(g.Z,{hideDelete:!0}),(0,r.jsx)(c.P1,{children:"Feel free to select and add more if you need"})]})}),(0,r.jsx)(u.Z,{select:function(e){s?(m(e),f(!1)):j(!0)},selected:x}),x&&!p&&(0,r.jsx)(w,{price:x.Price,title:x.name,id:x.id,user:s,done:function(){return f(!0)}})]}),p&&x&&(0,r.jsx)(_,{title:x.name})]}),(0,r.jsx)(y.Z,{open:v,setOpen:j,children:(0,r.jsx)(k.Z,{start:1})})]})};function _(e){var t=e.title,s=void 0===t?"Membership":t;return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"mb-20 bg-c2 rounded-lg p-4",children:(0,r.jsxs)("div",{className:"mt8",children:[(0,r.jsx)(i.H4,{label:"Congratulations!!"}),(0,r.jsxs)(c.P1,{className:"!text-slate-300 font-bold text-medium",children:[" ","You have successfully subscribed to the",(0,r.jsxs)("span",{className:"text-teal-500 text-lg font-semibold",children:[" ",s," plan"]}),"."]}),(0,r.jsxs)(c.P1,{className:"!text-slate-300 font-bold text-medium",children:["Click ",(0,r.jsx)(d.Y,{label:"here",href:P.Hb.howtouse})," to see how to use our bot."]})]})})}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(E,{l:0}),(0,r.jsx)(E,{l:1})]})]})}function E(e){var t=e.l,s={position:"absolute",bottom:"0px",left:"".concat(0===t?0:"auto"),right:"".concat(1===t?0:"auto"),zIndex:0,pointerEvents:"none"};return(0,r.jsx)(l.J5,{autoplay:!0,loop:!0,src:"https://assets7.lottiefiles.com/packages/lf20_lg6lh7fp.json",style:s,children:(0,r.jsx)(l.ZX,{visible:!1,buttons:["play","repeat","frame","debug"]})})}}},function(e){e.O(0,[885,388,1,101,673,766,774,888,179],(function(){return t=584,e(e.s=t);var t}));var t=e.O();_N_E=t}]);