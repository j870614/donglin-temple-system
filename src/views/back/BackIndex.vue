<template>
  <div class="row">
    <div class="col gx-md-5 py-4">
      <h1 class="h1 fw-semibold d-flex align-items-center" style="margin-bottom: 36px">
        <OpenSideBar />彌陀之家東林寺常年佛七第422期
      </h1>
      <div class="row gy-3 gy-md-0">
        <div class="col-md-5">
          <div class="box-style p-4">
            <h2 class="h4 fw-semibold d-flex align-items-center justify-content-between mb-4 pb-2">
              彌陀之家東林寺公告
              <p
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
              </p>
            </h2>
            <article class="d-flex align-items-center">
              <div class="d-flex flex-column flex-grow-1">
                <div class="mb-2">
                  <span class="bg-primary-tint text-primary py-2 px-3 rounded-4 d-inline-block"
                    >執事異動</span
                  >
                </div>
                <p>普某師擔任知客師</p>
              </div>
              <div class="bg-neutral-40 p-2 rounded-4">8 月 31日</div>
            </article>
          </div>
          <div class="box-style p-4 mt-md-4 mt-3">
            <h2>系統公告</h2>
          </div>
        </div>
        <div class="col">
          <div class="box-style p-4">
            <h2 class="h2 fw-semibold">通知</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="mb-5 mb-md-0">
        <!-- 行事曆 -->
      </div>
      <CalendarSub />
    </div>
  </div>
</template>
<script setup lang="ts">
import OpenSideBar from '@/components/back/OpenSideBar.vue';
import CalendarSub from '@/components/back/CalendarSub.vue';
</script>
<style scoped lang="scss">
@import '@/assets/main.scss';
</style>
