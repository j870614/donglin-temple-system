<template>
  <main class="row">
    <BackTitle>
      <template #title>佛七預約報名表單</template>
    </BackTitle>
    <div class="roomTitleArea container d-flex justify-content-center">
      <div class="col-12 col-md-5 text-center">
        <RoomsProgressBar :roomsState="'查詢報名者<br />歷史掛單紀錄'" />
      </div>
    </div>
    <div class="col-12 mainArea">
      <div class="userDataArea">
        <h3>欲安排寮房之四眾資料：</h3>
        <ul class="list-unstyled">
          <li>
            <ul class="list-unstyled">
              <li>法名：{{ userData.DharmaName }}</li>
              <li>俗名：{{ userData.Name }}</li>
              <li>性別：{{ userData.IsMale ? '男' : '女' }}</li>
              <li>身分別：{{ userData.IsMonk ? '法師' : '居士' }}</li>
            </ul>
          </li>
          <li>
            <ul class="list-unstyled">
              <li>預計報到日：{{ moment(new Date(userData.CheckInDate)).format('MM/DD') }}</li>
              <li>預計離單日：{{ moment(new Date(userData.CheckOutDate)).format('MM/DD') }}</li>
            </ul>
          </li>
        </ul>
        <!-- <h3>歷史掛單資料：</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">歷史掛單日</th>
                <th scope="col">歷史離單日</th>
                <th scope="col">寮區</th>
                <th scope="col">寮房編號</th>
                <th scope="col">共住者法名</th>
                <th scope="col">共住者俗名</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td scope="row">2020/01/01</td>
                <td>2020/02/02</td>
                <td>a</td>
                <td>B22</td>
                <td>德英</td>
                <td>張德應</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>參與過1期佛七</h3>
        <h4>曾參與佛七列表</h4>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">佛七期數</th>
                <th scope="col">起七日</th>
                <th scope="col">圓滿日</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td scope="row">412</td>
                <td>2022/02/01</td>
                <td>2022/02/20</td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
    </div>
    <div class="btn g-1">
      <router-link to="/back/booking" class="btn btn-outline-secondary">上一步</router-link>
      <router-link :to="`/back/rooms?id=${userData.Id}`" class="btn btn-secondary"
        >安排寮房</router-link
      >
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import RoomsProgressBar from '@/components/back/RoomsProgressBar.vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from 'moment';

const { VITE_BASEURL } = import.meta.env;
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
<style scoped lang="scss">
.roomTitleArea {
  height: 100%;
  h4 {
    font-size: 20px;
  }
  margin-bottom: 80px;
}
</style>
