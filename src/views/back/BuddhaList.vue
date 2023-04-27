<template>
  <main class="row">
    <div class="col-12 h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2">
      <div
        class="d-flex align-items-center justify-content-between mb-lg-4 mb-3 pb-2 position-relative"
      >
        <h1 class="h1 fw-semibold d-flex align-items-center mb-0">
          <OpenSideBar /> <span class="ms-0 ms-lg-2-5">佛七預約報名表單</span>
        </h1>
        <img
          src="@/assets/img/Logo2.png"
          alt="淨土行門"
          class="position-absolute end-0 img-fluid d-none d-lg-block"
          style="max-height: 80px"
        />
      </div>
      <div class="d-flex flex-column flex-lg-row gap-lg-4 gap-2 mb-3 mb-lg-4">
        <div>
          <label class="form-label fw-semibold" for="year">年份</label>
          <select
            id="year"
            class="form-select form-select-lg fs-7"
            aria-label=".form-select-lg example"
          >
            <option
              value="2022"
              v-for="i in new Date().getFullYear() - 2009"
              :key="i"
              :selected="i + 2010 === currentDate.getFullYear() - 2009"
            >
              {{ currentDate.getFullYear() + 1 - i }}
            </option>
          </select>
        </div>
        <div>
          <label class="form-label fw-semibold" for="year">月份</label>
          <select
            id="year"
            class="form-select form-select-lg fs-7"
            aria-label=".form-select-lg example"
          >
            <option
              value="2022"
              v-for="i in 12"
              :key="i"
              :selected="i === currentDate.getMonth() + 1"
            >
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <StickyTable style="max-height: 35rem">
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
                :class="`bg-${tagStyle[info.state].bgColor} text-${tagStyle[info.state].textColor}`"
              >
                {{ info.state }}
              </p>
            </td>
            <td>{{ info.editorId }}</td>
            <td>{{ info.editorDate }}</td>
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
import { ref } from 'vue';
import OpenSideBar from '@/components/back/OpenSideBar.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import type { ThInfo } from '@/components/back/StickyTable.vue';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';

const currentDate: Date = new Date();

interface TagStyle {
  [key: string]: {
    textColor: string;
    bgColor: string;
  };
}
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
const users = ref<UserInfo[]>([
  {
    id: 1,
    sex: '男',
    legalName: '',
    originalName: '王小信',
    tel: '0910111222',
    registrationDate: 1696089600000,
    leaveDate: 1696608000000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1682575205902,
  },
  {
    id: 2,
    sex: '男',
    legalName: '普己',
    originalName: '王大信',
    tel: '0910111222',
    registrationDate: 1696089600000,
    leaveDate: 1696608000000,
    meal: '午齋',
    state: '已報到',
    editorId: 3,
    editorDate: 1682575205902,
  },
]);

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
async function cancelAppointment(current: UserInfo) {
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
      }${current.originalName}-${current.sex}</b>的預約</p>`,
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
