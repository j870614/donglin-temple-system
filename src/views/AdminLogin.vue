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
          <a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/LINE_APP_Logo.png" alt="" />
            使用 Line 帳號登入</a
          >
          <a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/google.png" alt="googleLogo" />
            使用 Google 帳號登入</a
          >
          <!-- <a href="#" class="btn w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/facebook.png" alt="" /> 使用
            Facebook 帳號登入</a
          > -->
          <p class="text-with-lines emailLogin">或使用電子信箱登入</p>
          <form>
            <label for="email" class="form-label fw-bold">電子信箱</label>
            <input
              type="email"
              name="email"
              class="form-control mb-2"
              :class="{ 'is-invalid': VEmail.errorMessage.value }"
              id="email"
              placeholder="hello@example.com"
              v-model="VEmail.value.value"
            />
            <p class="invalid-feedback">{{ VEmail.errorMessage.value }}</p>

            <label for="password" class="form-label fw-bold">密碼</label>
            <input
              type="password"
              class="form-control mb-2"
              :class="{ 'is-invalid': errorPassWordMsg }"
              id="password"
              name="password"
              placeholder="請輸入密碼"
              v-model="VPassWord"
            />
            <p class="invalid-feedback">{{ errorPassWordMsg }}</p>

            <div class="form-check mb-3">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  v-model="userInput.isRemember"
                />
                <label class="form-check-label" for="flexCheckDefault">記住帳號</label>
              </div>
              <a href="javascript:;" class="text-primary">忘記密碼 ?</a>
            </div>
            <button
              type="submit"
              class="registerBtn btn btn-primary w-100 fw-bold mt-3 text-white"
              @click.prevent="submit"
            >
              立即登入
            </button>
          </form>
          <!-- <p>還沒有帳戶嗎？<a href="#" class="text-primary fw-bold">前往註冊</a></p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userStore from '@/stores/UserStore';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

// 定義表單字段
const { handleSubmit } = useForm();
const VEmail = useField('email', yup.string().email('信箱 格式錯誤').required('信箱 必填'));
const { value: VPassWord, errorMessage: errorPassWordMsg } = useField(
  'password',
  yup.string().min(8, '密碼 至少 8 碼').required('密碼 必填'),
);

const User = userStore();

interface UserInput {
  email: string;
  password: string;
  isRemember: boolean;
}
const userInput = ref<UserInput>({
  email: '',
  password: '',
  isRemember: false,
});

function login(data: UserInput): void {
  const { email, password, isRemember } = data;
  User.login(email, password, isRemember);
}
// 提交表單時驗證
const submit: () => void = handleSubmit(() => {
  userInput.value.email = VEmail.value.value as string;
  userInput.value.password = VPassWord.value as string;

  login(userInput.value);
});

onMounted(() => {
  if (localStorage.userAccount) {
    VEmail.value.value = localStorage.userAccount;
    userInput.value.isRemember = true;
  }
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
