<template>
  <article class="d-flex align-items-center" style="gap: 1rem">
    <div class="d-flex flex-column flex-grow-1">
      <div class="mb-2 d-flex align-items-center">
        <slot name="info-tag"> 用行內塊做出 tag </slot>
        <span class="fw-semibold ms-3">
          <slot name="user"></slot>
        </span>
      </div>
      <slot name="info-content">內容</slot>
    </div>
    <div class="bg-neutral-40 text-neutral-80 p-2 rounded-4" style="max-width: 55px">
      <slot name="info-timer">日期</slot>
    </div>
  </article>
</template>
