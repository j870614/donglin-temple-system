<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 佛七預約報名表單 </template>
      </BackTitle>
      <div class="d-flex flex-column flex-xl-row gap-xl-4 gap-2 mb-3 mb-xl-4">
        <div>
          <label class="form-label fw-semibold fs-5" for="year">年份</label>
          <select
            id="year"
            class="form-select form-select-lg fs-5"
            aria-label=".form-select-lg example"
            v-model="currentYear"
            @change="buddhaStore.getOrderList(currentYear, currentMonth)"
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
        <div>
          <label class="form-label fw-semibold fs-5" for="month">月份</label>
          <select
            id="month"
            class="form-select form-select-lg fs-5"
            aria-label=".form-select-lg example"
            v-model="currentMonth"
            @change="buddhaStore.getOrderList(currentYear, currentMonth)"
          >
            <option :value="i" v-for="i in 12" :key="i" :selected="i === currentMonth">
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <StickyTable>
        <template #thead>
          <tr>
            <th
              v-for="(info, index) in thInfo"
              :key="info.title + index"
              :class="{ 'cursor-point': info.needSort }"
            >
              {{ info.title }}
              <span v-if="info.needSort" class="material-symbols-outlined fs-6">
                arrow_drop_up
              </span>
            </th>
          </tr>
        </template>
        <template #tbody>
          <tr v-if="!buddhaStore.totalOrder.length">
            <td colspan="12">當前月份無報名資訊</td>
          </tr>
          <template v-else>
            <tr
              v-for="(info, index) in (buddhaStore.totalOrder as any)"
              :key="info.Id + index"
              :class="{ 'table-active': currentUser.Id === info.Id }"
              @click.prevent="currentUser = info"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ info.IsMale ? '男' : '女' }}</td>
              <td>{{ info.DharmaName }}</td>
              <td>{{ info.Name }}</td>
              <td>{{ info.Mobile || info.Phone }}</td>
              <td>
                {{ getCurrentMonth(new Date(info.CheckInDate).valueOf()) }} /
                {{ getCurrentDay(new Date(info.CheckInDate).valueOf()) }}
              </td>
              <td>
                {{ getCurrentMonth(new Date(info.CheckOutDate).valueOf()) }} /
                {{ getCurrentDay(new Date(info.CheckOutDate).valueOf()) }}
              </td>
              <td>
                <template v-if="info.Status === '已取消'">已取消</template>
                <template v-else>
                  <p class="mb-0" v-if="info.CheckInDateLunch">用午齋</p>
                  <p class="mb-0" v-else-if="info.CheckInDateDinner">用藥石</p>
                  <p class="mb-0" v-else>不用齋</p>
                </template>
              </td>
              <td>
                <p
                  class="py-2 px-3 mb-0 rounded-4"
                  :class="`bg-${tagStyle[info.Status].bgColor} text-${
                    tagStyle[info.Status].textColor
                  }`"
                >
                  {{ info.Status }}
                </p>
              </td>
              <td>{{ info.UpdateUserDharmaName }}</td>
              <td>
                {{ getCurrentMonth(new Date(info.UpdateAt).valueOf()) }} /
                {{ getCurrentDay(new Date(info.UpdateAt).valueOf()) }}
              </td>
              <td>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  :disabled="info.Status === '已取消'"
                  class="btn border-0 mb-0 d-flex align-items-center justify-content-center gap-2"
                  @click="tempUser = info"
                >
                  <span class="material-symbols-outlined"> edit </span
                  ><span class="d-none d-xl-block">修改</span>
                </button>
              </td>
            </tr>
          </template>
        </template>
      </StickyTable>
      <div class="d-flex justify-content-end gap-3 mt-5">
        <button
          type="button"
          class="btn btn-outline-primary py-3 flex-grow-1"
          style="max-width: 184px"
          @click.prevent="cancelAppointment(currentUser)"
          :disabled="currentUser.Status === '已取消'"
        >
          取消預約
        </button>
        <router-link
          to="/back/buddha/signUp?step=1"
          type="button"
          class="btn btn-primary py-3 flex-grow-1"
          style="max-width: 184px"
        >
          報名佛七
        </router-link>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">修改佛七報名資料</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-5">
              <div class="bg-secondary-tint mb-3 p-3 rounded-4 d-flex gap-3 shadow-sm">
                <p class="fs-4 flex-grow-1" v-if="tempUser.DharmaName">
                  法名：{{ tempUser.DharmaName }}
                </p>
                <p class="fs-4 flex-grow-1" v-else>俗名：{{ tempUser.Name }}</p>
                <p class="fs-4 flex-grow-1">電話：{{ tempUser.Mobile || tempUser.Phone }}</p>
              </div>
              <div class="d-flex gap-3">
                <div class="mb-4 flex-grow-1">
                  <label for="checkIn" class="form-label fw-semibold">預計報到日</label>
                  <input
                    type="date"
                    class="form-control"
                    id="checkIn"
                    v-model="tempUser.CheckInDate"
                  />
                </div>
                <div class="mb-4 flex-grow-1">
                  <label for="checkOut" class="form-label fw-semibold">預計離單日</label>
                  <input
                    type="date"
                    class="form-control"
                    id="checkOut"
                    v-model="tempUser.CheckOutDate"
                  />
                </div>
              </div>
              <div>
                <p class="fs-5 fw-semibold my-3">報到日用齋</p>
                <div
                  class="form-check"
                  :class="{ 'mb-3': name === '午齋' }"
                  v-for="(item, name) in {
                    午齋: {
                      config: tempUser.CheckInDateLunch,
                      content: '用齋時間11：10，要用午齋者請於10：30前報到',
                    },
                    藥石: {
                      config: tempUser.CheckInDateDinner,
                      content: '用齋時間17：10，要用藥石者請於15：00前報到',
                    },
                  }"
                  :key="name + item.content"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="name"
                    :id="name"
                    v-model="item.config"
                  />
                  <label class="form-check-label fs-5" :for="name">
                    <span class="fw-semibold me-2">{{ name }}</span
                    >{{ item.content }}
                  </label>
                </div>
                <section class="mt-5">
                  <label for="msg" class="h3 mb-4 fw-semibold">備註</label>
                  <textarea
                    class="form-control rounded-4"
                    id="msg"
                    style="min-height: 10rem"
                    v-model="tempUser.Remarks"
                  ></textarea>
                </section>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-neutral-80" data-bs-dismiss="modal">
                取消
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="buddhaStore.editorInfo(tempUser)"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import BuddhaStore from '@/stores/BuddhaStore';
import StickyTable from '@/components/back/StickyTable.vue';
import BackTitle from '@/components/back/BackTitle.vue';
import type { ThInfo } from '@/components/back/StickyTable.vue';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';
import { getCurrentMonth, getCurrentDay, formatDate } from '@/plug/Timer';
import type TagStyle from '@/interface/TagStyle';

const currentYear = ref<number>(new Date().getFullYear());
const currentMonth = ref<number>(new Date().getMonth() + 1);
const buddhaStore = BuddhaStore();
const tempUser = ref({
  DharmaName: '',
  Name: '',
  Mobile: '',
  Phone: '',
  CheckInDate: '',
  CheckOutDate: '',
  CheckInDateLunch: false,
  CheckInDateDinner: false,
  Remarks: '',
});
watch(
  () => tempUser.value,
  () => {
    tempUser.value.CheckInDate = formatDate(
      new Date(tempUser.value.CheckInDate).valueOf(),
      true,
      '-',
    );
    tempUser.value.CheckOutDate = formatDate(
      new Date(tempUser.value.CheckOutDate).valueOf(),
      true,
      '-',
    );
  },
);

const tagStyle = ref<TagStyle>({
  已報到: {
    textColor: 'success',
    bgColor: 'success-10',
  },
  寮房師已確認: {
    textColor: 'white',
    bgColor: 'primary',
  },
  新登錄報名: {
    textColor: 'primary',
    bgColor: 'primary-tint',
  },
  已取消: {
    textColor: 'neutral-80',
    bgColor: 'neutral-40',
  },
});

const thInfo = ref<ThInfo[]>([
  {
    title: '報名序號',
    needSort: true,
  },
  {
    title: '性別',
    needSort: false,
  },
  {
    title: '法名',
    needSort: false,
  },
  {
    title: '俗名',
    needSort: false,
  },
  {
    title: '電話',
    needSort: false,
  },
  {
    title: '預計報到日',
    needSort: true,
  },
  {
    title: '預計離單日',
    needSort: true,
  },
  {
    title: '報到當天用齋',
    needSort: false,
  },
  {
    title: '狀態',
    needSort: true,
  },
  {
    title: '登錄 / 修改者',
    needSort: false,
  },
  {
    title: '登錄 / 修改日期',
    needSort: true,
  },
  {
    title: '修改',
    needSort: false,
  },
]);

onMounted(() => {
  buddhaStore.getOrderList(currentYear.value, currentMonth.value);
});

// 取消預約
const currentUser = ref<any>({
  Id: 0,
});
async function cancelAppointment(current: any): Promise<void> {
  const index: number = buddhaStore.totalOrder.findIndex((user: any) => user.Id === current.Id);
  if (index === -1) {
    Swal.fire({
      icon: 'error',
      title: '還未選擇四眾法眷',
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  try {
    const res: SweetAlertResult = await Swal.fire({
      html: `<p class="mb-0 fs-3">是否取消<b class="px-2 text-danger fw-semibold">${
        current.DharmaName ? `${current.DharmaName}-` : ''
      }${current.Name ? `${current.Name}-` : ''}${current.IsMale ? '男' : '女'}</b>的預約</p>`,
      showCancelButton: true,
    });

    if (res.isConfirmed) {
      buddhaStore.deleteOrder(current.Id, currentYear.value, currentMonth.value);
    }
  } catch (err) {
    console.error(err);
  }
}
</script>
<style scoped lang="scss">
.form-select {
  min-width: 200px;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
