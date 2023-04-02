<template>
  <div class="container">
  <div class="row">
    <div class="d-none d-md-block col-md-8">
      <img class="img-fluid" src="https://i.postimg.cc/D01jSqjR/resize.png">
    </div>
    <div class="col-12 col-md-4 adminLogin">
      <div class="card">
        <img class="card-img-top" src="https://i.postimg.cc/mrRH47Ct/LOGO-02.png" alt="logo">
        <div class="card-body">
          <p class="card-text">寺務管理系統</p>
          <h3 class="card-title fw-bold">歡迎使用 !</h3>
          <a href="#" class="btn btn-outline-secondary w-100 fw-bold mb-3">使用 Google 帳號登入</a>
          <a href="#" class="btn btn-outline-secondary w-100 fw-bold mb-3">使用 Line 帳號登入</a>
          <a href="#" class="btn btn-outline-secondary w-100 fw-bold mb-3">使用 Facebook 帳號登入</a>
          <p class="text-with-lines">或使用電子信箱登入</p>
          <label for="email" class="form-label">電子信箱</label>
          <input type="email" class="form-control mb-2" placeholder="hello@example.com">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control mb-2" placeholder="請輸入密碼">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">記住帳號</label>
          </div>
          <a>忘記密碼</a>
          <a href="#" class="btn btn-warning w-100 fw-bold mb-3">登入</a>
          <p>還沒有帳戶嗎? <a href="" class="register">前往註冊</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">

</script>

<style>
.adminLogin {
  display: flex;
  justify-content: center;
}
.card {
  border: none;
}
.register {
  color: #e33430;
}
</style>
