<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 佛七期數 </template>
      </BackTitle>
      <div class="fs-5 mb-4">
        <label class="form-label fw-semibold" for="year">選擇年度</label>
        <select
          id="year"
          class="form-select form-select-lg"
          style="max-width: 400px"
          aria-label=".form-select-lg example"
          v-model="currentYear"
        >
          <option
            :value="currentYear + 1 - i"
            v-for="i in new Date().getFullYear() - 2009"
            :key="i"
            :selected="i + 2010 === currentYear - 2009"
          >
            {{ currentYear + 1 - i }}
          </option>
        </select>
      </div>
      <StickyTable>
        <template #thead>
          <tr>
            <th>期數</th>
            <th>起七日</th>
            <th>圓滿日</th>
            <th>備註</th>
            <th>修改</th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <td>442</td>
            <td>2022/9/1</td>
            <td>2022/9/7</td>
            <td></td>
            <td class="cursor-point" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <p class="mb-0 d-flex align-items-center justify-content-center gap-2">
                <span class="material-symbols-outlined"> edit </span
                ><span class="d-none d-xl-block">修改</span>
              </p>
            </td>
          </tr>
        </template>
      </StickyTable>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addNewBuddha"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addNewBuddha">新增佛七</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-4">
                <label for="buddhaId" class="form-label">佛七期數</label>
                <input
                  type="number"
                  class="form-control"
                  id="buddhaId"
                  placeholder="請輸入佛七期數"
                />
              </div>
              <div class="mb-4">
                <label for="buddhaDate" class="form-label fw-semibold">佛七日期設定</label>
                <DatePicker v-model="buddhaDate" trim-weeks is-range color="orange">
                  <template #default="{ inputValue, inputEvents }">
                    <div class="d-flex gap-4 align-items-center">
                      <input
                        class="form-control rounded-4"
                        id="buddhaDate"
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                      />
                      <span class="fs-3">~</span>
                      <input
                        class="form-control rounded-4"
                        aria-label="end"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                      />
                    </div>
                  </template>
                </DatePicker>
              </div>
              <div>
                <label for="notion" class="form-label">備註</label>
                <textarea class="form-control" id="notion" rows="5"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-primary me-5" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary">新增佛七</button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-3 mt-5">
        <button
          type="button"
          class="btn btn-outline-primary py-3 flex-grow-1"
          style="max-width: 184px"
          @click.prevent=""
        >
          移除佛七
        </button>
        <button
          type="button"
          class="btn btn-primary py-3 flex-grow-1"
          style="max-width: 184px"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          新增佛七
        </button>
      </div>

      <p class="fs-3 fw-semibold">已圓滿之佛七</p>
      <StickyTable>
        <template #thead>
          <tr>
            <th>期數</th>
            <th>起七日</th>
            <th>圓滿日</th>
            <th>備註</th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <td>442</td>
            <td>2022/9/1</td>
            <td>2022/9/7</td>
            <td></td>
          </tr>
        </template>
      </StickyTable>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import { DatePicker } from 'v-calendar';

import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
const buddhaDate = ref({
  start: new Date(),
  end: new Date(),
});
</script>
<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
