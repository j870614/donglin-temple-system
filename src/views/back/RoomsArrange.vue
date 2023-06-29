<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <main class="row mx-0">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title>安排寮房</template>
      </BackTitle>
      <ProcessSteps :steps="steps" class="w-50"></ProcessSteps>
      <!-- 手風琴 -->
      <div class="roomAreaInfo">
        <div class="h-100 gx-xl-5 py-3 py-md-0 mb-xl-2 roomsHeader">
          <div class="accordion-flush" id="roomsInfo">
            <div class="accordion-item">
              <div class="accordion-header" id="flush-headingOne">
                <button
                  class="btn btn-white accordion-button collapsed w-100 p-0"
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
                data-bs-parent="#roomsInfo"
              >
                <div class="d-flex flex-wrap justify-content-around align-items-end">
                  <p class="pt-3 mb-0 fw-normal">{{ selectRoomsArea }}</p>
                  <div>
                    <i class="bi bi-circle-fill text-success p-2"></i
                    >{{
                      countRoomsStatus.totalBeds -
                      countRoomsStatus.bookingBeds -
                      countRoomsStatus.reservedBeds
                    }}
                  </div>
                  <div>
                    <i class="bi bi-circle-fill text-primary p-2"></i
                    >{{ countRoomsStatus.bookingBeds }}
                  </div>
                  <div>
                    <i class="bi bi-circle-fill text-secondary p-2"></i
                    >{{ countRoomsStatus.reservedBeds }}
                  </div>
                  <div>
                    <i class="bi bi-circle-fill text-neutral-60 p-2"></i
                    >{{ countRoomsStatus.totalBeds }}
                  </div>
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
                  <select v-model="selectRoomsArea" class="form-select" aria-label="Default select">
                    <option value="彌陀家族">彌陀家族</option>
                    <option value="內院前區">內院前區</option>
                    <option value="內院大殿">內院大殿</option>
                    <option value="大殿">二期大殿</option>
                    <option value="其他">其他寮區</option>
                  </select>

                  <h5 class="mt-4 fw-bold">寮區呈現</h5>
                  <div class="mt-3 roomMap d-flex justify-content-around">
                    <div
                      class="form-check form-check-inline"
                      role="button"
                      @click="changeShowType('map')"
                      @keydown.enter="changeShowType('map')"
                      tabindex="0"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="roomShowType"
                        id="roomMap"
                        value="map"
                        v-model="roomShowType"
                      />
                      <label class="form-check-label" for="roomMap">寮區平面圖</label>
                    </div>
                    <div
                      class="form-check form-check-inline"
                      role="button"
                      @click="changeShowType('table')"
                      @keydown.enter="changeShowType('table')"
                      tabindex="0"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="roomShowType"
                        id="roomTable"
                        value="table"
                        v-model="roomShowType"
                      />
                      <label class="form-check-label" for="roomTable">寮區表格清單</label>
                    </div>
                  </div>
                  <hr />
                  <h5 class="mt-5 fw-bold">{{ selectRoomsArea }}</h5>
                  <div class="mt-3 fw-normal">
                    <i class="bi bi-circle-fill text-success p-2"></i>可安排空床數
                    <span class="fw-bold ms-2">{{
                      countRoomsStatus.totalBeds -
                      countRoomsStatus.bookingBeds -
                      countRoomsStatus.reservedBeds
                    }}</span>
                  </div>
                  <div class="mt-3 fw-normal">
                    <i class="bi bi-circle-fill text-primary p-2"></i>已安排 / 掛單床數
                    <span class="fw-bold ms-2">{{ countRoomsStatus.bookingBeds }}</span>
                  </div>
                  <div class="mt-3 fw-normal">
                    <i class="bi bi-circle-fill text-secondary p-2"></i>保留床數
                    <span class="fw-bold ms-2">{{ countRoomsStatus.reservedBeds }}</span>
                  </div>
                  <div class="mt-3 fw-normal">
                    <i class="bi bi-circle-fill text-neutral-60 p-2"></i>總床數
                    <span class="fw-bold ms-2">{{ countRoomsStatus.totalBeds }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="roomShowType === 'map'">
        <div class="d-flex flex-wrap justify-content-between" style="margin-top: 56px">
          <div
            v-for="roomData in filterRoomArea(selectRoomsArea)"
            :key="roomData.Id"
            class="card text-center mb-3"
            :class="calculateRoomClass(roomData, 'border')"
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
            @click="insertTepmRoomData(roomData)"
          >
            <div class="card-body position-relative">
              <div class="mt-5">
                <div v-for="(item, index) in ['userOne', 'userTwo']" :key="item + index">
                  <div class="mb-2 d-flex">
                    <span class="box me-1">{{ index + 1 }}</span>
                    <p class="card-text">
                      {{ roomData[item] && (roomData[item].DharmaName || roomData[item].Name) }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="roomsNum position-absolute top-0 start-0"
                :class="calculateRoomClass(roomData, 'bg')"
                :aria-label="`預約`"
              >
                {{ roomData.BuildingName }} {{ roomData.ShareId }}
                <span style="font-size: 14px; font-weight: normal"
                  >| {{ calculateRoomStr(roomData) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="roomData in filterRoomArea(selectRoomsArea)" :key="roomData.Id">
              <td>{{ roomData.BuildingName }}棟</td>
              <td>{{ roomData.BuildingName }} {{ roomData.ShareId }}</td>
              <td>{{ roomData.RoomTypeName }}</td>
              <td>{{ roomData.TotalBeds }}</td>
              <td>{{ roomData.ongoingUsers.length }}</td>
              <td>
                {{ roomData.TotalBeds - roomData.ReservedBeds }}
              </td>
              <template v-if="roomData.ongoingUsers.length > 0">
                <td>
                  {{
                    roomData.ongoingUsers[0].IsMonk
                      ? `${roomData.ongoingUsers[0].DharmaName} 法師`
                      : !roomData.ongoingUsers[0].DharmaName
                      ? roomData.ongoingUsers[0].Name
                      : roomData.ongoingUsers[0].DharmaName
                  }}
                </td>
                <template v-if="roomData.ongoingUsers.length > 1">
                  <td>
                    {{
                      roomData.ongoingUsers[0].IsMonk
                        ? `${roomData.ongoingUsers[0].DharmaName} 法師`
                        : !roomData.ongoingUsers[0].DharmaName
                        ? roomData.ongoingUsers[0].Name
                        : roomData.ongoingUsers[0].DharmaName
                    }}
                  </td>
                </template>
                <template v-else>
                  <td></td>
                </template>
              </template>
              <template v-else>
                <td></td>
                <td></td>
              </template>
              <td>
                <button
                  class="btn"
                  :class="calculateRoomClass(roomData, 'btn')"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  @click="insertTepmRoomData(roomData)"
                >
                  <i class="bi bi-search"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style="padding: 40px; width: 800px"
      >
        <div class="offcanvas-header w-100">
          <div class="offcanvasTitle">
            <p class="roomNumber">{{ tempRoom.BuildingName }} {{ tempRoom.ShareId }}</p>
            <h2 id="offcanvasRightLabel">{{ tempRoom.GenderName }}眾寮房</h2>
          </div>
          <div class="offcanvasTitle">
            <p class="roomType">{{ tempRoom.RoomTypeName }}</p>
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
                <span class="fs-bold">{{ tempRoom.TotalBeds - tempRoom.ReservedBeds }}</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-primary p-2"></i>已安排 / 掛單床數
                <span class="fs-bold">{{
                  tempRoom.ongoingUsers && tempRoom.ongoingUsers.length
                    ? tempRoom.ongoingUsers.length
                    : 0
                }}</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-secondary p-2"></i>保留床數
                <span class="fs-bold">{{ tempRoom.ReservedBeds }}</span>
              </div>
              <div>
                <i class="bi bi-circle-fill text-neutral-60 p-2"></i>總床數
                <span class="fs-bold">{{ tempRoom.TotalBeds }}</span>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary w-100 p-3"
              @click="setRoom(tempRoom.Id)"
              :disabled="
                tempRoom.RoomTypeName === '庫房' || tempRoom.TotalBeds - tempRoom.ReservedBeds === 0
              "
            >
              安排寮房
            </button>
          </div>
          <h3 class="fw-bold">寮房住眾資訊</h3>
          <table>
            <thead>
              <tr>
                <th>床位入住序號</th>
                <th>住眾身分別</th>
                <th>法名</th>
                <th>俗名</th>
                <th>報到日</th>
                <th>離單日</th>
                <th>狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in tempRoom.TotalBeds" :key="index">
                <td>
                  {{
                    !tempRoom.ongoingUsers[index - 1]
                      ? ''
                      : tempRoom.ongoingUsers[index - 1].BedStayOrderNumber
                  }}
                </td>
                <td>
                  {{
                    !tempRoom.ongoingUsers[index - 1]
                      ? ''
                      : tempRoom.ongoingUsers[index - 1].StayIdentityName
                  }}
                </td>
                <td>
                  {{
                    !tempRoom.ongoingUsers[index - 1]
                      ? ''
                      : tempRoom.ongoingUsers[index - 1].DharmaName
                  }}
                </td>
                <td>
                  {{
                    !tempRoom.ongoingUsers[index - 1] ? '' : tempRoom.ongoingUsers[index - 1].Name
                  }}
                </td>
                <td>
                  <span v-if="tempRoom.ongoingUsers[index - 1]">2023</span><br />{{
                    !tempRoom.ongoingUsers[index - 1] ? '' : tempRoom.ongoingUsers[index - 1].inDate
                  }}
                </td>
                <td>
                  <span v-if="tempRoom.ongoingUsers[index - 1]">2023</span><br />{{
                    !tempRoom.ongoingUsers[index - 1]
                      ? ''
                      : tempRoom.ongoingUsers[index - 1].outDate
                  }}
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-success-10"
                    style="color: #0da97e"
                    v-if="tempRoom.ongoingUsers[index - 1]"
                  >
                    已安單
                  </button>
                  <button type="button" class="btn btn-neutral-40" v-else>未安排</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 class="mt-5 mb-4 fw-bold">寮房住眾行事曆</h3>
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
              <table>
                <thead>
                  <tr>
                    <th>報名序號</th>
                    <th>俗名</th>
                    <th>法名</th>
                    <th>報到日</th>
                    <th>離單日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in tempRoom.futureUsers" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.DharmaName }}</td>
                    <td>{{ user.Name }}</td>
                    <td>2023<br />{{ user.inDate }}</td>
                    <td>2023<br />{{ user.outDate }}</td>
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
              <h3 class="contentTitle">歷史住眾資訊</h3>
              <table>
                <thead>
                  <tr>
                    <th>報名序號</th>
                    <th>俗名</th>
                    <th>法名</th>
                    <th>報到日</th>
                    <th>離單日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in tempRoom.historicalUsers" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.DharmaName }}</td>
                    <td>{{ user.Name }}</td>
                    <td>2023<br />{{ user.inDate }}</td>
                    <td>2023<br />{{ user.outDate }}</td>
                  </tr>
                </tbody>
              </table>
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
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BackTitle from '@/components/back/BackTitle.vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap5';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import RoomStore from '@/stores/RoomStore';
import axios from 'axios';
import Swal from 'sweetalert2';

const steps = ref(['佛七報名名單', '歷史掛單紀錄', '安排寮房']);
interface RoomUser {
  UserId: number;
  Name: string;
  DharmaName: string;
  IsMonk: boolean;
  IsMale: boolean;
  StayIdentity: number;
  StayIdentityName: string;
  Mobile: string;
  Phone: string;
  EatBreakfast: boolean;
  EatLunch: boolean;
  EatDinner: boolean;
  RoomId: number;
  BedStayOrderNumber: number;
  CheckInDate: string;
  CheckOutDate: string;
  CheckInDateBreakfast: boolean;
  CheckInDateLunch: boolean;
  CheckInDateDinner: boolean;
  CheckInTime: string;
  CheckInUserId: number;
  CheckInUserName: string;
  CheckInUserDharmaName: string;
  CheckInUserIsMale: boolean;
  Status: string;
  Remarks: string;
  UpdateUserId: number;
  UpdateUserName: string;
  UpdateUserDharmaName: string;
  UpdateUserIsMale: boolean;
  UpdateAt: string;
  roomArea: string;
  inDate: string;
  outDate: string;
}

interface Room {
  Id: number;
  DormitoryAreaId: number;
  BuildingId: number;
  ShareId: number;
  RoomType: number;
  IsMale: boolean;
  TotalBeds: number;
  ReservedBeds: number;
  IsActive: true;
  UpdateAt: string;
  RoomId: number;
  DormitoryAreaName: string;
  BuildingName: string;
  RoomTypeName: string;
  GenderName: string;
  name: string;
  status: string;
  roomUsers: RoomUser[];
  historicalUsers: RoomUser[];
  ongoingUsers: RoomUser[];
  futureUsers: RoomUser[];
  roomEventArray: Array<{ id: number; title: string; start: string; end: string }>;
}

const roomsData = ref<Room[]>([]);
const tempRoom = ref<Room[]>([]);
function insertTepmRoomData(room: any) {
  tempRoom.value = { ...room };
}
const countRoomsStatus = reactive({
  totalBeds: 0,
  bookingBeds: 0,
  reservedBeds: 0,
});
async function checkData() {
  if (roomsData.value.length > 0) {
    return;
  }
  await RoomStore().fetchDataAndInsertRoomArea();
  roomsData.value = RoomStore().roomsData;
}

function countRooms(filteredRooms: Array<any>) {
  const { reservedBeds, totalBeds, bookingBeds } = toRefs(countRoomsStatus);
  let reservedBedsCount = 0; // 保留床數
  let totalBedsCount = 0; // 總床數
  let bookingBedsCount = 0; // 已安排 / 掛單床數
  filteredRooms.forEach((element) => {
    if (element.RoomTypeName === '一般寮房') {
      totalBedsCount += element.TotalBeds;
      bookingBedsCount += element.ReservedBeds;
    }
    if (element.RoomTypeName === '保留房') {
      reservedBedsCount += element.TotalBeds;
      totalBedsCount += element.TotalBeds;
    }
  });
  reservedBeds.value = reservedBedsCount;
  totalBeds.value = totalBedsCount;
  bookingBeds.value = bookingBedsCount;
}

function filterRoomArea(roomsArea: string | null) {
  if (roomsData.value.length === 0 || roomsData.value === undefined) {
    checkData();
  }
  if (roomsArea === undefined || roomsArea === '') {
    return [];
  }

  const filteredRooms = roomsData.value.filter((element) => {
    return element.DormitoryAreaName === roomsArea;
  });

  countRooms(filteredRooms);
  return filteredRooms;
}
const { VITE_BASEURL } = import.meta.env;
const route = useRoute();
const router = useRouter();
const { id } = route.query;
async function setRoom(roomId: number) {
  try {
    const data = {
      id,
      roomId,
    };
    const response = await axios.patch(`${VITE_BASEURL}/rooms/room-arrange`, data);
    Swal.fire({
      icon: 'success',
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    router.push('/back/booking');
  } catch (err: any) {
    Swal.fire({
      icon: 'error',
      title: err.response.data.message,
    });
  }
}
const selectRoomsArea = ref<string | null>(null); // 當前寮區

const roomShowType = ref<string | null>(null);
// const changeShowType = (type: string | null) => {
//   roomShowType.value = type;
// };

const calendarOptions = computed(() => {
  return {
    height: '550px',
    plugins: [dayGridPlugin, bootstrapPlugin],
    themeSystem: 'bootstrap5',
    locale: 'zh-tw',
    events: tempRoom.value.roomEventArray,
    editable: false,
    selectable: false,
    selectMirror: false,
    dayMaxEvents: true,
    eventDisplay: 'block',
    weekends: true,
  };
});

const calculateRoomClass = computed(() => (roomData: any, where: string) => {
  switch (true) {
    case roomData.RoomTypeName === '庫房':
      return `${where}-neutral-60`;
    case roomData.TotalBeds - roomData.ongoingUsers.length === 0:
      return `${where}-primary`;
    case roomData.RoomTypeName === '保留房':
      return `${where}-secondary`;
    default:
      return `${where}-success`;
  }
});

const calculateRoomStr = computed(() => (roomData: any) => {
  switch (true) {
    case roomData.RoomTypeName === '庫房':
      return '庫房';
    case roomData.RoomTypeName === '保留房':
      return '保留房';
    case roomData.TotalBeds - roomData.ReservedBeds === 0:
      return '已滿';
    default:
      return `剩${roomData.TotalBeds - roomData.ReservedBeds}床`;
  }
});

onMounted(async () => {
  selectRoomsArea.value = '彌陀家族';
  roomShowType.value = 'map';
  await checkData();
  roomsData.value = RoomStore().roomsData;
  await filterRoomArea('彌陀家族');
});
</script>
<style scoped lang="scss">
.roomAreaInfo {
  position: fixed;
  top: 13rem;
  z-index: 10;
  max-width: 360px;
  @media (max-width: 1200px) {
    position: static;
    max-width: 100%;
  }
}
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
  border-radius: 8px 0px 12px 0px;
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
