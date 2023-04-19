<template>
  <!-- 桌機 start -->
  <div class="col d-none d-lg-flex align-items-center gx-5">
    <img class="logo pe-4" src="@/assets/img/LOGO.png" alt="spar-cat-eye" />
    <div class="h1 fw-semibold ps-4">寺務管理系統</div>
  </div>
  <div class="col-lg-3 d-none d-lg-flex align-items-center d-flex justify-content-end">
    <router-link to="" class="icon-radius" style="margin-right: 1.125rem">
      <img
        class="svg bell-outline icon-position"
        src="@/assets/img/bell-outline.svg"
        alt="bell-outline"
      />
      <span
        style="padding: 3px; background-color: #ff5d53; top: 34%; right: 27%"
        class="rounded-circle position-absolute"
      ></span>
    </router-link>
    <router-link to="" class="icon-radius">
      <span class="material-symbols-outlined text-primary svg icon-position"> account_circle </span>
    </router-link>
    <div class="login-name h5 py-5 mb-0">知客 普謀菩薩</div>
    <div class="pe-4">
      <img class="ic_ArrowDown svg" src="@/assets/img/chevron-down.svg" alt="ic_ArrowDown" />
    </div>
  </div>
  <!-- 桌機 end -->
  <!-- 手機 start -->
  <div class="col-8 d-flex d-lg-none">
    <div class="d-flex align-items-center">
      <OpenSideBar page="nav">
        <template #icon-name> menu </template>
      </OpenSideBar>
      <img class="logo-mobile ms-4" src="@/assets/img/Logo-mobile-sm.png" alt="Logo-mobile" />
      <div class="h5 ms-1 mb-0 logo-mobile-title">寺務管理系統</div>
    </div>
  </div>
  <div class="col-4 d-flex d-lg-none align-items-center d-flex justify-content-end">
    <div class="me-2 icon-radius">
      <img
        class="svg bell-outline icon-position"
        src="@/assets/img/bell-outline.svg"
        alt="bell-outline"
      />
    </div>
    <div class="icon-radius">
      <span class="material-symbols-outlined text-primary svg icon-position"> account_circle </span>
    </div>
  </div>
  <!-- 手機 end -->
</template>
<script setup lang="ts">
import OpenSideBar from './OpenSideBar.vue';
</script>
<style scoped lang="scss">
@import '@/assets/stylesheets/all.scss';
.logo {
  width: 22.5rem;
  height: 5rem;
  &-mobile {
    height: 2rem;
    width: 1.25rem;
    &-title {
      font-weight: 600;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }
}
.icon-radius {
  display: inline-block;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 1px solid $neutral-40;
  position: relative;
  flex-shrink: 0;
}
.icon-position {
  position: absolute;
  left: 10px;
  top: 10px;
}

/* ic_ArrowDown */

.svg {
  width: 1.5rem;
  height: 1.5rem;
}

.login-name {
  padding-left: 0.5rem;
  padding-right: 1.125rem;
  line-height: 1.25rem;
  font-weight: 600;
}
</style>
