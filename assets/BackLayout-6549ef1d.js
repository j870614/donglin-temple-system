import{A as ee,f as V,g as B,h as T,B as D,o as p,c as u,a as e,F as $,v as A,x as _,i as l,t as h,j as x,y as L,l as O,u as t,C as se,z as E,p as R,e as q,_ as W,b as w,w as N,r as G,d as H}from"./index-8954a36c.js";import{s as J,_ as te}from"./OpenSideBar.vue_vue_type_script_setup_true_lang-075954b6.js";import{u as z}from"./UserStore-854f3dc3.js";import{_ as ne}from"./LOGO-acc6e274.js";import"./SweetAlert-183ed47c.js";const Q=ee("navInfoStore",{state:()=>({isUserOpen:!1,isMsgOpen:!1}),actions:{closeAll(){this.isUserOpen=!1,this.isMsgOpen=!1}}}),oe=g=>(R("data-v-a65f4897"),g=g(),q(),g),ae={class:"h-100 d-flex flex-column justify-content-between py-2 my-1 my-xl-3 pt-xl-0"},le={class:"list-inline"},ie=["onMouseenter","onFocus","onClick","onKeydown"],re={class:"fw-semibold d-flex align-items-center gap-3"},de={class:"material-symbols-outlined fs-3"},ce=["onMouseenter","onFocus","onClick","onKeydown"],pe={class:"fw-semibold d-flex align-items-center gap-3"},ue={class:"material-symbols-outlined fs-3"},me=["onMouseenter","onFocus","onClick","onKeydown"],be={class:"fw-semibold"},fe=["onMouseenter","onFocus","onClick","onKeydown"],ge={class:"fw-semibold d-flex align-items-center gap-3"},ve={class:"material-symbols-outlined fs-3"},he=oe(()=>e("span",{class:"material-symbols-outlined"}," logout ",-1)),_e=V({__name:"SideBar",setup(g){const y=se(),s=E(),v=z(),a={系統管理:{icon:"build",path:"",name:"系統管理",isOpen:!1,children:[{icon:"vpn_key",path:"",name:"使用者權限",isOpen:!1,children:[{path:"/permissions/manage",name:"使用者權限管理"},{path:"/permissions/authorized",name:"使用者權限核發"}]},{icon:"settings",path:"",name:"系統設定",isOpen:!1,children:[{path:"/permissions/buddha",name:"佛七期數設定"},{path:"",name:"行事曆新增、修改"}]},{icon:"notifications",path:"",name:"系統公告",isOpen:!1,children:[{path:"",name:"公告新增"},{path:"",name:"歷史公告查詢"}]}]},知客:{icon:"group",path:"",name:"知客",isOpen:!1,children:[{icon:"edit_calendar",path:"",name:"佛七報名預約",isOpen:!1,children:[{path:"/buddha/list",name:"佛七報名預約名單"},{path:"/buddha/signUp?step=1",name:"佛七報名"},{path:"/buddha/checkIn?step=1",name:"佛七報到"}]},{icon:"badge",path:"",name:"皈依報名",isOpen:!1,children:[{path:"",name:"皈依報名名單"},{path:"",name:"皈依報名"},{path:"",name:"皈依資料建檔"}]},{icon:"calendar_month",path:"",name:"參訪及活動",isOpen:!1,children:[{path:"",name:"來寺參訪預約"},{path:"",name:"參與活動人數登記"}]}]},寮房:{icon:"house_siding",path:"",name:"寮房",isOpen:!1,children:[{icon:"hotel",path:"",name:"預約及安單",isOpen:!1,children:[{path:"/booking?step=1",name:"安排寮房"},{path:"",name:"報到安單"},{path:"",name:"離單"}]},{icon:"help_clinic",path:"",name:"寮房資訊",isOpen:!1,children:[{path:"",name:"查詢寮房資訊"},{path:"",name:"更換寮房"},{path:"",name:"設備報修"}]},{icon:"calendar_month",path:"",name:"日常坡事",isOpen:!1,children:[{path:"",name:"坡事列表"},{path:"",name:"坡事安排"}]}]},四眾個人資料:{icon:"draft",path:"",name:"四眾個人資料",isOpen:!1,children:[{icon:"search",path:"",name:"查詢四眾個人資料",isOpen:!1,children:[]}]},查詢用齋人數:{icon:"restaurant_menu",path:"",name:"查詢用齋人數",isOpen:!1}},d=B([{icon:"house",path:"",name:"回首頁",isOpen:!1}]),f=B("管理員");function k(){const b=v.deaconName||sessionStorage.deaconName;switch(b.includes("知客")?f.value="知客":b.includes("寮房")?f.value="寮房":f.value="管理員",f.value){case"管理員":d.value.push(a.系統管理,a.知客,a.寮房,a.四眾個人資料,a.查詢用齋人數);break;case"知客":d.value.push(a.知客,a.四眾個人資料,a.查詢用齋人數);break;case"寮房":d.value.push(a.寮房,a.四眾個人資料,a.查詢用齋人數);break}}T(()=>{sessionStorage.deaconName?k():v.checkLogin(v.getToken())}),D(()=>v.deaconName,()=>{k()});const M=B(d),r=B(""),K=B("");function F(b,i){K.value=b+i}function U(b){const i=s.fullPath.split("/back")[1].replace(/\?\D*\W*\S*/,"");return b.includes("?")&&i?b.startsWith(i):s.fullPath.split("/back")[1]===b}const P=B(0),Y=J();function S(b,i){P.value=window.innerWidth,F(b,i),y.push(`/back${i}`),P.value<1200&&(Y.isOpen=!1)}function I(b,i){const o=d.value.findIndex(n=>n.name===b.name);if(i){const n=d.value[o];if(n.children){const c=n.children.findIndex(j=>j.name===i.name);n.children[c].isOpen=!n.children[c].isOpen,F(n.children[c].name,n.children[c].path)}return}if(d.value[o].isOpen){const n=d.value[o];n!=null&&n.children&&n.children.forEach((c,j,Z)=>{const C=Z;C[j].isOpen=!1})}d.value[o].isOpen=!d.value[o].isOpen,F(d.value[o].name,d.value[o].path)}return(b,i)=>(p(),u("div",ae,[e("ul",le,[(p(!0),u($,null,A(M.value,o=>(p(),u($,{key:o.name+o.icon},[e("li",{class:_(["fs-5 style-sidebar flex-center",{"bg-neutral-10":r.value===o.name+o.icon&&K.value!==o.name+o.path,"bg-primary text-white":!o.children&&K.value===o.name+o.path}]),onMouseenter:l(()=>r.value=o.name+o.icon,["self"]),onFocus:l(()=>r.value=o.name+o.icon,["prevent"]),onMouseleave:i[0]||(i[0]=l(()=>r.value="",["self"])),onBlur:i[1]||(i[1]=l(()=>r.value="",["prevent"])),onClick:l(()=>{o.children?I(o,null):S(o.name,o.path)},["prevent"]),onKeydown:l(()=>{o.children?I(o,null):S(o.name,o.path)},["prevent"])},[e("div",re,[e("span",de,h(o.icon),1),x(" "+h(o.name),1)]),o.children?(p(),u("span",{key:0,class:"material-symbols-outlined",style:L({transform:o.isOpen?"rotate(180deg)":"rotate(0deg)"})}," expand_more ",4)):O("",!0)],42,ie),o.children&&o.isOpen?(p(!0),u($,{key:0},A(o.children,n=>(p(),u($,{key:n.name+n.icon},[n.children&&n.children.length?(p(),u($,{key:0},[e("li",{class:_(["fs-5 flex-center style-sidebar",{"bg-neutral-10":r.value===n.name+n.icon}]),onMouseenter:l(()=>r.value=n.name+n.icon,["self"]),onFocus:l(()=>r.value=n.name+n.icon,["prevent"]),onMouseleave:i[2]||(i[2]=l(()=>r.value="",["self"])),onBlur:i[3]||(i[3]=l(()=>r.value="",["prevent"])),onClick:l(()=>{I(o,n)},["prevent"]),onKeydown:l(()=>{I(o,n)},["prevent"])},[e("div",pe,[e("span",ue,h(n.icon),1),x(" "+h(n.name),1)]),e("span",{class:"material-symbols-outlined",style:L({transform:n.isOpen?"rotate(180deg)":"rotate(0deg)"})}," expand_more ",4)],42,ce),n.isOpen?(p(!0),u($,{key:0},A(n.children,c=>(p(),u("ul",{class:"list-inline border-start border-neutral-40 border-4",style:{"margin-left":"2rem"},key:c.name},[e("li",{class:_(["fs-5 style-sidebar",{"bg-primary text-white":U(c.path),"bg-neutral-10":r.value===c.name&&!U(c.path)}]),onMouseenter:l(()=>r.value=c.name,["self"]),onFocus:l(()=>r.value=c.name,["prevent"]),onMouseleave:i[4]||(i[4]=l(()=>r.value="",["self"])),onBlur:i[5]||(i[5]=l(()=>r.value="",["prevent"])),onClick:l(()=>S(c.name,c.path),["prevent"]),onKeydown:l(()=>S(c.name,c.path),["prevent"])},[e("div",be,h(c.name),1)],42,me)]))),128)):O("",!0)],64)):(p(),u("li",{key:1,class:_(["fs-5 style-sidebar",{"bg-primary text-white":U(n.path),"bg-neutral-10":r.value===n.name&&!U(n.path)}]),onMouseenter:l(()=>r.value=n.name,["self"]),onFocus:l(()=>r.value=n.name,["prevent"]),onMouseleave:i[6]||(i[6]=l(()=>r.value="",["self"])),onBlur:i[7]||(i[7]=l(()=>r.value="",["prevent"])),onClick:l(()=>S(n.name,n.path),["prevent"]),onKeydown:l(()=>S(n.name,n.path),["prevent"])},[e("div",ge,[e("span",ve,h(n.icon),1),x(" "+h(n.name),1)])],42,fe))],64))),128)):O("",!0)],64))),128))]),e("button",{type:"button",class:_(["btn fs-5 fw-semibold style-sidebar d-flex align-items-center gap-3",{"bg-neutral-10":r.value==="登出"}]),onMouseenter:i[8]||(i[8]=l(()=>r.value="登出",["self"])),onFocus:i[9]||(i[9]=()=>r.value="登出"),onMouseleave:i[10]||(i[10]=l(()=>r.value="",["self"])),onBlur:i[11]||(i[11]=()=>r.value=""),onClick:i[12]||(i[12]=(...o)=>t(v).signOut&&t(v).signOut(...o))},[he,x("登出 ")],34)]))}});const xe=W(_e,[["__scopeId","data-v-a65f4897"]]),X="/donglin-temple-system/assets/bell-outline-3695ba45.svg",ye="/donglin-temple-system/assets/Logo-mobile-sm-890d4410.png",m=g=>(R("data-v-d1be84c0"),g=g(),q(),g),we={class:"d-none d-xl-flex"},Oe=m(()=>e("img",{class:"logo",src:ne,alt:"spar-cat-eye"},null,-1)),ke=m(()=>e("div",{class:"h1 fw-semibold ps-4"},"寺務管理系統",-1)),Me={class:"d-flex align-items-center d-flex justify-content-end"},$e={class:"position-relative"},Se=m(()=>e("img",{class:"svg bell-outline icon-position",src:X,alt:"bell-outline"},null,-1)),Be=m(()=>e("span",{style:{padding:"3px","background-color":"#ff5d53",top:"34%",right:"27%"},class:"rounded-circle position-absolute"},null,-1)),Ne=[Se,Be],Ue={key:0,class:"position-absolute end-0 bg-white border rounded-4 p-3",style:{width:"35vw","max-width":"350px"}},Ie=H('<div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-xl-3" data-v-d1be84c0><p class="mb-0 fs-4 fw-semibold" data-v-d1be84c0>新通知</p><div class="d-flex gap-1" data-v-d1be84c0><button type="button" class="btn btn-primary text-white" data-v-d1be84c0>顯示更多</button><button type="button" class="btn btn-outline-danger" data-v-d1be84c0>清除通知</button></div></div><ul class="list-inline d-flex flex-column gap-2 gap-xl-3 mb-0" data-v-d1be84c0><li class="d-flex gap-3 p-2 box-style box-hover border border-neutral-40" data-v-d1be84c0><img src="https://picsum.photos/500/500" alt="" class="rounded-circle" style="max-width:3vw;max-height:3vw;" data-v-d1be84c0><div class="flex-grow-1" data-v-d1be84c0><b class="fs-6" data-v-d1be84c0>知客 普乙</b><div class="d-flex gap-2 align-items-center justify-content-between" data-v-d1be84c0><p class="mb-0 d-flex flex-column" style="white-space:pre-wrap;" data-v-d1be84c0><span data-v-d1be84c0> 法眷<b data-v-d1be84c0>普乙</b>已預約報名佛七。 </span></p><p class="mb-0 btn btn-neutral-40 fs-6 fw-light rounded-4" data-v-d1be84c0>15:00</p></div></div></li></ul>',2),Ke=[Ie],Fe=m(()=>e("span",{class:"material-symbols-outlined text-primary svg icon-position"}," account_circle ",-1)),je=[Fe],Ae={class:"login-name fs-5 d-flex py-5 my-3"},Le={class:"pe-3 position-relative d-flex justify-content-around"},Ve={key:0,class:"d-flex flex-column mb-0 position-absolute end-50 list-inline bg-white border rounded-4 overflow-hidden",style:{width:"15vw",top:"150%"}},We=m(()=>e("span",{class:"material-symbols-outlined me-2"}," manage_accounts ",-1)),ze=m(()=>e("li",{class:"btn box-hover p-3 rounded-0 d-flex align-items-center"},[e("span",{class:"material-symbols-outlined me-2"}," logout "),x("登出 ")],-1)),Pe={class:"d-flex d-xl-none"},Te={class:"d-flex align-items-center"},De={class:"d-flex align-items-center mb-0"},Ee=m(()=>e("img",{class:"logo-mobile",src:ye,alt:"Logo-mobile"},null,-1)),Re=m(()=>e("span",{class:"h5 ms-1 mb-0 logo-mobile-title"},"寺務管理系統",-1)),qe={class:"align-items-center d-flex justify-content-end"},Ge={class:"position-relative"},He=m(()=>e("img",{class:"svg bell-outline icon-position",src:X,alt:"bell-outline"},null,-1)),Je=m(()=>e("span",{style:{padding:"3px","background-color":"#ff5d53",top:"34%",right:"27%"},class:"rounded-circle position-absolute"},null,-1)),Qe=[He,Je],Xe={key:0,class:"position-absolute bg-white border rounded-4 p-3",style:{width:"100vw",right:"-56px"}},Ye=H('<div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-xl-3" data-v-d1be84c0><p class="mb-0 fs-5 fw-semibold" data-v-d1be84c0>新通知</p><div class="d-flex gap-1" data-v-d1be84c0><button type="button" class="btn btn-primary text-white fs-7" data-v-d1be84c0>顯示更多</button><button type="button" class="btn btn-outline-danger fs-7" data-v-d1be84c0>清除通知</button></div></div><ul class="list-inline d-flex flex-column gap-2 gap-xl-3 mb-0" data-v-d1be84c0><li class="d-flex gap-3 p-2 box-style box-hover border border-neutral-40" data-v-d1be84c0><img src="https://picsum.photos/500/500" alt="" class="rounded-circle" style="width:15vw;height:15vw;max-width:50px;max-height:50px;" data-v-d1be84c0><div class="flex-grow-1" data-v-d1be84c0><b class="fs-6" data-v-d1be84c0>知客 普乙</b><div class="d-flex gap-2 align-items-center justify-content-between" data-v-d1be84c0><p class="mb-0 d-flex flex-column" style="white-space:pre-wrap;" data-v-d1be84c0><span data-v-d1be84c0> 法眷<b data-v-d1be84c0>普乙</b>已預約報名佛七。 </span></p><p class="mb-0 btn btn-neutral-40 fs-6 fw-light rounded-4" data-v-d1be84c0>15:00</p></div></div></li></ul>',2),Ze=[Ye],Ce={class:"position-relative"},es=m(()=>e("span",{class:"material-symbols-outlined text-primary svg icon-position"}," account_circle ",-1)),ss=[es],ts={key:0,class:"d-flex flex-column mb-0 position-absolute end-0 list-inline bg-white border rounded-4 overflow-hidden",style:{width:"50vw","max-width":"250px"}},ns=m(()=>e("span",{class:"material-symbols-outlined me-2"}," manage_accounts ",-1)),os=m(()=>e("li",{class:"btn box-hover p-3 rounded-0 d-flex align-items-center"},[e("span",{class:"material-symbols-outlined me-2"}," logout "),x("登出 ")],-1)),as=V({__name:"NavBar",setup(g){const y=z(),s=Q();return(v,a)=>{var f,k;const d=G("router-link");return p(),u($,null,[e("div",we,[e("h1",{class:"flex-grow-1 d-flex align-items-center gx-5 mb-0",onClick:a[0]||(a[0]=l(M=>t(s).closeAll(),["prevent"])),onKeydown:a[1]||(a[1]=l(M=>t(s).closeAll(),["prevent"]))},[w(d,{to:"/back",class:"pe-4"},{default:N(()=>[Oe]),_:1}),ke],32),e("div",Me,[e("div",$e,[e("div",{class:_(["icon-radius cursor-point",{"bg-neutral-10":t(s).isMsgOpen}]),style:{"margin-right":"1.125rem"},onClick:a[2]||(a[2]=l(()=>{t(s).isMsgOpen=!t(s).isMsgOpen,t(s).isUserOpen=!1},["prevent"])),onKeydown:a[3]||(a[3]=l(()=>{t(s).isMsgOpen=!t(s).isMsgOpen,t(s).isUserOpen=!1},["prevent"]))},Ne,34),t(s).isMsgOpen?(p(),u("div",Ue,Ke)):O("",!0)]),e("div",{class:"d-flex align-items-center",onClick:a[4]||(a[4]=l(()=>{t(s).isUserOpen=!t(s).isUserOpen,t(s).isMsgOpen=!1},["prevent"])),onKeydown:a[5]||(a[5]=l(()=>{t(s).isUserOpen=!t(s).isUserOpen,t(s).isMsgOpen=!1},["prevent"]))},[e("div",{class:_(["icon-radius cursor-point",{"bg-neutral-10":t(s).isUserOpen}])},je,2),e("div",Ae,h(t(y).deaconName)+" "+h(((f=t(y).user)==null?void 0:f.DharmaName)||((k=t(y).user)==null?void 0:k.Name)),1),e("div",Le,[e("span",{class:"material-symbols-outlined svg cursor-point",style:L({transform:t(s).isUserOpen?"rotate(180deg)":"rotate(0)"})}," expand_more ",4),t(s).isUserOpen?(p(),u("ul",Ve,[e("li",null,[w(d,{to:"",class:"btn box-hover p-3 rounded-0 d-flex align-items-center"},{default:N(()=>[We,x("帳號設定")]),_:1})]),ze])):O("",!0)])],32)])]),e("div",Pe,[e("div",{class:"flex-grow-1",onClick:a[6]||(a[6]=l(M=>t(s).closeAll(),["prevent"])),onKeydown:a[7]||(a[7]=l(M=>t(s).closeAll(),["prevent"]))},[e("div",Te,[w(te,{page:"nav"},{"icon-name":N(()=>[x(" menu ")]),_:1}),e("h1",De,[w(d,{to:"/back",class:"ms-4"},{default:N(()=>[Ee]),_:1}),Re])])],32),e("div",qe,[e("div",Ge,[e("div",{class:_(["icon-radius cursor-point",{"bg-neutral-10":t(s).isMsgOpen}]),style:{"margin-right":"1.125rem"},onClick:a[8]||(a[8]=l(()=>{t(s).isMsgOpen=!t(s).isMsgOpen,t(s).isUserOpen=!1},["prevent"])),onKeydown:a[9]||(a[9]=l(()=>{t(s).isMsgOpen=!t(s).isMsgOpen,t(s).isUserOpen=!1},["prevent"]))},Qe,34),t(s).isMsgOpen?(p(),u("div",Xe,Ze)):O("",!0)]),e("div",Ce,[e("div",{class:_(["icon-radius cursor-point",{"bg-neutral-10":t(s).isUserOpen}]),onClick:a[10]||(a[10]=l(()=>{t(s).isUserOpen=!t(s).isUserOpen,t(s).isMsgOpen=!1},["prevent"])),onKeydown:a[11]||(a[11]=l(()=>{t(s).isUserOpen=!t(s).isUserOpen,t(s).isMsgOpen=!1},["prevent"]))},ss,34),t(s).isUserOpen?(p(),u("ul",ts,[e("li",null,[w(d,{to:"",class:"btn box-hover p-3 rounded-0 d-flex align-items-center"},{default:N(()=>[ns,x("帳號設定")]),_:1})]),os])):O("",!0)])])])],64)}}});const ls=W(as,[["__scopeId","data-v-d1be84c0"]]),is={class:"container-fluid overflow-hidden",style:{"max-height":"100vh"}},rs={class:"bg-white sticky-top border-bottom border-neutral-40"},ds={key:0,class:"col-12 col-xl-3 gx-xl-5 max-sideBar max-heighScroll"},cs={class:"col max-heighScroll",style:{"background-color":"#f6f6f6"}},ps=V({__name:"BackLayout",setup(g){const y=J(),s=z(),v=Q(),a=E();return T(()=>{window.innerWidth<1200&&(y.isOpen=!1),s.checkLogin(s.getToken())}),D(()=>a.path,()=>{s.checkLogin(s.getToken())}),(d,f)=>{const k=G("router-view");return p(),u("div",is,[e("nav",rs,[w(ls)]),e("div",{class:"row flex-grow-1",onClick:f[0]||(f[0]=M=>t(v).closeAll()),onKeydown:f[1]||(f[1]=M=>t(v).closeAll())},[t(y).isOpen?(p(),u("aside",ds,[w(xe)])):O("",!0),e("div",cs,[w(k)])],32)])}}});const vs=W(ps,[["__scopeId","data-v-40f19e7a"]]);export{vs as default};
