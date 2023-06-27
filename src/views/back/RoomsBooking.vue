<template>
  <main class="row">
    <BackTitle>
      <template #title>佛七預約報名表單</template>
    </BackTitle>
    <div class="roomTitleArea container d-flex flex-column-reverse flex-md-row">
      <div
        class="d-flex flex-column flex-xl-row gap-xl-4 gap-2 col-12 col-md-5 h-100 gx-xl-5 py-3 py-md-0 mb-xl-2 roomsHeader"
      >
        <div>
          <label class="form-label fw-semibold fs-5" for="year">年份</label>
          <select
            id="year"
            class="form-select form-select-lg fs-5"
            aria-label=".form-select-lg example"
            v-model="currentYear"
            @change="roomStore.fetchDataAndInsertRoomArea(currentYear, currentMonth)"
          >
            <option
              :value="new Date().getFullYear() + 1 - i"
              v-for="i in new Date().getFullYear() - 2009"
              :key="i"
              :selected="i + 2010 === new Date().getFullYear() - 2009"
            >
              {{ new Date().getFullYear() + 1 - i }}
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
            @change="roomStore.fetchDataAndInsertRoomArea(currentYear, currentMonth)"
          >
            <option :value="i" v-for="i in 12" :key="i" :selected="i === currentMonth">
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-5 text-center ms-md-5">
        <RoomsProgressBar :roomsState="'查詢佛七<br />報名表單'" />
      </div>
    </div>
    <div class="col-12 roomTables">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">報名序號</th>
            <th scope="col">性別</th>
            <th scope="col">法名</th>
            <th scope="col">俗名</th>
            <th scope="col">電話</th>
            <th scope="col">預計報到日</th>
            <th scope="col">預計離單日</th>
            <th scope="col">報到當天用齋</th>
            <th scope="col">狀態</th>
            <th scope="col">登錄/修改者</th>
            <th scope="col">寮區</th>
            <th scope="col">寮房編號</th>
            <th scope="col">備註</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in roomStore.monthAppliess" :key="user.UserId">
            <td>{{ user.Id }}</td>
            <td>{{ user.IsMale ? '男' : '女' }}</td>
            <td>{{ user.DharmaName }}</td>
            <td>{{ user.Name }}</td>
            <td>{{ user.Mobile || user.Phone }}</td>
            <td>
              {{ getCurrentMonth(new Date(user.CheckInDate).valueOf()) }} /
              {{ getCurrentDay(new Date(user.CheckInDate).valueOf()) }}
            </td>
            <td>
              {{ getCurrentMonth(new Date(user.CheckOutDate).valueOf()) }} /
              {{ getCurrentDay(new Date(user.CheckOutDate).valueOf()) }}
            </td>
            <td>
              <p class="mb-0" v-if="user.CheckInDateDinner && user.CheckInDateLunch">
                用午齋、藥石
              </p>
              <p class="mb-0" v-else-if="user.CheckInDateLunch">用午齋</p>
              <p class="mb-0" v-else-if="user.CheckInDateDinner">用藥石</p>
              <p class="mb-0" v-else>不用齋</p>
            </td>
            <td>{{ user.Status }}</td>
            <td>{{ user.UpdateUserName }}</td>
            <td>{{ user.roomArea }}</td>
            <td>{{ user.RoomId }}</td>
            <td>{{ user.Remarks }}</td>
            <td>
              <RouterLink
                :to="`/back/bookingHistory?id=${user.Id}`"
                type="button"
                class="btn btn-secondary me-2"
                >安排寮房</RouterLink
              >
              <router-link to="" type="button" class="btn btn-outline-secondary"
                >詳細個資</router-link
              >
              <button type="button" class="btn btn-outline-gray">修改</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import RoomsProgressBar from '@/components/back/RoomsProgressBar.vue';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import RoomStore from '@/stores/RoomStore';

const roomStore = RoomStore();
const currentYear = ref<number>(new Date().getFullYear());
const currentMonth = ref<number>(new Date().getMonth() + 1);
onMounted(async () => {
  await roomStore.fetchDataAndInsertRoomArea(currentYear.value, currentMonth.value);
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
.roomsHeader {
  margin-top: 56px;
  position: sticky;
  top: 20px;
  left: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  margin-top: 16px;
}

tr:first-child th:first-child {
  border-top-left-radius: 12px;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}
tr:first-child th:last-child {
  border-top-right-radius: 12px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 12px;
}

th {
  background-color: #ececec;
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  text-align: center;
}
td {
  padding: 10px;
  font-size: 20px;
  font-weight: normal;
  color: #333333;
  text-align: center;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
@media screen and (min-width: 768px) {
  .roomsHeader {
    margin-top: 0;
  }
}
</style>
