(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6182],{55990:function(e,t,n){Promise.resolve().then(n.bind(n,20525))},20525:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var o=n(57437),r=n(54440),i=n.n(r),l=n(82940),a=n.n(l),c=n(32011),s=n(51062),d=n(34983),h=n(77322),_=n(22826),g=n(63589),m=n(5672),x=n(43965),u=n(20068),y=n(37275),p=n(38440),f=n(34993),T=n(6052),b=n(6034),k=n(43918),A=n(1342),j=n(2265),S={src:"/_next/static/media/search-2.915d8cfc.svg",height:515,width:553,blurWidth:0,blurHeight:0},H=n(16691),Z=n.n(H),z=n(9305),P=n(8399),v=n(87304),w=n(61396),C=n.n(w),W=()=>{let e={name:"Thiện pờ rồ",age:18},[t,n]=(0,j.useState)({user_id:"",centre_id:"",name:"",address:"",phone:0,email:"",date_of_birth:""}),[r,i]=(0,j.useState)(0),[l,a]=(0,j.useState)(!1),[c,s]=(0,j.useState)(!1),[d,H]=(0,j.useState)(!1),[w,W]=(0,j.useState)(!1),[L,B]=h.ZP.useMessage(),[I,E]=(0,j.useState)([]),[D,N]=(0,j.useState)({}),[G,K]=(0,j.useState)(null);(0,j.useEffect)(()=>{let t=null===localStorage.getItem("data")?JSON.stringify(e):localStorage.getItem("data");null!=t&&n(JSON.parse(t));let o=async()=>{try{let e=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/cars/number_plate")),t=(await e.json()).data.map(e=>({value:e.number_plate}));E(t),console.log(t)}catch(e){console.error("Error fetching data:",e)}};(async()=>{try{let e=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/stat/total")),t=await e.json();if(e.ok){let e=t.data[0].value+1;K(e)}else console.error("Error fetching data:",t)}catch(e){console.error("Error fetching data:",e)}})(),o()},[]);let Q=[{label:"C\xf4ng thức b\xe1nh xe",name:"wheel_formula",placeholder:"VD: 6x6"},{type:"number",label:"Vết b\xe1nh xe",name:"wheel_tread",addonAfter:"mm"},{label:"K\xedch thước bao",name:"overall_dimension",addonAfter:"mm",placeholder:"VD: 4288 x 1535 x 1485"},{label:"K\xedch thước l\xf2ng th\xf9ng xe",name:"container_dimension",addonAfter:"mm",placeholder:"VD: 2495 x 1423 x 1110"},{type:"number",label:"Chiều d\xe0i cơ sở",name:"length_base",addonAfter:"mm"},{type:"number",label:"Khối lượng bản th\xe2n",name:"kerb_mass",addonAfter:"kg"},{label:"Khối lượng h\xe0ng CC theo TK/CP TGGT",name:"designed_and_authorized_payload",addonAfter:"kg",placeholder:"VD: 531/700"},{label:"Khối lượng to\xe0n bộ theo TK/CP TGGT",name:"designed_and_authorized_total_mass",addonAfter:"kg",placeholder:"VD: 2964/2914"},{label:"Khối lượng k\xe9o theo TK/CP TGGT",name:"designed_and_authorized_towed_mass",addonAfter:"kg",placeholder:"VD: 1899/1679"},{type:"number",label:"Số lượng người cho ph\xe9p chở",name:"permissible_carry"},{type:"number",label:"Thể t\xedch l\xe0m việc của động cơ",name:"engine_displacement",addonAfter:(0,o.jsxs)("span",{children:["cm",(0,o.jsx)("sup",{children:"3"})]})},{label:"C\xf4ng suất lớn nhất/tốc độ quay",name:"maximum_output_to_rpm_ratio",placeholder:"VD: 130kW/6333vph"},{label:"Loại nhi\xean liệu",name:"fuel"},{type:"number",label:"Số lượng lốp",name:"number_of_tires",addonAfter:"lốp"},{label:"Cỡ lốp/trục",name:"tire_size",placeholder:"VD: 225/65 R17"},{type:"checkbox",label:"Kinh doanh vận tải",name:"purpose"},{type:"checkbox",label:"Cải tạo",name:"recovered"}],V=[{key:0,title:"T\xecm kiếm phương tiện",icon:(0,o.jsx)(z.Z,{})},{key:1,title:"Đăng kiểm phương tiện",icon:(0,o.jsx)(P.Z,{})},{key:2,title:"Ho\xe0n tất đăng kiểm",icon:(0,o.jsx)(v.Z,{})}],R=(e,t)=>{L.open({type:e,content:t})},O=()=>{i(r+1)},q=()=>{i(r-1)},M=e=>{let{type:t,label:n,name:r,addonAfter:i,placeholder:l}=e;return(0,o.jsx)(_.Z,{xl:8,md:12,xs:24,children:(0,o.jsxs)(g.Z.Item,{label:"checkbox"!==t&&n,name:r,rules:"checkbox"!==t?[{required:!0,message:"Trường n\xe0y kh\xf4ng được để trống!"}]:[],valuePropName:"checkbox"===t?"checked":"value",children:["number"===t&&(0,o.jsx)(m.Z,{addonAfter:i,style:{width:"100%"}}),"checkbox"===t&&(0,o.jsx)(x.Z,{children:n}),!t&&(0,o.jsx)(u.Z,{addonAfter:i,placeholder:l})]})})},U=async e=>{W(!0);let n={...e,purpose:e.purpose?"business":"personal",recovered:e.recovered?"1":"0"},o={...D,...n,centre_id:t.centre_id,user_id:t.user_id};N(o),console.log("Received values:",n),console.log("Posting data:",o);try{(await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/createInspection"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(console.log("Data posted successfully"),N({}),setTimeout(()=>{W(!1),O()},1e3)):(console.error("Failed to post data"),R("error","C\xf3 lỗi xảy ra"),W(!1))}catch(e){console.error("Error during API call:",e),W(!1)}};return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[B,(0,o.jsx)(y.Z,{current:r,items:V,labelPlacement:"vertical",size:"small",status:l?"error":"process",style:{width:"60%",alignSelf:"center",marginTop:"30px",marginBottom:"30px"}}),0===r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z.Search,{allowClear:!0,loading:d,enterButton:!0,placeholder:"Nhập biển số xe",size:"large",style:{width:"60%",alignSelf:"center"},onChange:()=>{s(!1),a(!1)},onSearch:e=>{a(!1);let t=e.trim();H(!0);let n=I.some(e=>e.value===t);setTimeout(()=>{s(n),n?(R("success","Đ\xe3 t\xecm thấy phương tiện"),N({...D,number_plate:t}),console.log(D),setTimeout(()=>{H(!1)},1e3)):(H(!1),a(!0),R("error","Kh\xf4ng t\xecm thấy phương tiện"))},1e3)},status:l?"error":""}),c&&(0,o.jsx)(p.Z,{style:{marginBottom:"2rem",marginTop:"1rem",alignSelf:"center"},size:"middle",children:(0,o.jsx)(f.Z,{title:"Đăng kiểm phương tiện",description:"Bạn c\xf3 chắc chắn muốn đăng kiểm phương tiện n\xe0y?",cancelText:"Hủy",okText:"Tiếp tục",cancelButtonProps:{size:"middle"},okButtonProps:{size:"middle"},onConfirm:()=>{O(),s(!1)},children:(0,o.jsx)(T.ZP,{type:"primary",children:"Tiếp tục"})})}),(0,o.jsx)(Z(),{alt:"",src:S,width:250,style:{alignSelf:"center",marginTop:"30px"}})]}),1===r&&(0,o.jsx)(b.Z,{title:"Đăng kiểm phương tiện",extra:(0,o.jsx)(T.ZP,{onClick:()=>q(),children:"Trở lại"}),style:{width:"70%",alignSelf:"center"},children:(0,o.jsx)(g.Z,{name:"createForm",layout:"vertical",autoComplete:"off",onFinish:U,children:(0,o.jsxs)(k.Z,{gutter:[30,16],align:"bottom",children:[Q.map(e=>(0,o.jsx)(M,{type:e.type,label:e.label,name:e.name,addonAfter:e.addonAfter,placeholder:e.placeholder},e.name)),(0,o.jsx)(_.Z,{span:24,children:(0,o.jsxs)(p.Z,{style:{width:"100%",justifyContent:"center"},size:"large",children:[(0,o.jsx)(T.ZP,{htmlType:"reset",children:"Đặt lại"}),(0,o.jsx)(T.ZP,{type:"primary",htmlType:"submit",loading:w,children:"Ho\xe0n tất"})]})})]})})}),2===r&&(0,o.jsx)(A.ZP,{status:"success",title:"Đăng kiểm cho phương tiện th\xe0nh c\xf4ng",extra:(0,o.jsxs)(p.Z,{size:"large",children:[(0,o.jsx)(T.ZP,{size:"large",onClick:()=>{i(0),console.log(D)},children:"Quay về"}),(0,o.jsx)(C(),{href:"/inspection/".concat(G),children:(0,o.jsx)(T.ZP,{type:"primary",size:"large",children:"Xem đăng kiểm"})})]})})]})};function L(e){let{className:t,style:n}=e;return(0,j.useEffect)(()=>{document.title="Tạo đăng kiểm"},[]),(0,o.jsx)("div",{className:i()(t,a().container),style:n,children:(0,o.jsxs)(c.Z.Row,{style:{width:"100%",minHeight:"100vh"},children:[(0,o.jsx)(s.Z,{active:"inspection/create"}),(0,o.jsxs)("div",{style:{flex:"1",display:"flex",flexDirection:"column",background:"#e4e4e7"},children:[(0,o.jsx)(d.Z,{separator:">",items:[{title:"Nh\xe0 của t\xf4i"},{title:"Quản l\xfd đăng kiểm"},{title:"Tạo đăng kiểm"}],style:{marginLeft:30,marginTop:30}}),(0,o.jsx)(W,{})]})]})})}},51062:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(57437),r=n(2265),i=n(8349),l=n(82673),a=n(84919),c=n(75393),s=n(75377),d=n(6371),h=n(12048),_=n(32011),g=n(930),m=n(54440),x=n.n(m),u=n(73015),y=n.n(u);let p={div:"",span:"",h1:y().asH1,h2:y().asH2,h3:y().asH3,h4:y().asH4,h5:y().asH5,h6:y().asH6},f={heading1:y().sizeHeading1,heading2:y().sizeHeading2,heading3:y().sizeHeading3,heading4:y().sizeHeading4,heading5:y().sizeHeading5,heading6:y().sizeHeading6,body:y().sizeBody,bodySmall:y().sizeBodySmall,bodyExtraSmall:y().sizeBodyExtraSmall,extraLarge:y().sizeExtraLarge,none:""},T={large:y().lineHeightLarge,medium:y().lineHeightMedium,small:y().lineHeightSmall,none:""},b={ink:y().colorInk,ink80:y().colorInk80,ink50:y().colorInk50,ink30:y().colorInk30,ink10:y().colorInk10,primary:y().colorPrimary,primary80:y().colorPrimary80,primary50:y().colorPrimary50,primary30:y().colorPrimary30,primary10:y().colorPrimary10,secondary:y().colorSecondary,secondary80:y().colorSecondary80,secondary50:y().colorSecondary50,secondary30:y().colorSecondary30,secondary10:y().colorSecondary10,white:y().colorWhite,white80:y().colorWhite80,white50:y().colorWhite50,white30:y().colorWhite30,white10:y().colorWhite10,grey:y().colorGrey,grey80:y().colorGrey80,grey50:y().colorGrey50,grey30:y().colorGrey30,grey10:y().colorGrey10,inherit:y().colorInherit,none:""},k={regular:y().fontWeightRegular,semibold:y().fontWeightSemibold,bold:y().fontWeightBold,black:y().fontWeightBlack,none:""},A={1:y().maxLines1,2:y().maxLines2,3:y().maxLines3,4:y().maxLines4,5:y().maxLines5,none:""};var j={Div:function(e){let{className:t,style:n,as:r="div",content:i,children:l=i,size:a="body",lineHeight:c="none",color:s="ink",fontWeight:d="none",maxLines:h="none",..._}=e;return(0,o.jsx)("div",{className:x()(t,y().container),style:n,..._,children:(0,o.jsx)(r,{className:x()(p[r],f[a],T[c],b[s],k[d],A[h]),children:l})})}},S=n(16691),H=n.n(S);function Z(){return(0,o.jsxs)(_.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,o.jsx)(H(),{src:g.Z.src,width:40,height:40,alt:"Logo"}),(0,o.jsx)(j.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var z=n(11910),P=n.n(z),v=n(24033);function w(e,t,n,o,r){return{key:t,icon:n,children:o,label:e,type:r}}function C(e){let{active:t}=e,n=[w("Bảng điều khiển","dashboard",(0,o.jsx)(i.Z,{})),w("Quản l\xfd đăng kiểm","inspection",(0,o.jsx)(l.Z,{}),[w("Tất cả đăng kiểm","inspection/all"),w("Đăng kiểm của t\xf4i","inspection/me"),w("Tra cứu đăng kiểm","inspection/search")]),w("Tạo đăng kiểm","inspection/create",(0,o.jsx)(a.Z,{})),w("Tra cứu phương tiện","cars/search",(0,o.jsx)(c.Z,{})),w("Thống k\xea","statistics",(0,o.jsx)(s.Z,{})),w("T\xe0i khoản","settings",(0,o.jsx)(d.Z,{}),[w("C\xe0i đặt","settings/profile"),w("Đăng xuất","auth")])],g=()=>{localStorage.clear()},[m,x]=(0,r.useState)([""]),u=(0,v.useRouter)();return(0,o.jsxs)(_.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,o.jsx)("button",{className:P().button,children:(0,o.jsx)(Z,{})}),(0,o.jsx)(h.Z,{defaultSelectedKeys:[t],onClick:e=>{let t=e.keyPath[0];u.prefetch("/".concat(t)),u.push("/".concat(t)),"auth"===t&&g()},mode:"inline",openKeys:m,onOpenChange:e=>{let t=e.length>m.length;x(e),!t&&e.length>0&&x(t=>[...t,...e]),console.log(e)},style:{width:256},items:n})]})}},32011:function(e,t,n){"use strict";var o=n(57437);function r(e){let{className:t,style:n,children:r,...i}=e;return(0,o.jsx)("div",{className:t,style:{...i,...n},children:r})}n(2265),t.Z={Row:function(e){return(0,o.jsx)(r,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,o.jsx)(r,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,o.jsx)(r,{...e})}}},82940:function(){},11910:function(e){e.exports={button:"NavBar_button__uBQtA"}},73015:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},930:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2155,3969,6132,1461,4212,6964,4983,3172,6034,1396,4027,8717,5507,1344,1882,2971,4938,1744],function(){return e(e.s=55990)}),_N_E=e.O()}]);