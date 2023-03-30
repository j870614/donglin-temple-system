<script setup lang="ts">
interface Schedule {
  id: string;
  title: string;
  tags?: string[];
}
interface Todo {
  id: string;
  title: string;
  isFinished: boolean;
}

const scheduleList: Schedule[] = [
  { id: '1', title: '第442期佛七起七', tags: ['整天'] },
  { id: '2', title: '皈依', tags: ['14:00-17:00'] },
  { id: '3', title: '開會', tags: ['17:00-22:00'] },
];
const todoList: Todo[] = [
  { id: '1', title: '皈依證填寫', isFinished: true },
  { id: '2', title: '請庫頭師補足專念服庫存', isFinished: false },
  { id: '3', title: '開會', isFinished: false },
];
</script>

<template>
  <div class="container">
    <div class="calendarSub">
      <div class="calendarSub-dailySchedule">
        <div class="calendarSub-dailySchedule-header d-flex justify-content-between">
          <h2>今日行程</h2>
          <a href="javascript:;" class="d-flex pt-2 text-decoration-none text-black">
            <p>查看全部</p>
            <span class="material-symbols-outlined fs-5 d-inline-block"> arrow_forward </span>
          </a>
        </div>
        <div class="calendarSub-dailySchedule-body" v-if="scheduleList.length">
          <div
            class="calendarSub-dailySchedule-cardGroup"
            v-for="schedule in scheduleList"
            :key="schedule.id"
          >
            <div class="card rounded-4">
              <div class="card-body d-flex justify-content-between">
                <p class="card-text d-inline align-middle m-2">{{ schedule.title }}</p>
                <div class="" v-for="tag in schedule.tags" :key="tag">
                  <button type="button" class="btn btn-neutral-40 fw-light rounded-4 me-2">
                    {{ tag }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendarSub-todoList">
        <div class="calendarSub-todoList-header d-flex justify-content-between">
          <h2>待辦事項</h2>
        </div>
        <div class="calendarSub-todoList-body" v-for="todo in todoList" :key="todo.id">
          {{ todo.title }}
        </div>
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
    span {
      padding-top: 1px;
    }
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
