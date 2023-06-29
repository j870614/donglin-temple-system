import{f as y,g as h,B as T,h as D,o as c,c as b,a as e,E as I,j as d,t as r,u as _,F as v,v as B,r as U,b as u,I as q,w as g,C as O,p as P,e as M,_ as V,S as F,s as x,l as w,z as R}from"./index-8954a36c.js";import{_ as E}from"./BackTitle.vue_vue_type_script_setup_true_lang-241e1b7a.js";import{P as K}from"./ProcessSteps-165a39d8.js";import{_ as L}from"./BeforeSearch.vue_vue_type_script_setup_true_lang-701f6335.js";import{_ as W}from"./FormList.vue_vue_type_script_setup_true_lang-29e335bf.js";import{f as l,b as $,g as N,a as C}from"./Timer-8447a705.js";import{B as j}from"./BuddhaStore-9114c9b9.js";import{_ as z}from"./MealSurvey.vue_vue_type_script_setup_true_lang-3b102d85.js";import{_ as Y}from"./BuddhaNotice.vue_vue_type_script_setup_true_lang-1361515e.js";import{_ as A}from"./StickyTable.vue_vue_type_script_setup_true_lang-f17785c5.js";import"./OpenSideBar.vue_vue_type_script_setup_true_lang-075954b6.js";import"./GuestStore-a7148a0b.js";import"./UserStore-854f3dc3.js";import"./SweetAlert-183ed47c.js";const G={class:"col-xl-4 box-style gx-xl-0 p-xl-4 p-3 h-max"},H=e("h3",{class:"h2 mb-5 fw-semibold"},"您的預約資訊",-1),Q={class:"border border-neutral-40 rounded-4 p-4 mb-4"},X=e("h4",{class:"h3 mb-3 fw-semibold"},"報到及離單日",-1),Z={class:"d-flex flex-column flex-xl-row align-items-center gap-3"},ee={class:"d-flex flex-xl-column align-items-center gap-2"},te=e("p",{class:"bg-primary text-white fs-5 py-2 px-3 rounded-4 mb-0"},"預計報到日",-1),se={class:"mb-0 fw-semibold"},ae=e("span",{class:"border border-neutral-60 flex-grow-1 py-4 py-xl-0"},null,-1),oe={class:"d-flex flex-xl-column align-items-center gap-2"},ne=e("p",{class:"bg-neutral-40 text-neutral-80 fs-5 py-2 px-3 rounded-4 mb-0"},"預計離單日",-1),le={class:"mb-0 fw-semibold"},re={class:"border border-neutral-40 rounded-4 p-4"},de={class:"h3 mb-3 fw-semibold"},ie=e("br",null,null,-1),ce={class:"fs-5 text-neutral-80 fw-normal"},pe={class:"d-flex flex-column d-xl-grid gap-3",style:{"grid-template-columns":"50% 50%"}},ue={class:"h1 text-primary fw-semibold mb-1"},me={class:"mb-1 align-items-center text-neutral-80"},_e=e("span",{class:"d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"},"從",-1),he={class:"mb-0 align-items-center text-neutral-80"},fe=e("span",{class:"d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"},"到",-1),J=y({__name:"BookingInfo",props:{date:{type:Object,required:!0}},setup(f){const t=f,p=j(),n=h([]);return T(()=>t.date,(a,s)=>{n.value=p.totalBuddha.filter(o=>new Date().getTime()<=new Date(o.CompleteDate).getTime()).filter(o=>new Date(l(t.date.start)).getTime()>=new Date(l(o.StartSevenDate)).getTime()&&new Date(l(t.date.start)).getTime()<=new Date(l(o.CompleteDate)).getTime()||new Date(l(t.date.end)).getTime()>=new Date(l(o.StartSevenDate)).getTime()&&new Date(l(t.date.end)).getTime()<=new Date(l(o.CompleteDate)).getTime()),$(new Date(a.start).valueOf())!==$(new Date(s.start).valueOf())&&p.getTotal($(t.date.start))}),D(()=>{p.getTotal($(t.date.start))}),T(()=>p.totalBuddha,()=>{n.value=p.totalBuddha.filter(a=>new Date().getTime()<=new Date(a.CompleteDate).getTime()).filter(a=>new Date(l(t.date.start)).getTime()>=new Date(l(a.StartSevenDate)).getTime()&&new Date(l(t.date.start)).getTime()<=new Date(l(a.CompleteDate)).getTime()||new Date(l(t.date.end)).getTime()>=new Date(l(a.StartSevenDate)).getTime()&&new Date(l(t.date.end)).getTime()<=new Date(l(a.CompleteDate)).getTime())}),(a,s)=>(c(),b("div",G,[H,e("section",Q,[X,e("div",Z,[e("div",ee,[te,e("p",se,[I(a.$slots,"start",{},()=>[d(r(_(N)(new Date(t.date.start).getTime()))+" 月 "+r(_(C)(new Date(t.date.start).getTime()))+" 日",1)])])]),ae,e("div",oe,[ne,e("p",le,[I(a.$slots,"end",{},()=>[d(r(_(N)(new Date(t.date.end).getTime()))+" 月 "+r(_(C)(new Date(t.date.end).getTime()))+" 日",1)])])])])]),e("section",re,[e("h4",de,[d(" 報名佛七期數 "),ie,e("span",ce,"共 "+r(n.value.length)+" 期",1)]),e("div",pe,[(c(!0),b(v,null,B(n.value,o=>(c(),b("section",{class:"bg-neutral-10 p-3 text-center w-100",key:o.Id},[e("h5",ue,r(o.Id),1),e("p",me,[_e,d(r(_(l)(new Date(o.StartSevenDate).valueOf(),!0)),1)]),e("p",he,[fe,d(r(_(l)(new Date(o.CompleteDate).valueOf(),!0)),1)])]))),128))])])]))}}),be={class:"row justify-content-center gap-4 mx-0"},ge={class:"col-xl-6 box-style gx-xl-0 p-xl-5 p-3 h-max overflow-auto"},xe=e("h3",{class:"h2 p-2 pb-0 mb-5 fw-semibold"},"掛單日期",-1),we={class:"d-flex justify-content-end gap-3 mt-3 mt-xl-4"},ve=y({__name:"BuddhaDate",setup(f){const t=h(JSON.parse(sessionStorage.tempUser)),p=h(1),n=h(2),a=h({start:t.value.date&&t.value.date[0]||new Date,end:t.value.date&&t.value.date[1]||new Date});D(()=>{window.innerWidth<1200&&(p.value=2,n.value=1)});function s(){t.value.date=[a.value.start,a.value.end],sessionStorage.setItem("tempUser",JSON.stringify(t.value))}return(o,i)=>{const m=U("router-link");return c(),b(v,null,[e("div",be,[e("div",ge,[xe,u(_(q),{borderless:"","trim-weeks":"",expanded:"","min-date":new Date,"is-range":!0,columns:n.value,rows:p.value,color:"black",modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=k=>a.value=k)},null,8,["min-date","columns","rows","modelValue"])]),u(J,{date:a.value},null,8,["date"])]),e("div",we,[u(m,{to:"/back/buddha/signUp?step=2",class:"btn btn-outline-primary py-3 flex-grow-1",style:{"max-width":"184px"}},{default:g(()=>[d(" 上一步 ")]),_:1}),u(m,{to:"/back/buddha/signUp?step=4",class:"btn btn-primary text-white py-3 flex-grow-1",style:{"max-width":"184px"},onClick:s},{default:g(()=>[d(" 下一步 ")]),_:1})])],64)}}}),ye=e("div",{class:"row justify-content-center gap-4 mx-0"},[e("section",{class:"col-10 mb-3"},[e("p",{class:"h3 mb-0"},"南無阿彌陀佛"),e("h3",{class:"h3"},"請確認以下資料是否正確")])],-1),$e={class:"row justify-content-center gap-4 mx-0"},De={class:"col-xl-6 box-style gx-xl-0 p-xl-5 p-3 h-max"},Se=e("h3",{class:"h2 mb-5 fw-semibold"},"個人資料",-1),ke={class:"fs-4"},Te=e("span",{class:"fw-semibold me-4"},"法名",-1),Ue={class:"fs-4"},Ie=e("span",{class:"fw-semibold me-4"},"俗名",-1),Ne={class:"fs-4"},Ce=e("span",{class:"fw-semibold me-4"},"性別",-1),Be={class:"fs-4"},Oe=e("span",{class:"fw-semibold me-4"},"電話",-1),je={class:"fs-4"},Je=e("span",{class:"fw-semibold me-4"},"手機",-1),qe={class:"d-flex justify-content-end gap-3 mt-3 mt-xl-4"},Pe=y({__name:"CheckInfo",setup(f){const t=h(JSON.parse(sessionStorage.tempUser)),p=h({start:t.value.date[0],end:t.value.date[1]}),n=h({DharmaName:"",Name:"",Phone:"",Mobile:"",IsMale:!0});D(()=>{sessionStorage.tempUser&&(n.value=JSON.parse(sessionStorage.tempUser))});function a(){const s=sessionStorage.totalTemp?JSON.parse(sessionStorage.totalTemp):[];s.filter(i=>i.Id===JSON.parse(sessionStorage.tempUser).Id).length||s.push(JSON.parse(sessionStorage.tempUser)),sessionStorage.setItem("totalTemp",JSON.stringify(s))}return(s,o)=>{const i=U("router-link");return c(),b(v,null,[ye,e("div",$e,[e("section",De,[Se,e("p",ke,[Te,d(r(n.value.DharmaName),1)]),e("p",Ue,[Ie,d(r(n.value.Name),1)]),e("p",Ne,[Ce,d(r(n.value.IsMale?"男眾":"女眾"),1)]),e("p",Be,[Oe,d(r(n.value.Phone&&(n.value.Phone==="null"?"":n.value.Phone.replace(/(\d{2})(\d+)/,"$1-$2"))),1)]),e("p",je,[Je,d(r(n.value.Mobile&&n.value.Mobile.replace(/(\d{4})(\d{3})(\d+)/,"$1-$2-$3")),1)])]),u(J,{date:p.value},null,8,["date"])]),e("div",qe,[u(i,{to:"/back/buddha/signUp?step=2",class:"btn btn-outline-primary py-3 flex-grow-1",style:{"max-width":"184px"}},{default:g(()=>[d(" 修改 ")]),_:1}),u(i,{to:"/back/buddha/signUp?step=1",class:"btn btn-outline-primary py-3 flex-grow-1",style:{"max-width":"184px"},onClick:a},{default:g(()=>[d(" 另新增一筆資料 ")]),_:1}),u(i,{to:"/back/buddha/signUp?step=6",class:"btn btn-primary text-white py-3 flex-grow-1",style:{"max-width":"184px"}},{default:g(()=>[d(" 下一步 ")]),_:1})])],64)}}}),S=f=>(P("data-v-7df92c7c"),f=f(),M(),f),Me=S(()=>e("div",{class:"row justify-content-center gap-4 mx-0"},[e("section",{class:"col-10 mb-2"},[e("p",{class:"h3 mb-0"},"南無阿彌陀佛"),e("h3",{class:"h3 mb-5"},"以下是本次預約名單")])],-1)),Ve={class:"row justify-content-center gap-4 mx-0"},Fe={class:"col-xl-8"},Re=S(()=>e("h3",{class:"h2 mb-5 fw-semibold"},"本次預約清單",-1)),Ee=S(()=>e("tr",null,[e("th",null,"法名"),e("th",null,"俗名"),e("th",null,"預計報到日"),e("th",null,"預計離單日"),e("th",null,"修改")],-1)),Ke=["onClick","onKeydown"],Le=S(()=>e("p",{class:"mb-0 d-flex align-items-center justify-content-center gap-2"},[e("span",{class:"material-symbols-outlined"}," edit "),e("span",{class:"d-none d-xl-block"},"修改")],-1)),We=[Le],ze={class:"d-flex justify-content-end gap-3 mt-3 mt-xl-4"},Ye=y({__name:"BuddhaFinish",setup(f){const t=h([]),p=j();D(()=>{sessionStorage.tempUser&&(t.value=sessionStorage.totalTemp&&JSON.parse(sessionStorage.totalTemp))});const n=O();function a(s){const o=t.value.findIndex(i=>i.Id===s.Id||i.DharmaName===s.DharmaName||i.Name===s.Name);o!==-1&&t.value.splice(o,1),sessionStorage.setItem("totalTemp",JSON.stringify(t.value)),sessionStorage.setItem("tempUser",JSON.stringify(s)),n.push("/back/buddha/signUp?step=2")}return(s,o)=>{const i=U("router-link");return c(),b(v,null,[Me,e("div",Ve,[e("section",Fe,[Re,u(A,null,{thead:g(()=>[Ee]),tbody:g(()=>[(c(!0),b(v,null,B(t.value,m=>(c(),b("tr",{key:m.Id},[e("td",null,r(m.DharmaName),1),e("td",null,r(m.Name),1),e("td",null,r(_(l)(m.date[0])),1),e("td",null,r(_(l)(m.date[1])),1),e("td",{class:"cursor-point",onClick:k=>a(m),onKeydown:k=>a(m)},We,40,Ke)]))),128))]),_:1})])]),e("div",ze,[u(i,{to:"/back/buddha/signUp?step=1",class:"btn btn-outline-primary py-3 flex-grow-1",style:{"max-width":"184px"}},{default:g(()=>[d(" 另新增一筆資料 ")]),_:1}),e("button",{type:"button",class:"btn btn-primary text-white py-3 flex-grow-1",style:{"max-width":"184px"},onClick:o[0]||(o[0]=m=>_(p).applyBuddha(t.value,_(n)))}," 報名完成 ")])],64)}}});const Ae=V(Ye,[["__scopeId","data-v-7df92c7c"]]),Ge={class:"row"},He={class:"col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2"},pt=y({__name:"BuddhaSignUp",setup(f){const t=h(["資料查詢","基本資料","掛單日期選擇","用齋調查","報名資料確認","掛單注意事項","預約清單"]);F((s,o,i)=>{sessionStorage.removeItem("totalTemp"),sessionStorage.removeItem("tempUser"),i()});const p=R(),n=O(),a=p.path;return T(()=>p.fullPath,s=>{const{tempUser:o}=sessionStorage;s.startsWith("/back/buddha/signUp")&&s.split("step=")[1]!=="1"&&(o||n.push("/back/buddha/signUp?step=1")),s.includes(a)||(sessionStorage.removeItem("totalTemp"),sessionStorage.removeItem("tempUser"))}),(s,o)=>(c(),b("main",Ge,[e("div",He,[u(E,null,{title:g(()=>[d(r(t.value[Number(s.$route.query.step)-1]),1)]),_:1}),u(K,{steps:t.value},null,8,["steps"]),s.$route.query.step==="1"?(c(),x(L,{key:0})):w("",!0),s.$route.query.step==="2"?(c(),x(W,{key:1,pre:"/back/buddha/signUp?step=1",next:"/back/buddha/signUp?step=3"})):w("",!0),s.$route.query.step==="3"?(c(),x(ve,{key:2})):w("",!0),s.$route.query.step==="4"?(c(),x(z,{key:3,pre:"/back/buddha/signUp?step=3",next:"/back/buddha/signUp?step=5"})):w("",!0),s.$route.query.step==="5"?(c(),x(Pe,{key:4})):w("",!0),s.$route.query.step==="6"?(c(),x(Y,{key:5,pre:"/back/buddha/signUp?step=5",next:"/back/buddha/signUp?step=7","has-next":!0})):w("",!0),s.$route.query.step==="7"?(c(),x(Ae,{key:6})):w("",!0)])]))}});export{pt as default};
