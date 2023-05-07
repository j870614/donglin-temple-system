<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 佛七報名 </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <beforeSearch v-if="Number($route.query.step) === 1"></beforeSearch>
      <FormList class="" v-if="Number($route.query.step) === 2"></FormList>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import beforeSearch from '@/components/information/BeforeSearch.vue';
import FormList from '@/components/information/FormList.vue';

const steps = ref([
  '資料查詢',
  '基本資料',
  '掛單日期選擇',
  '用齋調查',
  '報名資料確認',
  '掛單注意事項',
  '預約清單',
]);
</script>
