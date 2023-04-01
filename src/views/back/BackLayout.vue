<script setup lang="ts">
import sideBarConfigStore from '@/stores/SideBarConfig';
import { RouterView } from 'vue-router';
import SideBar from '@/components/back/SideBar.vue';
import CalendarSub from '@/components/back/CalendarSub.vue';

const sideBarStore = sideBarConfigStore();
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <aside
        class="col-12 col-md-3 gx-md-5 gy-md-4 gy-2"
        style="max-width: 360px"
        v-if="sideBarStore.isOpen"
      >
        <SideBar />
      </aside>
      <div class="col-12 col-md gap-4">
        <nav class="row">
          <div class="col-12 bg-dark text-white">Nav</div>
        </nav>
        <div class="row h-100">
          <main class="col bg-info">
            <RouterView />
          </main>
          <div class="col-12 col-md-3 bg-body">
            <div class="mb-5 mb-md-0">
              <!-- 行事曆 -->
            </div>
            <CalendarSub />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
