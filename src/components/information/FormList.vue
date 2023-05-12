<template>
  <div class="row justify-content-center gap-4 mx-0">
    <div class="col-xl-5 box-style gx-xl-0 p-xl-5 p-3 h-max">
      <!-- 個人資訊 -->
      <section class="mb-5">
        <h3 class="h3 mb-4 fw-semibold">請填寫您的個人資訊</h3>
        <div class="d-flex gap-4 fw-semibold mb-3">
          <div class="form-check" v-for="(item, index) in ['男眾', '女眾']" :key="item + index">
            <input
              v-model="user.sex"
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
            <DatePicker v-model="user.birthday" trim-weeks color="orange">
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
            />
          </div>
          <div class="col-xl">
            <label for="tel" class="form-label fw-semibold">市話號碼</label>
            <input type="tel" class="form-control rounded-4" id="tel" placeholder="03-12345678" />
          </div>
        </div>
        <div v-if="!$route.fullPath.includes('/buddha/signUp')">
          <label for="line" class="form-label fw-semibold">LINE 帳號</label>
          <input
            type="text"
            class="form-control rounded-4"
            id="line"
            placeholder="請輸入 LINE 帳號"
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
              v-model="user.address.point"
              :value="item"
            />
            <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
          </div>
        </div>
        <!-- 國內 -->
        <template v-if="user.address.point === '國內'">
          <div class="row mb-3 gap-4 gap-xl-0">
            <div class="col-xl">
              <label for="postal" class="form-label fw-semibold">郵遞區號</label>
              <input
                type="text"
                class="form-control rounded-4"
                id="postal"
                placeholder="請輸入郵遞區號"
                disabled
                :value="user.address.township.zip"
              />
            </div>
            <div class="col-xl">
              <label for="county" class="form-label fw-semibold mb-2">縣市</label>
              <select
                class="form-select form-select-lg rounded-4"
                id="county"
                v-model="user.address.county"
                @change="(user.address.township = { zip: '', name: '' }), (countyIndex = -1)"
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
                v-model="user.address.township"
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
              v-model="user.address.taiwan"
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
                v-model="user.address.state"
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
                  v-for="(county, index) in overseasArea[user.address.state]"
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
              v-model="user.address.oversea"
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
            />
          </div>
          <div class="col-xl">
            <label for="urgentPhone" class="form-label fw-semibold">電話號碼</label>
            <input
              type="tel"
              class="form-control rounded-4"
              id="urgentPhone"
              placeholder="請輸入緊急聯絡人電話號碼"
            />
          </div>
        </div>
        <label for="relation" class="form-label fw-semibold">關係</label>
        <select class="form-select form-select-lg mb-3" id="relation" v-model="user.Relationship">
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
        <textarea class="form-control rounded-4" id="msg" style="min-height: 10rem"></textarea>
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
              v-model="user.identity"
              :value="item"
            />
            <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
          </div>
        </div>
      </section>

      <div class="row mb-5 pt-2 gap-4 gap-xl-0">
        <template v-if="user.identity === '法師'">
          <div class="col-xl">
            <label for="outerName" class="form-label fw-semibold"
              ><span class="text-danger">*</span>外號</label
            >
            <input
              type="text"
              class="form-control rounded-4"
              id="outerName"
              placeholder="請輸入外號"
            />
          </div>
          <div class="col-xl">
            <label for="innerName" class="form-label fw-semibold">內號</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="innerName"
              placeholder="請輸入內號"
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
            />
          </div>
        </template>
        <div class="col-xl">
          <label for="originName" class="form-label fw-semibold"
            ><span class="text-danger" v-if="user.identity === '居士'">*</span>俗名</label
          >
          <input
            type="text"
            class="form-control rounded-4"
            id="originName"
            placeholder="請輸入俗名"
          />
        </div>
      </div>
      <template v-if="user.identity === '法師'">
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
            />
          </div>
          <div class="col-xl">
            <label for="ordainedDate" class="form-label fw-semibold"
              ><span class="text-danger">*</span>受戒日期</label
            >
            <DatePicker v-model="user.ordainedDate" trim-weeks color="orange">
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
              type="number"
              class="form-control rounded-4"
              id="altar"
              placeholder="請輸入壇別"
              min="0"
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
            />
          </div>
          <div class="col-xl">
            <label for="roomName" class="form-label fw-semibold">寶剎</label>
            <input
              type="text"
              class="form-control rounded-4"
              id="roomName"
              placeholder="請輸入現住道場名稱"
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
          <select class="form-select form-select-lg rounded-4" id="area" v-model="user.area">
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
        />
      </div>
      <!-- 上殿服裝 -->
      <div v-if="user.identity === '居士' && !$route.fullPath.includes('/buddha/signUp')">
        <div class="row gap-4">
          <section class="col-xl">
            <h3 class="h3 mb-4 fw-semibold">上殿服裝</h3>
            <div class="d-flex gap-4 fw-semibold">
              <div class="form-check" v-for="(item, index) in ['海清', '專念']" :key="item + index">
                <input
                  class="form-check-input"
                  type="radio"
                  name="clothing"
                  v-model="user.clothingType"
                  :value="item"
                  :id="item + index"
                />
                <label class="form-check-label fs-5" :for="item + index"> {{ item }} </label>
              </div>
            </div>
          </section>
          <div class="col-xl" v-if="user.clothingType === '專念'">
            <label for="clothingSize" class="form-label fw-semibold mb-2">尺寸</label>
            <select
              class="form-select form-select-lg rounded-4"
              id="clothingSize"
              v-model="user.clothingSize"
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
        <div class="row mt-4" v-if="user.clothingType === '專念'">
          <div class="col-xl">
            <label for="cm" class="form-label fw-semibold">身高</label>
            <input type="number" class="form-control rounded-4" id="cm" placeholder="cm" />
          </div>
          <div class="col-xl">
            <label for="kg" class="form-label fw-semibold">體重</label>
            <input type="number" class="form-control rounded-4" id="kg" placeholder="kg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end gap-3 mt-3 mt-xl-4">
    <router-link
      to="/back/buddha/signUp?step=1"
      class="btn btn-outline-primary py-3 flex-grow-1"
      style="max-width: 184px"
    >
      上一步
    </router-link>
    <router-link
      to="/back/buddha/signUp?step=3"
      class="btn btn-primary text-white py-3 flex-grow-1"
      style="max-width: 184px"
    >
      下一步
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { DatePicker } from 'v-calendar';
import taiwan_districts from '@/assets/lib/taiwan_districts.json';
import overseas_districts from '@/assets/lib/overseas_districts.json';

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

const user = ref({
  sex: '男眾',
  identity: '法師',
  ordainedDate: new Date(),
  birthday: new Date(),
  clothingType: '海清',
  clothingSize: '',
  address: {
    point: '國內',
    state: '',
    county: '',
    township: { zip: '', name: '' },
    taiwan: '',
    oversea: '',
  },
  Relationship: '',
  area: '',
});
const countyIndex: ComputedRef<number> = computed(() =>
  user.value.address.point === '國內'
    ? taiwanArea.findIndex((item) => item.name === user.value.address.county)
    : -1,
);
</script>
<style scoped lang="scss"></style>
