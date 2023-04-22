<template>
  <div class="bg-neutral-10 py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="" class="d-inline-block mb-4">
            <img src="@/assets/img/LOGO.png" alt="logo" style="width: 240px; height: 62px" />
          </router-link>
          <h3 class="fw-semibold h5">彌陀之家東林寺</h3>
          <p class="text-neutral-80">宜蘭縣冬山鄉太和村寶和路638號</p>
        </div>
        <div class="col d-flex gap-4 justify-content-between">
          <p class="fw-semibold">聯絡資訊</p>
          <div class="d-flex flex-column">
            <p class="d-flex align-items-center fw-semibold mb-4">
              <span class="material-symbols-outlined me-3"> call </span>電話
            </p>
            <a href="tel:+(03) 959-0000" class="text-neutral-80 ps-5 text-decoration-none"
              >(03) 959-0000</a
            >
            <a href="tel:+(03) 959-5500" class="text-neutral-80 ps-5 text-decoration-none"
              >(03) 959-5500</a
            >
          </div>
          <div>
            <p class="d-flex align-items-center fw-semibold">
              <span class="material-symbols-outlined me-3"> mail </span>電子信箱
            </p>
            <a href="mailto:9590000@donglin.tw" class="text-neutral-80 ps-5 text-decoration-none"
              >9590000@donglin.tw</a
            >
          </div>
        </div>
      </div>
      <p class="border-top border-neutral-40 pt-4 text-neutral-80 text-center">
        彌陀之家東林寺 Copyright© 2023 All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48;
}
</style>
