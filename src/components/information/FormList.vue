<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <!-- 個人資訊 -->
      <section class="mb-5">
        <h3 class="h3 mb-4 fw-semibold">請填寫您的個人資訊</h3>
        <div class="d-flex gap-4 fw-semibold mb-3">
          <div class="form-check" v-for="(item, index) in ['男眾', '女眾']" :key="item + index">
            <input
              v-model="userInput.sex"
              class="form-check-input"
              type="radio"
              name="sex"
              :id="item + index"
              :value="item"
            />
            <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
          </div>
        </div>
        <div class="row mb-3 gap-4 gap-xl-0" v-if="!$route.fullPath.includes('/buddha/signUp')">
          <div class="col-xl">
            <label for="birthday" class="form-label fw-semibold"
              ><span class="text-danger">*</span>出生年月日</label
            >
            <DatePicker v-model="date.BirthDate" trim-weeks color="orange">
              <template #default="{ inputValue, inputEvents }">
                <input
                  class="form-control rounded-4"
                  id="birthday"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </DatePicker>
          </div>
          <div class="col-xl">
            <label for="id" class="form-label fw-semibold">身分證字號</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="id"
              placeholder="請輸入身分證字號"
              v-model.trim="userInput.IdNumber"
            />
          </div>
        </div>
      </section>
      <!-- 通訊方式 -->
      <section class="mb-5 pt-2 pt-xl-0">
        <h3 class="h3 mb-4 fw-semibold">通訊方式 <span class="text-danger fs-5">(擇一)</span></h3>
        <div class="row mb-3 gap-4 gap-xl-0">
          <div class="col-xl">
            <label for="phone" class="form-label fw-semibold">手機號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="phone"
              placeholder="請輸入手機號碼"
              v-model.trim="userInput.Mobile"
            />
          </div>
          <div class="col-xl">
            <label for="tel" class="form-label fw-semibold">市話號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="tel"
              placeholder="03-12345678"
              v-model.trim="userInput.Phone"
            />
          </div>
        </div>
        <div v-if="!$route.fullPath.includes('/buddha/signUp')">
          <label for="line" class="form-label fw-semibold">LINE 帳號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="line"
            placeholder="請輸入 LINE 帳號"
            v-model.trim="userInput.LineId"
          />
        </div>
      </section>
      <!-- 通訊地址 -->
      <section class="mb-5 pt-2 pt-xl-0" v-if="!$route.fullPath.includes('/buddha/signUp')">
        <h3 class="h3 mb-4 fw-semibold">通訊地址</h3>
        <div class="d-flex gap-4 fw-semibold mb-3">
          <div class="form-check" v-for="(item, index) in ['國內', '海外']" :key="item + index">
            <input
              class="form-check-input rounded-4"
              type="radio"
              name="point"
              :id="item + index"
              v-model="userInput.Address.point"
              :value="item"
            />
            <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
          </div>
        </div>
        <!-- 國內 -->
        <template v-if="userInput.Address.point === '國內'">
          <div class="row mb-3 gap-4 gap-xl-0">
            <div class="col-xl">
              <label for="postal" class="form-label fw-semibold">郵遞區號</label>
              <input
                type="text"
                class="form-control rounded-4"
                id="postal"
                placeholder="請輸入郵遞區號"
                disabled
                :value="userInput.Address.township.zip"
              />
            </div>
            <div class="col-xl">
              <label for="county" class="form-label fw-semibold mb-2">縣市</label>
              <select
                class="form-select form-select-lg rounded-4"
                id="county"
                v-model="userInput.Address.county"
                @change="(userInput.Address.township = { zip: '', name: '' }), (countyIndex = -1)"
              >
                <option value="" selected disabled>請選擇縣市</option>
                <option
                  :value="area.name"
                  v-for="(area, index) in taiwanArea"
                  :key="area.name + index"
                >
                  {{ area.name }}
                </option>
              </select>
            </div>
            <div class="col-xl">
              <label for="township" class="form-label fw-semibold mb-2">鄉鎮市區</label>
              <select
                class="form-select form-select-lg rounded-4"
                id="township"
                v-model="userInput.Address.township"
              >
                <option :value="{ zip: '', name: '' }" selected disabled>請選擇鄉鎮市區</option>
                <template v-if="countyIndex !== -1">
                  <option
                    :value="district"
                    v-for="district in taiwanArea[countyIndex].districts"
                    :key="district.name"
                  >
                    {{ district.name }}
                  </option>
                </template>
              </select>
            </div>
          </div>
          <div>
            <label for="address" class="form-label fw-semibold">詳細地址</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="address"
              placeholder="OO路OO巷OO號"
              v-model.trim="userInput.Address.taiwan"
            />
          </div>
        </template>
        <!-- 海外 -->
        <template v-else>
          <div class="row mb-3 gap-4 gap-xl-0">
            <div class="col-xl">
              <label for="state" class="form-label fw-semibold mb-2">州別</label>
              <select
                class="form-select form-select-lg rounded-4"
                id="state"
                v-model="userInput.Address.state"
              >
                <option value="" selected disabled>請選擇州別</option>
                <option :value="state" v-for="(county, state) in overseasArea" :key="state">
                  {{ state }}
                </option>
              </select>
            </div>
            <div class="col-xl">
              <label for="county" class="form-label fw-semibold mb-2">國家</label>
              <select class="form-select form-select-lg rounded-4" id="county">
                <option value="" selected disabled>請選擇國家</option>
                <option
                  :value="county"
                  v-for="(county, index) in overseasArea[userInput.Address.state]"
                  :key="county + index"
                >
                  {{ county }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <label for="address" class="form-label fw-semibold">詳細地址</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="address"
              placeholder="OO路OO巷OO號"
              v-model.trim="userInput.Address.oversea"
            />
          </div>
        </template>
      </section>
      <!-- 緊急聯絡人 -->
      <section class="pt-2 pt-xl-0" v-if="!$route.fullPath.includes('/buddha/signUp')">
        <h3 class="h3 mb-4 fw-semibold">緊急聯絡人</h3>
        <div class="row mb-3 gap-4 gap-xl-0">
          <div class="col-xl">
            <label for="urgentName" class="form-label fw-semibold">姓名</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="urgentName"
              placeholder="請輸入緊急聯絡人姓名"
              v-model.trim="userInput.EmergencyName"
            />
          </div>
          <div class="col-xl">
            <label for="urgentPhone" class="form-label fw-semibold">電話號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="urgentPhone"
              placeholder="請輸入緊急聯絡人電話號碼"
              v-model.trim="userInput.EmergencyPhone"
            />
          </div>
        </div>
        <label for="relation" class="form-label fw-semibold">關係</label>
        <select
          class="form-select form-select-lg mb-3"
          id="relation"
          v-model="userInput.Relationship"
        >
          <option value="" selected disabled>請選擇關係</option>
          <option
            :value="item"
            v-for="(item, index) in [
              '父',
              '母',
              '子',
              '女',
              '祖父',
              '祖母',
              '孫子',
              '孫女',
              '媳婦',
              '女婿',
              '姑姑',
              '叔',
              '伯',
              '姪女',
              '姪子',
              '老師',
              '道友',
              '師兄弟',
              '朋友',
            ]"
            :key="item + index"
          >
            {{ item }}
          </option>
        </select>
      </section>
      <section class="mt-5">
        <label for="msg" class="h3 mb-4 fw-semibold">備註</label>
        <textarea
          class="form-control rounded-4"
          id="msg"
          style="min-height: 10rem"
          v-model.trim="userInput.Remarks"
        ></textarea>
      </section>
    </div>
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <section class="mb-5">
        <h3 class="h3 mb-4 fw-semibold">請填寫您的身份別</h3>
        <div class="d-flex gap-4 fw-semibold">
          <div class="form-check" v-for="(item, index) in ['法師', '居士']" :key="item + index">
            <input
              class="form-check-input"
              type="radio"
              name="identity"
              :id="item + index"
              v-model="userInput.identity"
              :value="item"
            />
            <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
          </div>
        </div>
      </section>

      <div class="row mb-5 pt-2 gap-4 gap-xl-0">
        <template v-if="userInput.identity === '法師'">
          <div class="col-xl">
            <label for="outerName" class="form-label fw-semibold"
              ><span class="text-danger">*</span>外號</label
            >
            <input
              type="text"
              class="form-control rounded-4"
              id="outerName"
              placeholder="請輸入外號"
              v-model.trim="userInput.DharmaName"
            />
          </div>
          <div class="col-xl">
            <label for="innerName" class="form-label fw-semibold">內號</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="innerName"
              placeholder="請輸入內號"
              v-model.trim="userInput.MageNickname"
            />
          </div>
        </template>
        <template v-else>
          <div class="col-xl">
            <label for="legalName" class="form-label fw-semibold">法名</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="legalName"
              placeholder="請輸入法名"
              v-model.trim="userInput.DharmaName"
            />
          </div>
        </template>
        <div class="col-xl">
          <label for="originName" class="form-label fw-semibold"
            ><span class="text-danger" v-if="userInput.identity === '居士'">*</span>俗名</label
          >
          <input
            type="text"
            class="form-control rounded-4"
            id="originName"
            placeholder="請輸入俗名"
            v-model.trim="userInput.Name"
          />
        </div>
      </div>
      <template v-if="userInput.identity === '法師'">
        <div class="row mb-5 pt-2 gap-4 gap-xl-0">
          <div class="col-xl">
            <label for="ordainedDojo" class="form-label fw-semibold"
              ><span class="text-danger">*</span>受戒道場</label
            >
            <input
              type="text"
              class="form-control rounded-4"
              id="ordainedDojo"
              placeholder="請輸入受戒道場"
              v-model.trim="userInput.OrdinationTemple"
            />
          </div>
          <div class="col-xl">
            <label for="ordainedDate" class="form-label fw-semibold"
              ><span class="text-danger">*</span>受戒日期</label
            >
            <DatePicker v-model="date.OrdinationDate" trim-weeks color="orange">
              <template #default="{ inputValue, inputEvents }">
                <input
                  class="form-control rounded-4"
                  id="ordainedDate"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </DatePicker>
          </div>
          <div class="col-xl">
            <label for="altar" class="form-label fw-semibold">壇別</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="altar"
              placeholder="請輸入壇別"
              min="0"
              @input="userInput.Altar = userInput.Altar.replace(/[^\d]/g, '')"
              v-model.trim="userInput.Altar"
            />
          </div>
        </div>
        <div class="row mb-3 pt-2 gap-4 gap-xl-0">
          <div class="col-xl">
            <label for="teacherName" class="form-label fw-semibold"
              ><span class="text-danger">*</span>剃度師長德號</label
            >
            <input
              type="text"
              class="form-control rounded-4"
              id="teacherName"
              placeholder="請輸入剃度師長德號"
              v-model.trim="userInput.ShavedMaster"
            />
          </div>
          <div class="col-xl">
            <label for="roomName" class="form-label fw-semibold">寶剎</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="roomName"
              placeholder="請輸入現住道場名稱"
              v-model="userInput.ResidentialTemple"
            />
          </div>
        </div>
      </template>
      <div
        class="row mb-3 pt-2 gap-4 gap-xl-0"
        v-else-if="!$route.fullPath.includes('/buddha/signUp')"
      >
        <div class="col-xl">
          <label for="area" class="form-label fw-semibold mb-2">所屬地區</label>
          {{ userInput.Area }}
          <select class="form-select form-select-lg rounded-4" id="area" v-model="userInput.Area">
            <option value="" selected disabled>請選擇所屬地區</option>
            <option
              :value="item"
              v-for="(item, index) in [
                '本山',
                '台北',
                '桃園',
                '馬來西亞',
                '新加坡',
                '香港',
                '大陸',
              ]"
              :key="item + index"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="mb-5" v-if="!$route.fullPath.includes('/buddha/signUp')">
        <label for="introducer" class="form-label fw-semibold">介紹人</label>
        <input
          type="text"
          class="form-control rounded-4"
          id="introducer"
          placeholder="請輸入介紹人"
          v-model.trim="userInput.Referrer"
        />
      </div>
      <!-- 上殿服裝 -->
      <div v-if="userInput.identity === '居士' && !$route.fullPath.includes('/buddha/signUp')">
        <div class="row gap-4">
          <section class="col-xl">
            <h3 class="h3 mb-4 fw-semibold">上殿服裝</h3>
            <div class="d-flex gap-4 fw-semibold">
              <div class="form-check" v-for="(item, index) in ['海清', '專念']" :key="item + index">
                <input
                  class="form-check-input"
                  type="radio"
                  name="clothing"
                  v-model="userInput.ClothType"
                  :value="item"
                  :id="item + index"
                />
                <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
              </div>
            </div>
          </section>
          <div class="col-xl" v-if="userInput.ClothType === '專念'">
            <label for="clothingSize" class="form-label fw-semibold mb-2">尺寸</label>
            <select
              class="form-select form-select-lg rounded-4"
              id="clothingSize"
              v-model="userInput.ClothSize"
            >
              <option value="" selected disabled>請選擇專念服尺寸</option>
              <option
                :value="item"
                v-for="(item, index) in ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']"
                :key="item + index"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mt-4" v-if="userInput.ClothType === '專念'">
          <div class="col-xl">
            <label for="cm" class="form-label fw-semibold">身高</label>
            <input
              type="number"
              class="form-control rounded-4"
              id="cm"
              placeholder="cm"
              v-model.number="userInput.Height"
            />
          </div>
          <div class="col-xl">
            <label for="kg" class="form-label fw-semibold">體重</label>
            <input
              type="number"
              class="form-control rounded-4"
              id="kg"
              placeholder="kg"
              v-model.number="userInput.Weight"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      :to="props.pre"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <button
      type="button"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
      @click="saveTemp"
    >
      下一步
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from 'vue';
import type { ComputedRef } from 'vue';
import { DatePicker } from 'v-calendar';
import taiwan_districts from '@/assets/lib/taiwan_districts.json';
import overseas_districts from '@/assets/lib/overseas_districts.json';
import { useRouter, useRoute } from 'vue-router';
import Swal from '@/plug/SweetAlert';
import GuestStore from '@/stores/GuestStore';

// address  需另外做判斷 缺身高體重
const userInput = ref({
  Id: null,
  sex: '男眾',
  identity: '法師',
  BirthDate: new Date(), // 出生年月日
  IsMonk: true,
  IsMale: true,
  Mobile: '', // 手機號碼
  Phone: '', // 市話號碼
  Remarks: '', // 備註
  MageNickname: '', // 內號
  DharmaName: '', // 法名 外號
  Name: '', // 俗名
  OrdinationTemple: '', // 受戒道場
  OrdinationDate: new Date(), // 受戒日期
  Altar: '', // 壇別
  ShavedMaster: '', // 剃度師長德號
  ResidentialTemple: '', // 寶剎
  ClothType: '海清',
  ClothSize: '',
  IdNumber: '', // 身分證字號
  EmergencyName: '', // 緊急連絡人姓名
  EmergencyPhone: '', // 緊急連絡電話
  Relationship: '', // 緊急連絡關係
  Referrer: '', // 介紹人
  LineId: '',
  Address: {
    point: '國內',
    state: '',
    county: '',
    township: { zip: '', name: '' },
    taiwan: '',
    oversea: '',
  },
  Area: '', // 地區
  Height: null,
  Weight: null,
});
const date = ref({
  BirthDate: new Date(),
  OrdinationDate: new Date(),
});

const tempUser = ref();
onMounted(() => {
  if (!sessionStorage.tempUser) return;
  tempUser.value = sessionStorage.tempUser && JSON.parse(sessionStorage.tempUser);
  const { IsMale, IsMonk, OrdinationDate, BirthDate, Mobile, Area, ClothSize, Address } =
    tempUser.value;
  userInput.value = tempUser.value;
  userInput.value.Mobile = Mobile;
  userInput.value.sex = IsMale ? '男眾' : '女眾';
  userInput.value.identity = IsMonk ? '法師' : '居士';
  userInput.value.Area = Area || '';
  userInput.value.ClothSize = ClothSize || '';
  date.value.BirthDate = BirthDate ? new Date(BirthDate) : new Date(0);
  date.value.OrdinationDate = OrdinationDate ? new Date(OrdinationDate) : new Date(0);

  // 地址 尚未配置初始值
  userInput.value.Address = Address || {
    point: '國內',
    state: '',
    county: '',
    township: { zip: '', name: '' },
    taiwan: '',
    oversea: '',
  };
});

const props = defineProps({
  next: {
    type: String,
    required: true,
  },
  pre: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const router = useRouter();
const guestStore = GuestStore();
async function saveTemp() {
  // 驗證
  if (userInput.value.identity === '法師') {
    if (
      !userInput.value.DharmaName ||
      !userInput.value.OrdinationTemple ||
      new Date(date.value.OrdinationDate).getTime() === 0 ||
      !userInput.value.ShavedMaster
    ) {
      Swal.fire({
        icon: 'error',
        title: '表單欄位填寫錯誤',
      });
      return;
    }
  } else if (userInput.value.identity === '居士') {
    if (!userInput.value.Name) {
      Swal.fire({
        icon: 'error',
        title: '表單欄位填寫錯誤',
      });
      return;
    }
  }
  if (route.meta.name === '佛七報到' && new Date(date.value.BirthDate).getTime() === 0) {
    Swal.fire({
      icon: 'error',
      title: '請輸入正確出生年月日',
    });
    return;
  }

  // 驗證通過
  if (userInput.value.identity === '法師')
    userInput.value.OrdinationDate = date.value.OrdinationDate;
  // @ts-ignore
  if (new Date(date.value.OrdinationDate).getTime() === 0) userInput.value.OrdinationDate = null;
  if (new Date(date.value.BirthDate).getTime() === 0) {
    // @ts-ignore
    userInput.value.BirthDate = null;
  } else {
    userInput.value.BirthDate = date.value.BirthDate;
  }
  userInput.value.IsMonk = userInput.value.identity === '法師';
  userInput.value.IsMale = userInput.value.sex === '男眾';

  if (!userInput.value.Id) {
    const res = await guestStore.addUser(userInput.value);
    if (res.status) {
      userInput.value.Id = res.data.Id;
      sessionStorage.setItem('tempUser', JSON.stringify(userInput.value));
      router.push(props.next);
    } else {
      Swal.fire({
        icon: 'error',
        title: res.message === '驗證失敗' ? '新增個資失敗' : res.message,
      });
    }
  } else {
    sessionStorage.setItem('tempUser', JSON.stringify(userInput.value));
    router.push(props.next);
  }
}

// 地址配置
interface TaiwanArea {
  districts: { zip: string; name: string }[];
  name: string;
}
interface Oversea {
  中文地區名稱: string;
  中文正式國名: string;
  中文國名簡稱: string;
  英文地區名稱: string;
  英文正式國名: string;
  英文國名簡稱: string;
  field7: string;
}
interface OverseaObj {
  [key: string]: string[];
}
const taiwanArea: TaiwanArea[] = taiwan_districts;
const overseasArea = overseas_districts.reduce((acc: OverseaObj, cur: Oversea) => {
  const region = cur['中文地區名稱'];
  const country = cur['中文正式國名'];

  if (acc[region]) {
    if (!acc[region].includes(country)) {
      acc[region].push(country);
    }
  } else {
    acc[region] = [country];
  }

  return acc;
}, {});

const countyIndex: ComputedRef<number> = computed(() =>
  userInput.value.Address.point === '國內'
    ? taiwanArea.findIndex((item) => item.name === userInput.value.Address.county)
    : -1,
);
</script>
<style scoped lang="scss"></style>
