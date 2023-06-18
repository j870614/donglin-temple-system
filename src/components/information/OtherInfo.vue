<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <h2 class="h3 mb-4 fw-semibold">專長</h2>
      <div class="d-flex flex-wrap gap-4 fs-5">
        <div class="form-check" v-for="(item, index) in expertise" :key="index">
          <input
            class="form-check-input"
            type="checkbox"
            :value="item"
            :id="item + index"
            v-model="tempUser.Expertise.expertise"
          />
          <label class="form-check-label" :for="item + index"> {{ item }} </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="外語"
            id="otherLag"
            v-model="tempUser.Expertise.expertise"
          />
          <label class="form-check-label" for="otherLag"> 外語: </label>
          <input
            class="border-0 border-bottom border-neutral-80 ms-2-5 w-75"
            type="text"
            placeholder="請輸入外語"
            aria-label="外語"
            v-model="tempUser.Expertise.otherLag"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="其他"
            id="otherExp"
            v-model="tempUser.Expertise.expertise"
          />
          <label class="form-check-label" for="otherExp"> 其他: </label>
          <input
            class="border-0 border-bottom border-neutral-80 ms-2-5 w-75"
            type="text"
            placeholder="請輸入專長"
            aria-label="其他"
            v-model="tempUser.Expertise.otherExp"
          />
        </div>
      </div>
    </div>
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <div>
        <label for="study" class="form-label fs-3 fw-semibold">學經歷</label>
        <textarea class="form-control" id="study" rows="5" v-model="tempUser.Education"></textarea>
      </div>
      <div>
        <label for="cause" class="form-label fs-3 fw-semibold">來寺因緣</label>
        <textarea
          class="form-control"
          id="cause"
          rows="5"
          v-model="tempUser.ComeTempleReason"
        ></textarea>
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
      @click="saveTemp"
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
import { ref, defineProps, onMounted } from 'vue';

const tempUser = ref({
  Education: '',
  ComeTempleReason: '',
  Expertise: {
    expertise: [] as string[],
    otherExp: '',
    otherLag: '',
  },
});

onMounted(() => {
  tempUser.value = JSON.parse(sessionStorage.tempUser);
  const { Expertise } = tempUser.value;
  tempUser.value.Expertise = Expertise
    ? JSON.parse(Expertise)
    : {
        expertise: [],
        otherExp: '',
        otherLag: '',
      };
});

const expertise = ref<string[]>([
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
    default: false,
  },
});

function saveTemp() {
  if (!tempUser.value.Expertise.expertise.includes('其他')) tempUser.value.Expertise.otherExp = '';
  if (!tempUser.value.Expertise.expertise.includes('外語')) tempUser.value.Expertise.otherLag = '';
  if (!tempUser.value.Expertise.otherExp && tempUser.value.Expertise.expertise.includes('其他')) {
    const index = tempUser.value.Expertise.expertise.indexOf('其他');
    tempUser.value.Expertise.expertise.splice(index, 1);
  }
  if (!tempUser.value.Expertise.otherLag && tempUser.value.Expertise.expertise.includes('外語')) {
    const index = tempUser.value.Expertise.expertise.indexOf('外語');
    tempUser.value.Expertise.expertise.splice(index, 1);
  }
  tempUser.value.Expertise = JSON.stringify(tempUser.value.Expertise);
  sessionStorage.setItem('tempUser', JSON.stringify(tempUser.value));
}
</script>
<style scoped>
.form-check-label {
  font-weight: 600;
}
</style>
