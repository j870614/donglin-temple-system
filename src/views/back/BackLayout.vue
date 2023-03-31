<script setup lang="ts">
import SideBar from '@/components/back/SideBar.vue';
import CalendarSub from '@/components/back/CalendarSub.vue';
</script>

<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12 col-md-3">
        <SideBar />
      </div>
      <div class="col-12 col-md-6 bg-black"></div>
      <div class="col-12 col-md-3">
        <div class="mb-5 mb-md-0"></div>
        <CalendarSub />
      </div>
    </div>
  </div>
</template>
