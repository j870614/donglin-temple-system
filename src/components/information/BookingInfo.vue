<template>
  <div class="col-xl-4 box-style gx-xl-0 p-xl-4 p-3 h-max">
    <h3 class="h2 mb-5 fw-semibold">您的預約資訊</h3>
    <section class="border border-neutral-40 rounded-4 p-4 mb-4">
      <h4 class="h3 mb-3 fw-semibold">報到及離單日</h4>
      <div class="d-flex flex-column flex-xl-row align-items-center gap-3">
        <div class="d-flex flex-xl-column align-items-center gap-2">
          <p class="bg-primary text-white fs-5 py-2 px-3 rounded-4 mb-0">預計報到日</p>
          <p class="mb-0 fw-semibold"><slot name="start"> 9 月 11 日</slot></p>
        </div>
        <span class="border border-neutral-60 flex-grow-1 py-4 py-xl-0"></span>
        <div class="d-flex flex-xl-column align-items-center gap-2">
          <p class="bg-neutral-40 text-neutral-80 fs-5 py-2 px-3 rounded-4 mb-0">預計離單日</p>
          <p class="mb-0 fw-semibold"><slot name="end">9 月 27 日</slot></p>
        </div>
      </div>
    </section>
    <section class="border border-neutral-40 rounded-4 p-4">
      <h4 class="h3 mb-3 fw-semibold">
        報名佛七期數 <br />
        <span class="fs-5 text-neutral-80 fw-normal">共 ２ 期</span>
      </h4>
      <div class="d-flex flex-column flex-xl-row gap-3">
        <section class="bg-neutral-10 p-3 text-center flex-grow-1">
          <h5 class="h1 text-primary fw-semibold mb-1">443</h5>
          <p class="mb-1 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >從</span
            >2022 / 09 / 01
          </p>
          <p class="mb-0 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >到</span
            >2022 / 09 / 17
          </p>
        </section>
        <section class="bg-neutral-10 p-3 text-center flex-grow-1">
          <h5 class="h1 text-primary fw-semibold mb-1">443</h5>
          <p class="mb-1 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >從</span
            >2022 / 09 / 01
          </p>
          <p class="mb-0 align-items-center text-neutral-80">
            <span class="d-inline-block p-1 bg-white fs-7 border border-neutral-40 me-1 rounded-1"
              >到</span
            >2022 / 09 / 17
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
