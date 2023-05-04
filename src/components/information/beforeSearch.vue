<template>
  <div>
    <div class="row d-flex justify-content-center gap-5">
      <div class="col-xl-3 col-10 gx-0 box-style fs-5 overflow-hidden text-center">
        <p class="mb-0 py-1 px-3 bg-primary-80 text-white fw-semibold">身分別</p>
        <div
          class="form-check d-flex justify-content-center gap-2"
          v-for="(item, index) in ['法師', '居士']"
          :key="item + index"
        >
          <input class="form-check-input" type="radio" name="身分別" :id="item" />
          <label class="form-check-label" :for="item"> {{ item }} </label>
        </div>
      </div>
      <div class="col-xl-3 col-10 gx-0 box-style fs-5 overflow-hidden text-center">
        <p class="mb-0 py-1 px-3 bg-primary-80 text-white fw-semibold">性別</p>
        <div
          class="form-check d-flex justify-content-center gap-2"
          v-for="(item, index) in ['男眾', '女眾']"
          :key="item + index"
        >
          <input class="form-check-input" type="radio" name="性別" :id="item" />
          <label class="form-check-label" :for="item"> {{ item }} </label>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column flex-xl-row justify-content-center gap-xl-5 gap-3 mt-5">
      <div class="form-floating" style="min-width: 50%">
        <input type="text" class="form-control p-2" id="floatingInput" placeholder="0911111111" />
        <label for="floatingInput">請輸入電話、法名或俗名</label>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        查詢
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white" id="staticBackdropLabel">查詢結果</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- <p class="fs-3 text-center">查無建檔資料，是否新增四眾個資？</p> -->
            <table class="table table-style table-hover align-middle text-center box-style">
              <thead class="bg-neutral-40">
                <tr>
                  <th>法眷編號</th>
                  <th>性別</th>
                  <th>法名</th>
                  <th>俗名</th>
                  <th>電話</th>
                  <th>出生年月日</th>
                  <th>身分證末五碼</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in 10" :key="index">
                  <td>10053</td>
                  <td>男</td>
                  <td>普揆</td>
                  <td>劉大吉</td>
                  <td>0921892482</td>
                  <td>46/8/7</td>
                  <td>23141</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <!-- <div>
              <button type="button" class="btn btn-outline-danger me-5" data-bs-dismiss="modal">
                上一步
              </button>
              <button type="button" class="btn btn-primary">新增個資</button>
            </div> -->
            <div>
              <button type="button" class="btn btn-outline-primary me-5" data-bs-dismiss="modal">
                新增四眾個資
              </button>
              <button type="button" class="btn btn-primary">選擇</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
