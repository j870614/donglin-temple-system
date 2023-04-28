<template>
  <div class="table-responsive">
    <table class="table table-style table-hover align-middle text-center box-style text-nowrap">
      <caption class="caption-top fs-4">
        <slot name="caption"></slot>
      </caption>
      <thead class="sticky-top">
        <slot name="thead">
          <tr>
            <th class="cursor-point">
              範例1<span class="material-symbols-outlined fs-6"> arrow_drop_up </span>
            </th>
            <th>修改</th>
          </tr>
        </slot>
      </thead>
      <tbody>
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
