(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2353],{69358:function(e,t,i){Promise.resolve().then(i.bind(i,98051)),Promise.resolve().then(i.t.bind(i,36736,23)),Promise.resolve().then(i.bind(i,56941)),Promise.resolve().then(i.bind(i,34983))},98051:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var r=i(57437),o=i(2265),n=i(71144),a=i(20068),l=i(22876),c=i(77840),s=i(23172),_=i(16691),d=i.n(_),h={src:"/_next/static/media/search-3.f944d12c.svg",height:625,width:798,blurWidth:0,blurHeight:0},g=i(5172),x=i(22917);let{Text}=c.default;var m=()=>{let[e,t]=(0,o.useState)([]);(0,o.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/inspection_number")),i=await e.json(),r=i.data.map(e=>({inspection_id:e.inspection_id,value:e.inspection_number,name:e.name}));t(r),console.log(r)}catch(e){console.error("Error fetching data:",e)}};e()},[]);let[i,c]=(0,o.useState)([]),[_,m]=(0,o.useState)("Start");return(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Z,{style:{width:"100%"},children:(0,r.jsx)(a.Z.Search,{size:"large",placeholder:"Nhập số đăng kiểm",enterButton:!0,allowClear:!0,style:{width:"100%"},onSearch:t=>{if(""===t.trim()){m("Start");return}let i=e.filter(e=>e.value.toUpperCase().includes(t.trim().toUpperCase()));m(i.length>0?"List":"Not Found"),c(i)}})}),"Start"===_&&(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)("br",{}),(0,r.jsx)(d(),{alt:"",src:h,width:250,style:{margin:"4rem 0"}}),(0,r.jsx)("br",{}),(0,r.jsx)(Text,{style:{textAlign:"center"},children:"Bắt đầu t\xecm kiếm đăng kiểm n\xe0o!"})]}),"List"===_&&(0,r.jsx)(l.Z,{itemLayout:"horizontal",style:{backgroundColor:"#fff",marginTop:50},bordered:!0,pagination:{position:"bottom",align:"center",pageSize:8},dataSource:i,renderItem:e=>(0,r.jsx)(l.Z.Item,{actions:[(0,r.jsx)("a",{href:"/inspection/".concat(e.inspection_id),children:"Xem chi tiết"})],children:(0,r.jsx)(l.Z.Item.Meta,{avatar:(0,r.jsx)(d(),{alt:"",src:x.Z,width:30}),title:e.value,description:e.name})})}),"Not Found"===_&&(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,r.jsxs)(s.Z,{active:!0,title:!1,paragraph:{rows:10,width:"100%"},loading:!1,style:{margin:"4rem 0"},children:[(0,r.jsx)(d(),{alt:"",src:g.Z,width:250,style:{margin:"4rem 0"}}),(0,r.jsx)("br",{}),(0,r.jsx)(Text,{children:"Kh\xf4ng t\xecm thấy kết quả"})]})})]})}},56941:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return v}});var r=i(57437),o=i(2265),n=i(86107),a=i(17565),l=i(90986),c=i(53624),s=i(4171),_=i(75204),d=i(12048),h=i(59477),g=i(58687),x=i(54440),m=i.n(x),u=i(18067),y=i.n(u);let f={div:"",span:"",h1:y().asH1,h2:y().asH2,h3:y().asH3,h4:y().asH4,h5:y().asH5,h6:y().asH6},A={heading1:y().sizeHeading1,heading2:y().sizeHeading2,heading3:y().sizeHeading3,heading4:y().sizeHeading4,heading5:y().sizeHeading5,heading6:y().sizeHeading6,body:y().sizeBody,bodySmall:y().sizeBodySmall,bodyExtraSmall:y().sizeBodyExtraSmall,extraLarge:y().sizeExtraLarge,none:""},T={large:y().lineHeightLarge,medium:y().lineHeightMedium,small:y().lineHeightSmall,none:""},p={ink:y().colorInk,ink80:y().colorInk80,ink50:y().colorInk50,ink30:y().colorInk30,ink10:y().colorInk10,primary:y().colorPrimary,primary80:y().colorPrimary80,primary50:y().colorPrimary50,primary30:y().colorPrimary30,primary10:y().colorPrimary10,secondary:y().colorSecondary,secondary80:y().colorSecondary80,secondary50:y().colorSecondary50,secondary30:y().colorSecondary30,secondary10:y().colorSecondary10,white:y().colorWhite,white80:y().colorWhite80,white50:y().colorWhite50,white30:y().colorWhite30,white10:y().colorWhite10,grey:y().colorGrey,grey80:y().colorGrey80,grey50:y().colorGrey50,grey30:y().colorGrey30,grey10:y().colorGrey10,inherit:y().colorInherit,none:""},H={regular:y().fontWeightRegular,semibold:y().fontWeightSemibold,bold:y().fontWeightBold,black:y().fontWeightBlack,none:""},b={1:y().maxLines1,2:y().maxLines2,3:y().maxLines3,4:y().maxLines4,5:y().maxLines5,none:""};var Text={Div:function(e){let{className:t,style:i,as:o="div",content:n,children:a=n,size:l="body",lineHeight:c="none",color:s="ink",fontWeight:_="none",maxLines:d="none",...h}=e;return(0,r.jsx)("div",{className:m()(t,y().container),style:i,...h,children:(0,r.jsx)(o,{className:m()(f[o],A[l],T[c],p[s],H[_],b[d]),children:a})})}},S=i(16691),k=i.n(S);function j(){return(0,r.jsxs)(h.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,r.jsx)(k(),{src:g.Z.src,width:40,height:40,alt:"Logo"}),(0,r.jsx)(Text.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var z=i(70009),L=i.n(z),W=i(24033);function w(e,t,i,r,o){return{key:t,icon:i,children:r,label:e,type:o}}function v(e){let{active:t}=e,i=[w("Bảng điều khiển","dashboard",(0,r.jsx)(s.Z,{})),w("Quản l\xfd đăng kiểm","inspection",(0,r.jsx)(a.Z,{}),[w("Tất cả đăng kiểm","inspection/all"),w("Đăng kiểm của t\xf4i","inspection/me"),w("Tra cứu đăng kiểm","inspection/search")]),w("Tạo đăng kiểm","inspection/create",(0,r.jsx)(n.Z,{})),w("Tra cứu phương tiện","cars/search",(0,r.jsx)(l.Z,{})),w("Thống k\xea","statistics",(0,r.jsx)(c.Z,{})),w("T\xe0i khoản","settings",(0,r.jsx)(_.Z,{}),[w("C\xe0i đặt","settings/profile"),w("Đăng xuất","auth")])],g=()=>{localStorage.clear()},[x,m]=(0,o.useState)([""]),u=(0,W.useRouter)();return(0,r.jsxs)(h.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,r.jsx)("button",{className:L().button,children:(0,r.jsx)(j,{})}),(0,r.jsx)(d.Z,{defaultSelectedKeys:[t],onClick:e=>{let t=e.keyPath[0];u.prefetch("/".concat(t)),u.push("/".concat(t)),"auth"===t&&g()},mode:"inline",openKeys:x,onOpenChange:e=>{let t=e.length>x.length;m(e),!t&&e.length>0&&m(t=>[...t,...e]),console.log(e)},style:{width:256},items:i})]})}},59477:function(e,t,i){"use strict";var r=i(57437);function o(e){let{className:t,style:i,children:o,...n}=e;return(0,r.jsx)("div",{className:t,style:{...n,...i},children:o})}i(2265),t.Z={Row:function(e){return(0,r.jsx)(o,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,r.jsx)(o,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,r.jsx)(o,{...e})}}},36736:function(){},70009:function(e){e.exports={button:"NavBar_button__uBQtA"}},18067:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},22917:function(e,t){"use strict";t.Z={src:"/_next/static/media/checked.1df2f380.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mNgYNBkZIAA9ulTFi3be3jfn70H9/6eNGHOFAYQuHfzJjOInj1jycJDD/b/n/J+0t/pH6b/331x+//G4ropDFAgsffE3p9zP8z63/i8+d/8e3P/9V+e83/VmsW/GaBAdu+pPb9mf5z97+SjQ/9mnV30r/Ri/9/165f9Yfj3bBcLSMXChavXbrux5X/e+c5/ORe7/288ue5/d0PrMgYQuH0oqDwk3GrPhJb+tRu2rvi1YcuKX33NHYtADmf4f0ev788Zuf83lhhXMECAHMhNDDDw96zcxb97GfpB7B+317EwQMHF44dBvmMEAMfbeEGV0TUEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5172:function(e,t){"use strict";t.Z={src:"/_next/static/media/void.1de65ab5.svg",height:835,width:798,blurWidth:0,blurHeight:0}},58687:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2246,5544,1461,4212,6964,4983,3172,1632,7840,3263,2971,2472,1744],function(){return e(e.s=69358)}),_N_E=e.O()}]);