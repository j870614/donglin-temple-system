<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';
import { RouterView } from 'vue-router';
import SideBar from '@/components/back/SideBar.vue';

const sideBarStore = sideBarConfigStore();
</script>

<template>
  <div class="container-fluid">
    <nav class="row">
      <div class="col bg-dark text-white">Nav</div>
    </nav>
    <div class="row">
      <aside class="col-12 col-md-3 gx-md-5 max-sideBar" v-if="sideBarStore.isOpen">
        <SideBar />
      </aside>
      <div class="col" style="background-color: #f6f6f6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.max-sideBar {
  @media (min-width: 768px) {
    max-width: 360px;
  }
}
</style>
