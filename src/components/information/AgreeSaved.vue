<template>
  <div class="row">
    <div class="col-10 box-style mx-auto fs-5 p-4">
      <p class="fw-semibold" style="text-indent: 2rem">
        歡迎使用東林寺（以下稱本寺）相關服務，依據個人資料保護法（以下稱個資法）第八條第一項規定，為了確保使用者之個人資料、隱私及權益之保護，當您已閱讀並同意「東林寺個人資料保護法告知內容」時，即表示您願意以電子文件之方式行使法律所賦予同意之權利，並具有書面同意之效果，若不同意請離開此網頁，如需服務請洽本寺之執事人員。
      </p>
      <ol class="list-inline">
        <li>
          <h2 class="h5 fw-semibold">一、個人資料蒐集目的：</h2>
          <p>（一）從事如宗教等之行為均屬於本行業之個資蒐集目的。</p>
          <p>（二）上述之相關業務或其他符合營業項目所定義之工作範圍。</p>
        </li>
        <li>
          <h2 class="h5 fw-semibold">二、個人資料蒐集類別：</h2>
          <p>
            （一）識別類（例如：中、英文姓名、國民身分證統一編號、識別碼、學生或員工證號、聯絡電話號碼、地址、性別、出生地、電子郵遞地址、帳戶號碼與戶名、其它識別證號或電子識別標章）、特徵類（例如：出生年月日、國籍、個人照片、筆跡與紙本文件、個人健康狀況）、社會情況類（例如：職業、學經歷、專長）、財務細節類（例如：銀行帳號、戶名或與本蒐集目的相關之財務資訊）等。
          </p>
        </li>
        <li>
          <h2 class="h5 fw-semibold">三、個人資料利用之期間、地區、對象及方式：</h2>
          <p>（一）期間：利用期間為本寺或業務所必須之保存期間。</p>
          <p>（二）地區：您的個人資料將用於本寺提供服務之地區。</p>
          <p>
            （三）對象：本寺之共同行銷、交互運用客戶資料公司、合作推廣單位、業務往來機構、依法有調查
            權機關或金融監理機關。
          </p>
          <p>（四）方式：電子文件、紙本，或以自動化機器或其他非自動化之利用方式。</p>
        </li>
        <li>
          <h2 class="h5 fw-semibold">
            四、依據個資法第三條規定，您就本寺保有您的個人資料得行使下列權利：
          </h2>
          <p>
            （一）查詢、閱覽、複本、補充、更正、請求停止蒐集、請求停止處理、請求停止利用、請求刪除等權利。
          </p>
        </li>
      </ol>
    </div>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      v-if="props.pre"
      :to="props.pre"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      :to="props.next"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  next: {
    type: String,
    required: true,
  },
  pre: {
    type: String,
    default: '',
  },
});
</script>
