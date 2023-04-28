<template>
  <main class="row">
    <div class="col h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2">
      <BackTitle>
        <template #title> 佛七預約報名表單 </template>
      </BackTitle>
      <div class="d-flex flex-column flex-lg-row gap-lg-4 gap-2 mb-3 mb-lg-4">
        <div>
          <label class="form-label fw-semibold fs-5" for="year">年份</label>
          <select
            id="year"
            class="form-select form-select-lg fs-5"
            aria-label=".form-select-lg example"
            v-model="currentYear"
            @change="filterUsers(currentYear, currentMonth, originData, users)"
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
        <div>
          <label class="form-label fw-semibold fs-5" for="month">月份</label>
          <select
            id="month"
            class="form-select form-select-lg fs-5"
            aria-label=".form-select-lg example"
            v-model="currentMonth"
            @change="filterUsers(currentYear, currentMonth, originData, users)"
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
          <tr v-if="!users.length">
            <td colspan="12">當前月份無報名資訊</td>
          </tr>
          <template v-else>
            <tr
              v-for="(info, index) in users"
              :key="info.id + index"
              :class="{ 'table-active': currentUser.id === info.id }"
              @click.prevent="currentUser = info"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ info.sex }}</td>
              <td>{{ info.legalName }}</td>
              <td>{{ info.originalName }}</td>
              <td>{{ info.tel }}</td>
              <td>
                {{ getCurrentMonth(info.registrationDate) }} /
                {{ getCurrentDay(info.registrationDate) }}
              </td>
              <td>{{ getCurrentMonth(info.leaveDate) }} / {{ getCurrentDay(info.leaveDate) }}</td>
              <td>
                <template v-if="info.state === '已取消'">已取消</template>
                <template v-else>
                  <p class="mb-0">{{ info.meal ? `用${info.meal}` : '不用齋' }}</p>
                </template>
              </td>
              <td>
                <p
                  class="py-2 px-3 mb-0 rounded-4"
                  :class="`bg-${tagStyle[info.state].bgColor} text-${
                    tagStyle[info.state].textColor
                  }`"
                >
                  {{ info.state }}
                </p>
              </td>
              <td>{{ info.editorId }}</td>
              <td>{{ getCurrentMonth(info.editorDate) }} / {{ getCurrentDay(info.editorDate) }}</td>
              <td
                :class="{
                  'cursor-point': info.state !== '已取消',
                  'text-neutral-60': info.state === '已取消',
                }"
              >
                <p class="mb-0 d-flex align-items-center justify-content-center gap-2">
                  <span class="material-symbols-outlined"> edit </span
                  ><span class="d-none d-lg-block">修改</span>
                </p>
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
          :disabled="currentUser.state === '已取消'"
        >
          取消預約
        </button>
        <button type="button" class="btn btn-primary py-3 flex-grow-1" style="max-width: 184px">
          報名佛七
        </button>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import StickyTable from '@/components/back/StickyTable.vue';
import BackTitle from '@/components/back/BackTitle.vue';
import type { ThInfo } from '@/components/back/StickyTable.vue';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import filterUsers from '@/plug/FilterData';
import type TagStyle from '@/interface/TagStyle';

const currentYear: number = new Date().getFullYear();
const currentMonth: number = new Date().getMonth() + 1;

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
interface UserInfo {
  id: number;
  sex: string;
  legalName: string;
  originalName: string;
  tel: string;
  registrationDate: number;
  leaveDate: number;
  meal: string;
  state: string;
  editorId: number;
  editorDate: number;
}
const originData = ref<UserInfo[]>([
  {
    id: 1,
    sex: '男',
    legalName: '',
    originalName: '王一信',
    tel: '0910111222',
    registrationDate: 1651334400000,
    leaveDate: 1651680000000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1682575205902,
  },
  {
    id: 2,
    sex: '男',
    legalName: '普己',
    originalName: '',
    tel: '0910111222',
    registrationDate: 1682579440377,
    leaveDate: 1683043200000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1681315200000,
  },
  {
    id: 3,
    sex: '男',
    legalName: '普己',
    originalName: '王三',
    tel: '0910111222',
    registrationDate: 1696089600000,
    leaveDate: 1696608000000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1682575205902,
  },
  {
    id: 4,
    sex: '男',
    legalName: '普己',
    originalName: '王四',
    tel: '0910111222',
    registrationDate: 1696089600000,
    leaveDate: 1696608000000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1696608000000,
  },
]);
const users = ref<UserInfo[]>([]);
onMounted(() => {
  filterUsers(currentYear, currentMonth, originData.value, users.value);
});

// 取消預約
const currentUser = ref<UserInfo>({
  id: 0,
  sex: '',
  legalName: '',
  originalName: '',
  tel: '',
  registrationDate: 1682575205902,
  leaveDate: 1682575205902,
  meal: '',
  state: '',
  editorId: 0,
  editorDate: 1682575205902,
});
async function cancelAppointment(current: UserInfo): Promise<void> {
  const index: number = users.value.findIndex((user: UserInfo) => user.id === current.id);
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
        current.legalName ? `${current.legalName}-` : ''
      }${current.originalName ? `${current.originalName}-` : ''}${current.sex}</b>的預約</p>`,
      showCancelButton: true,
    });

    if (res.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: '已取消佛七預約',
        showConfirmButton: false,
        timer: 1500,
      });
      users.value[index].state = '已取消';
      users.value[index].editorDate = Date.now();
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
