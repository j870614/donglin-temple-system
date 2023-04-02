<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';
import { RouterView } from 'vue-router';
import SideBar from '@/components/back/SideBar.vue';

const sideBarStore = sideBarConfigStore();
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-12 col-md-3 gx-md-5" v-if="sideBarStore.isOpen">
        <SideBar />
      </aside>
      <div class="col" style="background-color: #f6f6f6">
        <nav class="row">
          <div class="bg-dark text-white">Nav</div>
        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>
