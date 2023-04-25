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
  isHover: boolean;
}

const scheduleList: Ref<Schedule[]> = ref<Schedule[]>([
  { id: '1', title: '第442期佛七起七', tags: ['整天'] },
  { id: '2', title: '皈依', tags: ['14:00-17:00'] },
  { id: '3', title: '開會', tags: ['17:00-22:00'] },
]);
const todoList: Ref<Todo[]> = ref<Todo[]>([
  { id: '1', title: '皈依證填寫', isFinished: true, isHover: false },
  { id: '2', title: '請庫頭師補足專念服庫存', isFinished: false, isHover: false },
  { id: '3', title: '開會', isFinished: false, isHover: false },
]);
</script>

<template>
  <div class="container gx-0 gx-lg-4">
    <div class="calendarSub">
      <div class="calendarSub-dailySchedule" style="margin-bottom: 40px">
        <div
          class="calendarSub-dailySchedule-header mb-4 d-flex align-items-center justify-content-between"
        >
          <h2 class="fw-bold">今日行程</h2>
          <router-link to="" class="d-flex align-items-center text-decoration-none text-black">
            <p class="fw-bold mb-0">查看全部</p>
            <span class="material-symbols-outlined fs-5 d-inline-block"> arrow_forward </span>
          </router-link>
        </div>
        <div class="calendarSub-dailySchedule-body" v-if="scheduleList.length">
          <div
            class="calendarSub-dailySchedule-card-group"
            v-for="schedule in scheduleList"
            :key="schedule.id"
          >
            <div class="card box-hover border-neutral-40 rounded-4" style="margin-top: 12px">
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
        <div class="calendarSub-todoList-header mb-4 d-flex justify-content-between">
          <h2 class="fw-bold">待辦事項</h2>
        </div>
        <div class="calendarSub-todoList-body mb-3" v-if="todoList.length">
          <div
            class="calendarSub-todoList-input form-check mb-2 fs-5 rounded-3 d-flex"
            v-for="todo in todoList"
            :key="todo.id"
            :class="{
              'bg-neutral-10': todo.isHover,
            }"
            @mouseenter="todo.isHover = true"
            @focus="todo.isHover = true"
            @mouseleave="todo.isHover = false"
            @focusout="todo.isHover = false"
          >
            <input
              type="checkbox"
              :id="todo.id"
              v-model="todo.isFinished"
              class="form-check-input me-2"
            />
            <label
              :for="todo.id"
              class="form-check-label flex-grow-1"
              :class="{ 'text-muted text-decoration-line-through': todo.isFinished }"
            >
              {{ todo.title }}
            </label>
            <button
              type="button"
              class="btn btn-sm text-end py-0 lh-1"
              :class="{ 'opacity-100': todo.isHover, 'opacity-0': !todo.isHover }"
              @click.prevent="
                todoList.splice(
                  todoList.findIndex((elem) => elem.id === todo.id),
                  1,
                )
              "
            >
              <span class="material-symbols-outlined"> close </span>
            </button>
          </div>
        </div>
        <div class="calendarSub-todoList-footer d-grid">
          <button
            type="button"
            class="btn btn-outline-primary border border-primary rounded-4 py-3 border-2 fw-bold text-focus"
            @click.prevent="
              todoList.push({
                id: `${Math.floor(Math.random() * 1e7)}`,
                title: '皈依證填寫',
                isFinished: false,
                isHover: false,
              })
            "
          >
            <div class="d-flex align-items-center justify-content-center lh-1">
              <p class="fs-6 mb-0 pe-1">新增待辦事項</p>
              <span class="material-symbols-outlined d-inline-block"> add_circle </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/stylesheets/all.scss';
.calendarSub-todoList {
  &-input {
    input[type='checkbox'] {
      margin-left: -1rem;
    }
  }
}
</style>
