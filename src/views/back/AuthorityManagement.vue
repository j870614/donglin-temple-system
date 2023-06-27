<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 使用者權限管理 </template>
      </BackTitle>
      <div class="fs-5 mb-4">
        <label class="form-label fw-semibold" for="search">查詢權限名單</label>
        <select
          id="search"
          class="form-select form-select-lg"
          style="max-width: 400px"
          aria-label=".form-select-lg example"
          v-model="search"
          @change="filterUserHall"
        >
          <option disabled>選擇堂口名稱</option>
          <option value="知客" selected>知客</option>
          <option value="寮房">寮房</option>
        </select>
      </div>
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
          <tr v-if="!filterUser.length">
            <td colspan="9">當前堂口無任何人員</td>
          </tr>
          <template v-else>
            <tr
              v-for="(user, index) in filterUser"
              :key="user.Id"
              :class="{ 'table-active': tempUser.Id === user.Id }"
              @click="tempUser = user"
            >
              <td>{{ index + 1 }}</td>
              <td>性別</td>
              <td>法名</td>
              <td>俗名</td>
              <td>電話</td>
              <td>執事名稱</td>
              <td>核發權限者</td>
              <td>{{ getCurrentMonth(user.CreatedAt) }} / {{ getCurrentDay(user.CreatedAt) }}</td>
              <td
                class="cursor-point"
                @click.prevent="() => editorPermissions(user)"
                @keydown.prevent="() => editorPermissions(user)"
              >
                <p class="mb-0 d-flex align-items-center justify-content-center gap-2">
                  <span class="material-symbols-outlined"> edit </span
                  ><span class="d-none d-xl-block">修改</span>
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
          :disabled="!tempUser.Id"
          @click.prevent="deletePermissions(tempUser)"
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
import { ref, onMounted, watch } from 'vue';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';
import AdminStore from '@/stores/AdminStore';

const search = ref<string>('知客');
const adminStore = AdminStore();
const filterUser = ref<any[]>([]);

onMounted(() => {
  adminStore.getManagers();
});
watch(
  () => adminStore.managers,
  () => {
    filterUser.value = adminStore.managers;
  },
);
function filterUserHall() {
  console.log(1);
}

// 移除權限
const tempUser = ref({ Id: 0, ChurchName: '', DeaconName: '' });
async function deletePermissions(current: any): Promise<void> {
  try {
    const res: SweetAlertResult = await Swal.fire({
      html: `<p class="mb-0 fs-3">是否移除<b class="px-2 text-danger fw-semibold">${
        current.legalName ? `${current.legalName}-` : ''
      }${current.originalName ? `${current.originalName}-` : ''}${current.sex}</b>的權限</p>`,
      showCancelButton: true,
    });

    if (res.isConfirmed) {
      adminStore.patchAuth(tempUser.value, false);
      // Swal.fire({
      //   icon: 'success',
      //   title: '已移除權限',
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      filterUserHall();
    }
  } catch (err) {
    console.error(err);
  }
}
// 修改權限
async function editorPermissions(current: any): Promise<void> {
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
    console.log(res);
    // 已選擇權限
    if (res.includes('知客')) {
      tempUser.value.ChurchName = '知客';
    } else if (res.includes('寮房')) {
      tempUser.value.ChurchName = '寮房';
    } else {
      tempUser.value.ChurchName = '系統管理員';
    }
    tempUser.value.DeaconName = res;
    adminStore.patchAuth(tempUser.value, true);
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
