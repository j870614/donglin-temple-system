<template>
  <div
    class="d-flex align-items-center justify-content-center w-lg-50 w-75 mx-auto mb-lg-5 mb-3 pb-5"
  >
    <template v-for="(step, index) in props.steps" :key="step.title">
      <div class="position-relative">
        <p
          class="mb-0 step-circle"
          :class="{
            'bg-neutral-40 text-neutral-60': Number($route.query.step) < index + 1,
            'bg-primary text-white': Number($route.query.step) >= index + 1,
          }"
        >
          <span class="material-symbols-outlined" v-if="Number($route.query.step) > index + 1">
            check
          </span>
          <span v-else> {{ index + 1 }} </span>
        </p>
        <h2
          class="position-absolute start-50 translate-middle-x fs-6 fw-semibold mb-0 text-nowrap"
          style="bottom: -1.5rem"
        >
          {{ step }}
        </h2>
      </div>
      <span
        class="flex-grow-1 border border-2"
        :class="{
          'border-neutral-40 ': Number($route.query.step) - 1 <= index,
          'border-primary': Number($route.query.step) - 1 > index,
        }"
        v-if="index !== props.steps.length - 1"
      ></span>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  steps: {
    type: Array as () => string[],
    required: true,
  },
});
</script>
