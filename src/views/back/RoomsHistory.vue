<template>
  <main class="row mx-0">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title>歷史掛單紀錄</template>
      </BackTitle>
      <ProcessSteps :steps="steps" class="w-50"></ProcessSteps>
      <div class="mainArea">
        <div class="box-style p-5">
          <h3 class="mb-5">欲安排寮房之四眾資料：</h3>
          <ul class="list-unstyled fs-5">
            <li class="mb-3">
              <ul class="list-unstyled row">
                <li class="col">法名：{{ userData.DharmaName }}</li>
                <li class="col">俗名：{{ userData.Name }}</li>
                <li class="col">性別：{{ userData.IsMale ? '男' : '女' }}</li>
                <li class="col">身分別：{{ userData.IsMonk ? '法師' : '居士' }}</li>
              </ul>
            </li>
            <li>
              <ul class="list-unstyled row">
                <li class="col">
                  預計報到日：{{ moment(new Date(userData.CheckInDate)).format('MM/DD') }}
                </li>
                <li class="col">
                  預計離單日：{{ moment(new Date(userData.CheckOutDate)).format('MM/DD') }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="my-5">
          <h3>歷史掛單資料</h3>
          <div class="table-responsive">
            <table
              class="table table-hover align-middle text-center box-style text-nowrap overflow-hidden fs-5"
            >
              <thead>
                <tr class="bg-neutral-40">
                  <th scope="col">歷史掛單日</th>
                  <th scope="col">歷史離單日</th>
                  <th scope="col">寮區</th>
                  <th scope="col">寮房編號</th>
                  <th scope="col">共住者法名</th>
                  <th scope="col">共住者俗名</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6">暫無歷史掛單資料</td>
                </tr>
                <!-- <tr class="">
                  <td scope="row">2020/01/01</td>
                  <td>2020/02/02</td>
                  <td>a</td>
                  <td>B22</td>
                  <td>德英</td>
                  <td>張德應</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>

        <div class="my-5">
          <h3>參與過0期佛七</h3>
          <h4 class="h5">曾參與佛七列表</h4>
          <div class="table-responsive">
            <table
              class="table table-hover align-middle text-center box-style text-nowrap overflow-hidden w-50 fs-5"
            >
              <thead>
                <tr class="bg-neutral-40">
                  <th scope="col">佛七期數</th>
                  <th scope="col">起七日</th>
                  <th scope="col">圓滿日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">暫無歷史佛七資料</td>
                </tr>
                <!-- <tr class="">
                  <td scope="row">412</td>
                  <td>2022/02/01</td>
                  <td>2022/02/20</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-3 mt-5">
        <router-link
          to="/back/booking?step=1"
          type="button"
          class="btn btn-outline-primary py-3 flex-grow-1"
          style="max-width: 184px"
        >
          上一步
        </router-link>
        <router-link
          :to="`/back/rooms?id=${userData.Id}&step=3`"
          class="btn btn-primary py-3 flex-grow-1"
          style="max-width: 184px"
        >
          安排寮房
        </router-link>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from 'moment';

const { VITE_BASEURL } = import.meta.env;
const steps = ref(['佛七報名名單', '歷史掛單紀錄', '安排寮房']);
const route = useRoute();
const { id } = route.query;
interface UserData {
  DharmaName: string;
  IsMale: boolean;
  IsMonk: boolean;
  CheckInDate: string;
  CheckOutDate: string;
}
const userData = ref<UserData[]>([]);

const getUserData = async () => {
  try {
    const response = await axios.get(`${VITE_BASEURL}/buddha-seven/applies/views/${id}`);
    userData.value = response.data.data.buddhaSevenApplyView;
  } catch (err: any) {
    Swal.fire({
      icon: 'error',
      title: err.response.data.message,
    });
  }
};
onMounted(async () => {
  await getUserData();
});
</script>
