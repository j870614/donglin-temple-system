<template>
  <nav class="position-sticky top-0 bg-white">
    <NavBar />
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer class="mt-footer">
    <FooterBar />
  </footer>
</template>
<script setup lang="ts">
import FooterBar from '@/components/front/FooterBar.vue';
import NavBar from '@/components/front/NavBar.vue';
</script>
<style lang="scss">
.mt-footer {
  margin-top: 60px;
  @media (min-width: 992px) {
    margin-top: 120px;
  }
}
</style>
