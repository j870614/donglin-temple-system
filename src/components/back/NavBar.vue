<template>
  <!-- 桌機 start -->
  <div class="d-none d-xl-flex">
    <h1
      class="flex-grow-1 d-flex align-items-center gx-5 mb-0"
      @click.prevent="navInfoStore.closeAll()"
      @keydown.prevent="navInfoStore.closeAll()"
    >
      <router-link to="/back" class="pe-4"
        ><img class="logo" src="@/assets/img/LOGO.png" alt="spar-cat-eye"
      /></router-link>

      <div class="h1 fw-semibold ps-4">寺務管理系統</div>
    </h1>
    <div class="d-flex align-items-center d-flex justify-content-end">
      <!-- 通知 start -->
      <div class="position-relative">
        <div
          class="icon-radius cursor-point"
          :class="{ 'bg-neutral-10': navInfoStore.isMsgOpen }"
          style="margin-right: 1.125rem"
          @click.prevent="
            () => {
              navInfoStore.isMsgOpen = !navInfoStore.isMsgOpen;
              navInfoStore.isUserOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              navInfoStore.isMsgOpen = !navInfoStore.isMsgOpen;
              navInfoStore.isUserOpen = false;
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
          v-if="navInfoStore.isMsgOpen"
          class="position-absolute end-0 bg-white border rounded-4 p-3"
          style="width: 35vw; max-width: 350px"
        >
          <div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-xl-3">
            <p class="mb-0 fs-4 fw-semibold">新通知</p>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-primary text-white">顯示更多</button>
              <button type="button" class="btn btn-outline-danger">清除通知</button>
            </div>
          </div>
          <ul class="list-inline d-flex flex-column gap-2 gap-xl-3 mb-0">
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
                  <p class="mb-0 btn btn-neutral-40 fs-6 fw-light rounded-4">15:00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 通知 end -->
      <!-- user start -->
      <div
        class="d-flex align-items-center"
        @click.prevent="
          () => {
            navInfoStore.isUserOpen = !navInfoStore.isUserOpen;
            navInfoStore.isMsgOpen = false;
          }
        "
        @keydown.prevent="
          () => {
            navInfoStore.isUserOpen = !navInfoStore.isUserOpen;
            navInfoStore.isMsgOpen = false;
          }
        "
      >
        <div class="icon-radius cursor-point" :class="{ 'bg-neutral-10': navInfoStore.isUserOpen }">
          <span class="material-symbols-outlined text-primary svg icon-position">
            account_circle
          </span>
        </div>
        <div class="login-name fs-5 d-flex py-5 my-3">
          {{ userStore.deaconName }} {{ userStore.user?.DharmaName || userStore.user?.Name }}
        </div>
        <div class="pe-3 position-relative d-flex justify-content-around">
          <span
            class="material-symbols-outlined svg cursor-point"
            :style="{ transform: navInfoStore.isUserOpen ? 'rotate(180deg)' : 'rotate(0)' }"
          >
            expand_more
          </span>
          <ul
            v-if="navInfoStore.isUserOpen"
            class="d-flex flex-column mb-0 position-absolute end-50 list-inline bg-white border rounded-4 overflow-hidden"
            style="width: 15vw; top: 150%"
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
      <!-- user end -->
    </div>
  </div>
  <!-- 桌機 end -->
  <!-- 手機 start -->
  <div class="d-flex d-xl-none">
    <div
      class="flex-grow-1"
      @click.prevent="navInfoStore.closeAll()"
      @keydown.prevent="navInfoStore.closeAll()"
    >
      <div class="d-flex align-items-center">
        <OpenSideBar page="nav">
          <template #icon-name> menu </template>
        </OpenSideBar>
        <h1 class="d-flex align-items-center mb-0">
          <router-link to="/back" class="ms-4"
            ><img class="logo-mobile" src="@/assets/img/Logo-mobile-sm.png" alt="Logo-mobile"
          /></router-link>
          <span class="h5 ms-1 mb-0 logo-mobile-title">寺務管理系統</span>
        </h1>
      </div>
    </div>
    <div class="align-items-center d-flex justify-content-end">
      <!-- 通知 start -->
      <div class="position-relative">
        <div
          class="icon-radius cursor-point"
          :class="{ 'bg-neutral-10': navInfoStore.isMsgOpen }"
          style="margin-right: 1.125rem"
          @click.prevent="
            () => {
              navInfoStore.isMsgOpen = !navInfoStore.isMsgOpen;
              navInfoStore.isUserOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              navInfoStore.isMsgOpen = !navInfoStore.isMsgOpen;
              navInfoStore.isUserOpen = false;
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
          v-if="navInfoStore.isMsgOpen"
          class="position-absolute bg-white border rounded-4 p-3"
          style="width: 100vw; right: -56px"
        >
          <div class="d-flex gap-2 align-items-center justify-content-between mb-2 mb-xl-3">
            <p class="mb-0 fs-5 fw-semibold">新通知</p>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-primary text-white fs-7">顯示更多</button>
              <button type="button" class="btn btn-outline-danger fs-7">清除通知</button>
            </div>
          </div>
          <ul class="list-inline d-flex flex-column gap-2 gap-xl-3 mb-0">
            <li class="d-flex gap-3 p-2 box-style box-hover border border-neutral-40">
              <img
                src="https://picsum.photos/500/500"
                alt=""
                class="rounded-circle"
                style="width: 15vw; height: 15vw; max-width: 50px; max-height: 50px"
              />
              <div class="flex-grow-1">
                <b class="fs-6">知客 普乙</b>
                <div class="d-flex gap-2 align-items-center justify-content-between">
                  <p class="mb-0 d-flex flex-column" style="white-space: pre-wrap">
                    <span> 法眷<b>普乙</b>已預約報名佛七。 </span>
                  </p>
                  <p class="mb-0 btn btn-neutral-40 fs-6 fw-light rounded-4">15:00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 通知 end -->
      <!-- user start -->
      <div class="position-relative">
        <div
          class="icon-radius cursor-point"
          :class="{ 'bg-neutral-10': navInfoStore.isUserOpen }"
          @click.prevent="
            () => {
              navInfoStore.isUserOpen = !navInfoStore.isUserOpen;
              navInfoStore.isMsgOpen = false;
            }
          "
          @keydown.prevent="
            () => {
              navInfoStore.isUserOpen = !navInfoStore.isUserOpen;
              navInfoStore.isMsgOpen = false;
            }
          "
        >
          <span class="material-symbols-outlined text-primary svg icon-position">
            account_circle
          </span>
        </div>
        <ul
          v-if="navInfoStore.isUserOpen"
          class="d-flex flex-column mb-0 position-absolute end-0 list-inline bg-white border rounded-4 overflow-hidden"
          style="width: 50vw; max-width: 250px"
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
      <!-- user end -->
    </div>
  </div>
  <!-- 手機 end -->
</template>
<script setup lang="ts">
import NavInfoConfig from '@/stores/NavInfoConfig';
import UserStore from '@/stores/UserStore';
import OpenSideBar from './OpenSideBar.vue';

const userStore = UserStore();

const navInfoStore = NavInfoConfig();
</script>
<style scoped lang="scss">
@import '@/assets/stylesheets/all.scss';
.logo {
  width: 19.5rem;
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
