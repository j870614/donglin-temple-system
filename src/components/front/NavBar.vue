<template>
  <div class="container align-items-center justify-content-between py-3">
    <div class="row">
      <div class="col col-xl-3 d-flex align-items-center justify-content-between">
        <h1 class="mb-0">
          <span class="d-none">彌陀之家東林寺</span>
          <router-link to="/" class="d-inline-block" style="width: 186px; height: 48px">
            <img src="@/assets/img/LOGO.png" alt="logo" class="img-fluid" />
          </router-link>
        </h1>
        <span
          class="material-symbols-outlined d-xl-none cursor-point"
          @click.prevent="() => (isMenuOpen = !isMenuOpen)"
          @keydown.prevent="() => (isMenuOpen = !isMenuOpen)"
        >
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </div>
      <div class="col d-none d-xl-flex align-items-center justify-content-end">
        <ul
          class="list-inline d-flex text-neutral-80 border-end border-neutral-80 pe-4 me-4 mb-0"
          style="gap: 24px"
        >
          <li><router-link to="/buddha">佛七介紹</router-link></li>
          <li class="cursor-point" v-scroll-to="'#transportation'">
            <router-link to="/">交通資訊</router-link>
          </li>
        </ul>
        <p class="d-flex align-items-center text-neutral-80 me-2 mb-0" v-if="user.isLogin">
          <span class="material-symbols-outlined me-2"> account_circle </span>
          知客 普某菩薩
        </p>
        <router-link :to="btnConfig.path" class="btn btn-primary py-3 px-5 text-white fw-semibold">
          {{ btnConfig.content }}
        </router-link>
      </div>
    </div>
  </div>
  <div
    v-if="isMenuOpen"
    class="d-flex flex-column justify-content-between position-sticky top-0"
    style="height: calc(100vh - 50px)"
  >
    <ul
      class="list-inline text-center d-flex flex-column gap-3 mb-0"
      @click="() => (isMenuOpen = false)"
      @keydown="() => (isMenuOpen = false)"
    >
      <li class="box-hover cursor-point py-2-5">
        <router-link to="/buddha" class="text-black">佛七介紹</router-link>
      </li>
      <li class="box-hover cursor-point py-2-5" v-scroll-to="'#transportation'">
        <router-link to="/">交通資訊</router-link>
      </li>
    </ul>
    <router-link
      :to="btnConfig.path"
      class="btn btn-primary text-white fw-semibold py-3 text-center w-100"
    >
      {{ btnConfig.content }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userStore from '@/stores/UserStore';

const user = userStore();
const isMenuOpen = ref<Boolean>(false);

const btnConfig = ref<{ path: string; content: string }>({
  path: '/admin',
  content: '登入 / 註冊',
});
onMounted(() => {
  user.checkLogin(user.getToken());
  btnConfig.value.path = user.isLogin ? '/back' : '/admin';
  btnConfig.value.content = user.isLogin ? '進入管理系統' : '登入 / 註冊';
});
</script>
