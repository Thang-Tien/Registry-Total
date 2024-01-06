(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2249],{58405:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(13428),r=n(2265),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},l=n(46614),s=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,a.Z)({},e,{ref:t,icon:i}))})},48150:function(e,t,n){"use strict";var a=n(2265),r=n(14706),i=n(39877),l=n(40958),s=n(45431),o=n(6824),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},u=(0,a.forwardRef)(function(e,t){var n=e.chartRef,u=e.style,f=e.className,d=e.loading,p=e.loadingTemplate,g=e.errorTemplate,m=c(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),h=(0,i.Z)(r.x1,m),y=h.chart,x=h.container;return(0,a.useEffect)(function(){(0,l.J)(n,y.current)},[y.current]),(0,a.useImperativeHandle)(t,function(){return{getChart:function(){return y.current}}}),a.createElement(s.Z,{errorTemplate:g},d&&a.createElement(o.Z,{loadingTemplate:p,theme:e.theme}),a.createElement("div",{className:f,style:void 0===u?{height:"inherit"}:u,ref:x}))});t.Z=u},11024:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},i:function(){return s}});var a=n(73310),r=n(2265),i=n(79148),l=n(19056);function s(e){return function(t){return r.createElement(i.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},r.createElement(e,Object.assign({},t)))}}function o(e,t,n,i){return s(function(s){let{prefixCls:o,style:c}=s,u=r.useRef(null),[f,d]=r.useState(0),[p,g]=r.useState(0),[m,h]=(0,a.Z)(!1,{value:s.open}),{getPrefixCls:y}=r.useContext(l.E_),x=y(t||"select",o);r.useEffect(()=>{if(h(!0),"undefined"!=typeof ResizeObserver){let e=new ResizeObserver(e=>{let t=e[0].target;d(t.offsetHeight+8),g(t.offsetWidth)}),t=setInterval(()=>{var a;let r=n?`.${n(x)}`:`.${x}-dropdown`,i=null===(a=u.current)||void 0===a?void 0:a.querySelector(r);i&&(clearInterval(t),e.observe(i))},10);return()=>{clearInterval(t),e.disconnect()}}},[]);let v=Object.assign(Object.assign({},s),{style:Object.assign(Object.assign({},c),{margin:0}),open:m,visible:m,getPopupContainer:()=>u.current});return i&&(v=i(v)),r.createElement("div",{ref:u,style:{paddingBottom:f,position:"relative",minWidth:p}},r.createElement(e,Object.assign({},v)))})}},87178:function(e,t,n){"use strict";n.d(t,{F:function(){return l},Z:function(){return i}});var a=n(54440),r=n.n(a);function i(e,t,n){return r()({[`${e}-status-success`]:"success"===t,[`${e}-status-warning`]:"warning"===t,[`${e}-status-error`]:"error"===t,[`${e}-status-validating`]:"validating"===t,[`${e}-has-feedback`]:n})}let l=(e,t)=>t||e},22826:function(e,t,n){"use strict";var a=n(65715);t.Z=a.Z},36363:function(e,t,n){"use strict";let a=(0,n(2265).createContext)({});t.Z=a},65715:function(e,t,n){"use strict";var a=n(2265),r=n(54440),i=n.n(r),l=n(19056),s=n(36363),o=n(81486),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let u=["xs","sm","md","lg","xl","xxl"],f=a.forwardRef((e,t)=>{let{getPrefixCls:n,direction:r}=a.useContext(l.E_),{gutter:f,wrap:d}=a.useContext(s.Z),{prefixCls:p,span:g,order:m,offset:h,push:y,pull:x,className:v,children:$,flex:b,style:j}=e,w=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=n("col",p),[E,Z]=(0,o.c)(O),S={};u.forEach(t=>{let n={},a=e[t];"number"==typeof a?n.span=a:"object"==typeof a&&(n=a||{}),delete w[t],S=Object.assign(Object.assign({},S),{[`${O}-${t}-${n.span}`]:void 0!==n.span,[`${O}-${t}-order-${n.order}`]:n.order||0===n.order,[`${O}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${O}-${t}-push-${n.push}`]:n.push||0===n.push,[`${O}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${O}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${O}-rtl`]:"rtl"===r})});let C=i()(O,{[`${O}-${g}`]:void 0!==g,[`${O}-order-${m}`]:m,[`${O}-offset-${h}`]:h,[`${O}-push-${y}`]:y,[`${O}-pull-${x}`]:x},v,S,Z),M={};if(f&&f[0]>0){let e=f[0]/2;M.paddingLeft=e,M.paddingRight=e}return b&&(M.flex="number"==typeof b?`${b} ${b} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(b)?`0 0 ${b}`:b,!1!==d||M.minWidth||(M.minWidth=0)),E(a.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign({},M),j),className:C,ref:t}),$))});t.Z=f},80331:function(e,t,n){"use strict";var a=n(2265),r=n(54440),i=n.n(r),l=n(5813),s=n(19056),o=n(36363),c=n(81486),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function f(e,t){let[n,r]=a.useState("string"==typeof e?e:""),i=()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<l.c4.length;n++){let a=l.c4[n];if(!t[a])continue;let i=e[a];if(void 0!==i){r(i);return}}};return a.useEffect(()=>{i()},[JSON.stringify(e),t]),n}let d=a.forwardRef((e,t)=>{let{prefixCls:n,justify:r,align:d,className:p,style:g,children:m,gutter:h=0,wrap:y}=e,x=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:v,direction:$}=a.useContext(s.E_),[b,j]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,O]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),E=f(d,w),Z=f(r,w),S=a.useRef(h),C=(0,l.ZP)();a.useEffect(()=>{let e=C.subscribe(e=>{O(e);let t=S.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&j(e)});return()=>C.unsubscribe(e)},[]);let M=v("row",n),[T,I]=(0,c.V)(M),k=(()=>{let e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach((t,n)=>{if("object"==typeof t)for(let a=0;a<l.c4.length;a++){let r=l.c4[a];if(b[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t}),e})(),F=i()(M,{[`${M}-no-wrap`]:!1===y,[`${M}-${Z}`]:Z,[`${M}-${E}`]:E,[`${M}-rtl`]:"rtl"===$},p,I),B={},R=null!=k[0]&&k[0]>0?-(k[0]/2):void 0;R&&(B.marginLeft=R,B.marginRight=R),[,B.rowGap]=k;let[N,P]=k,_=a.useMemo(()=>({gutter:[N,P],wrap:y}),[N,P,y]);return T(a.createElement(o.Z.Provider,{value:_},a.createElement("div",Object.assign({},x,{className:F,style:Object.assign(Object.assign({},B),g),ref:t}),m)))});t.Z=d},81486:function(e,t,n){"use strict";n.d(t,{V:function(){return u},c:function(){return f}});var a=n(12088),r=n(43744);let i=e=>{let{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},l=e=>{let{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,t)=>{let{componentCls:n,gridColumns:a}=e,r={};for(let e=a;e>=0;e--)0===e?(r[`${n}${t}-${e}`]={display:"none"},r[`${n}-push-${e}`]={insetInlineStart:"auto"},r[`${n}-pull-${e}`]={insetInlineEnd:"auto"},r[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},r[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},r[`${n}${t}-offset-${e}`]={marginInlineStart:0},r[`${n}${t}-order-${e}`]={order:0}):(r[`${n}${t}-${e}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${e/a*100}%`,maxWidth:`${e/a*100}%`}],r[`${n}${t}-push-${e}`]={insetInlineStart:`${e/a*100}%`},r[`${n}${t}-pull-${e}`]={insetInlineEnd:`${e/a*100}%`},r[`${n}${t}-offset-${e}`]={marginInlineStart:`${e/a*100}%`},r[`${n}${t}-order-${e}`]={order:e});return r},o=(e,t)=>s(e,t),c=(e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},o(e,n))}),u=(0,a.Z)("Grid",e=>[i(e)]),f=(0,a.Z)("Grid",e=>{let t=(0,r.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[l(t),o(t,""),o(t,"-xs"),Object.keys(n).map(e=>c(t,n[e],e)).reduce((e,t)=>Object.assign(Object.assign({},e),t),{})]})},43918:function(e,t,n){"use strict";var a=n(80331);t.Z=a.Z},80497:function(e,t,n){"use strict";n.d(t,{Fm:function(){return d}});var a=n(81792),r=n(92386);let i=new a.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),l=new a.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),s=new a.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),o=new a.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),c=new a.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),u=new a.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),f={"move-up":{inKeyframes:new a.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),outKeyframes:new a.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}})},"move-down":{inKeyframes:i,outKeyframes:l},"move-left":{inKeyframes:s,outKeyframes:o},"move-right":{inKeyframes:c,outKeyframes:u}},d=(e,t)=>{let{antCls:n}=e,a=`${n}-${t}`,{inKeyframes:i,outKeyframes:l}=f[t];return[(0,r.R)(a,i,l,e.motionDurationMid),{[`
        ${a}-enter,
        ${a}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}},61810:function(e,t,n){Promise.resolve().then(n.bind(n,30237))},30237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(57437),r=n(54440),i=n.n(r),l=n(68416),s=n.n(l),o=n(77104),c=n(76918),u=n(32011),f=()=>(0,a.jsxs)(u.Z.Col,{gap:"20px",style:{height:"100%"},children:[(0,a.jsx)(o.Z,{style:{height:"50%"}}),(0,a.jsx)(c.Z,{style:{height:"50%"}})]}),d=n(48150),p=n(6034),g=n(2265),m=()=>{let[e,t]=(0,g.useState)([]),[n,r]=(0,g.useState)(!1),i=e=>new Promise(t=>setTimeout(t,e));return(0,g.useEffect)(()=>{r(!0),(async()=>{await i(1500);try{let e=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/stat/all_centre/count/by_year?year=2023"),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});if(!e.ok)throw Error("Fail to get data");let n=await e.json(),a=[];n.data.forEach(e=>{a.push({count:e.total,month:e.month.toString()})}),t(a),r(!1)}catch(e){r(!1),console.log(e)}})()},[]),(0,a.jsx)(p.Z,{title:"Biểu đồ đăng kiểm",children:(0,a.jsx)(d.Z,{data:e,xField:"month",yField:"count",height:300,xAxis:{tickCount:5},slider:{start:.5,end:1},meta:{count:{alias:"Số lượng"}},smooth:!0})})},h=n(38790),y=n(39595),x=n(50721),v=n(38440),$=n(31468),b=n(43918),j=n(22826),w=n(23172);let O=new Date,E=[];for(let e=O.getFullYear();e>=2014;e--)E.push(e);let Z=["Đ\xf4ng Bắc Bộ","T\xe2y Bắc Bộ","Đồng bằng S\xf4ng Hồng"],S=["Bắc Trung Bộ","Duy\xean hải Nam Trung Bộ","T\xe2y Nguy\xean"],C=["Đ\xf4ng Nam Bộ","Đồng bằng S\xf4ng Cửu Long"],M=new Map;M.set("all",[...Z,...S,...C]),M.set("Miền Bắc",Z),M.set("Miền Trung",S),M.set("Miền Nam",C);var T=()=>{let[e,t]=(0,g.useState)(O.getFullYear()),[n,r]=(0,g.useState)(!1),[i,l]=(0,g.useState)("month"),[s,o]=(0,g.useState)([]),[c,u]=(0,g.useState)("all"),[f,d]=(0,g.useState)("all"),[m,h]=(0,g.useState)("all"),[y,Z]=(0,g.useState)([]),[S,C]=(0,g.useState)([]),T=e=>new Promise(t=>setTimeout(t,e));return(0,g.useEffect)(()=>{r(!0),(async()=>{await T(1500);try{let t="?year=".concat(e);"all"!=c&&(t+="&side=".concat(c)),"all"!=f&&(t+="&area=".concat(f)),"all"!=m&&(t+="&address=".concat(m));let n=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/stat/all_centre/count/every_month").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});if(!n.ok)throw Error("Fail to get data");let a=await n.json(),l=[],s=[0,0,0,0,0],u=0;if(a.data.forEach(e=>{"month"===i?l.push({count:e.total,option:e.month.toString()}):(s[Math.ceil(e.month/4)]+=e.total,u=1)}),u)for(let e=1;e<5;e++)l.push({count:s[e],option:e.toString()});console.log(l),o(l),r(!1)}catch(e){r(!1),console.log(e)}})()},[e,i,c,f,m]),(0,g.useEffect)(()=>{r(!0),Z(M.get(c));let e="/api/v1/centres";"all"!=c&&(e+="?side=".concat(c)),"all"!=f&&(e+="&area=".concat(f)),"all"!=m&&(e+="&address=".concat(m)),(async()=>{await T(1e3);try{let t=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org").concat(e),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});if(!t.ok)throw Error("Fail to get data");let n=await t.json(),a=[];n.data.forEach(e=>{a.push(e.address)}),a=Array.from(new Set(a)),C(a),r(!1)}catch(e){r(!1),console.log(e)}})(),console.log(e)},[c,f,m]),(0,a.jsxs)(p.Z,{title:"Số liệu thống k\xea",style:{height:"100%"},extra:(0,a.jsxs)(v.Z,{size:"middle",children:[(0,a.jsx)($.default,{disabled:n,defaultValue:e,onChange:e=>{t(e)},style:{width:100},listHeight:200,options:[...E.map(e=>({value:e,label:e}))]}),(0,a.jsx)($.default,{defaultValue:i,onChange:e=>{l(e)},style:{width:120},disabled:n,listHeight:200,options:[{value:"month",label:"Theo th\xe1ng"},{value:"season",label:"Theo qu\xfd"}]})]}),children:[(0,a.jsxs)(b.Z,{gutter:[20,20],style:{marginBottom:"2.4rem"},children:[(0,a.jsx)(j.Z,{children:(0,a.jsx)($.default,{disabled:n,value:c,onChange:e=>{u(e),d("all"),h("all")},style:{width:120},listHeight:200,options:[{value:"all",label:"Miền"},{value:"Miền Bắc",label:"Miền Bắc"},{value:"Miền Trung",label:"Miền Trung"},{value:"Miền Nam",label:"Miền Nam"}]})}),(0,a.jsx)(j.Z,{children:(0,a.jsx)($.default,{value:f,disabled:"all"===c||n,onChange:e=>{d(e),h("all")},style:{width:200},listHeight:200,options:[{value:"all",label:"Khu vực"},...y.map(e=>({value:e,label:e}))]})}),(0,a.jsx)(j.Z,{children:(0,a.jsx)($.default,{value:m,disabled:"all"===f||n,onChange:e=>{h(e)},style:{width:200},listHeight:200,options:[{value:"all",label:"Tỉnh/Th\xe0nh phố"},...S.map(e=>({value:e,label:e}))]})})]}),(0,a.jsx)(w.Z,{loading:n,active:!0,paragraph:{rows:5},children:(0,a.jsx)(x.Z,{data:s,xField:"option",yField:"count",height:300,label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{count:{alias:"Số lượng"},month:{alias:"Th\xe1ng"}}})})]})},I=e=>{let{className:t,style:n}=e;return(0,g.useEffect)(()=>{document.title="Thống k\xea"},[]),(0,a.jsx)("div",{className:i()(t,s().container),style:n,children:(0,a.jsxs)(u.Z.Row,{style:{height:"100vh",width:"100vw"},padding:"0",children:[(0,a.jsx)(h.Z,{active:"statistic",openMenu:""}),(0,a.jsx)("div",{style:{background:"#e4e4e7",width:"calc(100vw - 256px - 8px)",overflow:"auto"},children:(0,a.jsxs)(u.Z.Col,{gap:"20px",justifyContent:"center",style:{margin:"50px 50px"},children:[(0,a.jsxs)(u.Z.Row,{gap:"24px",justifyContent:"center",style:{},children:[(0,a.jsx)(u.Z.Cell,{style:{width:"25%"},children:(0,a.jsx)(f,{})}),(0,a.jsx)(u.Z.Cell,{style:{width:"80%"},children:(0,a.jsx)(T,{})})]}),(0,a.jsxs)(u.Z.Row,{gap:"24px",justifyContent:"center",children:[(0,a.jsx)(u.Z.Cell,{style:{width:"66%"},children:(0,a.jsx)(m,{})}),(0,a.jsx)(u.Z.Cell,{style:{width:"38%"},children:(0,a.jsx)(y.Z,{height:"405px"})})]})]})})]})})}},68416:function(){}},function(e){e.O(0,[2155,3969,1180,2831,5775,3881,3172,6034,187,8104,1468,1342,3400,2863,2971,4938,1744],function(){return e(e.s=61810)}),_N_E=e.O()}]);