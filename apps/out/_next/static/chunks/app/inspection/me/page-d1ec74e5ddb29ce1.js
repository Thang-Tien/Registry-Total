(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6437],{89980:function(e,t,o){Promise.resolve().then(o.bind(o,47026)),Promise.resolve().then(o.t.bind(o,35888,23)),Promise.resolve().then(o.bind(o,56941)),Promise.resolve().then(o.bind(o,34983))},47026:function(e,t,o){"use strict";o.r(t);var n=o(57437),i=o(2265),r=o(61396),a=o.n(r),l=o(10884),c=o(20068),s=o(38440),_=o(6052),d=o(93769),g=o(90986),h=o(68829),x=o.n(h);t.default=()=>{let e={name:"Thiện pờ rồ",age:18},[t,o]=(0,i.useState)({user_id:"",centre_id:"",name:"",address:"",phone:0,email:"",date_of_birth:""}),[r,h]=(0,i.useState)([]),[m,u]=(0,i.useState)(null),[y,p]=(0,i.useState)(""),[f,T]=(0,i.useState)(""),k=(0,i.useRef)(null);(0,i.useEffect)(()=>{let n=null===localStorage.getItem("data")?JSON.stringify(e):localStorage.getItem("data");null!=n&&o(JSON.parse(n));let i=async()=>{try{let e=await fetch("".concat("http://localhost:8000","/api/v1/inspections/stat/each_centre/count/mine/").concat(t.user_id)),o=await e.json();e.ok?u(o.data[0].total):console.error("Failed to fetch data from API:",o.error)}catch(e){console.error("Error fetching data:",e)}},a=async()=>{try{let e=await fetch("".concat("http://localhost:8000","/api/v1/inspections/mine/").concat(t.user_id));if(!e.ok)throw Error("Network response was not ok");let o=await e.json();h(o.data.map((e,t)=>({key:String(t+1),inspection_id:e.inspection_id,inspection_number:e.inspection_number,number_plate:e.number_plate,inspection_date:new Date(e.inspection_date).toLocaleDateString("en-GB"),expired_date:new Date(e.expired_date).toLocaleDateString("en-GB")}))),console.log("Updated data source:",r)}catch(e){console.error("There has been a problem with your fetch operation:",e)}};i(),a()},[t.user_id]);let A=(e,t,o)=>{t(),p(e[0]),T(o)},S=e=>{e(),p("")},b=e=>({filterDropdown:t=>{let{setSelectedKeys:o,selectedKeys:i,confirm:r,clearFilters:a}=t;return(0,n.jsxs)("div",{style:{padding:8},onKeyDown:e=>e.stopPropagation(),children:[(0,n.jsx)(c.Z,{ref:k,placeholder:"T\xecm kiếm ".concat("inspection_number"===e?"số đăng kiểm":"biển số xe "),value:i[0],onChange:e=>o(e.target.value?[e.target.value]:[]),onPressEnter:()=>A(i,r,e),style:{marginBottom:8,display:"block"}}),(0,n.jsxs)(s.Z,{size:"middle",children:[(0,n.jsx)(_.ZP,{role:"reset",onClick:()=>a&&S(a),size:"middle",style:{width:90},children:"Đặt lại"}),(0,n.jsx)(_.ZP,{type:"primary",onClick:()=>A(i,r,e),icon:(0,n.jsx)(g.Z,{}),size:"middle",children:"T\xecm kiếm"})]})]})},filterIcon:e=>(0,n.jsx)(g.Z,{style:{color:e?"#1890ff":void 0}}),onFilter:(t,o)=>o[e].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.select()},100)},render:t=>f===e?(0,n.jsx)(x(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[y],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),H=[{title:"Số đăng kiểm",dataIndex:"inspection_number",key:"inspection_number",align:"center",sorter:(e,t)=>e.inspection_number.localeCompare(t.inspection_number),sortDirections:["ascend","descend"],showSorterTooltip:!1,...b("inspection_number")},{title:"Biển số xe",dataIndex:"number_plate",key:"number_plate",align:"center",sorter:(e,t)=>e.inspection_number.localeCompare(t.inspection_number),sortDirections:["ascend","descend"],showSorterTooltip:!1,...b("number_plate")},{title:"Ng\xe0y đăng kiểm",dataIndex:"inspection_date",key:"inspection_date",align:"center"},{title:"Ng\xe0y hết hạn",dataIndex:"expired_date",key:"expired_date",align:"center"},{title:"",dataIndex:"action",key:"action",align:"center",render:(e,t)=>(0,n.jsx)(a(),{href:"/inspection/".concat(t.inspection_id),children:(0,n.jsx)(d.Z,{style:{color:"black"}})})}];return(0,n.jsx)(l.Z,{title:()=>(0,n.jsxs)("div",{style:{fontSize:"16px",fontWeight:"bold",padding:"0 10px"},children:["Tổng số xe đ\xe3 đăng kiểm: ",m||0]}),dataSource:r,columns:H,pagination:{position:["bottomCenter"]},scroll:{x:"calc(100vw - 256px - 128px)"},style:{margin:50}})}},56941:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return W}});var n=o(57437),i=o(2265),r=o(86107),a=o(17565),l=o(90986),c=o(53624),s=o(4171),_=o(75204),d=o(12048),g=o(59477),h=o(58687),x=o(54440),m=o.n(x),u=o(18067),y=o.n(u);let p={div:"",span:"",h1:y().asH1,h2:y().asH2,h3:y().asH3,h4:y().asH4,h5:y().asH5,h6:y().asH6},f={heading1:y().sizeHeading1,heading2:y().sizeHeading2,heading3:y().sizeHeading3,heading4:y().sizeHeading4,heading5:y().sizeHeading5,heading6:y().sizeHeading6,body:y().sizeBody,bodySmall:y().sizeBodySmall,bodyExtraSmall:y().sizeBodyExtraSmall,extraLarge:y().sizeExtraLarge,none:""},T={large:y().lineHeightLarge,medium:y().lineHeightMedium,small:y().lineHeightSmall,none:""},k={ink:y().colorInk,ink80:y().colorInk80,ink50:y().colorInk50,ink30:y().colorInk30,ink10:y().colorInk10,primary:y().colorPrimary,primary80:y().colorPrimary80,primary50:y().colorPrimary50,primary30:y().colorPrimary30,primary10:y().colorPrimary10,secondary:y().colorSecondary,secondary80:y().colorSecondary80,secondary50:y().colorSecondary50,secondary30:y().colorSecondary30,secondary10:y().colorSecondary10,white:y().colorWhite,white80:y().colorWhite80,white50:y().colorWhite50,white30:y().colorWhite30,white10:y().colorWhite10,grey:y().colorGrey,grey80:y().colorGrey80,grey50:y().colorGrey50,grey30:y().colorGrey30,grey10:y().colorGrey10,inherit:y().colorInherit,none:""},A={regular:y().fontWeightRegular,semibold:y().fontWeightSemibold,bold:y().fontWeightBold,black:y().fontWeightBlack,none:""},S={1:y().maxLines1,2:y().maxLines2,3:y().maxLines3,4:y().maxLines4,5:y().maxLines5,none:""};var Text={Div:function(e){let{className:t,style:o,as:i="div",content:r,children:a=r,size:l="body",lineHeight:c="none",color:s="ink",fontWeight:_="none",maxLines:d="none",...g}=e;return(0,n.jsx)("div",{className:m()(t,y().container),style:o,...g,children:(0,n.jsx)(i,{className:m()(p[i],f[l],T[c],k[s],A[_],S[d]),children:a})})}},b=o(16691),H=o.n(b);function w(){return(0,n.jsxs)(g.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,n.jsx)(H(),{src:h.Z.src,width:40,height:40,alt:"Logo"}),(0,n.jsx)(Text.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var j=o(70009),z=o.n(j),I=o(24033);function L(e,t,o,n,i){return{key:t,icon:o,children:n,label:e,type:i}}function W(e){let{active:t}=e,o=[L("Bảng điều khiển","dashboard",(0,n.jsx)(s.Z,{})),L("Quản l\xfd đăng kiểm","inspection",(0,n.jsx)(a.Z,{}),[L("Tất cả đăng kiểm","inspection/all"),L("Đăng kiểm của t\xf4i","inspection/me"),L("Tra cứu đăng kiểm","inspection/search")]),L("Tạo đăng kiểm","inspection/create",(0,n.jsx)(r.Z,{})),L("Tra cứu phương tiện","cars/search",(0,n.jsx)(l.Z,{})),L("Thống k\xea","statistics",(0,n.jsx)(c.Z,{})),L("T\xe0i khoản","settings",(0,n.jsx)(_.Z,{}),[L("C\xe0i đặt","settings/profile"),L("Đăng xuất","auth")])],h=()=>{localStorage.clear()},[x,m]=(0,i.useState)([""]),u=(0,I.useRouter)();return(0,n.jsxs)(g.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,n.jsx)("button",{className:z().button,children:(0,n.jsx)(w,{})}),(0,n.jsx)(d.Z,{defaultSelectedKeys:[t],onClick:e=>{let t=e.keyPath[0];u.prefetch("/".concat(t)),u.push("/".concat(t)),"auth"===t&&h()},mode:"inline",openKeys:x,onOpenChange:e=>{let t=e.length>x.length;m(e),!t&&e.length>0&&m(t=>[...t,...e]),console.log(e)},style:{width:256},items:o})]})}},59477:function(e,t,o){"use strict";var n=o(57437);function i(e){let{className:t,style:o,children:i,...r}=e;return(0,n.jsx)("div",{className:t,style:{...r,...o},children:i})}o(2265),t.Z={Row:function(e){return(0,n.jsx)(i,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,n.jsx)(i,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,n.jsx)(i,{...e})}}},35888:function(){},70009:function(e){e.exports={button:"NavBar_button__uBQtA"}},18067:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},58687:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2246,5544,1461,4212,6964,4983,1632,1396,8717,891,8829,2971,2472,1744],function(){return e(e.s=89980)}),_N_E=e.O()}]);