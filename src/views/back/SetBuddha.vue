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
          @change="buddhaYY"
        >
          <option
            :value="new Date().getFullYear() + 1 - i"
            v-for="i in new Date().getFullYear() - 2009"
            :key="i"
            :selected="i + 2010 === new Date().getFullYear() - 2009"
          >
            {{ new Date().getFullYear() + 1 - i }}
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
          <tr v-if="!buddhaStore.totalBuddha.length">
            <td colspan="5">該年度無佛七資料</td>
          </tr>
          <template v-else>
            <template v-for="buddha in (buddhaStore.totalBuddha as any[])" :key="buddha.Id">
              <tr
                v-if="new Date(buddha.CompleteDate) >= new Date()"
                :class="{ 'bg-primary-tint': tempBuddha.Id === buddha.Id }"
                @click="tempBuddha.Id = buddha.Id"
              >
                <td>{{ buddha.Id }}</td>
                <td>
                  {{ formatDate(new Date(buddha.StartSevenDate).valueOf()) }}
                </td>
                <td>
                  {{ formatDate(new Date(buddha.CompleteDate).valueOf()) }}
                </td>
                <td>{{ buddha.Remarks }}</td>
                <td
                  class="cursor-point"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="currentTemp('editor', buddha)"
                  @keydown="currentTemp('editor', buddha)"
                >
                  <p class="mb-0 d-flex align-items-center justify-content-center gap-2">
                    <span class="material-symbols-outlined"> edit </span
                    ><span class="d-none d-xl-block">修改</span>
                  </p>
                </td>
              </tr>
            </template>
          </template>
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
              <h5 class="modal-title" id="addNewBuddha">
                {{ tempBuddha.Id ? '修改佛七' : '新增佛七' }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-4" v-if="tempBuddha.Id">
                <label for="buddhaId" class="form-label">佛七期數</label>
                <input
                  type="number"
                  class="form-control"
                  id="buddhaId"
                  placeholder="請輸入佛七期數"
                  v-model="tempBuddha.Id"
                  readonly
                />
              </div>
              <div class="mb-4">
                <label for="buddhaDate" class="form-label fw-semibold">佛七日期設定</label>
                <div class="d-flex gap-4 align-items-center">
                  <input
                    type="date"
                    class="form-control rounded-4"
                    id="buddhaDate"
                    :max="tempBuddha.CompleteDate"
                    v-model="tempBuddha.StartSevenDate"
                  />
                  <span class="fs-3">~</span>
                  <input
                    type="date"
                    class="form-control rounded-4"
                    aria-label="end"
                    :min="tempBuddha.StartSevenDate"
                    v-model="tempBuddha.CompleteDate"
                  />
                </div>
              </div>
              <div>
                <label for="notion" class="form-label">備註</label>
                <textarea
                  class="form-control"
                  id="notion"
                  rows="5"
                  v-model="tempBuddha.Remarks"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-primary me-5"
                data-bs-dismiss="modal"
                ref="modalClose"
              >
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="addBuddha(tempBuddha)">
                {{ tempBuddha.Id ? '修改佛七' : '新增佛七' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end gap-3 mt-5">
        <!-- <button
          type="button"
          class="btn btn-outline-primary py-3 flex-grow-1"
          style="max-width: 184px"
          @click.prevent=""
        >
          移除佛七
        </button> -->
        <button
          type="button"
          class="btn btn-primary py-3 flex-grow-1"
          style="max-width: 184px"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="currentTemp('new')"
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
          <tr v-if="!buddhaStore.totalBuddha.length">
            <td colspan="5">該年度無佛七資料</td>
          </tr>
          <template v-else>
            <template v-for="buddha in (buddhaStore.totalBuddha as any[])" :key="buddha.Id">
              <tr v-if="new Date(buddha.CompleteDate) < new Date()">
                <td>{{ buddha.Id }}</td>
                <td>
                  {{ formatDate(new Date(buddha.StartSevenDate).valueOf()) }}
                </td>
                <td>
                  {{ formatDate(new Date(buddha.CompleteDate).valueOf()) }}
                </td>
                <td>{{ buddha.Remarks }}</td>
              </tr>
            </template>
          </template>
        </template>
      </StickyTable>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import BuddhaStore from '@/stores/BuddhaStore';
import { formatDate } from '@/plug/Timer';

import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

const buddhaStore = BuddhaStore();
const modalClose = ref(null);

const tempBuddha = ref({
  Id: 0,
  Remarks: '',
  StartSevenDate: '',
  CompleteDate: '',
});
// watch(tempBuddha.value, () => {
//   tempBuddha.value.StartSevenDate = formatDate(
//     new Date(tempBuddha.value.StartSevenDate).valueOf(),
//     true,
//     '-',
//   );
// });

onMounted(() => {
  buddhaStore.getTotal(new Date().getFullYear());
});
function buddhaYY() {
  buddhaStore.getTotal(currentYear.value);
}
function resetTemp() {
  tempBuddha.value = {
    Id: 0,
    Remarks: '',
    StartSevenDate: '',
    CompleteDate: '',
  };
}

function currentTemp(config: string, data: any = '') {
  if (config === 'editor') {
    tempBuddha.value.Id = data.Id;
    tempBuddha.value.Remarks = data.Remarks;
    tempBuddha.value.StartSevenDate = formatDate(
      new Date(data.StartSevenDate).valueOf(),
      true,
      '-',
    );

    tempBuddha.value.CompleteDate = formatDate(new Date(data.CompleteDate).valueOf(), true, '-');
  } else {
    resetTemp();
  }
}

async function addBuddha(data: any) {
  let status;
  if (data.Id) {
    status = await buddhaStore.editorBuddha(data);
  } else {
    status = await buddhaStore.addBuddha(data);
  }
  if (status) {
    modalClose.value.click();
    tempBuddha.value.Id = 0;
    buddhaStore.getTotal(currentYear.value);
  }
  resetTemp();
}
</script>
<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
