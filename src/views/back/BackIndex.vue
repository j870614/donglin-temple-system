<template>
  <div class="row py-4 py-lg-0" :class="{ 'bg-white': webWidth < 992 && currentPage === '行程' }">
    <div class="col gx-lg-5 py-lg-4 py-0">
      <h1 class="h1 fw-semibold d-flex align-items-center mb-3 pb-2 mb-lg-4">
        <OpenSideBar /> <span style="margin-left: 20px">彌陀之家東林寺常年佛七第422期</span>
      </h1>
      <div
        class="d-flex bg-neutral-40 rounded-switch p-1 d-lg-none"
        style="margin-bottom: 24px"
        ref="indexSwitch"
      >
        <p
          class="flex-grow-1 text-center mb-0 rounded-switch"
          :class="{
            'text-neutral-80 fs-7': currentPage !== '公告',
            'bg-white fs-6 fw-semibold': currentPage === '公告',
          }"
          @click="() => (currentPage = '公告')"
          @keydown="() => (currentPage = '公告')"
        >
          公告
        </p>
        <p
          class="flex-grow-1 text-center mb-0 rounded-switch"
          :class="{
            'text-neutral-80 fs-7': currentPage !== '行程',
            'bg-white fs-6 fw-semibold': currentPage === '行程',
          }"
          @click="() => (currentPage = '行程')"
          @keydown="() => (currentPage = '行程')"
        >
          行程
        </p>
      </div>
      <div
        class="row gy-3 gy-lg-0"
        v-if="webWidth >= 992 || (webWidth < 992 && currentPage === '公告')"
      >
        <div class="col-lg-5">
          <div class="box-style">
            <h2 class="p-4 pb-0 h4 fw-semibold d-flex align-items-center justify-content-between">
              彌陀之家東林寺公告
              <router-link
                to=""
                class="fs-6 fw-semibold d-flex align-items-center flex-shrink-0 mb-0"
                style="cursor: pointer"
              >
                顯示更多
                <span
                  class="material-symbols-outlined fs-5 fw-semibold d-inline-block"
                  data-v-1a886170=""
                >
                  arrow_forward
                </span>
              </router-link>
            </h2>
            <ul class="px-4 list-unstyled mb-0">
              <li
                class="py-4 box-hover"
                v-for="(info, index) in announcement"
                :key="info.tag + info.content"
                :class="{ 'border-bottom border-neutral-40': index !== announcement.length - 1 }"
              >
                <AnnouncementInfo>
                  <template #info-tag>
                    <span class="py-2 px-3 rounded-4 d-inline-block" :class="tags[info.tag]">{{
                      info.tag
                    }}</span>
                  </template>
                  <template #info-content>
                    <p>{{ info.content }}</p>
                  </template>
                  <template #info-timer>{{ info.timer }}</template>
                </AnnouncementInfo>
              </li>
            </ul>
          </div>
          <div class="box-style mt-lg-4 mt-3">
            <h2 class="p-4 pb-0 h4 fw-semibold d-flex align-items-center justify-content-between">
              系統公告
              <router-link
                to=""
                class="fs-6 fw-semibold d-flex align-items-center flex-shrink-0 mb-0"
                style="cursor: pointer"
              >
                顯示更多
                <span
                  class="material-symbols-outlined fs-5 fw-semibold d-inline-block"
                  data-v-1a886170=""
                >
                  arrow_forward
                </span>
              </router-link>
            </h2>
            <ul class="px-4 list-unstyled mb-0">
              <li
                class="py-4 box-hover"
                v-for="(info, index) in systemNotification"
                :key="info.tag + info.content"
                :class="{
                  'border-bottom border-neutral-40': index !== systemNotification.length - 1,
                }"
              >
                <AnnouncementInfo>
                  <template #info-tag>
                    <span class="py-2 px-3 rounded-4 d-inline-block" :class="tags[info.tag]">{{
                      info.tag
                    }}</span>
                  </template>
                  <template #info-content>
                    <p>{{ info.content }}</p>
                  </template>
                  <template #info-timer>{{ info.timer }}</template>
                </AnnouncementInfo>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="box-style">
            <h2 class="p-4 pb-0 h4 fw-semibold d-flex align-items-center justify-content-between">
              通知
              <router-link
                to=""
                class="fs-6 fw-semibold d-flex align-items-center flex-shrink-0 mb-0"
                style="cursor: pointer"
              >
                顯示更多
                <span
                  class="material-symbols-outlined fs-5 fw-semibold d-inline-block"
                  data-v-1a886170=""
                >
                  arrow_forward
                </span>
              </router-link>
            </h2>
            <ul class="px-4 list-unstyled mb-0">
              <li
                class="py-4 box-hover"
                v-for="(info, index) in notify"
                :key="info.tag + info.content"
                :class="{ 'border-bottom border-neutral-40': index !== notify.length - 1 }"
              >
                <AnnouncementInfo>
                  <template #info-tag>
                    <span class="py-2 px-3 rounded-4 d-inline-block" :class="tags[info.tag]">{{
                      info.tag
                    }}</span>
                  </template>
                  <template #user>
                    {{ info.user }}
                  </template>
                  <template #info-content>
                    <p>{{ info.content }}</p>
                  </template>
                  <template #info-timer>{{ info.timer }}</template>
                </AnnouncementInfo>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-lg-3 bg-body"
      v-if="webWidth >= 992 || (webWidth < 992 && currentPage === '行程')"
    >
      <div class="">
        <!-- 行事曆 -->
      </div>
      <CalendarSub />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue';

import OpenSideBar from '@/components/back/OpenSideBar.vue';
import CalendarSub from '@/components/back/CalendarSub.vue';
import AnnouncementInfo from '@/components/back/AnnouncementInfo.vue';
import sideBarConfigStore from '@/stores/SideBarConfig';

const sideBarStore = sideBarConfigStore();
const currentPage = ref<String>('公告');

const indexSwitch = ref(null);

const webWidth = ref<number>(0);
function currentWidth(webSize: number) {
  if (webSize < 992) {
    sideBarStore.isOpen = false;
  } else {
    sideBarStore.isOpen = true;
  }
}
function resizeWidth() {
  webWidth.value = window.innerWidth;
  currentWidth(webWidth.value);
  window.addEventListener('resize', () => {
    webWidth.value = window.innerWidth;
    currentWidth(webWidth.value);
  });
}

onMounted(resizeWidth);
onBeforeMount(resizeWidth);

// 標籤樣式定義
const tags: { [key: string]: string } = {
  皈依報名: 'bg-primary text-white',
  執事異動: 'bg-primary-tint text-primary',
  權限申請: 'bg-primary-tint text-primary',
  系統管理員: 'bg-neutral-40 text-neutral-80',
  已離單: 'bg-neutral-40 text-neutral-80',
  系統維護: 'bg-secondary-tint text-secondary',
};

interface Info {
  tag: string;
  content: string;
  timer: string;
  user?: string;
}
// 彌陀之家東林寺公告
const announcement: Info[] = [
  {
    tag: '執事異動',
    content: '普某師擔任知客師',
    timer: '8 月31日',
  },
];

// 系統公告
const systemNotification: Info[] = [
  {
    tag: '系統管理員',
    content: '系統管理員已核發執事權限，歡迎使用寺務系統',
    timer: '下午12:00',
  },
  {
    tag: '系統維護',
    content: '9/15 20：00 - 22：00進行系統更新及維護，維護時段系統暫時無法登入使用',
    timer: '晚上08:00',
  },
];

// 通知
const notify: Info[] = [
  {
    tag: '權限申請',
    content: '新使用者普甲申請知客權限',
    timer: '下午15:00',
    user: '新使用者 / 普甲',
  },
  {
    tag: '權限申請',
    content: '新使用者普丙申請寮房權限',
    timer: '下午14:00',
    user: '新使用者 / 普丙',
  },
  {
    tag: '皈依報名',
    content: '蓮友王小明已報名皈依',
    timer: '晚上08:00',
    user: '知客 / 普甲',
  },
  {
    tag: '皈依報名',
    content: '台北念佛會9/10共20人回寺用齋',
    timer: '8 月 30日',
    user: '知客 / 普丙',
  },
  {
    tag: '已離單',
    content: '化無法師已離單',
    timer: '8 月 27日',
    user: '寮房師 / 普子師',
  },
];
</script>
<style scoped lang="scss">
.rounded-switch {
  border-radius: 100px;
  padding: 12px;
}
</style>
