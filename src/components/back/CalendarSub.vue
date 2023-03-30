<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="calendarSub">
      <div class="calendarSub-dailySchedule">
        <div class="calendarSub-dailySchedule-header d-flex justify-content-between">
          <h2>今日行程</h2>
          <p class="pt-2">查看全部<span class="ms-2">=></span></p>
        </div>
        <div class="calendarSub-dailySchedule-body">
          <div class="card rounded-4">
            <div class="card-body d-flex justify-content-between">
              <p class="card-text d-inline align-middle m-2">第442期佛七起七</p>
              <button type="button" class="btn btn-neutral-40 fw-light rounded-4 me-2">整天</button>
            </div>
          </div>
        </div>
      </div>
      <div class="calendarSub-todoList">
        <div class="calendarSub-todoList-header d-flex justify-content-between">
          <h2>待辦事項</h2>
        </div>
        <div class="calendarSub-todoList-body"></div>
        <div class="calendarSub-todoList-footer d-grid">
          <button
            type="button"
            class="btn btn-outline-primary border border-primary rounded-4 py-3 border-2 fw-bold"
          >
            <span class="me-1">⊕</span>新增待辦事項
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendarSub-dailySchedule {
  margin-bottom: 40px;
  &-header {
    margin-bottom: 24px;
  }
  &-body {
    .card {
      margin-top: 12px;
    }
  }
}

.calendarSub-todoList {
  &-header {
    margin-bottom: 24px;
  }
}
</style>
