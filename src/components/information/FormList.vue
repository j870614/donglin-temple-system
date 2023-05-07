<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <!-- 個人資訊 -->
      <section class="mb-5">
        <h3 class="h3 mb-4 fw-semibold">請填寫您的個人資訊</h3>
        <div class="d-flex gap-4 fw-semibold">
          <div class="form-check" v-for="(item, index) in ['男眾', '女眾']" :key="item + index">
            <input class="form-check-input" type="radio" name="sex" :id="item + index" />
            <label class="form-check-label" :for="item + index"> {{ item }} </label>
          </div>
        </div>
      </section>
      <!-- 通訊方式 -->
      <section class="mb-5 pt-2 pt-xl-0">
        <h3 class="h3 mb-4 fw-semibold">通訊方式</h3>
        <div class="row mb-3 gap-4 gap-xl-0">
          <div class="col-xl">
            <label for="phone" class="form-label fw-semibold">手機號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="phone"
              placeholder="請輸入手機號碼"
            />
          </div>
          <div class="col-xl">
            <label for="tel" class="form-label fw-semibold">市話號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="tel"
              placeholder="請輸入市話號碼"
            />
          </div>
        </div>
        <div>
          <label for="line" class="form-label fw-semibold">LINE 帳號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="line"
            placeholder="請輸入 LINE 帳號"
          />
        </div>
      </section>
      <!-- 通訊地址 -->
      <section class="pt-2 pt-xl-0">
        <h3 class="h3 mb-4 fw-semibold">通訊地址</h3>
        <div class="d-flex gap-4 fw-semibold mb-3">
          <div class="form-check" v-for="(item, index) in ['國內', '海外']" :key="item + index">
            <input
              class="form-check-input rounded-4"
              type="radio"
              name="sex"
              :id="item + index"
              v-model="address.point"
              :checked="address.point === item"
              :value="item"
            />
            <label class="form-check-label" :for="item + index"> {{ item }} </label>
          </div>
        </div>
        <!-- 國內 -->
        <template v-if="address.point === '國內'">
          <div class="row mb-3 gap-4 gap-xl-0">
            <div class="col-xl">
              <label for="postal" class="form-label fw-semibold">郵遞區號</label>
              <input
                type="text"
                class="form-control rounded-4"
                id="postal"
                placeholder="請輸入郵遞區號"
              />
            </div>
            <div class="col-xl">
              <label for="county" class="fw-semibold mb-2">縣市</label>
              <select class="form-select form-select-lg rounded-4" id="county">
                <option selected>請選擇縣市</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-xl">
              <label for="township" class="fw-semibold mb-2">鄉鎮市區</label>
              <select class="form-select form-select-lg rounded-4" id="township">
                <option selected>請選擇鄉鎮市區</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div>
            <label for="address" class="form-label fw-semibold">詳細地址</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="address"
              placeholder="OO路OO巷OO號"
            />
          </div>
        </template>
        <!-- 海外 -->
        <template v-else>
          <div class="row mb-3 gap-4 gap-xl-0">
            <div class="col-xl">
              <label for="state" class="fw-semibold mb-2">州別</label>
              <select class="form-select form-select-lg rounded-4" id="state">
                <option selected>請選擇州別</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-xl">
              <label for="county" class="fw-semibold mb-2">國家</label>
              <select class="form-select form-select-lg rounded-4" id="county">
                <option selected>請選擇國家</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div>
            <label for="address" class="form-label fw-semibold">詳細地址</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="address"
              placeholder="OO路OO巷OO號"
            />
          </div>
        </template>
      </section>
      <section class="mt-5">
        <label for="msg" class="form-check-label h3 mb-4 fw-semibold">備註</label>
        <textarea class="form-control rounded-4" id="msg"></textarea>
      </section>
    </div>
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <section class="mb-5">
        <h3 class="h3 mb-4 fw-semibold">請填寫您的身份別</h3>
        <div class="d-flex gap-4 fw-semibold">
          <div class="form-check" v-for="(item, index) in ['法師', '居士']" :key="item + index">
            <input
              class="form-check-input"
              type="radio"
              name="identity"
              :id="item + index"
              v-model="identity"
              :checked="identity === item"
              :value="item"
            />
            <label class="form-check-label" :for="item + index"> {{ item }} </label>
          </div>
        </div>
      </section>
      <section class="mb-5" v-if="identity === '居士'">
        <h3 class="h3 mb-4 fw-semibold">上殿服裝</h3>
        <div class="d-flex gap-4 fw-semibold">
          <div class="form-check" v-for="(item, index) in ['專念', '海清']" :key="item + index">
            <input class="form-check-input" type="radio" name="clothing" :id="item + index" />
            <label class="form-check-label" :for="item + index"> {{ item }} </label>
          </div>
        </div>
      </section>
      <div class="row mb-5 pt-2 gap-4 gap-xl-0">
        <div class="col-xl">
          <label for="outerName" class="form-label fw-semibold">外號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="outerName"
            placeholder="請輸入外號"
          />
        </div>
        <div class="col-xl">
          <label for="innerName" class="form-label fw-semibold">內號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="innerName"
            placeholder="請輸入內號"
          />
        </div>
        <div class="col-xl">
          <label for="originName" class="form-label fw-semibold">俗名</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="originName"
            placeholder="請輸入俗名"
          />
        </div>
      </div>
      <div class="row mb-5 pt-2 gap-4 gap-xl-0">
        <div class="col-xl">
          <label for="ordainedDojo" class="form-label fw-semibold">受戒道場</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="ordainedDojo"
            placeholder="請輸入受戒道場"
          />
        </div>
        <div class="col-xl">
          <label for="ordainedDate" class="form-label fw-semibold">受戒日期</label>
          <DatePicker v-model="date" trim-weeks color="orange">
            <template #default="{ inputValue, inputEvents }">
              <input
                class="form-control rounded-4"
                id="ordainedDate"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </DatePicker>
        </div>
        <div class="col-xl">
          <label for="altar" class="form-label fw-semibold">壇別</label>
          <input type="text" class="form-control rounded-4" id="altar" placeholder="請輸入壇別" />
        </div>
      </div>
      <div class="row pt-2 gap-4 gap-xl-0">
        <div class="col-xl">
          <label for="teacherName" class="form-label fw-semibold">剃度師長德號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="teacherName"
            placeholder="請輸入剃度師長德號"
          />
        </div>
        <div class="col-xl">
          <label for="roomName" class="form-label fw-semibold">寶剎</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="roomName"
            placeholder="請輸入現住道場名稱"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=1"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=3"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from 'v-calendar';

const date = ref(new Date());
const address = ref({
  point: '國內',
});
const identity = ref('法師');
</script>
<style scoped lang="scss"></style>
