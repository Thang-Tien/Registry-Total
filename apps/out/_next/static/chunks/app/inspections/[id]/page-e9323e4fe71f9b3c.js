(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1719],{42480:function(){},35944:function(e,n,i){Promise.resolve().then(i.bind(i,75522))},75522:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var t=i(57437),l=i(54440),r=i.n(l),s=i(77286),a=i.n(s),o=i(32011),c=i(75018),d=i(6034),h=i(6052),x=i(2265),_=i(39121),g=i(38437),u=i(20434),m=i(6371),y=i(88429),j=i(39777),p=i(44984),f=i(30177),b=i(67883),T=i(73297),v=i(35893),A=i(17046),k=i(8399),S=i(97409),H=i(64370);let z=S.mM.create({page:{fontSize:14,paddingTop:30,paddingLeft:60,paddingRight:60,lineHeight:1.5,flexDirection:"column",textAlign:"center"},data:{paddingTop:12,fontSize:14},title:{margin:30,fontSize:16,textAlign:"center",fontWeight:"bold"}});var C=e=>{let{inspectionData:n}=e;return(0,t.jsx)(S.WD,{document:(0,t.jsx)(()=>(0,t.jsx)(S.BB,{children:(0,t.jsxs)(S.T3,{size:"A5",children:[(0,t.jsxs)(S.G7,{style:z.title,children:[(0,t.jsx)(S.xv,{children:"MINISTRY OF TRANSPORT"}),(0,t.jsx)(S.xv,{children:"Vietnam Register - VR"}),(0,t.jsx)(S.xv,{children:"--------------------------"}),(0,t.jsx)(S.xv,{style:{marginTop:120},children:"REGISTRATION CERTIFICATE"}),(0,t.jsx)(S.xv,{style:{marginTop:100},children:"Periodical inspection certificate"}),(0,t.jsx)(S.xv,{children:"of motor vehicle for compliance with technical safety"}),(0,t.jsx)(S.xv,{children:"and environment protection requirements"}),(0,t.jsx)(S.xv,{style:{marginTop:150},children:"Vietnam, 2024"})]}),(0,t.jsxs)(S.G7,{break:!1,style:{margin:30},children:[(0,t.jsx)(S.xv,{children:"1. VEHICLE"}),(0,t.jsxs)(S.xv,{style:z.data,children:["Registration Number:"," ",n.registration_number]}),(0,t.jsxs)(S.xv,{style:z.data,children:["(Vehicle Inspection No.):"," ",n.inspection_number]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Type: ",n.type]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Model Code: ",n.model_code]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Engine Number: ",n.engine_number]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Chassis Number: ",n.chassis_number]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Manufactured Year and Country:"," ","".concat(n.manufactured_year,", ").concat(n.manufactured_country)]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Commercial Use:"," ","business"===n.purpose?"C\xf3":"Kh\xf4ng"]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Modification:"," ",n.recovered?"C\xf3":"Kh\xf4ng"]})]}),(0,t.jsxs)(S.G7,{break:!1,style:{margin:30},children:[(0,t.jsx)(S.xv,{children:"2. SPECIFICATIONS"}),(0,t.jsxs)(S.xv,{style:z.data,children:["Wheel Formula: ",n.wheel_formula]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Wheel Tread: ",n.wheel_tread]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Overall Dimension: ",n.overall_dimension]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Inside cargo container dimension:"," ",n.container_dimension]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Wheelbase: ",n.length_base]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Kerb Mass: ",n.kerb_mass]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Design/Authorized pay load:"," ",n.designed_and_authorized_payload]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Design/Authorized total mass:"," ",n.designed_and_authorized_total_mass]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Design/Authorized towed_mass:"," ",n.designed_and_authorized_towed_mass]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Permissible No.of Pers Carried: seat, stood place, laying place: car","".concat(n.permissible_carry," seats, 0 stand, 0 laying")]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Type of Fuel used: ",n.fuel]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Engine Displacement:"," ",n.engine_displacement]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Max output / rpm:"," ",n.maximum_output_to_rpm_ratio]}),(0,t.jsxs)(S.xv,{style:z.data,children:["Number of tires, Tires size/axle:"," ",n.kerb_mass]})]}),(0,t.jsx)(S.G7,{style:{margin:30},children:(0,t.jsx)(S.xv,{style:{textAlign:"right"},children:"Inspection Center"})})]})}),{}),fileName:"".concat(n.inspection_number,".pdf"),style:{alignSelf:"center"},children:(0,t.jsx)(h.ZP,{type:"primary",size:"large",style:{marginTop:"2rem"},onClick:()=>console.log("CLicked"),icon:(0,t.jsx)(H.Z,{style:{fontSize:"18px",verticalAlign:"middle",marginBottom:"6px"}}),children:"Tải xuống đăng kiểm"})})};let{Item:Z}=g.default;var I=e=>{let{inspectionId:n}=e,[i,l]=(0,x.useState)(null),r=(e,n)=>{let i=new Date(e);return i.setHours(i.getHours()+n),i.getDate().toString().padStart(2,"0")+"/"+(i.getMonth()+1).toString().padStart(2,"0")+"/"+i.getFullYear()};if((0,x.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/inspections/get_inspection_owner/").concat(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}}),i=await e.json();l(i.data[0])}catch(e){console.error("Error fetching inspection data:",e)}})()},[n]),!i)return(0,t.jsx)("div",{children:"Loading..."});let s=[{key:"owner",label:"Th\xf4ng tin chủ sở hữu",children:(0,t.jsxs)(g.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(m.Z,{})," Họ v\xe0 t\xean"]}),children:i.owner_name||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(y.Z,{})," Địa chỉ"]}),children:i.address||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(j.Z,{})," Số điện thoại"]}),children:i.owner_phone||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(p.Z,{})," Email"]}),children:i.owner_email||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(f.Z,{})," Chủ sở hữu"]}),children:"individual"===i.role?"Chủ sở hữu c\xe1 nh\xe2n":"Chủ sở hữu doanh nghiệp"})]})},{key:"car",label:"Phương tiện",children:(0,t.jsxs)(g.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,t.jsx)(Z,{label:"Biển đăng k\xed",children:i.number_plate||0}),(0,t.jsx)(Z,{label:"Số đăng k\xed",children:i.registration_number||0}),(0,t.jsx)(Z,{label:"Ng\xe0y đăng k\xed",children:r(i.registration_date,7)||0}),(0,t.jsx)(Z,{label:"Loại phương tiện",children:i.type||0}),(0,t.jsx)(Z,{label:"Nh\xe3n hiệu",children:i.brand||0}),(0,t.jsx)(Z,{label:"Số loại",children:i.model_code||0}),(0,t.jsx)(Z,{label:"Số m\xe1y",children:i.engine_number||0}),(0,t.jsx)(Z,{label:"Số khung",children:i.chassis_number||0}),(0,t.jsx)(Z,{label:"Năm sản xuất",children:i.manufactured_year||0}),(0,t.jsx)(Z,{label:"Nước sản xuất",children:i.manufactured_country||0}),(0,t.jsx)(Z,{label:"Kinh doanh vận tải",children:"business"===i.purpose?(0,t.jsx)(b.Z,{style:{color:"green",fontWeight:"bold"}}):(0,t.jsx)(T.Z,{style:{color:"red",fontWeight:"bold"}})}),(0,t.jsx)(Z,{label:"Cải tạo",children:"1"===i.recovered?(0,t.jsx)(b.Z,{style:{color:"green",fontWeight:"bold"}}):(0,t.jsx)(T.Z,{style:{color:"red",fontWeight:"bold"}})})]})},{key:"parameter",label:"Th\xf4ng số kỹ thuật",children:(0,t.jsxs)(g.default,{column:2,layout:"vertical",style:{padding:"12px"},children:[(0,t.jsx)(Z,{label:"C\xf4ng thức b\xe1nh xe",children:i.wheel_formula||0}),(0,t.jsx)(Z,{label:"Vết b\xe1nh xe",children:i.wheel_tread||0}),(0,t.jsx)(Z,{label:"K\xedch thước bao",children:i.overall_dimension||0}),(0,t.jsx)(Z,{label:"K\xedch thước l\xf2ng th\xf9ng h\xe0ng",children:i.container_dimension||0}),(0,t.jsx)(Z,{label:"Chiều d\xe0i cơ sở",children:i.length_base||0}),(0,t.jsx)(Z,{label:"Khối lượng bản th\xe2n",children:i.kerb_mass||0}),(0,t.jsx)(Z,{label:"Khối lượng h\xe0ng CC theo TK/CP TGGT",children:i.designed_and_authorized_payload||0}),(0,t.jsx)(Z,{label:"Khối lượng to\xe0n bộ theo TK/CP TGGT",children:i.designed_and_authorized_total_mass||0}),(0,t.jsx)(Z,{label:"Khối lượng k\xe9o theo TK/CP TGGT",children:i.designed_and_authorized_towed_mass||0}),(0,t.jsx)(Z,{label:"Số người cho ph\xe9p chở",children:i.permissible_carry||0}),(0,t.jsx)(Z,{label:"Loại nhi\xean liệu",children:i.fuel||0}),(0,t.jsx)(Z,{label:"Thể t\xedch l\xe0m việc của động cơ",children:i.engine_displacement||0}),(0,t.jsx)(Z,{label:"C\xf4ng suất lớn nhất tr\xean tốc độ quay",children:i.maximum_output_to_rpm_ratio||0}),(0,t.jsx)(Z,{label:"Số lượng lốp, cỡ lốp",children:i.number_of_tires_and_tire_size||0})]})},{key:"inspection",label:"Th\xf4ng tin đăng kiểm",children:(0,t.jsxs)(g.default,{column:1,layout:"vertical",style:{padding:"12px"},children:[(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(v.Z,{})," Số đăng kiểm"]}),children:i.inspection_number||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(A.Z,{})," Ng\xe0y đăng kiểm"]}),children:r(i.inspection_date,7)||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(A.Z,{})," C\xf3 hiệu lực đến ng\xe0y"]}),children:r(i.expired_date,7)||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(k.Z,{})," Đơn vị kiểm định"]}),children:i.registration_name||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(j.Z,{})," Số điện thoại"]}),children:i.user_phone||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(p.Z,{})," Email"]}),children:i.user_email||0}),(0,t.jsx)(Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)(m.Z,{})," Nh\xe2n vi\xean đăng kiểm"]}),children:i.user_name||0})]})}];return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsx)(u.Z,{items:s,defaultActiveKey:"inspection",accordion:!0}),(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:(0,t.jsx)(C,{inspectionData:i})})]})},W=e=>{let{inspectionId:n,children:i}=e;return(0,t.jsxs)(d.Z,{style:{width:"60%",borderRadius:6,margin:"auto",marginTop:50,marginBottom:50},title:(0,t.jsx)(h.ZP,{type:"text",icon:(0,t.jsx)(_.Z,{}),onClick:()=>history.back()}),children:[(0,t.jsx)(d.Z.Meta,{title:(0,t.jsx)("div",{style:{marginBottom:"20px"},children:"Th\xf4ng tin đăng kiểm"}),description:(0,t.jsx)(I,{inspectionId:n})}),i]})};function w(e){let{className:n,style:i,inspectionId:l}=e;return(0,x.useEffect)(()=>{document.title="Th\xf4ng tin đăng kiểm"},[]),(0,t.jsx)("div",{className:r()(n,a().container),style:i,children:(0,t.jsxs)(o.Z.Row,{style:{width:"100%",minHeight:"100vh"},children:[(0,t.jsx)(c.Z,{active:"",openMenu:""}),(0,t.jsx)("div",{style:{flex:"1",display:"flex",flexDirection:"column",background:"#e4e4e7"},children:(0,t.jsx)(W,{inspectionId:l})})]})})}},75018:function(e,n,i){"use strict";i.d(n,{Z:function(){return T}});var t=i(57437),l=i(2265),r=i(8349),s=i(82673),a=i(84919),o=i(75393),c=i(75377),d=i(6371),h=i(12048),x=i(32011),_=i(930),g=i(18501),u=i(16691),m=i.n(u);function y(){return(0,t.jsxs)(x.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,t.jsx)(m(),{src:_.Z.src,width:40,height:40,alt:"Logo"}),(0,t.jsx)(g.Z.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var j=i(11910),p=i.n(j),f=i(24033);function b(e,n,i,t,l){return{key:n,icon:i,children:t,label:e,type:l}}function T(e){let{active:n,openMenu:i}=e,_=[b("Bảng điều khiển","dashboards",(0,t.jsx)(r.Z,{})),b("Quản l\xfd đăng kiểm","inspections",(0,t.jsx)(s.Z,{}),[b("Tất cả đăng kiểm","inspections/all"),b("Đăng kiểm của t\xf4i","inspections/me"),b("Tra cứu đăng kiểm","inspections/search")]),b("Tạo đăng kiểm","inspections/create",(0,t.jsx)(a.Z,{})),b("Tra cứu phương tiện","cars/search",(0,t.jsx)(o.Z,{})),b("Thống k\xea","statistics",(0,t.jsx)(c.Z,{})),b("T\xe0i khoản","settings",(0,t.jsx)(d.Z,{}),[b("C\xe0i đặt","settings/profile"),b("Đăng xuất","auth")])],g=()=>{localStorage.clear()},u=["inspections","settings"],[m,j]=(0,l.useState)(!1),[T,v]=(0,l.useState)([i]),A=(0,f.useRouter)();return(0,t.jsxs)(x.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,t.jsx)("button",{className:p().button,children:(0,t.jsx)(y,{})}),(0,t.jsx)(h.Z,{defaultSelectedKeys:[n],onClick:e=>{let n=e.keyPath[0];A.prefetch("/".concat(n)),A.push("/".concat(n)),"auth"===n&&g()},mode:"inline",openKeys:T,onOpenChange:e=>{let n=e.find(e=>-1===T.indexOf(e));n&&-1===u.indexOf(n)?v(e):v(n?[n]:[]),console.log(n+" "+e)},style:{width:256},items:_})]})}},32011:function(e,n,i){"use strict";var t=i(57437);function l(e){let{className:n,style:i,children:l,...r}=e;return(0,t.jsx)("div",{className:n,style:{...r,...i},children:l})}i(2265),n.Z={Row:function(e){return(0,t.jsx)(l,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,t.jsx)(l,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,t.jsx)(l,{...e})}}},18501:function(e,n,i){"use strict";var t=i(57437),l=i(54440),r=i.n(l),s=i(73015),a=i.n(s);let o={div:"",span:"",h1:a().asH1,h2:a().asH2,h3:a().asH3,h4:a().asH4,h5:a().asH5,h6:a().asH6},c={heading1:a().sizeHeading1,heading2:a().sizeHeading2,heading3:a().sizeHeading3,heading4:a().sizeHeading4,heading5:a().sizeHeading5,heading6:a().sizeHeading6,body:a().sizeBody,bodySmall:a().sizeBodySmall,bodyExtraSmall:a().sizeBodyExtraSmall,extraLarge:a().sizeExtraLarge,none:""},d={large:a().lineHeightLarge,medium:a().lineHeightMedium,small:a().lineHeightSmall,none:""},h={ink:a().colorInk,ink80:a().colorInk80,ink50:a().colorInk50,ink30:a().colorInk30,ink10:a().colorInk10,primary:a().colorPrimary,primary80:a().colorPrimary80,primary50:a().colorPrimary50,primary30:a().colorPrimary30,primary10:a().colorPrimary10,secondary:a().colorSecondary,secondary80:a().colorSecondary80,secondary50:a().colorSecondary50,secondary30:a().colorSecondary30,secondary10:a().colorSecondary10,white:a().colorWhite,white80:a().colorWhite80,white50:a().colorWhite50,white30:a().colorWhite30,white10:a().colorWhite10,grey:a().colorGrey,grey80:a().colorGrey80,grey50:a().colorGrey50,grey30:a().colorGrey30,grey10:a().colorGrey10,inherit:a().colorInherit,none:""},x={regular:a().fontWeightRegular,semibold:a().fontWeightSemibold,bold:a().fontWeightBold,black:a().fontWeightBlack,none:""},_={1:a().maxLines1,2:a().maxLines2,3:a().maxLines3,4:a().maxLines4,5:a().maxLines5,none:""};function g(e){let{className:n,style:i,as:l="div",content:s,children:g=s,size:u="body",lineHeight:m="none",color:y="ink",fontWeight:j="none",maxLines:p="none",...f}=e;return(0,t.jsx)("div",{className:r()(n,a().container),style:i,...f,children:(0,t.jsx)(l,{className:r()(o[l],c[u],d[m],h[y],x[j],_[p]),children:g})})}n.Z={Div:g,Span:function(e){let{className:n,style:i,as:l="span",content:s,children:_=s,size:g="none",lineHeight:u="none",color:m="none",fontWeight:y="none",...j}=e;return(0,t.jsx)(l,{className:r()(n,a().container,o[l],c[g],d[u],h[m],x[y]),style:i,...j,children:_})},H1:function(e){return(0,t.jsx)(g,{as:"h1",...e})},H2:function(e){return(0,t.jsx)(g,{as:"h2",...e})},H3:function(e){return(0,t.jsx)(g,{as:"h3",...e})},H4:function(e){return(0,t.jsx)(g,{as:"h4",...e})},H5:function(e){return(0,t.jsx)(g,{as:"h5",...e})},H6:function(e){return(0,t.jsx)(g,{as:"h6",...e})}}},77286:function(){},11910:function(e){e.exports={button:"NavBar_button__uBQtA"}},73015:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},930:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[7448,1306,2048,7642,2155,3969,1180,2831,3172,6034,4181,3938,2971,4938,1744],function(){return e(e.s=35944)}),_N_E=e.O()}]);