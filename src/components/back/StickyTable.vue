<template>
  <div class="table-responsive" style="max-height: 35rem">
    <table class="table table-sticky table-hover align-middle text-center box-style text-nowrap">
      <thead class="sticky-top fs-5">
        <slot name="thead">
          <tr>
            <th class="cursor-point fs-3">
              範例1<span class="material-symbols-outlined fs-6"> arrow_drop_up </span>
            </th>
            <th>修改</th>
          </tr>
        </slot>
      </thead>
      <tbody class="fs-5">
        <slot name="tbody">
          <tr>
            <td>1</td>
            <td>修改</td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
export interface ThInfo {
  title: string;
  needSort: boolean;
}
</script>
