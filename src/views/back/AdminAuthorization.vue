<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 使用者權限核發 </template>
      </BackTitle>
      <div class="d-flex justify-content-end py-3">
        <router-link to="/back/permissions/authorized/new?step=1" class="btn btn-lg btn-primary"
          >新增使用者權限帳號</router-link
        >
      </div>
      <StickyTable>
        <template #thead>
          <tr>
            <th>編號</th>
            <th>性別</th>
            <th>法名</th>
            <th>俗名</th>
            <th>執事堂口</th>
            <th>執事名稱</th>
            <th>核發權限者</th>
            <th>核發日期</th>
            <th>狀態</th>
          </tr>
        </template>
        <template #tbody>
          <tr v-if="!adminStore.adminStatus.length">
            <td colspan="9">當前無待核發人員</td>
          </tr>
          <template v-else>
            <tr
              :class="{ 'table-active': tempUser.Id === item.Id }"
              v-for="(item, index) in adminStore.adminStatus"
              :key="item.Id"
              @click="tempUser = item"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.Gender }}</td>
              <td>{{ item.DharmaName }}</td>
              <td>{{ item.Name }}</td>
              <td>
                {{ item.ChurchName }}
              </td>
              <td>{{ item.DeaconName }}</td>
              <td>{{ item.AuthorizeDharmaName }}</td>
              <td>{{ item.AuthorizeDate }}</td>
              <td>
                <span
                  class="mb-0 rounded-4 py-2 px-3"
                  :class="`bg-${tagStyle[item.Status].bgColor} text-${
                    tagStyle[item.Status].textColor
                  }`"
                  >{{ item.Status }}</span
                >
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
          @click="deletePermissions(tempUser)"
        >
          移除
        </button>
        <button
          type="button"
          class="btn btn-primary py-3 flex-grow-1"
          style="max-width: 184px"
          @click="adminStore.createdQR(tempUser)"
          :disabled="!tempUser.Id"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          重新產出連結
        </button>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">註冊鏈接</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <QrcodeVue
              v-if="adminStore.qrcode"
              class="d-block mx-auto"
              :value="url + adminStore.qrcode"
              :size="150"
            ></QrcodeVue>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import { ref, onMounted } from 'vue';
import AdminStore from '@/stores/AdminStore';
import UserStore from '@/stores/UserStore';
import tagStyle from '@/interface/TagStyle';
import QrcodeVue from 'qrcode.vue';
import Swal from '@/plug/SweetAlert';
import type { SweetAlertResult } from 'sweetalert2';

const tempUser = ref({ Id: 0 });
const adminStore = AdminStore();
const userStore = UserStore();

const url = ref(`${window.location.origin}/#/register?qr=`);
onMounted(() => {
  userStore.checkLogin(userStore.getToken());
  adminStore.getAuthStatus();
});

async function deletePermissions(current: any): Promise<void> {
  try {
    const res: SweetAlertResult = await Swal.fire({
      html: `<p class="mb-0 fs-3">是否移除<b class="px-2 text-danger fw-semibold">${
        current.DharmaName ? `${current.DharmaName}-` : ''
      }${current.Name ? `${current.Name}-` : ''}${current.Gender}</b>的權限</p>`,
      showCancelButton: true,
    });

    if (res.isConfirmed) {
      adminStore.patchAuth(current, false);
      // Swal.fire({
      //   icon: 'success',
      //   title: '已移除權限',
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  } catch (err) {
    console.error(err);
  }
}
</script>
