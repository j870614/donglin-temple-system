<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';
import { RouterView } from 'vue-router';
import SideBar from '@/components/back/SideBar.vue';
import NavBar from '@/components/back/NavBar.vue';

const sideBarStore = sideBarConfigStore();
</script>

<template>
  <div class="container-fluid overflow-hidden" style="max-height: 100vh">
    <nav class="row bg-white sticky-top border-bottom border-neutral-40">
      <NavBar />
    </nav>
    <div class="row flex-grow-1">
      <aside class="col-12 col-lg-3 gx-lg-5 max-sideBar max-heighScroll" v-if="sideBarStore.isOpen">
        <SideBar />
      </aside>
      <div class="col max-heighScroll" style="background-color: #f6f6f6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.max-sideBar {
  @media (min-width: 992px) {
    max-width: 360px;
  }
}
.max-heighScroll {
  overflow-y: scroll;
  max-height: calc(100vh - 64px);
  @media (min-width: 992px) {
    max-height: calc(100vh - 116px);
  }
}
</style>
