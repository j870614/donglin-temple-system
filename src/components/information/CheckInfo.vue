<template>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-10 mb-3">
      <p class="h3 mb-0">南無阿彌陀佛</p>
      <h3 class="h3">請確認以下資料是否正確</h3>
    </section>
  </div>

  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-xl-6 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <h3 class="h2 mb-5 fw-semibold">個人資料</h3>
      <p class="fs-4"><span class="fw-semibold me-4">法名</span>普甲</p>
      <p class="fs-4"><span class="fw-semibold me-4">俗名</span>王大同</p>
      <p class="fs-4"><span class="fw-semibold me-4">性別</span>男眾</p>
      <p class="fs-4"><span class="fw-semibold me-4">電話</span>03-9591234</p>
      <p class="fs-4"><span class="fw-semibold me-4">手機</span>0935-333-888</p>
    </section>
    <BookingInfo></BookingInfo>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=2"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      修改
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=1"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      另新增一筆資料
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=6"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import BookingInfo from './BookingInfo.vue';
</script>
