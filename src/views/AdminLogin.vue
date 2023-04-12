<template>
  <div class="container">
    <div class="row">
      <div class="d-none d-md-block col-md-6">
        <img class="img-fluid loginImg" src="../assets/img/adminLoginBg.png" alt="loginImg" />
      </div>
      <div class="col-12 col-md-6 adminLogin">
        <div class="card row">
          <img class="card-img-top" src="../assets/img/LOGO.png" alt="logo" />
          <div class="card-body">
            <span class="card-text text-primary fw-bold">寺務管理系統</span>
            <h3 class="card-title fw-bold">歡迎使用 !</h3>
            <a href="#" class="btn btn-outline-neutral-60 w-100 fw-bold mb-3"
              ><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png"
                alt="lineLogo"
                class="logo"
              />
              使用 Line 帳號登入</a
            >
            <a href="#" class="btn btn-outline-neutral-60 w-100 fw-bold mb-3"
              ><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png?20230305195327"
                alt="googleImg"
                class="logo"
              />使用 Google 帳號登入</a
            >

            <a href="#" class="btn btn-outline-neutral-60 w-100 fw-bold mb-3"
              ><img
                src="https://www.brandinlabs.com/wp-content/uploads/2019/05/%E6%96%B0LOGO%E7%B4%B0%E7%AF%80.png"
                alt="fbLogo"
                class="logo"
              />使用 Facebook 帳號登入</a
            >
            <p class="text-with-lines emailLogin">或使用電子信箱登入</p>
            <label for="email" class="form-label">電子信箱</label>
            <input type="email" class="form-control mb-2" placeholder="hello@example.com" />
            <label for="password" class="form-label">密碼</label>
            <input type="password" class="form-control mb-2" placeholder="請輸入密碼" />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">記住帳號</label>
            </div>
            <a href="#">忘記密碼</a>
            <a href="#" class="btn btn-primary w-100 fw-bold mt-3 text-white">登入</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style>
.container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  border: none;
  flex-direction: column;
}
.loginImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-with-lines {
  text-align: center;
}
.logo {
  width: 25px;
  height: 25px;
  object-fit: cover;
  margin-right: 5px;
}

.card-img-top {
  width: 220px;
  object-fit: cover;
  margin-top: 40px;
  margin: 0 auto;
}
.emailLogin {
  display: flex;
  flex-direction: row;
}
.emailLogin::before,
.emailLogin::after {
  content: '';
  flex: 1 1;
  border-bottom: 1px solid #000;
  margin: auto;
}
</style>
