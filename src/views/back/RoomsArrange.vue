<template>
  <main class="row">
    <BackTitle>
      <template #title>寮房</template>
    </BackTitle>
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2 roomsHeader">
      <div class="accordion accordion-flush" id="roomsInfo" style="width: 360px">
        <div class="accordion-item">
          <div class="accordion-header" id="flush-headingOne">
            <button
              class="btn btn-white collapsed text-center row d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                <h2>寮區資訊</h2>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div class="d-flex flex-wrap justify-content-around align-items-center">
                <p class="pt-3 fs-bold">彌陀家族</p>
                <div><i class="bi bi-circle-fill text-success p-2"></i>23</div>
                <div><i class="bi bi-circle-fill text-primary p-2"></i>25</div>
                <div><i class="bi bi-circle-fill text-secondary p-2"></i>2</div>
                <div><i class="bi bi-circle-fill text-neutral-60 p-2"></i>24</div>
              </div>
            </button>
          </div>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#roomsInfo"
          >
            <div class="accordion-body">
              <h4>選擇寮區</h4>
              <select class="form-select" aria-label="Default select">
                <option selected>彌陀家族</option>
                <option value="內院前區">內院前區</option>
                <option value="內院大廳">內院大廳</option>
              </select>
              <h4 class="mt-3">寮區呈現</h4>
              <div class="roomMap d-flex justify-content-around">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio1">寮區平面圖</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">寮區表格清單</label>
                </div>
              </div>
              <hr />
              <h4>彌陀家族</h4>
              <div>
                <i class="bi bi-circle-fill text-success p-2"></i>可安排空床數
                <span class="fs-bold">23</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-primary p-2"></i>已安排 / 掛單床數
                <span class="fs-bold">25</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-secondary p-2"></i>保留床數
                <span class="fs-bold">2</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-neutral-60 p-2"></i>總床數
                <span class="fs-bold">24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center progressBar">
      <div class="position-relative">
        <div class="progress" style="height: 3px">
          <div
            class="progress-bar"
            role="progressbar"
            aria-label="Progress"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
          style="width: 44px; height: 44px"
        >
          <i class="bi bi-check text-white fs-4"></i>
        </button>
        <h4
          class="position-absolute top-0 start-0 translate-middle"
          style="width: 120px; margin-top: 4rem"
        >
          查詢佛七<br />報名表單
        </h4>
        <button
          type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
          style="width: 44px; height: 44px"
        >
          <i class="bi bi-check text-white fs-4"></i>
        </button>
        <h4
          class="position-absolute top-0 start-50 translate-middle"
          style="width: 160px; margin-top: 4rem"
        >
          查詢報名者<br />歷史掛單紀錄
        </h4>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill"
          style="width: 44px; height: 44px"
        >
          <h4 class="text-white">3</h4>
        </button>
        <h4
          class="position-absolute top-0 start-100 translate-middle"
          style="width: 120px; margin-top: 3rem"
        >
          安排寮房
        </h4>
      </div>
    </div>
    <div>
      <div class="d-flex flex-wrap justify-content-between" style="margin-top: 8rem">
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
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style="padding: 40px; width: 768px"
          >
            <div class="offcanvas-header">
              <h1 class="roomNumber" id="offcanvasRightLabel">{{ room.name }} 女眾寮房</h1>
            </div>
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
              <button type="button" class="btn btn-primary w-100">安排寮房</button>
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
                  <td>2023/3/10</td>
                  <td>2023/3/27</td>
                  <td>
                    <button type="button" class="btn btn-success-10" style="color: success-120">
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
                    <button type="button" class="btn btn-neutral-40" style="color: success-120">
                      未安排
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 class="my-4 fw-bold">寮房住眾行事曆</h3>
            <div class="d-flex">
              <div class="text-start me-5">
                <div class="year fs-5 fw-bold">年分</div>
                <select
                  class="year-form-select fs-6 border-neutral-40 rounded-4"
                  aria-label="select"
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div class="text-start">
                <div class="year fs-5 fw-bold">月分</div>
                <select
                  class="year-form-select fs-6 border-neutral-40 rounded-4"
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
            <DatePicker
              borderless
              expanded
              color="orange"
              title-position="right"
              v-model="date"
            ></DatePicker>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import { DatePicker } from 'v-calendar';

const date = new Date();

interface Room {
  id: number;
  name: string;
  status: string;
  person: Array<{ num: number; name: string }>;
}

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
.progressBar {
  max-width: 50%;
  margin-top: 4rem;
  margin-right: 7rem;
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
    font-size: 16px;
    font-weight: normal;
  }
}
.roomStatus {
  width: 100%;
  height: 124px;
  padding: 16px;
  background-color: #f9f9f9;
}
#offcanvasRight {
  display: flex;
  flex-direction: column;
  align-items: start;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  margin-top: 16px;
  .thead tr {
    border-radius: 12px;
  }
}
th {
  background-color: #ececec;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
}
td {
  padding: 8px;
  font-size: 16px;
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
  font-size: 14px;
}
.accordion {
  margin-top: 1rem;
  margin-left: 1rem;
}
@media screen and (max-width: 1200px) {
  .accordion {
    margin: 0 auto;
  }
  .progressBar {
    margin: 0 auto;
  }
}
</style>
