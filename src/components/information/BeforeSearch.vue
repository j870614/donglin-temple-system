<template>
  <div>
    <div class="row d-flex justify-content-center gap-5">
      <div class="col-xl-3 col-10 gx-0 box-style fs-5 overflow-hidden text-center">
        <p class="mb-0 py-1 px-3 bg-primary-80 text-white fw-semibold">身分別</p>
        <div
          class="form-check d-flex justify-content-center gap-2"
          v-for="(item, index) in ['法師', '居士']"
          :key="item + index"
          @click="filterConfig.identity = item"
          @keydown="filterConfig.identity = item"
        >
          <input
            :checked="filterConfig.identity === item"
            class="form-check-input"
            type="radio"
            name="身分別"
            :id="item + index"
          />
          <label class="form-check-label" :for="item + index"> {{ item }} </label>
        </div>
      </div>
      <div class="col-xl-3 col-10 gx-0 box-style fs-5 overflow-hidden text-center">
        <p class="mb-0 py-1 px-3 bg-primary-80 text-white fw-semibold">性別</p>
        <div
          class="form-check d-flex justify-content-center gap-2"
          v-for="(item, index) in ['男眾', '女眾']"
          :key="item + index"
          @click="filterConfig.sex = item"
          @keydown="filterConfig.sex = item"
        >
          <input
            :checked="filterConfig.sex === item"
            class="form-check-input"
            type="radio"
            name="性別"
            :id="item"
          />
          <label class="form-check-label" :for="item"> {{ item }} </label>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column flex-xl-row justify-content-center gap-xl-5 gap-3 mt-5">
      <div class="form-floating" style="min-width: 50%">
        <input
          type="text"
          class="form-control p-2 pt-3"
          id="floatingInput"
          placeholder="0911111111"
          v-model.trim="filterConfig.input"
        />
        <label for="floatingInput">請輸入電話、法名或俗名</label>
      </div>
      <button
        type="button"
        class="btn btn-primary px-4"
        :data-bs-toggle="filterConfig.input ? 'modal' : ''"
        data-bs-target="#staticBackdrop"
        @click="search"
      >
        查詢
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white" id="staticBackdropLabel">查詢結果</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="fs-3 text-center" v-if="!searchData.length">
              查無建檔資料，是否新增四眾個資？
            </p>
            <table class="table table-style table-hover align-middle text-center box-style" v-else>
              <thead class="bg-neutral-40">
                <tr>
                  <th>法眷編號</th>
                  <th>性別</th>
                  <th>法名</th>
                  <th>俗名</th>
                  <th>電話</th>
                  <th>出生年月日</th>
                  <th>身分證末五碼</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :class="{ 'table-active': tempUser.Id === user.Id }"
                  v-for="user in searchData"
                  :key="user.id"
                  @click="tempUser = user"
                >
                  <td>{{ user.Id }}</td>
                  <td>{{ user.IsMale ? '男' : '女' }}</td>
                  <td>{{ user.DharmaName }}</td>
                  <td>{{ user.Name }}</td>
                  <td>{{ user.Mobile || user.Phone }}</td>
                  <td>
                    <span v-if="user.BirthDate">
                      {{ getCurrentYear(user.BirthDate) - 1911 }}/{{
                        getCurrentMonth(user.BirthDate)
                      }}/{{ getCurrentDay(user.BirthDate) }}
                    </span>
                  </td>
                  <td>{{ user.IdNumber && user.IdNumber.slice(-5) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <!-- <div>
              <button type="button" class="btn btn-outline-danger me-5" data-bs-dismiss="modal">
                上一步
              </button>
              <button type="button" class="btn btn-primary">新增個資</button>
            </div> -->
            <div>
              <button
                type="button"
                class="btn btn-outline-primary me-5"
                data-bs-dismiss="modal"
                @click="newTemp"
              >
                新增個資
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="saveTemp"
                :data-bs-dismiss="tempUser.Id !== 0 ? 'modal' : ''"
                v-if="searchData.length"
              >
                選擇
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GuestStore from '@/stores/GuestStore';
import { useRouter, useRoute } from 'vue-router';
import { getCurrentYear, getCurrentMonth, getCurrentDay } from '@/plug/Timer';
import Swal from '@/plug/SweetAlert';

const guest = GuestStore();

const filterConfig = ref({
  identity: '法師',
  sex: '男眾',
  input: '',
});

// 根據條件搜索
const searchData = ref<any[]>([]);
function search() {
  if (!filterConfig.value.input) {
    Swal.fire({
      icon: 'error',
      title: '請輸入查詢關鍵字',
    });
    return;
  }
  searchData.value.length = 0;
  const data = guest.guestsData
    .filter(
      (item) =>
        item.IsMale === (filterConfig.value.sex === '男眾') &&
        item.IsMonk === (filterConfig.value.identity === '法師'),
    )
    .filter((item) =>
      filterConfig.value.input
        ? item.Name === filterConfig.value.input ||
          item.DharmaName === filterConfig.value.input ||
          item.Phone === filterConfig.value.input ||
          item.Mobile === filterConfig.value.input
        : item,
    );
  searchData.value.push(...data);
}
onMounted(() => {
  guest.getTotal();
  sessionStorage.removeItem('tempUser');
});

const tempUser = ref({ Id: 0 });
const router = useRouter();
const route = useRoute();

function saveTemp() {
  if (tempUser.value.Id === 0) {
    return;
  }
  sessionStorage.setItem('tempUser', JSON.stringify(tempUser.value));
  router.push(`${route.path}?step=2`);
}
function newTemp() {
  sessionStorage.setItem('tempUser', '{}');
  router.push(`${route.path}?step=2`);
}
</script>
