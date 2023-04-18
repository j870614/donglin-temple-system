<template>
  <span
    class="material-symbols-outlined fs-1"
    style="cursor: pointer"
    :style="{ transform: sideBarStore.isOpen ? 'rotate(180deg)' : '' }"
    @click="() => (sideBarStore.isOpen = !sideBarStore.isOpen)"
    @keydown="() => (sideBarStore.isOpen = !sideBarStore.isOpen)"
  >
    <slot name="icon-name">read_more</slot>
  </span>
</template>
<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';

const sideBarStore = sideBarConfigStore();
</script>
