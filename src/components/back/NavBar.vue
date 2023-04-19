<template>
  <!-- 桌機 start -->
  <div class="d-none d-lg-flex">
    <div class="col d-flex align-items-center gx-5">
      <img class="logo pe-4" src="@/assets/img/LOGO.png" alt="spar-cat-eye" />
      <div class="h1 fw-semibold ps-4">寺務管理系統</div>
    </div>
    <div class="col-lg-3 d-flex align-items-center d-flex justify-content-end">
      <!-- 通知 start -->
      <div class="position-relative">
        <div
          class="icon-radius cursor-point"
          :class="{ 'bg-neutral-10': isNotifyOpen }"
          style="margin-right: 1.125rem"
          @click.prevent="
            () => {
              isNotifyOpen = !isNotifyOpen;
              isUserSettingOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              isNotifyOpen = !isNotifyOpen;
              isUserSettingOpen = false;
            }
          "
        >
          <img
            class="svg bell-outline icon-position"
            src="@/assets/img/bell-outline.svg"
            alt="bell-outline"
          />
          <span
            style="padding: 3px; background-color: #ff5d53; top: 34%; right: 27%"
            class="rounded-circle position-absolute"
          ></span>
        </div>
        <div
          v-if="isNotifyOpen"
          class="position-absolute end-0 bg-white border rounded-4 p-3"
          style="width: 25vw; max-width: 450px"
        >
          <div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-lg-3">
            <p class="mb-0 fs-4 fw-semibold">新通知</p>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-primary">顯示更多</button>
              <button type="button" class="btn btn-outline-danger">清除通知</button>
            </div>
          </div>
          <ul class="list-inline d-flex flex-column gap-2 gap-lg-3 mb-0">
            <li class="d-flex gap-3 p-2 box-style box-hover border border-neutral-40">
              <img
                src="https://picsum.photos/500/500"
                alt=""
                class="rounded-circle"
                style="max-width: 3vw; max-height: 3vw"
              />
              <div class="flex-grow-1">
                <b class="fs-6">知客 普乙</b>
                <div class="d-flex gap-2 align-items-center justify-content-between">
                  <p class="mb-0 d-flex flex-column" style="white-space: pre-wrap">
                    <span> 法眷<b>普乙</b>已預約報名佛七。 </span>
                  </p>
                  <p class="mb-0 btn btn-neutral-40 fw-light rounded-4">15:00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 通知 end -->
      <router-link to="" class="icon-radius">
        <span class="material-symbols-outlined text-primary svg icon-position">
          account_circle
        </span>
      </router-link>
      <div class="login-name fs-5 py-5 d-flex">知客 普謀菩薩</div>
      <div class="pe-3 position-relative d-flex justify-content-around">
        <span
          class="material-symbols-outlined svg cursor-point box-hover"
          :class="{ 'bg-neutral-10': isUserSettingOpen }"
          :style="{ transform: isUserSettingOpen ? 'rotate(180deg)' : 'rotate(0)' }"
          @click.prevent="
            () => {
              isUserSettingOpen = !isUserSettingOpen;
              isNotifyOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              isUserSettingOpen = !isUserSettingOpen;
              isNotifyOpen = false;
            }
          "
        >
          expand_more
        </span>
        <ul
          v-if="isUserSettingOpen"
          class="d-flex flex-column mb-0 position-absolute end-50 list-inline bg-white border rounded-4 overflow-hidden"
          style="width: 13vw; top: 150%"
        >
          <li>
            <router-link to="" class="btn box-hover p-3 rounded-0 d-flex align-items-center"
              ><span class="material-symbols-outlined me-2"> manage_accounts </span
              >帳號設定</router-link
            >
          </li>
          <li class="btn box-hover p-3 rounded-0 d-flex align-items-center">
            <span class="material-symbols-outlined me-2"> logout </span>登出
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 桌機 end -->
  <!-- 手機 start -->
  <div class="d-flex d-lg-none">
    <div class="col-8">
      <div class="d-flex align-items-center">
        <OpenSideBar page="nav">
          <template #icon-name> menu </template>
        </OpenSideBar>
        <img class="logo-mobile ms-4" src="@/assets/img/Logo-mobile-sm.png" alt="Logo-mobile" />
        <div class="h5 ms-1 mb-0 logo-mobile-title">寺務管理系統</div>
      </div>
    </div>
    <div class="col-4 align-items-center d-flex justify-content-end">
      <!-- 通知 start -->
      <div class="position-relative">
        <div
          class="icon-radius cursor-point"
          :class="{ 'bg-neutral-10': isNotifyOpen }"
          style="margin-right: 1.125rem"
          @click.prevent="
            () => {
              isNotifyOpen = !isNotifyOpen;
              isUserSettingOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              isNotifyOpen = !isNotifyOpen;
              isUserSettingOpen = false;
            }
          "
        >
          <img
            class="svg bell-outline icon-position"
            src="@/assets/img/bell-outline.svg"
            alt="bell-outline"
          />
          <span
            style="padding: 3px; background-color: #ff5d53; top: 34%; right: 27%"
            class="rounded-circle position-absolute"
          ></span>
        </div>
        <div
          v-if="isNotifyOpen"
          class="position-absolute end-0 bg-white border rounded-4 p-3"
          style="min-width: 50vw"
        >
          <div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-lg-3">
            <p class="mb-0 fs-5 fw-semibold">新通知</p>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-primary fs-7">顯示更多</button>
              <button type="button" class="btn btn-outline-danger fs-7">清除通知</button>
            </div>
          </div>
          <ul class="list-inline d-flex flex-column gap-2 gap-lg-3 mb-0">
            <li class="p-2 box-style box-hover border border-neutral-40">
              <b class="fs-6">知客 普乙</b>
              <div class="d-flex gap-2 align-items-center justify-content-between">
                <p class="mb-0 d-flex flex-column" style="white-space: pre-wrap">
                  <span> 法眷<b>普乙</b>已預約報名佛七。 </span>
                </p>
                <p class="mb-0 btn btn-neutral-40 fw-light rounded-4">15:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 通知 end -->

      <router-link to="" class="icon-radius">
        <span class="material-symbols-outlined text-primary svg icon-position">
          account_circle
        </span>
      </router-link>
    </div>
  </div>
  <!-- 手機 end -->
</template>
<script setup lang="ts">
import { ref } from 'vue';
import OpenSideBar from './OpenSideBar.vue';

const isNotifyOpen = ref<Boolean>(false);
const isUserSettingOpen = ref<Boolean>(false);
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
  &:hover {
    background: $neutral-10;
  }
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
  padding-right: 0.75rem;
  line-height: 1.25rem;
  font-weight: 600;
}
</style>
