<template>
  <div class="loginContainer">
    <div class="row">
      <div class="d-none d-md-block col-md-6">
        <div class="loginImg" />
      </div>
      <div class="col-12 col-md-6 adminLogin">
        <img class="donglinLogo" src="../assets/img/LOGO.png" alt="logo" />
        <div class="loginArea col-12 col-md-6">
          <p class="title text-primary">寺務管理系統</p>
          <p class="title2 fw-bold">歡迎使用</p>
          <a href="#" class="btn w-100 fw-bold mb-3 loginBtn"
            ><img class="login-icons" src="../assets/img/login-icons/google.png" alt="googleLogo" />
            使用 Google 帳號登入</a
          >
          <a href="#" class="btn w-100 fw-bold mb-3 loginBtn"
            ><img class="login-icons" src="../assets/img/login-icons/LINE_APP_Logo.png" alt="" />
            使用 Line 帳號登入</a
          >
          <a href="#" class="btn w-100 fw-bold mb-3 loginBtn"
            ><img class="login-icons" src="../assets/img/login-icons/facebook.png" alt="" /> 使用
            Facebook 帳號登入</a
          >
          <p class="text-with-lines emailLogin">或使用電子信箱登入</p>
          <label for="email" class="form-label">電子信箱</label>
          <input
            type="email"
            class="form-control mb-2"
            id="email"
            placeholder="hello@example.com"
          />
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control mb-2" id="password" placeholder="請輸入密碼" />
          <div class="form-check mb-3">
            <div>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">記住帳號</label>
            </div>
            <a href="#" class="text-primary">忘記密碼 ?</a>
          </div>
          <a href="#" class="registerBtn btn btn-primary w-100 fw-bold mt-3 text-white">立即登入</a>
          <!-- <p>還沒有帳戶嗎？<a href="#" class="text-primary fw-bold">前往註冊</a></p> -->
        </div>
      </div>
    </div>
  </div>
</template>
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
<script setup lang="ts"></script>
