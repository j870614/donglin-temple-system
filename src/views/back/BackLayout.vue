<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';
import { RouterView } from 'vue-router';
import SideBar from '@/components/back/SideBar.vue';
import NavBar from '@/components/back/NavBar.vue';

const sideBarStore = sideBarConfigStore();
</script>

<template>
  <div class="container-fluid">
    <nav class="row bg-white sticky-top border-bottom border-neutral-40">
      <NavBar />
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
<style scoped lang="scss">
.max-sideBar {
  @media (min-width: 768px) {
    max-width: 360px;
  }
}
</style>
