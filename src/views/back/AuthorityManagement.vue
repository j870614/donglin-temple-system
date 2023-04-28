<template>
  <main class="row">
    <div class="col h-100 gx-lg-5 pt-lg-4 pb-lg-5 py-3 mb-lg-2">
      <BackTitle>
        <template #title> 使用者權限管理 </template>
      </BackTitle>
      <label class="form-label fw-semibold" for="search">查詢權限名單</label>
      <select
        id="search"
        class="form-select form-select-lg fs-7 mb-4"
        style="max-width: 400px"
        aria-label=".form-select-lg example"
        v-model="search"
        @change="filterUserHall"
      >
        <option disabled>選擇堂口名稱</option>
        <option value="知客" selected>知客</option>
        <option value="寮房">寮房</option>
      </select>
      <p class="fs-3">{{ search }}</p>
      <StickyTable>
        <template #thead>
          <tr>
            <th>編號</th>
            <th>性別</th>
            <th>法名</th>
            <th>俗名</th>
            <th>電話</th>
            <th>執事名稱</th>
            <th>核發權限者</th>
            <th>核發權限日期</th>
            <th>修改</th>
          </tr>
        </template>
        <template #tbody>
          <tr v-if="!users.length">
            <td colspan="9">當前堂口無任何人員</td>
          </tr>
          <template v-else>
            <tr
              v-for="(user, index) in users"
              :key="user.id"
              :class="{ 'table-active': currentUser.id === user.id }"
              @click="currentUser = user"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ user.sex }}</td>
              <td>{{ user.legalName }}</td>
              <td>{{ user.originalName }}</td>
              <td>{{ user.tel }}</td>
              <td>{{ user.deacon }}</td>
              <td>{{ user.editorId }}</td>
              <td>{{ getCurrentMonth(user.editorDate) }} / {{ getCurrentDay(user.editorDate) }}</td>
              <td
                class="cursor-point"
                @click.prevent="() => editorPermissions(user)"
                @keydown.prevent="() => editorPermissions(user)"
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
          @click.prevent="deletePermissions(currentUser)"
        >
          移除權限
        </button>
        <button type="button" class="btn btn-primary py-3 flex-grow-1" style="max-width: 184px">
          查看個資
        </button>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import { ref, onMounted } from 'vue';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';

const search = ref<string>('知客');

interface UserInfo {
  id: number;
  sex: string;
  legalName: string;
  originalName: string;
  tel: string;
  hall: string;
  deacon: string;
  editorId: number;
  editorDate: number;
}
const originDate = ref<UserInfo[]>([
  {
    id: 1,
    sex: '男',
    legalName: '',
    originalName: '王一信',
    tel: '0910111222',
    hall: '知客',
    deacon: '總知客',
    editorId: 3,
    editorDate: 1682575205902,
  },
  {
    id: 2,
    sex: '男',
    legalName: '普戊',
    originalName: '王大信',
    tel: '0910111222',
    hall: '寮房',
    deacon: '寮房師',
    editorId: 3,
    editorDate: 1682575205902,
  },
  {
    id: 3,
    sex: '女',
    legalName: '',
    originalName: '李大花',
    tel: '0910111222',
    hall: '知客',
    deacon: '知客志工',
    editorId: 3,
    editorDate: 1682575205902,
  },
]);
const users = ref<UserInfo[]>([]);
function filterUserHall() {
  users.value = originDate.value.filter((user) => user.hall === search.value);
}
onMounted(() => filterUserHall());

// 移除權限
const currentUser = ref<UserInfo>({
  id: 0,
  sex: '',
  legalName: '',
  originalName: '',
  tel: '',
  hall: '',
  deacon: '',
  editorId: 0,
  editorDate: 1682575205902,
});
async function deletePermissions(current: UserInfo): Promise<void> {
  const index: number = originDate.value.findIndex((user: UserInfo) => user.id === current.id);
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
      html: `<p class="mb-0 fs-3">是否移除<b class="px-2 text-danger fw-semibold">${
        current.legalName ? `${current.legalName}-` : ''
      }${current.originalName ? `${current.originalName}-` : ''}${current.sex}</b>的權限</p>`,
      showCancelButton: true,
    });

    if (res.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: '已移除權限',
        showConfirmButton: false,
        timer: 1500,
      });
      originDate.value.splice(index, 1);
      filterUserHall();
    }
  } catch (err) {
    console.error(err);
  }
}
// 修改權限
async function editorPermissions(current: UserInfo): Promise<void> {
  const index: number = originDate.value.findIndex((user: UserInfo) => user.id === current.id);
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
    const { value: res } = await Swal.fire({
      html: `<p class="mb-0 fs-3">是否修改<b class="px-2 text-danger fw-semibold">${
        current.legalName ? `${current.legalName}-` : ''
      }${current.originalName ? `${current.originalName}-` : ''}${current.sex}</b>的權限</p>`,
      input: 'select',
      inputOptions: {
        知客: {
          總知客: '總知客',
          副總知客: '副總知客',
          知客志工: '知客志工',
        },
        寮房: {
          寮房師: '寮房師',
          副寮房師: '副寮房師',
          寮房志工: '寮房志工',
        },
      },
      inputPlaceholder: '權限選擇',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === '') {
            resolve('尚未選擇新的權限');
          } else {
            resolve('');
          }
        });
      },
    });
    if (!res) return;
    if (originDate.value[index].deacon === res) return;
    if (res.includes('知客')) {
      originDate.value[index].hall = '知客';
      originDate.value[index].deacon = res;
    } else {
      originDate.value[index].hall = '寮房';
      originDate.value[index].deacon = res;
    }
    originDate.value[index].editorDate = Date.now();
    Swal.fire({
      icon: 'success',
      title: '已修改權限',
      showConfirmButton: false,
      timer: 1500,
    });
    filterUserHall();
  } catch (err) {
    console.error(err);
  }
}
</script>
<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
