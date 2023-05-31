<template>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-10 mb-2">
      <p class="h3 mb-0">南無阿彌陀佛</p>
      <h3 class="h3 mb-5">以下是本次預約名單</h3>
    </section>
  </div>
  <div class="row justify-content-center gap-4 mx-0">
    <section class="col-xl-8">
      <h3 class="h2 mb-5 fw-semibold">本次預約清單</h3>
      <StickyTable>
        <template #thead>
          <tr>
            <th>法名</th>
            <th>俗名</th>
            <th>預計報到日</th>
            <th>預計離單日</th>
            <th>修改</th>
          </tr>
        </template>
        <template #tbody>
          <tr v-for="user in totalTemp" :key="user.Id">
            <td>{{ user.DharmaName }}</td>
            <td>{{ user.Name }}</td>
            <td>2022/9/10</td>
            <td>2022/9/28</td>
            <td class="cursor-point" @click="editorUser(user)" @keydown="editorUser(user)">
              <p class="mb-0 d-flex align-items-center justify-content-center gap-2">
                <span class="material-symbols-outlined"> edit </span
                ><span class="d-none d-xl-block">修改</span>
              </p>
            </td>
          </tr>
        </template>
      </StickyTable>
    </section>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=1"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      另新增一筆資料
    </router-link>
    <button
      type="button"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      報名完成
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import StickyTable from '../back/StickyTable.vue';

const totalTemp = ref<any[]>([]);
onMounted(() => {
  if (!sessionStorage.tempUser) return;
  totalTemp.value = sessionStorage.totalTemp && JSON.parse(sessionStorage.totalTemp);
});

const router = useRouter();
function editorUser(user: any) {
  const index: number = totalTemp.value.indexOf((item: any) => item.Id === user.Id);
  totalTemp.value.splice(index, 1);
  sessionStorage.setItem('totalTemp', JSON.stringify(totalTemp.value));
  sessionStorage.setItem('tempUser', JSON.stringify(user));
  router.push('/back/buddha/signUp?step=2');
}
</script>
<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
</style>
