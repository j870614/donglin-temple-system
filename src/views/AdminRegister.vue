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
          <p class="title2 fw-bold">立即建立你的帳戶</p>
          <a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/LINE_APP_Logo.png" alt="" />
            使用 Line 帳號註冊</a
          >
          <a href="#" class="btn btn-login w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/google.png" alt="googleLogo" />
            使用 Google 帳號註冊</a
          >
          <!-- <a href="#" class="btn w-100 fw-bold mb-3 loginBtn py-2"
            ><img class="login-icons" src="../assets/img/login-icons/facebook.png" alt="" /> 使用
            Facebook 帳號註冊</a
          > -->
          <form @submit.prevent="submit">
            <p class="text-with-lines emailLogin">或使用電子信箱註冊</p>
            <label for="email" class="form-label fw-bold">電子信箱</label>
            <input
              type="email"
              class="form-control mb-2"
              :class="{ 'is-invalid': errorEmailMsg }"
              id="email"
              placeholder="hello@example.com"
              v-model="VEmail"
            />
            <p class="invalid-feedback">{{ errorEmailMsg }}</p>
            <label for="password" class="form-label fw-bold">密碼</label>
            <input
              type="password"
              autocomplete="off"
              class="form-control mb-2"
              :class="{ 'is-invalid': errorPassWordMsg }"
              id="password"
              placeholder="請輸入密碼"
              v-model="VPassWord"
            />
            <p class="invalid-feedback">{{ errorPassWordMsg }}</p>

            <label for="confirmPassword" class="form-label fw-bold">確認密碼</label>
            <div class="checkPassword position-relative">
              <input
                type="password"
                autocomplete="off"
                class="form-control mb-2"
                :class="{ 'is-invalid': errorCheckPwMsg }"
                id="confirmPassword"
                placeholder="請輸入密碼"
                v-model="VCheckPw"
              />
              <p class="invalid-feedback">{{ errorCheckPwMsg }}</p>
              <img
                class="checkPasswordIcon position-absolute top-50 end-0 translate-middle-y"
                src="../assets/img/login-icons/close-eyes.png"
                alt="close-eyes"
              />
            </div>
            <button type="submit" class="registerBtn btn btn-primary w-100 fw-bold mt-3 text-white">
              立即註冊
            </button>
          </form>
          <p>
            已經有帳號了嗎？<router-link to="/admin" class="text-primary fw-bold"
              >立即登入</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { string } from 'yup';
import userStore from '@/stores/UserStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// 定義表單字段
const { handleSubmit } = useForm();
const { value: VEmail, errorMessage: errorEmailMsg } = useField(
  'email',
  string().email('信箱 格式錯誤').required('信箱 必填'),
);
const { value: VPassWord, errorMessage: errorPassWordMsg } = useField(
  'password',
  string().min(8, '密碼 至少 8 碼').required('密碼 必填'),
);
const { value: VCheckPw, errorMessage: errorCheckPwMsg } = useField(
  'confirmPassword',
  string()
    .required('確認密碼 必填')
    .test('password-match', '兩次密碼不一致', (value) => {
      return value === VPassWord.value;
    }),
);

interface UserInput {
  email: string;
  password: string;
  checkPw: string;
  userId: number;
}
// 提交表單時驗證
const submit: () => void = handleSubmit(() => {
  const User = userStore();
  const userInput: UserInput = {
    email: '',
    password: '',
    checkPw: '',
    userId: 100,
  };
  userInput.email = VEmail.value as string;
  userInput.password = VPassWord.value as string;
  userInput.checkPw = VCheckPw.value as string;
  User.register(
    userInput.email,
    userInput.password,
    userInput.checkPw,
    userInput.userId,
    route.query.qr,
    router,
  );
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
@media screen and (max-width: 768px) {
  .row {
    margin: 0 auto;
  }
}
</style>
