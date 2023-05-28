<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-6 box-style gx-xl-0 p-xl-5 p-3 h-max overflow-auto">
      <h3 class="h2 p-2 pb-0 mb-5 fw-semibold">掛單日期</h3>
      <DatePicker
        borderless
        trim-weeks
        expanded
        :is-range="true"
        :columns="columns"
        :rows="rows"
        color="black"
        v-model="date"
      ></DatePicker>
    </div>
    <BookingInfo :date="date" />
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=2"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=4"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { DatePicker } from 'v-calendar';
import BookingInfo from './BookingInfo.vue';

const rows = ref(1);
const columns = ref(2);
const date = ref({
  start: new Date(),
  end: new Date(),
});
onMounted(() => {
  if (window.innerWidth < 1200) {
    rows.value = 2;
    columns.value = 1;
  }
});
</script>
