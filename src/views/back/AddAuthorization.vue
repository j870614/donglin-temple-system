<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 使用者權限核發 </template>
      </BackTitle>
      <ProcessSteps :steps="steps"></ProcessSteps>
      <div>
        <beforeSearch v-if="Number($route.query.step) === 1" />
        <template v-else-if="Number($route.query.step) === 2">
          <section class="box-style p-xl-5 p-3">
            <h2 class="h3 fw-semibold mb-4">請選擇堂口名稱及執事</h2>
            <div class="row">
              <div class="col-12 col-xl mb-xl-3 mb-4">
                <label for="hall" class="form-label fw-semibold fs-5">堂口名稱</label>
                <select
                  name="堂口名稱"
                  id="hall"
                  class="form-select form-select-lg"
                  aria-label=".form-select-lg example"
                  v-model="currentHall"
                >
                  <option :value="index" v-for="(item, index) in auth" :key="index">
                    {{ index }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-xl">
                <label for="deacon" class="form-label fw-semibold fs-5">執事名稱</label>
                <select
                  name="執事名稱"
                  id="deacon"
                  class="form-select form-select-lg"
                  aria-label=".form-select-lg example"
                >
                  <option
                    :value="item"
                    v-for="(item, index) in auth[currentHall]"
                    :key="item + index"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </section>
          <div class="d-flex justify-content-end gap-3 mt-5">
            <router-link
              to="/back/permissions/authorized/new?step=1"
              class="btn btn-outline-primary text-danger py-3 flex-grow-1"
              style="max-width: 184px"
            >
              上一步
            </router-link>
            <router-link
              to="/back/permissions/authorized/new?step=3"
              class="btn btn-primary text-white py-3 flex-grow-1"
              style="max-width: 184px"
            >
              產出註冊連結
            </router-link>
          </div>
        </template>
        <template v-else>
          <div class="box-style d-flex flex-column align-items-center py-xl-5 py-3">
            <h2 class="h3 fw-semibold">使用者註冊連結</h2>
            <div class="bg-secondary" style="width: 200px; height: 200px">這裡放QR</div>
            <section class="text-danger mt-3">
              <h3 class="h4 fw-semibold mb-3">注意事項</h3>
              <p class="fs-5 mb-5">此為一次性註冊連結 <br />二十分鐘後失效</p>
              <router-link
                to="/back/permissions/authorized"
                class="btn btn-xl w-100 btn-primary text-white"
                >回權限核發頁</router-link
              >
            </section>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import ProcessSteps from '@/components/back/ProcessSteps.vue';
import beforeSearch from '@/components/information/BeforeSearch.vue';

import { ref } from 'vue';
import type { Ref } from 'vue';

const steps = ref(['個資查詢', '權限設定', '註冊連結']);

interface Auth {
  [key: string]: string[];
}
const auth = ref<Auth>({
  知客: ['總知客', '副總知客', '知客志工'],
  寮房: ['寮房師', '副寮房師', '寮房志工'],
});
const currentHall: Ref<string> = ref('知客');
</script>
