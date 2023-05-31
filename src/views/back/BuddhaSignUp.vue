<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> {{ steps[Number($route.query.step) - 1] }} </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <beforeSearch v-if="$route.query.step === '1'"></beforeSearch>
      <FormList
        pre="/back/buddha/signUp?step=1"
        next="/back/buddha/signUp?step=3"
        v-if="$route.query.step === '2'"
      ></FormList>
      <BuddhaDate v-if="$route.query.step === '3'"></BuddhaDate>
      <MealSurvey
        pre="/back/buddha/signUp?step=3"
        next="/back/buddha/signUp?step=5"
        v-if="$route.query.step === '4'"
      ></MealSurvey>
      <CheckInfo v-if="$route.query.step === '5'"></CheckInfo>
      <BuddhaNotice v-if="$route.query.step === '6'"></BuddhaNotice>
      <BuddhaFinish v-if="$route.query.step === '7'"></BuddhaFinish>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import beforeSearch from '@/components/information/BeforeSearch.vue';
import FormList from '@/components/information/FormList.vue';
import BuddhaDate from '@/components/information/BuddhaDate.vue';
import MealSurvey from '@/components/information/MealSurvey.vue';
import CheckInfo from '@/components/information/CheckInfo.vue';
import BuddhaNotice from '@/components/information/BuddhaNotice.vue';
import BuddhaFinish from '@/components/information/BuddhaFinish.vue';

const steps = ref([
  '資料查詢',
  '基本資料',
  '掛單日期選擇',
  '用齋調查',
  '報名資料確認',
  '掛單注意事項',
  '預約清單',
]);

onBeforeRouteLeave((to, from, next) => {
  sessionStorage.removeItem('totalTemp');
  sessionStorage.removeItem('tempUser');
  next();
});

const route = useRoute();
const router = useRouter();
const currentPath = route.path;
watch(
  () => route.fullPath,
  (to) => {
    const { tempUser } = sessionStorage;
    if (to.startsWith('/back/buddha/signUp') && to.split('step=')[1] !== '1') {
      if (!tempUser) router.push('/back/buddha/signUp?step=1');
    }
    if (!to.includes(currentPath)) {
      sessionStorage.removeItem('totalTemp');
      sessionStorage.removeItem('tempUser');
    }
  },
);
</script>
