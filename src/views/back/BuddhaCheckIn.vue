<template>
  <main class="row mx-0">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> {{ steps[Number($route.query.step) - 1] }} </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <template v-if="$route.query.step === '1'">
        <form class="d-flex align-items-center gap-2 gap-xl-4 mb-5">
          <div class="form-floating" style="max-width: 500px">
            <input
              type="tel"
              class="form-control"
              id="floatingInput"
              placeholder="09xxxxxxxx"
              name="tel"
              v-model="telSearch"
            />
            <label for="floatingInput">請輸入報名時填寫之聯絡電話</label>
          </div>
          <button
            type="button"
            class="btn btn-primary flex-shrink-0"
            :disabled="!telSearch"
            @click="search"
          >
            查詢
          </button>
        </form>
        <h2 class="h3 fw-semibold">
          {{ getCurrentMonth(Date.now()) }}/{{ getCurrentDay(Date.now()) }}今日預計報到名單
        </h2>
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
            <tr v-if="!checkInList.length">
              <td colspan="12">{{ isSearch ? '查無此報名人員' : '今日無報名人員' }}</td>
            </tr>
            <template v-else>
              <tr
                v-for="item in checkInList"
                :key="item.Id"
                @click="tempUser = item"
                :class="{ 'table-active': tempUser.Id === item.Id }"
              >
                <td>{{ item.Id }}</td>
                <td>{{ item.IsMale ? '男' : '女' }}</td>
                <td>{{ item.DharmaName }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.Mobile || item.Phone }}</td>
                <td>
                  {{ getCurrentMonth(new Date(item.CheckInDate).valueOf()) }}/{{
                    getCurrentDay(new Date(item.CheckInDate).valueOf())
                  }}
                </td>
                <td>
                  {{ getCurrentMonth(new Date(item.CheckOutDate).valueOf()) }}/{{
                    getCurrentDay(new Date(item.CheckOutDate).valueOf())
                  }}
                </td>
                <td>
                  <p class="mb-0" v-if="item.CheckInDateDinner && item.CheckInDateLunch">
                    用午齋、藥石
                  </p>
                  <p class="mb-0" v-else-if="item.CheckInDateLunch">用午齋</p>
                  <p class="mb-0" v-else-if="item.CheckInDateDinner">用藥石</p>
                  <p class="mb-0" v-else>不用齋</p>
                </td>
                <td>
                  <p
                    class="py-2 px-3 mb-0 rounded-4"
                    :class="`bg-${tagStyle[item.Status].bgColor} text-${
                      tagStyle[item.Status].textColor
                    }`"
                  >
                    {{ item.Status }}
                  </p>
                </td>
                <td>{{ item.CheckInUserDharmaName || item.CheckInUserName }}</td>
                <td>
                  <span v-if="item.CheckInTime">
                    {{
                      new Date(item.CheckInTime).getHours() < 10
                        ? `0${new Date(item.CheckInTime).getHours()}`
                        : new Date(item.CheckInTime).getHours()
                    }}：{{
                      new Date(item.CheckInTime).getMinutes() < 10
                        ? `0${new Date(item.CheckInTime).getMinutes()}`
                        : new Date(item.CheckInTime).getMinutes()
                    }}
                  </span>
                </td>
                <td>{{ item.Remarks }}</td>
              </tr>
            </template>
          </template>
        </StickyTable>
        <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
          <button
            type="button"
            class="btn btn-outline-primary py-3 flex-grow-1"
            style="max-width: 184px"
            v-if="isSearch"
            @click="reSearch"
          >
            重新查詢
          </button>
          <button
            type="button"
            class="btn btn-primary py-3 flex-grow-1"
            style="max-width: 184px"
            :disabled="
              !tempUser.Id || (tempUser.Status !== '已報名佛七' && tempUser.Status !== '寮房已確認')
            "
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
              <QrcodeVue class="d-block mx-auto" :value="url" :size="150"></QrcodeVue>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="reSearch"
                data-bs-dismiss="modal"
              >
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
import { ref, onMounted, watch } from 'vue';
import { useRouter, onBeforeRouteLeave, useRoute } from 'vue-router';
import QrcodeVue from 'qrcode.vue';
import Swal from '@/plug/SweetAlert';
import BuddhaStore from '@/stores/BuddhaStore';
import GuestStore from '@/stores/GuestStore';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import tagStyle from '@/interface/TagStyle';

const steps = ref([
  '報名資料查詢',
  '個資蒐集同意',
  '個人資料',
  '用齋調查',
  '健康狀況',
  '學經歷、專長及來寺因緣',
  '簽署同意遵守掛單規約',
]);
const checkInList = ref<any[]>([]);
const tempUser = ref<any>({});
const router = useRouter();
const route = useRoute();
// const currentPath = route.path;
function checkSessionTemp(to: string) {
  const { tempUser: user } = sessionStorage;
  if (to.startsWith('/back/buddha/checkIn') && to.split('step=')[1] !== '1') {
    if (!user) router.push('/back/buddha/checkIn?step=1');
  }
}
watch(
  () => route.fullPath,
  (to) => checkSessionTemp(to),
);

const isSearch = ref<boolean>(false);
const buddhaStore = BuddhaStore();
onMounted(() => {
  buddhaStore.getCheckInList();
  checkSessionTemp(route.fullPath);
  if (!sessionStorage.tempUser) {
    sessionStorage.setItem('tempUser', '{}');
  }
});
watch(
  () => buddhaStore.checkInOrder,
  () => {
    checkInList.value = buddhaStore.checkInOrder;
  },
);
onBeforeRouteLeave((to, from, next) => {
  sessionStorage.removeItem('tempUser');
  next();
});

const telSearch = ref('');
function search() {
  checkInList.value = buddhaStore.checkInOrder.filter(
    (item: any) => telSearch.value === item.Mobile || telSearch.value === item.Phone,
  );
  isSearch.value = true;
}
function reSearch() {
  isSearch.value = false;
  checkInList.value = buddhaStore.checkInOrder;
  telSearch.value = '';
  tempUser.value = {};
}

// 報到
const url = ref('');
const modal = ref<unknown>(null);
const guestStore = GuestStore();
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
        // 報到者填寫
        const myModal = new Modal(modal.value as string | Element);
        url.value = `${window.location.origin}${window.location.pathname}#/${tempUser.value.UserId}?step=1`;
        myModal.show();
      }

      if (res.isDenied) {
        // 知客代填

        guestStore.getUser(tempUser.value.UserId);
        sessionStorage.setItem('tempId', tempUser.value.Id);

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
