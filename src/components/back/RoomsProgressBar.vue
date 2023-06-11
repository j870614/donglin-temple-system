<template>
  <div class="position-relative m-md-4 m-5">
    <div class="progress" style="height: 4px">
      <div
        class="progress-bar"
        role="progressbar"
        aria-label="Progress"
        :style="{ width: `${progressBarValue}%` }"
        :aria-valuenow="progressBarValue"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <template v-for="item in steps" :key="item.id">
      <button type="button" :class="stepButtonClass(item)" :style="{ left: `${item.value}%` }">
        <template v-if="stepsCheck(item)">
          <i class="bi bi-check text-white fs-4"></i>
        </template>
        <template v-else>
          <div>
            {{ item.id }}
          </div>
        </template>
      </button>
      <h4 :class="stepTextClass(item)" :style="{ left: `${item.value}%` }">
        <span v-html="item.label"></span>
      </h4>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  roomsState: {
    type: String,
    default: '',
  },
});

const steps = [
  { id: 1, label: '查詢佛七<br />報名表單', value: '0' },
  { id: 2, label: '查詢報名者<br />歷史掛單紀錄', value: '50' },
  { id: 3, label: '安排寮房', value: '100' },
];

function getCurrentStepId() {
  const step = steps.find((item) => item.label === props.roomsState);
  return step ? parseInt(step.id.toString(), 10) : 0;
}

function stepButtonClass(step: { id: number }) {
  const baseClass = 'progressBarDot top-0 btn btn-sm btn-primary rounded-pill';
  if (step.id <= getCurrentStepId()) {
    return `${baseClass}`;
  }
  return `${baseClass}`;
}

function stepTextClass(step: { id: number }) {
  const baseClass = 'progressBarWord top-0';
  if (step.id <= getCurrentStepId()) {
    return `${baseClass}`;
  }
  return `${baseClass}`;
}

function stepsCheck(step: { id: number }) {
  if (step.id < getCurrentStepId()) {
    return true;
  }
  return false;
}

const progressBarValue = computed(() => {
  const step = steps.find((item) => item.label === props.roomsState);
  return step ? parseInt(step.value, 10) : 0;
});
</script>

<style scoped lang="scss">
.progressBarDot {
  position: absolute;
  transform: translate(-50%, -50%) !important;
  width: 44px;
  height: 44px;
}
.progressBarWord {
  position: absolute;
  transform: translate(-50%) !important;
  padding-top: 36px;
  white-space: nowrap;
}

@media screen and (max-width: 1200px) {
  .progressBar {
    margin: 0 auto;
  }
}
</style>
