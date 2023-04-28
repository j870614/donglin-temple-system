<template>
  <main class="row">
    <div class="col h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2">
      <BackTitle>
        <template #title> 使用者權限核發 </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <div>
        <beforeSearch></beforeSearch>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import beforeSearch from '@/components/information/beforeSearch.vue';

import { ref } from 'vue';

const steps = ref(['個資查詢', '權限設定', '註冊連結']);
</script>
