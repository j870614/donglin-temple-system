<template>
  <div
    class="d-flex align-items-center px-5 mx-auto mb-xl-5 mb-3 step-over"
    style="padding-bottom: 40px"
  >
    <template v-for="(step, index) in props.steps" :key="step.title">
      <div class="position-relative flex-shrink-0">
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
          class="position-absolute start-50 translate-middle-x fs-6 fw-semibold mb-0"
          style="top: 100%; width: 6rem"
          :class="{ 'text-nowrap text-center': step.length <= 6 }"
          v-html="step"
        ></h2>
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
<style scoped lang="scss">
span.flex-grow-1 {
  min-width: 5rem;
}

.step-circle {
  width: 44px;
  height: 44px;
  text-align: center;
  border-radius: 50%;
  span {
    line-height: 44px;
  }
  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
    span {
      line-height: 24px;
    }
  }
}

.step-over {
  width: 75%;
  @media (max-width: 1200px) {
    width: 100%;
    overflow: scroll;
  }
}
</style>
