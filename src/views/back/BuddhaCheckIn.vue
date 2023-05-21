<template>
  <main class="row mx-0">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 佛七報到 </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <template v-if="$route.query.step === '1'">
        <form class="d-flex align-items-center gap-2 gap-xl-4 mb-5" ref="telSearch">
          <div class="form-floating" style="max-width: 500px">
            <input
              type="tel"
              class="form-control"
              id="floatingInput"
              placeholder="09xxxxxxxx"
              name="tel"
            />
            <label for="floatingInput">請輸入報名時填寫之聯絡電話</label>
          </div>
          <button type="button" class="btn btn-primary flex-shrink-0">查詢</button>
        </form>
        <h2 class="h3 fw-semibold">9/21今日預計報到名單</h2>
        <StickyTable>
          <template #thead>
            <tr>
              <th>報名序號</th>
              <th>性別</th>
              <th>法名</th>
              <th>俗名</th>
              <th>電話</th>
              <th>預計報到日</th>
              <th>預計離單日</th>
              <th>報到當天用齋</th>
              <th>狀態</th>
              <th>報到知客</th>
              <th>報到時間</th>
              <th>備註</th>
            </tr>
          </template>
          <template #tbody>
            <!-- <tr>
                <td colspan="12">今日無報名人員</td>
              </tr> -->
            <tr>
              <td>3</td>
              <td>男</td>
              <td>無辰師</td>
              <td></td>
              <td>0910111222</td>
              <td>9/12</td>
              <td>9/27</td>
              <td>不用齋</td>
              <td>
                <p class="mb-0 py-2 px-3 rounded-4 bg-success-10 text-success">已報到安單</p>
                <!-- <p class="mb-0 py-2 px-3 rounded-4 bg-neutral-40 text-neutral-80">尚未報到</p> -->
              </td>
              <td>普乙</td>
              <td>14：00</td>
              <td></td>
            </tr>
          </template>
        </StickyTable>
        <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
          <button
            type="button"
            class="btn btn-outline-primary py-3 flex-grow-1"
            style="max-width: 184px"
          >
            重新查詢
          </button>
          <button
            type="button"
            class="btn btn-primary text-white py-3 flex-grow-1"
            style="max-width: 184px"
            @click="checkIn"
          >
            報到
          </button>
          <!-- <router-link
              to="/back/buddha/signUp?step=1"
              class="btn btn-primary text-white py-3 flex-grow-1"
              style="max-width: 184px"
            >
              報名佛七
            </router-link> -->
        </div>
      </template>
      <AgreeSaved
        pre="/back/buddha/checkIn?step=1"
        next="/back/buddha/checkIn?step=3"
        v-if="$route.query.step === '2'"
      ></AgreeSaved>
      <FormList
        pre="/back/buddha/checkIn?step=2"
        next="/back/buddha/checkIn?step=4"
        v-if="$route.query.step === '3'"
      ></FormList>
      <MealSurvey
        pre="/back/buddha/checkIn?step=3"
        next="/back/buddha/checkIn?step=5"
        v-if="$route.query.step === '4'"
      ></MealSurvey>
      <HealthyInfo
        pre="/back/buddha/checkIn?step=4"
        next="/back/buddha/checkIn?step=6"
        v-if="$route.query.step === '5'"
      ></HealthyInfo>
      <OtherInfo
        pre="/back/buddha/checkIn?step=5"
        next="/back/buddha/checkIn?step=7"
        v-if="$route.query.step === '6'"
      ></OtherInfo>
      <BuddhaCheckEnd v-if="$route.query.step === '7'"></BuddhaCheckEnd>
      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
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
              <h5 class="modal-title" id="staticBackdropLabel">四眾報到連結</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="bg-secondary mx-auto" style="width: 200px; height: 200px">這裡放QR</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
                回到報名單頁
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import StickyTable from '@/components/back/StickyTable.vue';
import AgreeSaved from '@/components/information/AgreeSaved.vue';
import FormList from '@/components/information/FormList.vue';
import MealSurvey from '@/components/information/MealSurvey.vue';
import HealthyInfo from '@/components/information/HealthyInfo.vue';
import OtherInfo from '@/components/information/OtherInfo.vue';
import BuddhaCheckEnd from '@/components/information/BuddhaCheckEnd.vue';
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from '@/plug/SweetAlert';

const steps = ref([
  '報名資料查詢',
  '個資蒐集同意',
  '個人資料',
  '用齋調查',
  '健康狀況',
  '學經歷、專長及來寺因緣',
  '簽署同意遵守掛單規約',
]);

const telSearch = ref(null);
// function searchTel() {
//   if (!telSearch.value) return;
//   const form = telSearch.value as HTMLFormElement;
//   const telInput = form.elements.namedItem('tel') as HTMLInputElement;
// }

const modal = ref<unknown>(null);
const router = useRouter();
function checkIn() {
  const checkSwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary btn-lg',
      cancelButton: 'd-none',
      denyButton: 'btn btn-outline-primary btn-lg me-3',
    },
    buttonsStyling: false,
  });
  checkSwal
    .fire({
      title: '填寫個資',
      showCancelButton: true,
      confirmButtonText: '報到者填寫',
      denyButtonText: `知客代填`,
      cancelButtonText: `取消`,
      showDenyButton: true,
    })
    .then((res) => {
      if (res.isConfirmed) {
        const myModal = new Modal(modal.value as string | Element);
        myModal.show();
      }
      if (res.isDenied) {
        router.push('/back/buddha/checkIn?step=2');
      }
    });
}
</script>
<style>
.swal2-styled {
  font-size: 20px;
}
</style>
