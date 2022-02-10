"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{8118:function(e,s,t){t.d(s,{Z:function(){return b}});var r=t(5893),n=t(7294),a=t(1664),l=t(5131),o=t(6518);t(3801);function i(e){var s=e.children,t=e.open,a=e.setOpen,i=(0,n.useRef)(null);return(0,r.jsx)(l.u.Root,{show:t,as:n.Fragment,children:(0,r.jsx)(o.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:i,onClose:a,children:(0,r.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,r.jsx)(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(o.V.Overlay,{className:"fixed inset-0 bg-c2 bg-opacity-90 transition-opacity"})}),(0,r.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,r.jsxs)("div",{className:"inline-block align-bottom bg-c1 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,r.jsx)("div",{className:"flex justify-end p-2 pb-0",children:(0,r.jsx)("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-toggle":"authentication-modal",onClick:function(){return a(!1)},children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),s]})})]})})})}var c=t(4051),u=t.n(c),d=t(1163),m=t(7322);function x(e){var s=e.className,t=e.label,n=e.type,a=e.placeholder,l=e.value,o=e.setValue;return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:t}),(0,r.jsx)("input",{value:l,onChange:function(e){return o(e.target.value)},type:n,name:"email",className:s+" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",placeholder:a,required:""})]})}var h=t(2988);function f(e,s,t,r,n,a,l){try{var o=e[a](l),i=o.value}catch(c){return void t(c)}o.done?s(i):Promise.resolve(i).then(r,n)}var p=function(e){var s,t=e.back,a=(0,h.ZP)().SignUpHook,l=(0,h.SE)().setUser,o=(0,d.useRouter)(),i=a(),c=i.email,p=i.password,v=i.cpassword,g=i.setPassword,j=i.setCPassword,w=i.setEmail,b=i.submit;return(0,r.jsx)(n.Fragment,{children:(0,r.jsxs)("div",{className:"px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",children:[(0,r.jsx)("h3",{className:"text-xl font-medium text-white",children:"Sign up to our platform"}),(0,r.jsx)(x,{label:"Your email",type:"email",placeholder:"name@company.com",value:c,setValue:w}),(0,r.jsx)(x,{label:"Your password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:p,setValue:g}),(0,r.jsx)(x,{label:"Confirm password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:v,setValue:j}),(0,r.jsx)(m.q5,{className:"w-full rounded-lg",label:"Login to your account",onClick:(s=u().mark((function e(){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:(s=e.sent).err||(l(s.user),o.push("/Dashboard"));case 4:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var a=s.apply(e,t);function l(e){f(a,r,n,l,o,"next",e)}function o(e){f(a,r,n,l,o,"throw",e)}l(void 0)}))})}),(0,r.jsxs)("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-300",children:["You have an account?"," ",(0,r.jsx)(m.gl,{className:"",label:"Sign in",onClick:function(){t()}})]})]})})};function v(e,s,t,r,n,a,l){try{var o=e[a](l),i=o.value}catch(c){return void t(c)}o.done?s(i):Promise.resolve(i).then(r,n)}function g(e){return function(){var s=this,t=arguments;return new Promise((function(r,n){var a=e.apply(s,t);function l(e){v(a,r,n,l,o,"next",e)}function o(e){v(a,r,n,l,o,"throw",e)}l(void 0)}))}}var j=function(){var e=(0,d.useRouter)(),s=(0,n.useState)(0),t=s[0],a=s[1],l=(0,(0,h.ZP)().SignInHook)(),o=l.email,i=l.password,c=l.setPassword,f=l.setEmail,v=l.submit,j=(0,h.SE)().setUser;return(0,r.jsx)(n.Fragment,{children:1===t?(0,r.jsx)(p,{back:function(){return a(0)}}):(0,r.jsx)(n.Fragment,{children:(0,r.jsxs)("div",{className:"px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",children:[(0,r.jsx)("h3",{className:"text-xl font-medium text-white",children:"Sign in to our platform"}),(0,r.jsx)(x,{label:"Your email",type:"email",placeholder:"name@company.com",value:o,setValue:f}),(0,r.jsx)(x,{label:"Your password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:i,setValue:c}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("div",{className:"flex items-start"}),(0,r.jsx)(m.gl,{className:"",label:"Lost Password?",onClick:g(u().mark((function e(){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:s=e.sent,console.log(s);case 4:case"end":return e.stop()}}),e)})))})]}),(0,r.jsx)(m.q5,{className:"w-full rounded-lg",label:"Login to your account",onClick:g(u().mark((function s(){var t;return u().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v();case 2:t=s.sent,console.log(t),t.err||(j(t.user),e.push("/Dashboard"));case 5:case"end":return s.stop()}}),s)})))}),(0,r.jsxs)("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered?"," ",(0,r.jsx)(m.gl,{className:"",label:"Create account",onClick:function(){a(1)}})]})]})})})};function w(e){var s=e.className,t=e.label,n=e.href;return(0,r.jsx)(a.default,{href:n,passHref:!0,children:(0,r.jsx)("span",{className:s+" text-sm text-c4 hover:underline cursor-pointer",children:t})})}var b=function(){var e=(0,h.SE)().user,s=(0,n.useState)(!0),t=s[0],l=s[1],o=(0,n.useState)(!1),c=o[0],u=o[1];return(0,n.useEffect)((function(){var e=function(){window.pageYOffset>10?l(!1):l(!0)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,r.jsxs)("header",{className:"fixed w-full z-10 md:bg-opacity-90 transition duration-300 ease-in-out ".concat(!t&&"bg-c1 backdrop-blur-sm shadow-lg"),children:[(0,r.jsx)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mr-4",children:(0,r.jsx)(a.default,{href:"/",className:"block",passHref:!0,children:(0,r.jsxs)("svg",{className:"w-8 h-8 cursor-pointer",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"header-logo",children:[(0,r.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),(0,r.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),(0,r.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})}),(0,r.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"url(#header-logo)",fillRule:"nonzero"})]})})}),(0,r.jsx)("nav",{className:"flex flex-grow",children:(0,r.jsx)("ul",{className:"flex flex-grow justify-end flex-wrap items-center",children:e?(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)("li",{className:"pl-10",children:(0,r.jsx)(w,{href:"/Dashboard",label:"Dashbord"})}),(0,r.jsx)("li",{className:"pl-10",children:(0,r.jsx)(w,{href:"Membership",label:"Membership"})}),(0,r.jsx)("li",{className:"pl-10",children:(0,r.jsx)(w,{href:"HowToUse",label:"How to use"})}),(0,r.jsx)("li",{className:"pl-10",children:(0,r.jsx)(w,{href:"Settings",label:"Settings"})})]}):(0,r.jsx)("li",{children:(0,r.jsx)(m.g,{className:"cursor-pointer rounded-full",onClick:function(){u(!0)},label:"Sign In"})})})})]})}),(0,r.jsxs)(i,{open:c,setOpen:u,children:[(0,r.jsx)(j,{})," "]})]})}},7322:function(e,s,t){t.d(s,{g:function(){return i},gl:function(){return c},q5:function(){return u}});var r=t(4051),n=t.n(r),a=t(5893),l=t(7294);function o(e,s,t,r,n,a,l){try{var o=e[a](l),i=o.value}catch(c){return void t(c)}o.done?s(i):Promise.resolve(i).then(r,n)}function i(e){var s=e.className,t=e.label,r=e.onClick;return(0,a.jsx)("button",{className:s+" text-slate-50 bg-c4 font-medium text-sm px-5 py-2.5 text-center",onClick:r,children:t})}function c(e){var s=e.className,t=e.label,r=e.onClick;return(0,a.jsx)("button",{className:s+" text-sm text-c4 hover:underline",onClick:r,children:t})}function u(e){var s,t=e.className,r=e.label,i=e.onClick,c=(0,l.useState)(!1),u=c[0],m=c[1];return(0,a.jsx)(l.Fragment,{children:u?(0,a.jsx)(d,{}):(0,a.jsx)("button",{className:t+" text-slate-50 bg-c4 font-medium text-sm px-5 py-2.5 text-center",onClick:(s=n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,i();case 3:m(!1);case 4:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var a=s.apply(e,t);function l(e){o(a,r,n,l,i,"next",e)}function i(e){o(a,r,n,l,i,"throw",e)}l(void 0)}))}),children:r})})}function d(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsxs)("svg",{role:"status",className:"inline h-8 w-8 animate-spin mr-2 text-c4 fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}}}]);