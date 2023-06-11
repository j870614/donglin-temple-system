<template>
  <main class="row">
    <BackTitle>
      <template #title>佛七預約報名表單</template>
    </BackTitle>
    <div class="roomTitleArea container d-flex flex-column-reverse flex-md-row">
      <div class="col-12 col-md-5 h-100 gx-xl-5 py-3 py-md-0 mb-xl-2 roomsHeader">
        <div class="accordion-flush" id="roomsInfo" style="max-width: 360px">
          日期篩選要放在這裡
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
          <tr>
            <td>1 {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>@mdo {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>Otto {{ user }}</td>
            <td>
              <button type="button" class="btn btn-secondary me-2">安排寮房</button
              ><button type="button" class="btn btn-outline-secondary">詳細個資</button>
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
import axios from 'axios';
import RoomsProgressBar from '@/components/back/RoomsProgressBar.vue';

const { VITE_BASEURL } = import.meta.env;
const roomsData = ref([]);
const usersData = ref({});

const getRoomsData = async () => {
  try {
    const response = await axios.get(`${VITE_BASEURL}/rooms`);
    roomsData.value = response.data.rooms;
    console.log(response);
    console.log(roomsData.value);
    console.log(roomsData);
  } catch (error) {
    console.error(error);
  }
};
const getUsersData = async () => {
  try {
    const response = await axios.get(
      `${VITE_BASEURL}/buddha-seven/applies/views?year=2023&month=6`,
    );
    usersData.value = response.data.buddhaSevenApplyViews;
    console.log(response);
    console.log(usersData);
  } catch (error) {
    console.error(error);
  }
};
onMounted(async () => {
  await Promise.all([getRoomsData(), getUsersData()]);
});
</script>
<style scoped lang="scss">
.box {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  width: 28px;
  height: 29px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
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
.roomsNum {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  width: 110px;
  height: 40px;
  left: 0px;
  top: 0px;
  background: #ff5e1f;
  border-radius: 8px 0px 12px 0px;
  &::after {
    content: '| 已滿';
    font-size: 14px;
    font-weight: normal;
  }
}
.roomStatus {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: #f9f9f9;
}
.accordion-item {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  font-weight: 600;
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
.year-form-select {
  margin-top: 6px;
  padding: 16px;
  width: 180px;
  height: 58px;
  font-size: 20px;
}
.accordion {
  margin-top: 1rem;
  margin-left: 1rem;
}
.offcanvas-header {
  align-items: flex-start;
}
.offcanvasTitle {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.roomNumber {
  margin: 0;
  margin-right: 16px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 12px;
  font-size: 40px;
  font-weight: 600;
}
.roomType {
  margin: 0;
  padding: 8px 16px;
  background: #fff4f0;
  border-radius: 12px;
  color: #ff5e1f;
  font-size: 20px;
  font-weight: 400;
}
.offcanvas-body {
  .nav-tabs .nav-link {
    color: #000;
    font-weight: 600;
    padding: 16px 24px;
  }
  .nav-link.active {
    color: #ff5e1f;
    border: none;
    border-bottom: 4px solid;
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border: none;
    color: #ff5e1f;
    border-bottom: 4px solid;
  }
  .tab-content {
    margin-top: 40px;
  }
  .contentTitle {
    font-weight: 600;
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .accordion {
    margin: 0 auto;
  }
}

@media screen and (min-width: 768px) {
  .roomsHeader {
    margin-top: 0;
  }
}
</style>
