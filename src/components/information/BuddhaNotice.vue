<template>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-10 mb-3">
      <p class="h3 mb-0">南無阿彌陀佛</p>
      <h3 class="h3 mb-5">請詳閱掛單注意事項</h3>
    </section>
  </div>
  <div class="row justify-content-center gap-4 mx-0">
    <ol class="col-5 box-style gx-xl-0 p-xl-5 p-3 h-max fs-5 list-inline w-75 mx-auto">
      <li
        v-for="(item, index) in notion"
        :key="index"
        class="form-check"
        :class="{ 'mb-4': index !== notion.length - 1 }"
      >
        <input
          class="form-check-input"
          type="checkbox"
          :value="item"
          :id="item + index"
          v-model="checkNum"
        />
        <label class="form-check-label" :for="item + index" v-html="item"> </label>
      </li>
    </ol>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <!-- to="/back/buddha/signUp?step=5" -->
    <router-link
      :to="props.pre"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <button
      type="button"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
      @click="tempTotal"
    >
      下一步
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const props = defineProps({
  next: {
    type: String,
    default: '',
  },
  pre: {
    type: String,
    default: '',
  },
  hasNext: {
    type: Boolean,
    required: true,
  },
  nextFn: {
    type: Function,
    default: () => {
      console.log(1);
    },
  },
});

const identity = ref<string>('法師');
const notion = ref<string[]>([]);
const fashi: string[] = [
  '1. 請在15：00前報到。',
  '2. 報到時請主動出示戒牒。',
  '3. 請攜帶三衣及咖啡色海清，若無帶七衣之法師，將不開放掛單。',
  '4. 上殿服裝：<p class="mb-0 ms-5 ps-5">平日共修：中掛搭七衣。<br />佛七大供：咖啡色海清搭七衣。<br />請穿著羅漢襪。</p>',
  '5. 冬季宜蘭多雨，請攜帶雨具，<br /><span class="ms-4">亦可備多雙襪子更換。</span>',
  '6. 山林早晚較涼，逢秋、冬二季，請攜帶足夠的衣物。',
];
const jushi: string[] = [
  '1. 請在15：00前報到。',
  '2. 上殿請著專念服或海清。<br /><span class="ms-4">若無帶專念服或海清之居士，將不開放掛單。</span>',
  '3. 上殿著黑色襪子。',
  '4. 冬季宜蘭多雨，請攜帶雨具，<br /><span class="ms-4">亦可備多雙襪子更換。</span>',
  '5. 山林早晚較涼，逢秋、冬二季，請攜帶足夠的衣物。',
];
onMounted(() => {
  if (!sessionStorage.tempUser) return;
  identity.value = JSON.parse(sessionStorage.tempUser).IsMonk ? '法師' : '居士';
  if (identity.value === '法師') {
    notion.value.push(...fashi);
  } else {
    notion.value.push(...jushi);
  }
});

const checkNum = ref<any[]>([]);
const router = useRouter();
function tempTotal() {
  if (checkNum.value.length >= notion.value.length) {
    const totalTemp = sessionStorage.totalTemp ? JSON.parse(sessionStorage.totalTemp) : [];
    const hasTemp = totalTemp.filter(
      (item: any) => item.Id === JSON.parse(sessionStorage.tempUser).Id,
    );
    if (!hasTemp.length) {
      totalTemp.push(JSON.parse(sessionStorage.tempUser));
    }
    sessionStorage.setItem('totalTemp', JSON.stringify(totalTemp));

    if (props.hasNext) {
      router.push(props.next);
    } else {
      props.nextFn();
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: '請詳閱掛單注意事項',
    });
  }
}
</script>
