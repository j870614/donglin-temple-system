<template>
  <div class="col-xl-4 box-style gx-xl-0 p-xl-4 p-3 h-max">
    <h3 class="h2 mb-5 fw-semibold">您的預約資訊</h3>
    <section class="border border-neutral-40 rounded-4 p-4 mb-4">
      <h4 class="h3 mb-3 fw-semibold">報到及離單日</h4>
      <div class="d-flex flex-column flex-xl-row align-items-center gap-3">
        <div class="d-flex flex-xl-column align-items-center gap-2">
          <p class="bg-primary text-white fs-5 py-2 px-3 rounded-4 mb-0">預計報到日</p>
          <p class="mb-0 fw-semibold">
            <slot name="start">
              {{ getCurrentMonth(new Date(props.date.start).getTime()) }} 月
              {{ getCurrentDay(new Date(props.date.start).getTime()) }} 日</slot
            >
          </p>
        </div>
        <span class="border border-neutral-60 flex-grow-1 py-4 py-xl-0"></span>
        <div class="d-flex flex-xl-column align-items-center gap-2">
          <p class="bg-neutral-40 text-neutral-80 fs-5 py-2 px-3 rounded-4 mb-0">預計離單日</p>
          <p class="mb-0 fw-semibold">
            <slot name="end"
              >{{ getCurrentMonth(new Date(props.date.end).getTime()) }} 月
              {{ getCurrentDay(new Date(props.date.end).getTime()) }} 日</slot
            >
          </p>
        </div>
      </div>
    </section>
    <section class="border border-neutral-40 rounded-4 p-4">
      <h4 class="h3 mb-3 fw-semibold">
        報名佛七期數 <br />
        <span class="fs-5 text-neutral-80 fw-normal">共 {{ currentBuddha.length }} 期</span>
      </h4>
      <div class="d-flex flex-column d-xl-grid gap-3" style="grid-template-columns: 50% 50%">
        <section
          class="bg-neutral-10 p-3 text-center w-100"
          v-for="item in currentBuddha"
          :key="item.Id"
        >
          <h5 class="h1 text-primary fw-semibold mb-1">{{ item.Id }}</h5>
          <p class="mb-1 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >從</span
            >{{ formatDate(new Date(item.StartSevenDate).valueOf(), true) }}
          </p>
          <p class="mb-0 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >到</span
            >{{ formatDate(new Date(item.CompleteDate).valueOf(), true) }}
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, watch, ref } from 'vue';
import { getCurrentMonth, getCurrentDay, getCurrentYear, formatDate } from '@/plug/Timer';
import BuddhaStore from '@/stores/BuddhaStore';

const props = defineProps({
  date: {
    type: Object,
    required: true,
  },
});

const buddhaStore = BuddhaStore();
const currentBuddha = ref([]);

watch(
  () => props.date,
  (newValue, oldValue) => {
    currentBuddha.value = buddhaStore.totalBuddha
      .filter((item: any) => new Date().getTime() <= new Date(item.CompleteDate).getTime())
      .filter(
        (item: any) =>
          (new Date(formatDate(props.date.start)).getTime() >=
            new Date(formatDate(item.StartSevenDate)).getTime() &&
            new Date(formatDate(props.date.start)).getTime() <=
              new Date(formatDate(item.CompleteDate)).getTime()) ||
          (new Date(formatDate(props.date.end)).getTime() >=
            new Date(formatDate(item.StartSevenDate)).getTime() &&
            new Date(formatDate(props.date.end)).getTime() <=
              new Date(formatDate(item.CompleteDate)).getTime()),
      );

    if (
      getCurrentYear(new Date(newValue.start).valueOf()) ===
      getCurrentYear(new Date(oldValue.start).valueOf())
    )
      return;

    buddhaStore.getTotal(getCurrentYear(props.date.start));
  },
);
onMounted(() => {
  buddhaStore.getTotal(getCurrentYear(props.date.start));
});

watch(
  () => buddhaStore.totalBuddha,
  () => {
    currentBuddha.value = buddhaStore.totalBuddha.filter(
      (item: any) =>
        new Date(item.StartSevenDate).getTime() >=
          new Date(formatDate(props.date.start)).getTime() &&
        new Date(item.CompleteDate).getTime() <=
          new Date(formatDate(new Date(props.date.end).getTime() + 24 * 60 * 60 * 60)).getTime(),
    );
  },
);
</script>
