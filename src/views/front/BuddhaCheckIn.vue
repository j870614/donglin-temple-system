<template>
  <div class="pt-5" style="background-image: linear-gradient(to top, #fff, #f6f6f6)">
    <div class="container pt-4">
      <ProcessSteps :steps="steps"></ProcessSteps>
      <div v-if="$route.query.step === '1'">報名資料查詢</div>
      <AgreeSaved
        :pre="`/${route.params.id}?step=1`"
        :next="`/${route.params.id}?step=3`"
        v-if="$route.query.step === '2'"
      ></AgreeSaved>
      <FormList
        :pre="`/${route.params.id}?step=2`"
        :next="`/${route.params.id}?step=4`"
        v-if="$route.query.step === '3'"
      ></FormList>
      <MealSurvey
        :pre="`/${route.params.id}?step=3`"
        :next="`/${route.params.id}?step=5`"
        v-if="$route.query.step === '4'"
      ></MealSurvey>
      <HealthyInfo
        :pre="`/${route.params.id}?step=4`"
        :next="`/${route.params.id}?step=6`"
        v-if="$route.query.step === '5'"
      ></HealthyInfo>
      <OtherInfo
        :pre="`/${route.params.id}?step=5`"
        :next="`/${route.params.id}?step=7`"
        :is-finish="false"
        v-if="$route.query.step === '6'"
      ></OtherInfo>
      <BuddhaNotice
        :pre="`/${route.params.id}?step=5`"
        :has-next="false"
        v-if="$route.query.step === '7'"
      ></BuddhaNotice>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import AgreeSaved from '@/components/information/AgreeSaved.vue';
import FormList from '@/components/information/FormList.vue';
import MealSurvey from '@/components/information/MealSurvey.vue';
import HealthyInfo from '@/components/information/HealthyInfo.vue';
import BuddhaNotice from '@/components/information/BuddhaNotice.vue';
import OtherInfo from '@/components/information/OtherInfo.vue';
import { useRoute } from 'vue-router';
import GuestStore from '@/stores/GuestStore';

const guestStore = GuestStore();
const route = useRoute();
const steps = ref([
  '報名資料查詢',
  '個資蒐集同意',
  '個人資料',
  '用齋調查',
  '健康狀況',
  '學經歷、專長及來寺因緣',
  '學經歷、專長及來寺因緣',
]);
onMounted(() => {
  sessionStorage.removeItem('tempUser');
  guestStore.getUser(+route.params.id);
});
</script>
