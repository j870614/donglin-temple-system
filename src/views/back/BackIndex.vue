<template>
  <div class="row">
    <div class="col gx-md-5 py-4">
      <h1 class="h1 fw-semibold" style="margin-bottom: 36px">
        <OpenSideBar />彌陀之家東林寺常年佛七第422期
      </h1>
      <div class="row gy-3 gy-md-0">
        <div class="col-md-4">
          <div class="bg-black p-4">
            <h2 class="h2 fw-semibold">彌陀之家東林寺公告</h2>
          </div>
          <div class="bg-danger p-4 mt-md-4 mt-3">
            <h2>系統公告</h2>
          </div>
        </div>
        <div class="col">
          <div class="bg-info p-4">
            <h2 class="h2 fw-semibold">通知</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 bg-body">
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
