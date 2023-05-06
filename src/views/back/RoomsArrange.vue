<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <div class="dropdown">
        <button
          class="btn btn-white px-5"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="width: 360px; height: 128px"
        >
          <div class="d-flex flex-wrap justify-content-between">
            <h2>寮區資訊</h2>
            <i class="bi bi-chevron-down pt-2"></i>
          </div>
          <div class="d-flex flex-wrap justify-content-around">
            <p class="pe-3">彌陀家族</p>
            <div><i class="bi bi-circle-fill text-success pe-2"></i>23</div>
            <div><i class="bi bi-circle-fill text-primary pe-2"></i>25</div>
            <div><i class="bi bi-circle-fill text-secondary pe-2"></i>2</div>
            <div><i class="bi bi-circle-fill text-neutral-60 pe-2"></i>24</div>
          </div>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="text-center progressBar mb-5">
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
      <div class="d-flex flex-wrap justify-content-between" style="margin-top: 8rem">
        <div
          v-for="room in rooms"
          :key="room.id"
          class="card text-center mb-3 border-primary"
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
  </main>
</template>
<script setup lang="ts">
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
  margin: 0 auto;
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
  border-radius: 0px 0px 12px 0px;
  &::after {
    content: '| 已滿';
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
