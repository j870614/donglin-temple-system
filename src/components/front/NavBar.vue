<template>
  <div class="container align-items-center justify-content-between py-3">
    <div class="row">
      <div class="col col-lg-3 d-flex align-items-center justify-content-between">
        <h1 class="mb-0">
          <span class="d-none">彌陀之家東林寺</span>
          <router-link to="/" class="d-inline-block" style="width: 186px; height: 48px">
            <img src="@/assets/img/LOGO.png" alt="logo" class="img-fluid" />
          </router-link>
        </h1>
        <span
          class="material-symbols-outlined d-lg-none"
          @click.prevent="() => (isMenuOpen = !isMenuOpen)"
          @keydown.prevent="() => (isMenuOpen = !isMenuOpen)"
        >
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </div>
      <div class="col d-none d-lg-flex align-items-center justify-content-end">
        <ul
          class="list-inline d-flex text-neutral-80 border-end border-neutral-80 pe-4 me-4 mb-0"
          style="gap: 24px"
        >
          <li>佛七介紹</li>
          <li v-scroll-to="'#transportation'">交通資訊</li>
        </ul>
        <p class="d-flex align-items-center text-neutral-80 me-2 mb-0">
          <span class="material-symbols-outlined me-2"> account_circle </span>
          知客 普某菩薩
        </p>
        <button type="button" class="btn btn-primary py-3 px-5 text-white fw-semibold">
          進入管理系統
        </button>
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
      <li class="box-hover py-2-5">佛七介紹</li>
      <li class="box-hover py-2-5" v-scroll-to="'#transportation'">交通資訊</li>
    </ul>
    <button type="button" class="btn btn-primary text-white fw-semibold py-3 text-center w-100">
      登入 / 註冊
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref<Boolean>(false);
</script>
