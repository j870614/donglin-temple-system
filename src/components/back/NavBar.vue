<template>
  <!-- 桌機 start -->
  <div class="col-lg-6 d-none d-md-flex px-0">
    <img class="logo px-4 mt-4" src="@/assets/img/LOGO.png" alt="spar-cat-eye" />
    <div class="logo-title">寺務管理系統</div>
  </div>
  <div class="col-lg-6 d-none d-md-flex align-items-center d-flex justify-content-end">
    <div
      class="ps-18"
      style="display: inline-block; border: 1px solid gray; border-radius: 50%; padding: 5px"
    >
      <img class="svg bell-outline" src="@/assets/img/bell-outline.svg" alt="bell-outline" />
    </div>
    <div style="display: inline-block; border: 1px solid gray; border-radius: 50%; padding: 5px">
      <img
        class="svg account-circle"
        src="@/assets/img/account-circle-outline.svg"
        alt="account-circle"
      />
    </div>
    <div class="login-name h5 py-5 mb-0">知客 普謀菩薩</div>
    <div class="pe-4">
      <img class="ic_ArrowDown svg" src="@/assets/img/chevron-down.svg" alt="ic_ArrowDown" />
    </div>
  </div>
  <!-- 桌機 end -->
  <!-- 手機 start -->
  <div class="col d-flex d-md-none">
    <div class="d-flex align-items-center">
      <img class="svg menu" src="@/assets/img/menu.svg" alt="menu" />
      <img class="logo-mobile ms-4" src="@/assets/img/Logo-mobile.png" alt="Logo-mobile" />
      <div class="h5 mb-0 logo-mobile-title">寺務管理系統</div>
    </div>
  </div>
  <div class="col d-flex d-md-none align-items-center d-flex justify-content-end">
    <div
      class="ps-18"
      style="display: inline-block; border: 1px solid gray; border-radius: 50%; padding: 5px"
    >
      <img class="svg bell-outline" src="@/assets/img/bell-outline.svg" alt="bell-outline" />
    </div>
    <div style="display: inline-block; border: 1px solid gray; border-radius: 50%; padding: 5px">
      <img
        class="svg account-circle"
        src="@/assets/img/account-circle-outline.svg"
        alt="account-circle"
      />
    </div>
  </div>
  <!-- 手機 end -->
</template>
<style scoped lang="scss">
.logo {
  width: 22.5rem;
  height: auto;
  &-title {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  &-mobile {
    height: 2rem;
    width: 1.25rem;
    &-title {
      font-weight: 600;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }
}
/* ic_ArrowDown */

.svg {
  width: 1.25rem;
  height: 1.25rem;
}

.login-name {
  padding-left: 0.5rem;
  padding-right: 1.125rem;
  // font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 600;
}
.ps-18 {
  margin-right: 1.125rem;
}
</style>
