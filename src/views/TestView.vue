<script setup lang="ts">
import AdminCalendarSub from '@/components/AdminCalendarSub.vue';
</script>

<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12 col-md-9 bg-black text-white">
        <div>
          <button type="button" class="btn btn-primary-dark">primary-dark</button>
          <button type="button" class="btn btn-primary">primary</button>
          <button type="button" class="btn btn-primary-80">primary-80</button>
          <button type="button" class="btn btn-primary-60">primary-60</button>
          <button type="button" class="btn btn-primary-tint">primary-tint</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary">secondary</button>
          <button type="button" class="btn btn-secondary-tint">secondary-tint</button>
        </div>
        <div>
          <button type="button" class="btn btn-success-120">success-120</button>
          <button type="button" class="btn btn-success">success</button>
          <button type="button" class="btn btn-success-20">success-20</button>
          <button type="button" class="btn btn-success-10">success-10</button>
        </div>
        <div>
          <button type="button" class="btn btn-danger-120">danger-120</button>
          <button type="button" class="btn btn-danger">danger</button>
          <button type="button" class="btn btn-danger-20">danger-20</button>
          <button type="button" class="btn btn-danger-10">danger-10</button>
        </div>
        <div>
          <button type="button" class="btn btn-black">black</button>
          <button type="button" class="btn btn-neutral-80">neutral-80</button>
          <button type="button" class="btn btn-neutral-60">neutral-60</button>
          <button type="button" class="btn btn-neutral-40">neutral-40</button>
          <button type="button" class="btn btn-neutral-10">neutral-10</button>
          <button type="button" class="btn btn-white">white</button>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="mb-5 mb-md-0"></div>
        <AdminCalendarSub />
      </div>
    </div>
  </div>
</template>
