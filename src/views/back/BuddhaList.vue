<template>
  <main class="row">
    <div class="col-12 h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2">
      <div class="d-flex align-items-center justify-content-between mb-lg-4 mb-3 pb-2">
        <h1 class="h1 fw-semibold d-flex align-items-center mb-0">
          <OpenSideBar /> <span class="ms-0 ms-lg-2-5">佛七預約報名表單</span>
        </h1>
        <img
          src="@/assets/img/Logo2.png"
          alt="淨土行門"
          class="img-fluid"
          style="max-height: 48px"
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
      <StickyTable style="max-height: 21rem">
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
          <tr v-for="(info, index) in trInfo" :key="info.id">
            <td>{{ index + 1 }}</td>
            <td>{{ info.sex }}</td>
            <td>{{ info.legalName }}</td>
            <td>{{ info.originalName }}</td>
            <td>{{ info.tel }}</td>
            <td>{{ info.registrationDate }}</td>
            <td>{{ info.leaveDate }}</td>
            <td>
              <template v-if="info.state === '已取消'">已取消</template>
              <template v-else>
                <p class="mb-0">{{ info.meals ? `用${info.meals}` : '不用齋' }}</p>
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
import OpenSideBar from '@/components/back/OpenSideBar.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import { ref } from 'vue';

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

interface ThInfo {
  title: string;
  needSort: boolean;
}
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
interface TrInfo {
  id: string;
  sex: string;
  legalName: string;
  originalName: string;
  tel: string;
  registrationDate: string;
  leaveDate: string;
  meals: string;
  state: string;
  editorId: string;
  editorDate: string;
}
const trInfo = ref<TrInfo[]>([
  {
    id: '用戶id-01',
    sex: '男',
    legalName: '普己',
    originalName: '王大信',
    tel: '0910111222',
    registrationDate: '8/31',
    leaveDate: '9/7',
    meals: '午齋',
    state: '已報到',
    editorId: '修改者id關聯',
    editorDate: '8/5',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '寮房師已確認',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '已取消',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '新登錄報名',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '寮房師已確認',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '寮房師已確認',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
  {
    id: '用戶id-02',
    sex: '男',
    legalName: '普戊',
    originalName: '林大為',
    tel: '0910111222',
    registrationDate: '9/10',
    leaveDate: '9/17',
    meals: '午齋',
    state: '寮房師已確認',
    editorId: '修改者id關聯',
    editorDate: '9/4',
  },
]);
</script>
<style scoped lang="scss">
.form-select {
  min-width: 200px;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
