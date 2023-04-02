<template>
  <span
    class="material-symbols-outlined fs-1"
    style="cursor: pointer; margin-right: 20px"
    :style="{ transform: sideBarStore.isOpen ? 'rotate(180deg)' : '' }"
    @click="() => (sideBarStore.isOpen = !sideBarStore.isOpen)"
    @keydown="() => (sideBarStore.isOpen = !sideBarStore.isOpen)"
    >read_more</span
  >
</template>
<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';

const sideBarStore = sideBarConfigStore();
</script>
