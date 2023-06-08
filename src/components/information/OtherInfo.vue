<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <h2 class="h3 mb-4 fw-semibold">專長</h2>
      <div class="d-flex flex-wrap gap-4 fs-5">
        <div class="form-check" v-for="(item, index) in sick" :key="index">
          <input class="form-check-input" type="checkbox" :value="item" :id="item + index" />
          <label class="form-check-label" :for="item + index"> {{ item }} </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="外語" id="other" />
          <label class="form-check-label" for="other"> 外語: </label>
          <input
            class="border-0 border-bottom border-neutral-80 ms-2-5 w-75"
            type="text"
            placeholder="請輸入外語"
            aria-label="外語"
          />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="其他" id="other" />
          <label class="form-check-label" for="other"> 其他: </label>
          <input
            class="border-0 border-bottom border-neutral-80 ms-2-5 w-75"
            type="text"
            placeholder="請輸入專長"
            aria-label="其他"
          />
        </div>
      </div>
    </div>
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <div>
        <label for="study" class="form-label fs-3 fw-semibold">學經歷</label>
        <textarea class="form-control" id="study" rows="5"></textarea>
      </div>
      <div>
        <label for="cause" class="form-label fs-3 fw-semibold">來寺因緣</label>
        <textarea class="form-control" id="cause" rows="5"></textarea>
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
      v-if="props.next"
      :to="props.next"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
    <button
      v-if="props.isFinish"
      type="button"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      完成
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue';

const sick = ref<string[]>([
  '香積',
  '園藝',
  '水電',
  '建築',
  '室內設計',
  '總務',
  '財務會計',
  '電腦硬體',
  '網頁設計',
  '程式設計',
  '駕駛',
  '法律',
]);
const props = defineProps({
  next: {
    type: String,
    default: '',
  },
  pre: {
    type: String,
    required: true,
  },
  isFinish: {
    type: Boolean,
    required: true,
  },
});
</script>
<style scoped>
.form-check-label {
  font-weight: 600;
}
</style>
