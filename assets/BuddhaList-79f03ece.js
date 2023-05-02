import{f as F,g as c,n as L,o as s,c as o,a as t,b as $,w as D,j as w,k as I,E as B,y as d,F as v,q as h,i as M,t as l,s as x,l as U,p as Y,e as j,_ as E}from"./index-17ab7632.js";import{_ as q}from"./StickyTable.vue_vue_type_script_setup_true_lang-0b5fb64e.js";import{_ as z}from"./BackTitle.vue_vue_type_script_setup_true_lang-75a05e73.js";import{g as C,a as S,S as N}from"./Timer-9d5cc0c0.js";import"./OpenSideBar.vue_vue_type_script_setup_true_lang-fdae161d.js";function k(m,r,n,g){g.splice(0,g.length);const y=n.filter(p=>new Date(p.registrationDate).getFullYear()===m&&new Date(p.registrationDate).getMonth()+1===r);g.push(...y)}const _=m=>(Y("data-v-1a0d677c"),m=m(),j(),m),T={class:"row"},G={class:"col h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2"},H={class:"d-flex flex-column flex-lg-row gap-lg-4 gap-2 mb-3 mb-lg-4"},J=_(()=>t("label",{class:"form-label fw-semibold fs-5",for:"year"},"年份",-1)),K=["value","selected"],O=_(()=>t("label",{class:"form-label fw-semibold fs-5",for:"month"},"月份",-1)),P=["value","selected"],Q={key:0,class:"material-symbols-outlined fs-6"},R={key:0},W=_(()=>t("td",{colspan:"12"},"當前月份無報名資訊",-1)),X=[W],Z=["onClick"],A={key:1,class:"mb-0"},ee=_(()=>t("p",{class:"mb-0 d-flex align-items-center justify-content-center gap-2"},[t("span",{class:"material-symbols-outlined"}," edit "),t("span",{class:"d-none d-lg-block"},"修改")],-1)),te=[ee],le={class:"d-flex justify-content-end gap-3 mt-5"},ae=["disabled"],se=_(()=>t("button",{type:"button",class:"btn btn-primary py-3 flex-grow-1",style:{"max-width":"184px"}}," 報名佛七 ",-1)),oe=F({__name:"BuddhaList",setup(m){const r=c(new Date().getFullYear()),n=c(new Date().getMonth()+1),g=c({已報到:{textColor:"success",bgColor:"success-10"},寮房師已確認:{textColor:"white",bgColor:"primary"},新登錄報名:{textColor:"primary",bgColor:"primary-tint"},已取消:{textColor:"neutral-80",bgColor:"neutral-40"}}),y=c([{title:"報名序號",needSort:!0},{title:"性別",needSort:!1},{title:"法名",needSort:!1},{title:"俗名",needSort:!1},{title:"電話",needSort:!1},{title:"預計報到日",needSort:!0},{title:"預計離單日",needSort:!0},{title:"報到當天用齋",needSort:!1},{title:"狀態",needSort:!0},{title:"登錄 / 修改者",needSort:!1},{title:"登錄 / 修改日期",needSort:!0},{title:"修改",needSort:!1}]),p=c([{id:1,sex:"男",legalName:"",originalName:"王一信",tel:"0910111222",registrationDate:16513344e5,leaveDate:165168e7,meal:"午齋",state:"已報到",editorId:3,editorDate:1682575205902},{id:2,sex:"男",legalName:"普己",originalName:"",tel:"0910111222",registrationDate:1682579440377,leaveDate:16830432e5,meal:"午齋",state:"已報到",editorId:3,editorDate:16813152e5},{id:3,sex:"男",legalName:"普己",originalName:"王三",tel:"0910111222",registrationDate:16960896e5,leaveDate:1696608e6,meal:"午齋",state:"已報到",editorId:3,editorDate:1682575205902},{id:4,sex:"男",legalName:"普己",originalName:"王四",tel:"0910111222",registrationDate:16960896e5,leaveDate:1696608e6,meal:"午齋",state:"已報到",editorId:3,editorDate:1696608e6}]),i=c([]);L(()=>{k(r.value,n.value,p.value,i.value)});const b=c({id:0,sex:"",legalName:"",originalName:"",tel:"",registrationDate:1682575205902,leaveDate:1682575205902,meal:"",state:"",editorId:0,editorDate:1682575205902});async function V(u){const a=i.value.findIndex(e=>e.id===u.id);if(a===-1){N.fire({icon:"error",title:"還未選擇四眾法眷",showConfirmButton:!1,timer:1500});return}try{(await N.fire({html:`<p class="mb-0 fs-3">是否取消<b class="px-2 text-danger fw-semibold">${u.legalName?`${u.legalName}-`:""}${u.originalName?`${u.originalName}-`:""}${u.sex}</b>的預約</p>`,showCancelButton:!0})).isConfirmed&&(N.fire({icon:"success",title:"已取消佛七預約",showConfirmButton:!1,timer:1500}),i.value[a].state="已取消",i.value[a].editorDate=Date.now())}catch(e){console.error(e)}}return(u,a)=>(s(),o("main",T,[t("div",G,[$(z,null,{title:D(()=>[w(" 佛七預約報名表單 ")]),_:1}),t("div",H,[t("div",null,[J,I(t("select",{id:"year",class:"form-select form-select-lg fs-5","aria-label":".form-select-lg example","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),onChange:a[1]||(a[1]=e=>d(k)(r.value,n.value,p.value,i.value))},[(s(!0),o(v,null,h(new Date().getFullYear()-2009,e=>(s(),o("option",{value:r.value+1-e,key:e,selected:e+2010===r.value-2009},l(r.value+1-e),9,K))),128))],544),[[B,r.value]])]),t("div",null,[O,I(t("select",{id:"month",class:"form-select form-select-lg fs-5","aria-label":".form-select-lg example","onUpdate:modelValue":a[2]||(a[2]=e=>n.value=e),onChange:a[3]||(a[3]=e=>d(k)(r.value,n.value,p.value,i.value))},[(s(),o(v,null,h(12,e=>t("option",{value:e,key:e,selected:e===n.value},l(e),9,P)),64))],544),[[B,n.value]])])]),$(q,null,{thead:D(()=>[t("tr",null,[(s(!0),o(v,null,h(y.value,(e,f)=>(s(),o("th",{key:e.title+f,class:x({"cursor-point":e.needSort})},[w(l(e.title)+" ",1),e.needSort?(s(),o("span",Q," arrow_drop_up ")):U("",!0)],2))),128))])]),tbody:D(()=>[i.value.length?(s(!0),o(v,{key:1},h(i.value,(e,f)=>(s(),o("tr",{key:e.id+f,class:x({"table-active":b.value.id===e.id}),onClick:M(re=>b.value=e,["prevent"])},[t("td",null,l(f+1),1),t("td",null,l(e.sex),1),t("td",null,l(e.legalName),1),t("td",null,l(e.originalName),1),t("td",null,l(e.tel),1),t("td",null,l(d(C)(e.registrationDate))+" / "+l(d(S)(e.registrationDate)),1),t("td",null,l(d(C)(e.leaveDate))+" / "+l(d(S)(e.leaveDate)),1),t("td",null,[e.state==="已取消"?(s(),o(v,{key:0},[w("已取消")],64)):(s(),o("p",A,l(e.meal?`用${e.meal}`:"不用齋"),1))]),t("td",null,[t("p",{class:x(["py-2 px-3 mb-0 rounded-4",`bg-${g.value[e.state].bgColor} text-${g.value[e.state].textColor}`])},l(e.state),3)]),t("td",null,l(e.editorId),1),t("td",null,l(d(C)(e.editorDate))+" / "+l(d(S)(e.editorDate)),1),t("td",{class:x({"cursor-point":e.state!=="已取消","text-neutral-60":e.state==="已取消"})},te,2)],10,Z))),128)):(s(),o("tr",R,X))]),_:1}),t("div",le,[t("button",{type:"button",class:"btn btn-outline-primary py-3 flex-grow-1",style:{"max-width":"184px"},onClick:a[4]||(a[4]=M(e=>V(b.value),["prevent"])),disabled:b.value.state==="已取消"}," 取消預約 ",8,ae),se])])]))}});const me=E(oe,[["__scopeId","data-v-1a0d677c"]]);export{me as default};
