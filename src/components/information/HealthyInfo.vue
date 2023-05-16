<template>
  <div class="row">
    <div class="col-10 box-style p-4 mx-auto">
      <div class="mb-4">
        <select
          class="form-select form-select-lg rounded-4 mb-3"
          aria-label="血型"
          style="max-width: 400px"
        >
          <option value="" selected disabled>請選擇血型</option>
          <option :value="item" v-for="(item, index) in ['A', 'B', 'O', 'AB']" :key="item + index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="d-flex flex-wrap gap-4 fs-5">
        <div class="form-check" v-for="(item, index) in sick" :key="index">
          <input class="form-check-input" type="checkbox" :value="item" :id="item + index" />
          <label class="form-check-label" :for="item + index"> {{ item }} </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="其他" id="other" />
          <label class="form-check-label" for="other"> 其他: </label>
          <input
            class="border-0 border-bottom border-neutral-80 ms-2-5 w-75"
            type="text"
            placeholder="請輸入症狀"
            aria-label="其他症狀"
          />
        </div>
      </div>
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
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue';

const sick = ref<string[]>([
  '高血壓',
  '失眠',
  '重聽',
  '嚴重打鼾',
  '胃腸病',
  '心臟病',
  '氣喘',
  '癌症',
  '手術開刀',
  '行動不便',
  '糖尿病',
  '癲癇',
  '中風',
  '肝病',
  '腎臟病',
  '憂鬱症',
  '躁鬱症',
]);
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
</script>
<style scoped>
.form-check-label {
  font-weight: 600;
}
</style>
