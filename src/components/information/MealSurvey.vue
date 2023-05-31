<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-10 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <section>
        <h3 class="h3 fw-semibold mb-4">用齋習慣：</h3>
        <div class="d-flex flex-column flex-xl-row gap-3 gap-xl-5">
          <div class="form-check" v-for="(item, index) in ['早齋', '午齋', '藥石']" :key="index">
            <input
              class="form-check-input"
              type="checkbox"
              :value="item"
              :id="item + index"
              v-model="meal"
            />
            <label class="form-check-label fs-5 fw-semibold" :for="item + index">
              {{ item }}
            </label>
          </div>
        </div>
      </section>
      <section v-if="!$route.fullPath.startsWith('/back/buddha/checkIn')">
        <h3 class="h3 fw-semibold mb-4 mt-5">報到日用齋：</h3>
        <div
          class="form-check"
          :class="{ 'mb-3': name === '午齋' }"
          v-for="(content, name) in {
            午齋: '用齋時間11：10，要用午齋者請於10：30前報到',
            藥石: '用齋時間17：10，要用藥石者請於15：00前報到',
          }"
          :key="name + content"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="name"
            :id="name"
            v-model="checkMeals"
          />
          <label class="form-check-label fs-5" :for="name">
            <span class="fw-semibold me-2">{{ name }}</span
            >{{ content }}
          </label>
        </div>
      </section>
    </div>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      :to="props.pre"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      :to="props.next"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
      @click="saveTemp"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';

const meal = ref<string[]>(['早齋', '午齋', '藥石']);
const checkMeals = ref<string[]>([]);
onMounted(() => {
  if (!sessionStorage.tempUser) return;
  const { EatBreakfast, EatLunch, EatDinner, CheckInDateLunch, CheckInDateDinner } = JSON.parse(
    sessionStorage.tempUser,
  );
  if (EatBreakfast === undefined || EatBreakfast) {
    if (!meal.value.includes('早齋')) meal.value.push('早齋');
  } else {
    const index = meal.value.indexOf('早齋');
    meal.value.splice(index, 1);
  }
  if (EatLunch === undefined || EatLunch) {
    if (!meal.value.includes('午齋')) meal.value.push('午齋');
  } else {
    const index = meal.value.indexOf('午齋');
    meal.value.splice(index, 1);
  }
  if (EatDinner === undefined || EatDinner) {
    if (!meal.value.includes('藥石')) meal.value.push('藥石');
  } else {
    const index = meal.value.indexOf('藥石');
    meal.value.splice(index, 1);
  }

  if (CheckInDateLunch) {
    checkMeals.value.push('午齋');
  }
  if (CheckInDateDinner) {
    checkMeals.value.push('藥石');
  }
});

const props = defineProps({
  next: {
    type: String,
    required: true,
  },
  pre: {
    type: String,
    required: true,
  },
});

function saveTemp() {
  const tempUser = JSON.parse(sessionStorage.tempUser);
  tempUser.EatBreakfast = meal.value.includes('早齋');
  tempUser.EatLunch = meal.value.includes('午齋');
  tempUser.EatDinner = meal.value.includes('藥石');
  tempUser.CheckInDateBreakfast = meal.value.includes('早齋');
  tempUser.CheckInDateLunch = checkMeals.value.includes('午齋');
  tempUser.CheckInDateDinner = checkMeals.value.includes('藥石');
  sessionStorage.setItem('tempUser', JSON.stringify(tempUser));
}
</script>
