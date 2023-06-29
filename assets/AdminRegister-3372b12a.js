import{f as k,c as C,a as s,i as M,k as n,R as d,u as o,x as c,H as m,t as p,j as A,b as R,w as V,d as x,z as B,r as P,o as E}from"./index-8954a36c.js";import{_ as F}from"./LOGO-acc6e274.js";import{u as I,a as u,c as _,_ as S,b as U}from"./index.esm-9afac072.js";import{u as G}from"./UserStore-854f3dc3.js";import"./SweetAlert-183ed47c.js";const Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAStJREFUeNq8VYsNwiAQReMAjMAGdoRuICPUDeoGbqAbdAS6Qd2g3aBugE6g0BzJ9QIUTO0lL/1w3HsH3MEYYzeDj4Fk25rjZQpetEGxEXkBnJMAAeRbieAGI/CNWNEWImyyfYgHi7C4rkwuSfwqtDc9crLv5QpZKxRTxw48JwIcOlDMM0grmEdjKey4IxM7lPHF4ORZgYfBYPCG5wv5HGEVBZnzBF+X+R3iz6wJ7E8ZyCQFiix3iGM24Dt8blsaGFcgSqNy6mCsJv7UFBUh0Y9moWkUni3zia7RgYudM42zVwstc/SMhQRwJFouiJg+YqXmuladIQAvtYpUXJnSPFwmIlMAnhss333CpWGthVLKsRZKlMVa+yEhCH7m2hnIh3/dbK7biV8DfAUYAKpujl0Hs95/AAAAAElFTkSuQmCC",J={class:"loginContainer"},Z={class:"row"},q=s("div",{class:"d-none d-md-block col-md-6"},[s("div",{class:"loginImg"})],-1),N={class:"col-12 col-md-6 adminLogin"},Q=s("img",{class:"donglinLogo",src:F,alt:"logo"},null,-1),H={class:"loginArea col-12 col-md-6"},W=x('<p class="title text-primary">寺務管理系統</p><p class="title2 fw-bold">立即建立你的帳戶</p><a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"><img class="login-icons" src="'+S+'" alt=""> 使用 Line 帳號註冊</a><a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"><img class="login-icons" src="'+U+'" alt="googleLogo"> 使用 Google 帳號註冊</a>',4),z=s("p",{class:"text-with-lines emailLogin"},"或使用電子信箱註冊",-1),D=s("label",{for:"email",class:"form-label fw-bold"},"電子信箱",-1),K={class:"invalid-feedback"},L=s("label",{for:"password",class:"form-label fw-bold"},"密碼",-1),j={class:"invalid-feedback"},T=s("label",{for:"confirmPassword",class:"form-label fw-bold"},"確認密碼",-1),X={class:"checkPassword position-relative"},O={class:"invalid-feedback"},$=s("img",{class:"checkPasswordIcon position-absolute top-50 end-0 translate-middle-y",src:Y,alt:"close-eyes"},null,-1),ss=s("button",{type:"submit",class:"registerBtn btn btn-primary w-100 fw-bold mt-3 text-white"}," 立即註冊 ",-1),rs=k({__name:"AdminRegister",setup(es){const h=B(),{handleSubmit:v}=I(),{value:a,errorMessage:w}=u("email",_().email("信箱 格式錯誤").required("信箱 必填")),{value:t,errorMessage:g}=u("password",_().min(8,"密碼 至少 8 碼").required("密碼 必填")),{value:i,errorMessage:b}=u("confirmPassword",_().required("確認密碼 必填").test("password-match","兩次密碼不一致",r=>r===t.value)),f=v(()=>{const r=G(),e={email:"",password:"",checkPw:"",userId:100};e.email=a.value,e.password=t.value,e.checkPw=i.value,r.register(e.email,e.password,e.checkPw,e.userId,h.query.qr)});return(r,e)=>{const y=P("router-link");return E(),C("div",J,[s("div",Z,[q,s("div",N,[Q,s("div",H,[W,s("form",{onSubmit:e[3]||(e[3]=M((...l)=>o(f)&&o(f)(...l),["prevent"]))},[z,D,n(s("input",{type:"email",class:c(["form-control mb-2",{"is-invalid":o(w)}]),id:"email",placeholder:"hello@example.com","onUpdate:modelValue":e[0]||(e[0]=l=>m(a)?a.value=l:null)},null,2),[[d,o(a)]]),s("p",K,p(o(w)),1),L,n(s("input",{type:"password",autocomplete:"off",class:c(["form-control mb-2",{"is-invalid":o(g)}]),id:"password",placeholder:"請輸入密碼","onUpdate:modelValue":e[1]||(e[1]=l=>m(t)?t.value=l:null)},null,2),[[d,o(t)]]),s("p",j,p(o(g)),1),T,s("div",X,[n(s("input",{type:"password",autocomplete:"off",class:c(["form-control mb-2",{"is-invalid":o(b)}]),id:"confirmPassword",placeholder:"請輸入密碼","onUpdate:modelValue":e[2]||(e[2]=l=>m(i)?i.value=l:null)},null,2),[[d,o(i)]]),s("p",O,p(o(b)),1),$]),ss],32),s("p",null,[A(" 已經有帳號了嗎？"),R(y,{to:"/admin",class:"text-primary fw-bold"},{default:V(()=>[A("立即登入")]),_:1})])])])])])}}});export{rs as default};
