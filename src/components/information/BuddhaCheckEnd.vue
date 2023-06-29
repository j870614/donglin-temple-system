<template>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-10 mb-3">
      <p class="h3 mb-0">南無阿彌陀佛</p>
      <!-- <h3 class="h3 mb-5">請詳讀後簽名</h3> -->
    </section>
  </div>
  <div class="row justify-content-center gap-4 mx-0">
    <ol class="col-5 box-style gx-xl-0 p-xl-5 p-3 h-max fs-5 list-inline w-75 mx-auto">
      <li
        v-for="(item, index) in notion"
        :key="index"
        class="form-check"
        :class="{ 'mb-4': index !== notion.length - 1 }"
      >
        <input
          class="form-check-input"
          type="checkbox"
          :value="item"
          :id="item + index"
          v-model="checkNum"
        />
        <label class="form-check-label" :for="item + index" v-html="item"> </label>
      </li>
      <!-- <li class="d-flex align-items-center justify-content-center mt-5">
        <p class="mb-0">掛單同意者簽名：</p>
        <button type="button" class="btn btn-lg btn-neutral-40">請點選簽名</button>
      </li> -->
    </ol>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/checkIn?step=6"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <button
      type="button"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
      @click="checkIn"
    >
      報到完成
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Swal from '@/plug/SweetAlert';
import BuddhaStore from '@/stores/BuddhaStore';
import { useRouter } from 'vue-router';

const checkNum = ref<any[]>([]);
const notion = ref<string[]>([
  '1.佛七報到僅限一期佛七，欲連續參加第二期佛七者，<br>請於佛七圓滿日再進行下一期佛七報到。',
  '2.於離單日，應主動清理寮房環境，<br>並交由執事法師檢查後，再行離單。',
  '3.每月七號為志工日，<br>請留下來發心參與志工日後，再行離單。',
  '4.若於掛單共住期間，嚴重違反本寺規約，<br>如：打（吵）架、傳播是非等，<br>常住得依規定予以遷單，掛單者不得有異議，<br>並於告知遷單當日自行離單。 ',
]);

const buddhaStore = BuddhaStore();
const router = useRouter();
function checkIn() {
  if (checkNum.value.length >= notion.value.length) {
    buddhaStore.checkInBuddha(sessionStorage.tempId, JSON.parse(sessionStorage.tempUser), router);
  } else {
    Swal.fire({
      icon: 'error',
      title: '請詳閱報到注意事項',
    });
  }
}
</script>
