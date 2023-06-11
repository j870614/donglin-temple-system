<template>
  <main class="row">
    <BackTitle>
      <template #title>安排寮房</template>
    </BackTitle>
    {{ roomsData }}
    {{ roomShowType }}
    <div class="roomTitleArea container d-flex flex-column-reverse flex-md-row">
      <div class="col-12 col-md-5 h-100 gx-xl-5 py-3 py-md-0 mb-xl-2 roomsHeader">
        <div class="accordion-flush" id="roomsInfo" style="max-width: 360px">
          <div class="accordion-item">
            <div class="accordion-header" id="flush-headingOne">
              <button
                class="btn btn-white collapsed w-100 p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h2>寮區資訊</h2>
                  <i class="bi bi-chevron-down"></i>
                </div>
              </button>
            </div>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="flush-headingOne"
            >
              <div class="d-flex flex-wrap justify-content-around align-items-end">
                <p class="pt-3 mb-0 fw-normal">彌陀家族</p>
                <div><i class="bi bi-circle-fill text-success p-2"></i>23</div>
                <div><i class="bi bi-circle-fill text-primary p-2"></i>25</div>
                <div><i class="bi bi-circle-fill text-secondary p-2"></i>2</div>
                <div><i class="bi bi-circle-fill text-neutral-60 p-2"></i>24</div>
              </div>
            </div>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#roomsInfo"
            >
              <div class="accordion-body">
                <h5 class="mt-5 fw-bold">選擇寮區</h5>
                <select class="form-select" aria-label="Default select">
                  <option selected>彌陀家族</option>
                  <option value="內院前區">內院前區</option>
                  <option value="內院大廳">內院大廳</option>
                </select>

                <h5 class="mt-4 fw-bold">寮區呈現</h5>
                {{ roomShowType }}
                <div class="mt-3 roomMap d-flex justify-content-around">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="roomShwType"
                      id="roomMap"
                      value="map"
                      @change="changeShowType('map')"
                      v-model="roomShowType"
                    />
                    <label class="form-check-label" for="roomMap">寮區平面圖</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="roomShwType"
                      id="roomTable"
                      value="table"
                      @change="changeShowType('table')"
                      v-model="roomShowType"
                    />
                    <label class="form-check-label" for="roomTable">寮區表格清單</label>
                  </div>
                </div>
                <hr />
                <h5 class="mt-5 fw-bold">彌陀家族</h5>
                <div class="mt-3 fw-normal">
                  <i class="bi bi-circle-fill text-success p-2"></i>可安排空床數
                  <span class="fw-bold ms-2">23</span>
                </div>
                <div class="mt-3 fw-normal">
                  <i class="bi bi-circle-fill text-primary p-2"></i>已安排 / 掛單床數
                  <span class="fw-bold ms-2">25</span>
                </div>
                <div class="mt-3 fw-normal">
                  <i class="bi bi-circle-fill text-secondary p-2"></i>保留床數
                  <span class="fw-bold ms-2">2</span>
                </div>
                <div class="mt-3 fw-normal">
                  <i class="bi bi-circle-fill text-neutral-60 p-2"></i>總床數
                  <span class="fw-bold ms-2">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 text-center ms-md-5">
        <RoomsProgressBar :roomsState="'安排寮房'" />
      </div>
    </div>

    <div class="col-12 roomMaps">
      <div class="d-flex flex-wrap justify-content-between" style="margin-top: 56px">
        <div
          v-for="room in rooms"
          :key="room.id"
          class="card text-center mb-3 border-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style="
            width: 179px;
            height: 144px;
            border-radius: 12px;
            background-color: #ececec;
            border: 2px solid;
          "
        >
          <div class="card-body position-relative">
            <div class="mt-5 d-flex">
              <span class="box">1</span>
              <p class="card-text">{{ room.person[0].name }}</p>
            </div>
            <div class="mt-2 d-flex">
              <span class="box">2</span>
              <p class="card-text">{{ room.person[1].name }}</p>
            </div>

            <div class="roomsNum position-absolute top-0 start-0" :aria-label="`預約${room.name}`">
              {{ room.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 roomTables">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">建築物編號</th>
            <th scope="col">寮房編號</th>
            <th scope="col">寮房性質</th>
            <th scope="col">總床數</th>
            <th scope="col">已安排 / 掛單床數</th>
            <th scope="col">可安排床數</th>
            <th scope="col">住眾1 法名/俗名</th>
            <th scope="col">住眾2 法名/俗名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      style="padding: 40px; width: 768px"
    >
      <div class="offcanvas-header w-100">
        <div class="offcanvasTitle">
          <p class="roomNumber">A1</p>
          <h2 id="offcanvasRightLabel">女眾寮房</h2>
        </div>
        <div class="offcanvasTitle">
          <p class="roomType">一般寮房</p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="offcanvas-body">
        <div class="roomStatus">
          <div class="d-flex justify-content-between pb-3">
            <div class="h5 me-5">
              <i class="bi bi-circle-fill text-success p-2"></i>可安排空床數
              <span class="fs-bold">1</span>
            </div>
            <div>
              <i class="bi bi-circle-fill text-primary p-2"></i>已安排 / 掛單床數
              <span class="fs-bold">1</span>
            </div>
            <div>
              <i class="bi bi-circle-fill text-secondary p-2"></i>保留床數
              <span class="fs-bold">0</span>
            </div>
            <div>
              <i class="bi bi-circle-fill text-neutral-60 p-2"></i>總床數
              <span class="fs-bold">2</span>
            </div>
          </div>
          <button type="button" class="btn btn-primary w-100 p-3">安排寮房</button>
        </div>
        <h3 class="fw-bold">寮房住眾資訊</h3>
        <table>
          <thead>
            <tr>
              <th>入住序號</th>
              <th>住眾身分別</th>
              <th>法名</th>
              <th>俗名</th>
              <th>報到日</th>
              <th>離單日</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>佛七法眷</td>
              <td>普甲</td>
              <td>陳某某</td>
              <td>2023<br />3/10</td>
              <td>2023<br />3/27</td>
              <td>
                <button type="button" class="btn btn-success-10" style="color: #0da97e">
                  已安單
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button type="button" class="btn btn-neutral-40">未安排</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 class="mt-5 mb-4 fw-bold">寮房住眾行事曆</h3>
        <div class="d-flex">
          <div class="text-start me-5">
            <div class="year fs-5 fw-bold">年份</div>
            <select class="year-form-select fs-5 border-neutral-40 rounded-4" aria-label="select">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div class="text-start">
            <div class="year fs-5 fw-bold">月份</div>
            <select class="year-form-select fs-5 border-neutral-40 rounded-4" aria-label="select">
              <option value="1月">1月</option>
              <option value="2月">2月</option>
              <option value="3月">3月</option>
              <option value="4月">4月</option>
              <option value="5月">5月</option>
              <option value="6月">6月</option>
              <option value="7月">7月</option>
              <option value="8月">8月</option>
              <option value="9月">9月</option>
              <option value="10月">10月</option>
              <option value="11月">11月</option>
              <option value="12月">12月</option>
            </select>
          </div>
        </div>
        <FullCalendar :options="calendarOptions" />
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="feature-tab"
              data-bs-toggle="tab"
              data-bs-target="#feature-tab-pane"
              type="button"
              role="tab"
              aria-controls="feature-tab-pane"
              aria-selected="true"
            >
              將來掛眾
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="history-tab"
              data-bs-toggle="tab"
              data-bs-target="#history-tab-pane"
              type="button"
              role="tab"
              aria-controls="history-tab-pane"
              aria-selected="false"
            >
              歷史住眾
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="roomCheck-tab"
              data-bs-toggle="tab"
              data-bs-target="#roomCheck-tab-pane"
              type="button"
              role="tab"
              aria-controls="roomCheck-tab-pane"
              aria-selected="false"
            >
              寮房查核表
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="permanent-tab"
              data-bs-toggle="tab"
              data-bs-target="#permanent-tab-pane"
              type="button"
              role="tab"
              aria-controls="permanent-tab-pane"
              aria-selected="false"
            >
              寮房常住物
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="repair-tab"
              data-bs-toggle="tab"
              data-bs-target="#repair-tab-pane"
              type="button"
              role="tab"
              aria-controls="repair-tab-pane"
              aria-selected="false"
            >
              設備報修
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="feature-tab-pane"
            role="tabpanel"
            aria-labelledby="feature-tab"
            tabindex="0"
          >
            <h3 class="contentTitle">將來掛單住眾資訊</h3>
            <div class="d-flex">
              <div class="text-start me-5">
                <div class="year fs-5 fw-bold">年份</div>
                <select
                  class="year-form-select fs-5 border-neutral-40 rounded-4"
                  aria-label="select"
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div class="text-start">
                <div class="year fs-5 fw-bold">月份</div>
                <select
                  class="year-form-select fs-5 border-neutral-40 rounded-4"
                  aria-label="select"
                >
                  <option value="1月">1月</option>
                  <option value="2月">2月</option>
                  <option value="3月">3月</option>
                  <option value="4月">4月</option>
                  <option value="5月">5月</option>
                  <option value="6月">6月</option>
                  <option value="7月">7月</option>
                  <option value="8月">8月</option>
                  <option value="9月">9月</option>
                  <option value="10月">10月</option>
                  <option value="11月">11月</option>
                  <option value="12月">12月</option>
                </select>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>入住序號</th>
                  <th>俗名</th>
                  <th>法名</th>
                  <th>報到日</th>
                  <th>離單日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>陳某某</td>
                  <td>普甲</td>
                  <td>2023<br />3/10</td>
                  <td>2023<br />3/27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="history-tab-pane"
            role="tabpanel"
            aria-labelledby="history-tab"
            tabindex="0"
          >
            歷史住眾
          </div>
          <div
            class="tab-pane fade"
            id="roomCheck-tab-pane"
            role="tabpanel"
            aria-labelledby="roomCheck-tab"
            tabindex="0"
          >
            寮房查核表
          </div>
          <div
            class="tab-pane fade"
            id="permanent-tab-pane"
            role="tabpanel"
            aria-labelledby="permanent-tab"
            tabindex="0"
          >
            寮房常住物
          </div>
          <div
            class="tab-pane fade"
            id="repair-tab-pane"
            role="tabpanel"
            aria-labelledby="repair-tab"
            tabindex="0"
          >
            設備報修
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap5';
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
interface Room {
  id: number;
  name: string;
  status: string;
  person: Array<{ num: number; name: string }>;
}
const roomShowType = ref('map');
const changeShowType = (type: string) => {
  roomShowType.value = type;
};

const rooms: Room[] = [
  {
    id: 1,
    name: 'A01',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 2,
    name: 'A02',
    status: '已預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 3,
    name: 'A03',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 4,
    name: 'A04',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 5,
    name: 'A05',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 6,
    name: 'A06',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 7,
    name: 'A07',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 8,
    name: 'A08',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 9,
    name: 'A09',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 10,
    name: 'A10',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 11,
    name: 'A11',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 12,
    name: 'A12',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 13,
    name: 'A13',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 14,
    name: 'A14',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 15,
    name: 'A15',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 16,
    name: 'A16',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 17,
    name: 'A17',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 18,
    name: 'A18',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 19,
    name: 'A19',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 20,
    name: 'A20',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 21,
    name: 'A21',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 22,
    name: 'A22',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 23,
    name: 'A23',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 24,
    name: 'A24',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
  {
    id: 25,
    name: 'A25',
    status: '可預約',
    person: [
      { num: 1, name: '普甲 / 陳某某' },
      { num: 2, name: '普乙 / 陳某某' },
    ],
  },
];
const roomEvent = [
  {
    id: 'dfasdfwer',
    title: '普甲',
    start: '2023-06-10',
    end: '2023-06-17',
    color: '#FFF4F0',
    textColor: '#FF5E1F',
  },
  {
    id: 'edfawerpo3',
    title: '普甲',
    start: '2023-06-21',
    end: '2023-06-24',
    textColor: '#FF5E1F',
    color: '#FFF4F0',
  },
  {
    id: '12341234342334344',
    title: '普乙',
    start: '2023-06-21',
    end: '2023-06-27',
    textColor: '#2298EE',
    color: '#F5FBFF',
  },
];
const calendarOptions = {
  height: '550px',
  plugins: [dayGridPlugin, bootstrapPlugin],
  themeSystem: 'bootstrap5',
  locale: 'zh-tw',
  initialEvents: roomEvent,
  editable: false,
  selectable: false,
  selectMirror: false,
  dayMaxEvents: true,
  eventDisplay: 'block',
  weekends: true,
};
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
