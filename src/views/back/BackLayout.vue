<template>
  <div class="container-fluid overflow-hidden" style="max-height: 100vh">
    <nav class="bg-white sticky-top border-bottom border-neutral-40">
      <NavBar />
    </nav>
    <div
      class="row flex-grow-1"
      @click="navInfoStore.closeAll()"
      @keydown="navInfoStore.closeAll()"
    >
      <aside class="col-12 col-xl-3 gx-xl-5 max-sideBar max-heighScroll" v-if="sideBarStore.isOpen">
        <SideBar />
      </aside>
      <div class="col max-heighScroll" style="background-color: #f6f6f6">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavInfoConfig from '@/stores/NavInfoConfig';
import sideBarConfigStore from '@/stores/SideBarConfig';
import UserStore from '@/stores/UserStore';
import SideBar from '@/components/back/SideBar.vue';
import NavBar from '@/components/back/NavBar.vue';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const sideBarStore = sideBarConfigStore();
const userStore = UserStore();
const navInfoStore = NavInfoConfig();
const route = useRoute();
onMounted(() => {
  if (window.innerWidth < 1200) sideBarStore.isOpen = false;
  userStore.checkLogin(userStore.getToken());
});

watch(
  () => route.path,
  () => {
    userStore.checkLogin(userStore.getToken());
  },
);
</script>
<style scoped lang="scss">
.max-sideBar {
  @media (min-width: 1200px) {
    max-width: 360px;
  }
}
.max-heighScroll {
  overflow-y: scroll;
  height: calc(100vh - 64px);
  @media (min-width: 1200px) {
    height: calc(100vh - 116px);
  }
}
</style>
