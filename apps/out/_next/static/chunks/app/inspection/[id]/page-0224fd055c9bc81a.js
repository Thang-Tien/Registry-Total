(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1742],{42480:function(){},28098:function(e,n,i){Promise.resolve().then(i.bind(i,72462)),Promise.resolve().then(i.t.bind(i,80378,23)),Promise.resolve().then(i.bind(i,56941))},72462:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return S}});var l=i(57437),t=i(6034),r=i(6052),s=i(2265),a=i(66111),o=i(38437),c=i(20434),d=i(51662),h=i(83343),x=i(76850),_=i(22223),g=i(95328),m=i(75204),u=i(1727),y=i(91199),j=i(91492),p=i(60077),b=i(97409),f=i(25747);let T=b.mM.create({page:{fontSize:14,paddingTop:30,paddingLeft:60,paddingRight:60,lineHeight:1.5,flexDirection:"column",textAlign:"center"},data:{paddingTop:12,fontSize:14},title:{margin:30,fontSize:16,textAlign:"center",fontWeight:"bold"}});var v=e=>{let{inspectionData:n}=e;return(0,l.jsx)(b.WD,{document:(0,l.jsx)(()=>(0,l.jsx)(b.BB,{children:(0,l.jsxs)(b.T3,{size:"A5",children:[(0,l.jsxs)(b.G7,{style:T.title,children:[(0,l.jsx)(b.xv,{children:"MINISTRY OF TRANSPORT"}),(0,l.jsx)(b.xv,{children:"Vietnam Register - VR"}),(0,l.jsx)(b.xv,{children:"--------------------------"}),(0,l.jsx)(b.xv,{style:{marginTop:120},children:"REGISTRATION CERTIFICATE"}),(0,l.jsx)(b.xv,{style:{marginTop:100},children:"Periodical inspection certificate"}),(0,l.jsx)(b.xv,{children:"of motor vehicle for compliance with technical safety"}),(0,l.jsx)(b.xv,{children:"and environment protection requirements"}),(0,l.jsx)(b.xv,{style:{marginTop:150},children:"Vietnam, 2024"})]}),(0,l.jsxs)(b.G7,{break:!1,style:{margin:30},children:[(0,l.jsx)(b.xv,{children:"1. VEHICLE"}),(0,l.jsxs)(b.xv,{style:T.data,children:["Registration Number:"," ",n.registration_number]}),(0,l.jsxs)(b.xv,{style:T.data,children:["(Vehicle Inspection No.):"," ",n.inspection_number]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Type: ",n.type]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Model Code: ",n.model_code]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Engine Number: ",n.engine_number]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Chassis Number: ",n.chassis_number]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Manufactured Year and Country:"," ","".concat(n.manufactured_year,", ").concat(n.manufactured_country)]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Commercial Use:"," ","business"===n.purpose?"C\xf3":"Kh\xf4ng"]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Modification:"," ",n.recovered?"C\xf3":"Kh\xf4ng"]})]}),(0,l.jsxs)(b.G7,{break:!1,style:{margin:30},children:[(0,l.jsx)(b.xv,{children:"2. SPECIFICATIONS"}),(0,l.jsxs)(b.xv,{style:T.data,children:["Wheel Formula: ",n.wheel_formula]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Wheel Tread: ",n.wheel_tread]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Overall Dimension: ",n.overall_dimension]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Inside cargo container dimension:"," ",n.container_dimension]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Wheelbase: ",n.length_base]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Kerb Mass: ",n.kerb_mass]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Design/Authorized pay load:"," ",n.designed_and_authorized_payload]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Design/Authorized total mass:"," ",n.designed_and_authorized_total_mass]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Design/Authorized towed_mass:"," ",n.designed_and_authorized_towing_mass]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Permissible No.of Pers Carried: seat, stood place, laying place: car","".concat(n.permissible_carry," seats, 0 stand, 0 laying")]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Type of Fuel used: ",n.fuel]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Engine Displacement:"," ",n.engine_displacement]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Max output / rpm:"," ",n.maximum_output_to_rpm_ratio]}),(0,l.jsxs)(b.xv,{style:T.data,children:["Number of tires, Tires size/axle:"," ",n.kerb_mass]})]}),(0,l.jsx)(b.G7,{style:{margin:30},children:(0,l.jsx)(b.xv,{style:{textAlign:"right"},children:"Inspection Center"})})]})}),{}),fileName:"".concat(n.inspection_number,".pdf"),style:{alignSelf:"center"},children:(0,l.jsx)(r.ZP,{type:"primary",size:"large",style:{marginTop:"2rem"},onClick:()=>console.log("CLicked"),icon:(0,l.jsx)(f.Z,{style:{fontSize:"18px",verticalAlign:"middle",marginBottom:"6px"}}),children:"Tải xuống đăng kiểm"})})};let{Item:A}=o.default;var k=e=>{let{inspectionId:n}=e,[i,t]=(0,s.useState)(null),r=(e,n)=>{let i=new Date(e);i.setHours(i.getHours()+n);let l=i.getDate().toString().padStart(2,"0")+"/"+(i.getMonth()+1).toString().padStart(2,"0")+"/"+i.getFullYear();return l};if((0,s.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/get_inspection_owner/").concat(n)),i=await e.json();t(i.data[0])}catch(e){console.error("Error fetching inspection data:",e)}};e()},[n]),!i)return(0,l.jsx)("div",{children:"Loading..."});let a=[{key:"owner",label:"Th\xf4ng tin chủ sở hữu",children:(0,l.jsxs)(o.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(m.Z,{})," Họ v\xe0 t\xean"]}),children:i.owner_name||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(y.Z,{})," Địa chỉ"]}),children:i.address||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(_.Z,{})," Số điện thoại"]}),children:i.owner_phone||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(g.Z,{})," Email"]}),children:i.owner_email||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(u.Z,{})," Chủ sở hữu"]}),children:"individual"===i.role?"Chủ sở hữu c\xe1 nh\xe2n":"Chủ sở hữu doanh nghiệp"})]})},{key:"car",label:"Phương tiện",children:(0,l.jsxs)(o.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,l.jsx)(A,{label:"Biển đăng k\xed",children:i.number_plate||0}),(0,l.jsx)(A,{label:"Số đăng k\xed",children:i.registration_number||0}),(0,l.jsx)(A,{label:"Ng\xe0y đăng k\xed",children:r(i.registration_date,7)||0}),(0,l.jsx)(A,{label:"Loại phương tiện",children:i.type||0}),(0,l.jsx)(A,{label:"Nh\xe3n hiệu",children:i.brand||0}),(0,l.jsx)(A,{label:"Số loại",children:i.model_code||0}),(0,l.jsx)(A,{label:"Số m\xe1y",children:i.engine_number||0}),(0,l.jsx)(A,{label:"Số khung",children:i.chassis_number||0}),(0,l.jsx)(A,{label:"Năm sản xuất",children:i.manufactured_year||0}),(0,l.jsx)(A,{label:"Nước sản xuất",children:i.manufactured_country||0}),(0,l.jsx)(A,{label:"Kinh doanh vận tải",children:"business"===i.purpose?(0,l.jsx)(j.Z,{style:{color:"green",fontWeight:"bold"}}):(0,l.jsx)(p.Z,{style:{color:"red",fontWeight:"bold"}})}),(0,l.jsx)(A,{label:"Cải tạo",children:"1"===i.recovered?(0,l.jsx)(j.Z,{style:{color:"green",fontWeight:"bold"}}):(0,l.jsx)(p.Z,{style:{color:"red",fontWeight:"bold"}})})]})},{key:"parameter",label:"Th\xf4ng số kỹ thuật",children:(0,l.jsxs)(o.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,l.jsx)(A,{label:"C\xf4ng thức b\xe1nh xe",children:i.wheel_formula||0}),(0,l.jsx)(A,{label:"Vết b\xe1nh xe",children:i.wheel_tread||0}),(0,l.jsx)(A,{label:"K\xedch thước bao",children:i.overall_dimension||0}),(0,l.jsx)(A,{label:"K\xedch thước l\xf2ng th\xf9ng h\xe0ng",children:i.container_dimension||0}),(0,l.jsx)(A,{label:"Chiều d\xe0i cơ sở",children:i.length_base||0}),(0,l.jsx)(A,{label:"Khối lượng bản th\xe2n",children:i.kerb_mass||0}),(0,l.jsx)(A,{label:"Khối lượng h\xe0ng CC theo TK/CP TGGT",children:i.designed_and_authorized_payload||0}),(0,l.jsx)(A,{label:"Khối lượng to\xe0n bộ theo TK/CP TGGT",children:i.designed_and_authorized_total_mass||0}),(0,l.jsx)(A,{label:"Khối lượng k\xe9o theo TK/CP TGGT",children:i.designed_and_authorized_towed_mass||0}),(0,l.jsx)(A,{label:"Số người cho ph\xe9p chở",children:i.permissible_carry||0}),(0,l.jsx)(A,{label:"Loại nhi\xean liệu",children:i.fuel||0}),(0,l.jsx)(A,{label:"Thể t\xedch l\xe0m việc của động cơ",children:i.engine_displacement||0}),(0,l.jsx)(A,{label:"C\xf4ng suất lớn nhất tr\xean tốc độ quay",children:i.maximum_output_to_rpm_ratio||0}),(0,l.jsx)(A,{label:"Số lượng lốp, cỡ lốp",children:i.number_of_tires_and_tire_size||0})]})},{key:"inspection",label:"Th\xf4ng tin đăng kiểm",children:(0,l.jsxs)(o.default,{column:1,layout:"vertical",style:{padding:"12px"},children:[(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(d.Z,{})," Số đăng kiểm"]}),children:i.inspection_number||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(h.Z,{})," Ng\xe0y đăng kiểm"]}),children:r(i.inspection_date,7)||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(h.Z,{})," C\xf3 hiệu lực đến ng\xe0y"]}),children:r(i.expired_date,7)||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(x.Z,{})," Đơn vị kiểm định"]}),children:i.registration_name||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(_.Z,{})," Số điện thoại"]}),children:i.user_phone||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(g.Z,{})," Email"]}),children:i.user_email||0}),(0,l.jsx)(A,{label:(0,l.jsxs)("span",{children:[(0,l.jsx)(m.Z,{})," Nh\xe2n vi\xean đăng kiểm"]}),children:i.user_name||0})]})}];return(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)(c.Z,{items:a,defaultActiveKey:"inspection",accordion:!0}),(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:(0,l.jsx)(v,{inspectionData:i})})]})},S=e=>{let{inspectionId:n,children:i}=e;return(0,l.jsxs)(t.Z,{style:{width:"60%",borderRadius:6,margin:"auto",marginTop:50,marginBottom:50},title:(0,l.jsx)(r.ZP,{type:"text",icon:(0,l.jsx)(a.Z,{}),onClick:()=>history.back()}),children:[(0,l.jsx)(t.Z.Meta,{title:(0,l.jsx)("div",{style:{marginBottom:"20px"},children:"Th\xf4ng tin đăng kiểm"}),description:(0,l.jsx)(k,{inspectionId:n})}),i]})}},56941:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return Z}});var l=i(57437),t=i(2265),r=i(86107),s=i(17565),a=i(90986),o=i(53624),c=i(4171),d=i(75204),h=i(12048),x=i(59477),_=i(58687),g=i(54440),m=i.n(g),u=i(18067),y=i.n(u);let j={div:"",span:"",h1:y().asH1,h2:y().asH2,h3:y().asH3,h4:y().asH4,h5:y().asH5,h6:y().asH6},p={heading1:y().sizeHeading1,heading2:y().sizeHeading2,heading3:y().sizeHeading3,heading4:y().sizeHeading4,heading5:y().sizeHeading5,heading6:y().sizeHeading6,body:y().sizeBody,bodySmall:y().sizeBodySmall,bodyExtraSmall:y().sizeBodyExtraSmall,extraLarge:y().sizeExtraLarge,none:""},b={large:y().lineHeightLarge,medium:y().lineHeightMedium,small:y().lineHeightSmall,none:""},f={ink:y().colorInk,ink80:y().colorInk80,ink50:y().colorInk50,ink30:y().colorInk30,ink10:y().colorInk10,primary:y().colorPrimary,primary80:y().colorPrimary80,primary50:y().colorPrimary50,primary30:y().colorPrimary30,primary10:y().colorPrimary10,secondary:y().colorSecondary,secondary80:y().colorSecondary80,secondary50:y().colorSecondary50,secondary30:y().colorSecondary30,secondary10:y().colorSecondary10,white:y().colorWhite,white80:y().colorWhite80,white50:y().colorWhite50,white30:y().colorWhite30,white10:y().colorWhite10,grey:y().colorGrey,grey80:y().colorGrey80,grey50:y().colorGrey50,grey30:y().colorGrey30,grey10:y().colorGrey10,inherit:y().colorInherit,none:""},T={regular:y().fontWeightRegular,semibold:y().fontWeightSemibold,bold:y().fontWeightBold,black:y().fontWeightBlack,none:""},v={1:y().maxLines1,2:y().maxLines2,3:y().maxLines3,4:y().maxLines4,5:y().maxLines5,none:""};var Text={Div:function(e){let{className:n,style:i,as:t="div",content:r,children:s=r,size:a="body",lineHeight:o="none",color:c="ink",fontWeight:d="none",maxLines:h="none",...x}=e;return(0,l.jsx)("div",{className:m()(n,y().container),style:i,...x,children:(0,l.jsx)(t,{className:m()(j[t],p[a],b[o],f[c],T[d],v[h]),children:s})})}},A=i(16691),k=i.n(A);function S(){return(0,l.jsxs)(x.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,l.jsx)(k(),{src:_.Z.src,width:40,height:40,alt:"Logo"}),(0,l.jsx)(Text.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var H=i(70009),z=i.n(H),C=i(24033);function W(e,n,i,l,t){return{key:n,icon:i,children:l,label:e,type:t}}function Z(e){let{active:n}=e,i=[W("Bảng điều khiển","dashboard",(0,l.jsx)(c.Z,{})),W("Quản l\xfd đăng kiểm","inspection",(0,l.jsx)(s.Z,{}),[W("Tất cả đăng kiểm","inspection/all"),W("Đăng kiểm của t\xf4i","inspection/me"),W("Tra cứu đăng kiểm","inspection/search")]),W("Tạo đăng kiểm","inspection/create",(0,l.jsx)(r.Z,{})),W("Tra cứu phương tiện","cars/search",(0,l.jsx)(a.Z,{})),W("Thống k\xea","statistics",(0,l.jsx)(o.Z,{})),W("T\xe0i khoản","settings",(0,l.jsx)(d.Z,{}),[W("C\xe0i đặt","settings/profile"),W("Đăng xuất","auth")])],_=()=>{localStorage.clear()},[g,m]=(0,t.useState)([""]),u=(0,C.useRouter)();return(0,l.jsxs)(x.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,l.jsx)("button",{className:z().button,children:(0,l.jsx)(S,{})}),(0,l.jsx)(h.Z,{defaultSelectedKeys:[n],onClick:e=>{let n=e.keyPath[0];u.prefetch("/".concat(n)),u.push("/".concat(n)),"auth"===n&&_()},mode:"inline",openKeys:g,onOpenChange:e=>{let n=e.length>g.length;m(e),!n&&e.length>0&&m(n=>[...n,...e]),console.log(e)},style:{width:256},items:i})]})}},59477:function(e,n,i){"use strict";var l=i(57437);function t(e){let{className:n,style:i,children:t,...r}=e;return(0,l.jsx)("div",{className:n,style:{...r,...i},children:t})}i(2265),n.Z={Row:function(e){return(0,l.jsx)(t,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,l.jsx)(t,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,l.jsx)(t,{...e})}}},80378:function(){},70009:function(e){e.exports={button:"NavBar_button__uBQtA"}},18067:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},58687:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[7448,1306,2048,7642,2246,5544,1461,3172,6034,6257,1795,2971,2472,1744],function(){return e(e.s=28098)}),_N_E=e.O()}]);