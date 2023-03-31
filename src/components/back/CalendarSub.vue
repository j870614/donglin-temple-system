<script setup lang="ts">
import { ref, type Ref } from 'vue';

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

const scheduleList: Ref<Schedule[]> = ref<Schedule[]>([
  { id: '1', title: '第442期佛七起七', tags: ['整天'] },
  { id: '2', title: '皈依', tags: ['14:00-17:00'] },
  { id: '3', title: '開會', tags: ['17:00-22:00'] },
]);
const todoList: Ref<Todo[]> = ref<Todo[]>([
  { id: '1', title: '皈依證填寫', isFinished: true },
  { id: '2', title: '請庫頭師補足專念服庫存', isFinished: false },
  { id: '3', title: '開會', isFinished: false },
]);
</script>

<template>
  <div class="container">
    <div class="calendarSub">
      <div class="calendarSub-dailySchedule">
        <div class="calendarSub-dailySchedule-header d-flex justify-content-between">
          <h2 class="fw-bold">今日行程</h2>
          <a href="javascript:;" class="d-flex pt-2 text-decoration-none text-black">
            <p class="fw-bold">查看全部</p>
            <span class="material-symbols-outlined fs-5 d-inline-block"> arrow_forward </span>
          </a>
        </div>
        <div class="calendarSub-dailySchedule-body" v-if="scheduleList.length">
          <div
            class="calendarSub-dailySchedule-card-group"
            v-for="schedule in scheduleList"
            :key="schedule.id"
          >
            <div class="card rounded-4">
              <div class="card-body d-flex justify-content-between">
                <p class="card-text d-inline align-middle m-2 fs-5">{{ schedule.title }}</p>
                <div class="d-inline-block mt-1" v-for="tag in schedule.tags" :key="tag">
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
          <h2 class="fw-bold">待辦事項</h2>
        </div>
        <div class="calendarSub-todoList-body mb-3" v-if="todoList.length">
          <div
            class="calendarSub-todoList-input-group form-check mb-2 fs-5"
            v-for="todo in todoList"
            :key="todo.id"
          >
            <input
              type="checkbox"
              :id="todo.id"
              v-model="todo.isFinished"
              class="form-check-input"
            />
            <label
              :for="todo.id"
              class="form-check-label"
              :class="todo.isFinished ? 'text-muted text-decoration-line-through' : ''"
            >
              {{ todo.title }}
            </label>
          </div>
        </div>
        <div class="calendarSub-todoList-footer d-grid">
          <button
            type="button"
            class="btn btn-outline-primary border border-primary rounded-4 py-3 border-2 fw-bold"
          >
            <div class="d-flex justify-content-center lh-1">
              <span class="material-symbols-outlined d-inline-block"> add_circle </span>
              <p class="fs-6 pt-1 mb-0">新增待辦事項</p>
            </div>
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
  &-footer {
    button {
      &:hover {
        color: white;
      }
    }
  }
}
</style>
