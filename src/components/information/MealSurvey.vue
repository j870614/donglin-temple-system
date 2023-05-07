<template>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-xl-10 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <h3 class="h3 fw-semibold mb-4">用齋習慣：</h3>
      <div class="d-flex flex-column flex-xl-row gap-3 gap-xl-5">
        <div
          class="form-check"
          v-for="(item, index) in ['早齋', '午齋', '藥石']"
          :key="index"
          @click="onlyMeal(item)"
          @keydown="onlyMeal(item)"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="item"
            :id="item + index"
            v-model="meal"
          />
          <label class="form-check-label fs-5 fw-semibold" :for="item + index"> {{ item }} </label>
        </div>
      </div>
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
          :checked="meal.includes(name)"
        />
        <label class="form-check-label fs-5" :for="name">
          <span class="fw-semibold me-2">{{ name }}</span
          >{{ content }}
        </label>
      </div>
    </section>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=3"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=5"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const meal = ref<string[]>([]);
function onlyMeal(str: string) {
  meal.value.splice(0);
  meal.value.push(str);
}
</script>
