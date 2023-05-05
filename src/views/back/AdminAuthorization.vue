<template>
  <main class="row">
    <div class="col h-100 gx-xl-5 pt-xl-4 pb-xl-5 py-3 mb-xl-2">
      <BackTitle>
        <template #title> 使用者權限核發 </template>
      </BackTitle>
      <div class="d-flex justify-content-end py-3">
        <router-link to="/back/permissions/authorized/new?step=1" class="btn btn-lg btn-primary"
          >新增使用者權限帳號</router-link
        >
      </div>
      <StickyTable>
        <template #thead>
          <tr>
            <th>編號</th>
            <th>性別</th>
            <th>法名</th>
            <th>俗名</th>
            <th>執事堂口</th>
            <th>執事名稱</th>
            <th>核發權限者</th>
            <th>核發日期</th>
            <th>狀態</th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <td>1</td>
            <td>男</td>
            <td>普一</td>
            <td>王某</td>
            <td>知客</td>
            <td>知客志工</td>
            <td>普甲</td>
            <td>2023/1/3</td>
            <td>
              <span class="mb-0 text-secondary bg-secondary-tint rounded-4 py-2 px-3"
                >已產出註冊連結</span
              >
              <!-- <span class="mb-0 text-success bg-success-10 rounded-4 py-2 px-3">註冊成功</span> -->
              <!-- <span class="mb-0 text-danger bg-danger-10 rounded-4 py-2 px-3">註冊連結失效</span> -->
            </td>
          </tr>
        </template>
      </StickyTable>
      <div class="d-flex justify-content-end gap-3 mt-5">
        <button
          type="button"
          class="btn btn-outline-primary py-3 flex-grow-1"
          style="max-width: 184px"
        >
          移除
        </button>
        <button type="button" class="btn btn-primary py-3 flex-grow-1" style="max-width: 184px">
          重新產出連結
        </button>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BackTitle from '@/components/back/BackTitle.vue';
import StickyTable from '@/components/back/StickyTable.vue';
</script>
