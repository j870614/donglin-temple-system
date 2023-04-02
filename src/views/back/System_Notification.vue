<template>
  <div class="col">
    <OpenSideBar />
  </div>
  <div class="col-12 col-md-3 bg-body">
    <div class="mb-5 mb-md-0">
      <!-- 行事曆 -->
    </div>
    <CalendarSub />
  </div>
</template>
<script setup lang="ts">
import OpenSideBar from '@/components/back/OpenSideBar.vue';
import CalendarSub from '@/components/back/CalendarSub.vue';
</script>
