<template>
  <div class="loginContainer">
    <div class="row">
      <div class="d-none d-md-block col-md-6">
        <div class="loginImg" />
      </div>
      <div class="col-12 col-md-6 adminLogin">
        <img class="donglinLogo" src="../assets/img/LOGO.png" alt="logo" />
        <div class="loginArea col-12 col-md-6">
          <div class="d-flex align-items-center">
            <h1 class="fw-bold">第三方登入驗證中...</h1>
            <div class="spinner-border ms-auto text-primary" role="status" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import userStore from '@/stores/UserStore';
import type { LineLoginRequest } from '@/interface/line.model';
import { useRouter } from 'vue-router';

const User = userStore();
const router = useRouter();

// 移除 URL # 後之前端路由
function removeHashFromUrl(url: string): string {
  const hashIndex = url.indexOf('#');
  let newUrl;
  if (hashIndex !== -1) {
    newUrl = url.substring(0, hashIndex);
  } else {
    newUrl = url;
  }
  return newUrl;
}

// 取得 Line API 回傳 code state 參數
function getCodeAndStateFromUrl(url: string) {
  const urlWithoutHash = removeHashFromUrl(url);
  const urlParams = new URLSearchParams(urlWithoutHash.split('?')[1]);
  const code = urlParams.get('code');
  const state = urlParams.get('state');
  return { code, state };
}

// Line 登入
onMounted(() => {
  const { code, state } = getCodeAndStateFromUrl(window.location.href);
  const lineLoginReq: LineLoginRequest = {
    code: String(code),
    state: String(state),
  };
  User.lineLogin(lineLoginReq, router);
  console.log(code); // 印出取得的 code
  console.log(state); // 印出取得的 state
});
</script>
<style>
.loginContainer {
  height: 100vh;
}
.row {
  height: 100%;
  width: 100%;
}
.loginImg {
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: url('../assets/img/Buddha-loginImg.png') scroll no-repeat right top/auto 100%;
  background-color: #f9f9f9;
}
.adminLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.donglinLogo {
  width: 186px;
  height: 50px;
  margin: 40px auto;
  object-fit: cover;
}
.title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
}
.title2 {
  margin-top: 0;
  margin-bottom: 42px;
  font-size: 42px;
}
.loginBtn {
  background-color: #ffffff;
  border: 1px solid #ececec;
  color: #000000;
  border-radius: 10px;
}
.login-icons {
  width: 20px;
  height: 20px;
  margin-right: 2px;
  margin-bottom: 2px;
}
.text-with-lines {
  text-align: center;
  color: #4b4b4b;
}
.emailLogin {
  display: flex;
  flex-direction: row;
}
.emailLogin::before,
.emailLogin::after {
  content: '';
  flex: 1 1;
  border-bottom: 1px solid #ececec;
  margin: auto;
}
.form-control {
  border-radius: 10px;
  border: 1px solid #ececec;
}
.registerBtn {
  border-radius: 10px;
  border: none;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.checkPasswordIcon {
  width: 20px;
  margin-right: 15px;
}
.form-check {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .row {
    margin: 0 auto;
  }
}
</style>
