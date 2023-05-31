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
      <p class="fs-4"><span class="fw-semibold me-4">法名</span>{{ userInfo.DharmaName }}</p>
      <p class="fs-4"><span class="fw-semibold me-4">俗名</span>{{ userInfo.Name }}</p>
      <p class="fs-4">
        <span class="fw-semibold me-4">性別</span>{{ userInfo.IsMale ? '男眾' : '女眾' }}
      </p>
      <p class="fs-4">
        <span class="fw-semibold me-4">電話</span
        >{{
          userInfo.Phone &&
          (userInfo.Phone === 'null' ? '' : userInfo.Phone.replace(/(\d{2})(\d+)/, '$1-$2'))
        }}
      </p>
      <p class="fs-4">
        <span class="fw-semibold me-4">手機</span
        >{{ userInfo.Mobile && userInfo.Mobile.replace(/(\d{4})(\d{3})(\d+)/, '$1-$2-$3') }}
      </p>
    </section>
    <BookingInfo :date="date"></BookingInfo>
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
      @click="saveInTotal"
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
import { ref, onMounted } from 'vue';
import BookingInfo from './BookingInfo.vue';

const tempUser = ref(JSON.parse(sessionStorage.tempUser));

const date = ref({
  start: tempUser.value.date[0],
  end: tempUser.value.date[1],
});

const userInfo = ref({
  DharmaName: '',
  Name: '',
  Phone: '',
  Mobile: '',
  IsMale: true,
});
onMounted(() => {
  if (!sessionStorage.tempUser) return;
  userInfo.value = JSON.parse(sessionStorage.tempUser);
});

function saveInTotal() {
  const totalTemp = sessionStorage.totalTemp ? JSON.parse(sessionStorage.totalTemp) : [];
  const hasTemp = totalTemp.filter(
    (item: any) => item.Id === JSON.parse(sessionStorage.tempUser).Id,
  );
  if (!hasTemp.length) {
    totalTemp.push(JSON.parse(sessionStorage.tempUser));
  }
  sessionStorage.setItem('totalTemp', JSON.stringify(totalTemp));
}
</script>
