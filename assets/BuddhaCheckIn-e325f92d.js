import{P as m}from"./ProcessSteps-165a39d8.js";import{_ as i,H as d,O as f}from"./OtherInfo-803998d5.js";import{_ as l}from"./FormList.vue_vue_type_script_setup_true_lang-29e335bf.js";import{_ as c}from"./MealSurvey.vue_vue_type_script_setup_true_lang-3b102d85.js";import{_ as $}from"./BuddhaNotice.vue_vue_type_script_setup_true_lang-1361515e.js";import{f as _,g as y,h as k,c as o,a as h,b as g,l as a,s as p,u as s,z as q,o as t}from"./index-8954a36c.js";import{G as x}from"./GuestStore-a7148a0b.js";import"./SweetAlert-183ed47c.js";import"./UserStore-854f3dc3.js";const v={class:"pt-5",style:{"background-image":"linear-gradient(to top, #fff, #f6f6f6)"}},B={class:"container pt-4"},I={key:0},E=_({__name:"BuddhaCheckIn",setup(S){const n=x(),e=q(),u=y(["報名資料查詢","個資蒐集同意","個人資料","用齋調查","健康狀況","學經歷、專長及來寺因緣","學經歷、專長及來寺因緣"]);return k(()=>{sessionStorage.removeItem("tempUser"),n.getUser(+e.params.id)}),(r,C)=>(t(),o("div",v,[h("div",B,[g(m,{steps:u.value},null,8,["steps"]),r.$route.query.step==="1"?(t(),o("div",I,"報名資料查詢")):a("",!0),r.$route.query.step==="2"?(t(),p(i,{key:1,pre:`/${s(e).params.id}?step=1`,next:`/${s(e).params.id}?step=3`},null,8,["pre","next"])):a("",!0),r.$route.query.step==="3"?(t(),p(l,{key:2,pre:`/${s(e).params.id}?step=2`,next:`/${s(e).params.id}?step=4`},null,8,["pre","next"])):a("",!0),r.$route.query.step==="4"?(t(),p(c,{key:3,pre:`/${s(e).params.id}?step=3`,next:`/${s(e).params.id}?step=5`},null,8,["pre","next"])):a("",!0),r.$route.query.step==="5"?(t(),p(d,{key:4,pre:`/${s(e).params.id}?step=4`,next:`/${s(e).params.id}?step=6`},null,8,["pre","next"])):a("",!0),r.$route.query.step==="6"?(t(),p(f,{key:5,pre:`/${s(e).params.id}?step=5`,next:`/${s(e).params.id}?step=7`,"is-finish":!1},null,8,["pre","next"])):a("",!0),r.$route.query.step==="7"?(t(),p($,{key:6,pre:`/${s(e).params.id}?step=5`,"has-next":!1},null,8,["pre"])):a("",!0)])]))}});export{E as default};
