<template>
  <div
    class="d-flex align-items-center justify-content-between mb-xl-4 mb-3 pb-2 position-relative"
  >
    <h1 class="h1 fw-semibold d-flex align-items-center mb-0">
      <OpenSideBar />
      <span class="ms-0 ms-xl-2-5">
        <slot name="title">標題</slot>
      </span>
    </h1>
    <img
      src="@/assets/img/Logo2.png"
      alt="淨土行門"
      class="position-absolute end-0 top-0 img-fluid d-none d-xl-block"
      style="max-height: 80px"
    />
  </div>
</template>
<script setup lang="ts">
import OpenSideBar from '@/components/back/OpenSideBar.vue';
</script>
