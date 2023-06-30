<template>
  <main class="row mx-0">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title>佛七預約報名表單</template>
      </BackTitle>
      <!-- 步驟 -->
      <ProcessSteps :steps="steps" class="w-50"></ProcessSteps>
      <!-- 日期篩選 -->
      <div
        class="d-flex flex-column flex-xl-row gap-xl-4 gap-2 col-12 col-md-5 h-100 gx-xl-5 py-3 py-md-0 mb-5"
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
      <h2 class="h3 fw-semibold">
        {{ currentYear }}&ensp;{{
          ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][
            currentMonth - 1
          ]
        }}月
      </h2>
      <div class="roomTables">
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
              <th>寮區</th>
              <th>寮房編號</th>
              <th>狀態</th>
              <th>備註</th>
              <th>報到當天用齋</th>
              <th>登錄/修改者</th>
              <!-- <th>修改</th> -->
            </tr>
          </template>
          <template #tbody>
            <tr v-if="!roomStore.monthAppliess.length">
              <td colspan="13">當前無可安排人員</td>
            </tr>
            <template v-else>
              <tr
                v-for="user in roomStore.monthAppliess"
                :key="user.UserId"
                @click="tempUser = user"
                :class="{ 'table-active': tempUser.Id === user.Id }"
              >
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
                <td>{{ user.roomArea }}</td>
                <td>{{ user.BuildingName + user.ShareId }}</td>
                <td>
                  <p
                    class="py-2 px-3 mb-0 rounded-4"
                    :class="`bg-${tagStyle[user.Status].bgColor} text-${
                      tagStyle[user.Status].textColor
                    }`"
                  >
                    {{ user.Status }}
                  </p>
                </td>
                <td>{{ user.Remarks }}</td>
                <td>
                  <p class="mb-0" v-if="user.CheckInDateDinner && user.CheckInDateLunch">
                    用午齋、藥石
                  </p>
                  <p class="mb-0" v-else-if="user.CheckInDateLunch">用午齋</p>
                  <p class="mb-0" v-else-if="user.CheckInDateDinner">用藥石</p>
                  <p class="mb-0" v-else>不用齋</p>
                </td>
                <td>{{ user.UpdateUserDharmaName || user.UpdateUserName }}</td>
                <!-- <td>
                  <button
                    type="button"
                    class="btn border-0 mb-0 d-flex align-items-center justify-content-center gap-2"
                    :disabled="user.Status === '已取消掛單'"
                  >
                    <span class="material-symbols-outlined"> edit </span
                    ><span class="d-none d-xl-block">修改</span>
                  </button>
                </td> -->
              </tr>
            </template>
          </template>
        </StickyTable>
        <div class="d-flex justify-content-end gap-3 mt-5">
          <!-- <router-link
            to=""
            type="button"
            class="btn btn-outline-primary py-3 flex-grow-1"
            style="max-width: 184px"
          >
            詳細個資
          </router-link> -->
          <button
            type="button"
            class="btn btn-primary py-3 flex-grow-1"
            style="max-width: 184px"
            @click="booking(tempUser.Id)"
            :disabled="!tempUser.Id || tempUser.Status !== '已報名佛七'"
          >
            安排寮房
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BackTitle from '@/components/back/BackTitle.vue';
import { getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import RoomStore from '@/stores/RoomStore';
import StickyTable from '@/components/back/StickyTable.vue';
import tagStyle from '@/interface/TagStyle';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import { useRouter } from 'vue-router';

const steps = ref(['佛七報名名單', '歷史掛單紀錄', '安排寮房']);
const tempUser = ref({ Id: 0, Status: '' });

const roomStore = RoomStore();
const router = useRouter();
const currentYear = ref<number>(new Date().getFullYear());
const currentMonth = ref<number>(new Date().getMonth() + 1);
onMounted(async () => {
  await roomStore.fetchDataAndInsertRoomArea(currentYear.value, currentMonth.value);
});

function booking(id: number | string) {
  router.push(`/back/bookingHistory?id=${id}&step=2`);
}
</script>
<style scoped lang="scss">
.form-select {
  min-width: 200px;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
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

@media screen and (min-width: 768px) {
  .roomsHeader {
    margin-top: 0;
  }
}
</style>
