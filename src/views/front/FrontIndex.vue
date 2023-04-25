<template>
  <div class="wrap">
    <img
      src="@/assets/img/index-banner-img.png"
      alt="banner"
      class="img-fluid rounded-5 mb-index"
    />
    <div class="container mb-index">
      <h2 class="mb-lg-5 mb-5">最新消息</h2>
      <ol class="list-inline mt-lg-2" style="max-height: 23rem; overflow-y: scroll">
        <li
          v-for="i in 4"
          :key="i"
          class="d-flex align-items-center gap-3 p-lg-4 py-3 px-2-5 border-bottom border-neutral-40 box-hover"
        >
          <span class="d-inline-block bg-primary-tint text-primary py-2 px-3 rounded-4">活動</span>
          <div>
            <h3 class="h6 fw-semibold">釋迦牟尼佛成道日暨剃度典禮</h3>
            <p class="text-neutral-80">2023 年 3 月 1 日</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
  <div class="bg-neutral-10 pt-5 px-2-5 mb-index-sm">
    <div class="container mx-auto py-2">
      <div class="row justify-content-between">
        <div class="col-lg-4 bg-white rounded-5 gx-0 p-5">
          <h3 class="h4 mb-4 fw-semibold">彌陀之家，常年佛七</h3>
          <div class="ps-5 border-start border-4 border-neutral-40">
            <p class="ms-2 mb-2 text-neutral-80">已圓滿</p>
            <p class="ms-2 fs-5 text-primary fw-semibold">
              <span class="me-3" style="font-size: 80px; line-height: 90px">460</span>個佛七
            </p>
          </div>
        </div>
        <div class="col-lg-7 d-flex align-items-center justify-content-end">
          <div class="buddha-point position-relative ms-5 ms-lg-0">
            <p class="position-absolute fs-3 fw-semibold buddha-title">起香</p>
            <p
              class="position-absolute mb-0 text-neutral-80 d-flex flex-column align-items-center buddha-timer"
            >
              2010 年 <span>6 月 1 日</span>
            </p>
          </div>
          <div class="flex-grow-1 border-neutral-60 buddha-line" style="border: 2px solid"></div>
          <div class="d-flex flex-column align-items-center me-5 me-lg-0">
            <div class="buddha-point">
              <p class="position-absolute fs-3 fw-semibold buddha-title">至今</p>
              <p
                class="position-absolute mb-0 text-neutral-80 d-flex flex-column align-items-center buddha-timer"
              >
                2023 年 <span>3 月 7 日</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row gap-3 gap-lg-0 mb-index">
      <div class="col-12 col-lg mb-4 mb-lg-0 d-flex flex-column justify-content-between">
        <h2 class="h3 mb-lg-3 mb-0 fw-semibold">佛七介紹</h2>
        <p class="fs-7 py-4 mb-0">
          每逢國曆的一日至七日等，七天念佛；
          <br />
          逢八日至十日等，放香三天，如此常行不斷。
        </p>
        <div
          class="mb-4"
          style="
            background: linear-gradient(270deg, #ffe5db 0%, #ff7640 88.78%);
            height: 16px;
            border-radius: 100px;
          "
        ></div>
        <div>
          <router-link
            to="/buddha"
            class="float-start btn btn-outline-primary rounded-4 border border-2 border-primary text-primary d-flex align-items-center fw-semibold py-3 px-5 py-lg-3 px-lg-2-5"
          >
            更多關於佛七<span class="material-symbols-outlined"> arrow_forward </span>
          </router-link>
        </div>
      </div>
      <div class="col-12 col-lg" v-for="(item, index) in buddha" :key="item.title + index">
        <section
          class="border border-2 d-flex flex-column align-items-center justify-content-center p-5 h-100"
          :class="`border-${item.color}`"
          style="border-radius: 20px"
        >
          <h3 class="mb-3">{{ item.title }}</h3>
          <div
            class="d-flex gap-2 flex-column flex-lg-row align-items-center mb-3"
            :class="`text-${item.textColor}`"
          >
            <p
              class="mb-0 py-2 px-3 rounded-4"
              :class="`bg-${item.secondaryColor}`"
              v-for="(date, index) in item.dates"
              :key="date + index"
            >
              {{ date }} 日
            </p>
          </div>
          <p class="text-neutral-80 mb-0">{{ item.content }}</p>
        </section>
      </div>
    </div>
    <h2 class="h3 mb-5" id="transportation">交通資訊</h2>
    <div class="row gx-lg-5 gap-lg-5">
      <div class="col-12 col-lg indexMap mb-5 mb-lg-0">
        <div ref="indexMap" class="h-100 w-100 rounded-4"></div>
      </div>
      <div class="col-12 col-lg mt-2 mt-lg-0 ms-lg-3">
        <h3 class="h5">彌陀之家東林寺</h3>
        <p class="fs-4 text-neutral-80 mb-4">宜蘭縣冬山鄉太和村寶和路638號</p>
        <div
          class="mb-5"
          style="
            background: linear-gradient(270deg, #ffe5db 0%, #ff7640 88.78%);
            height: 16px;
            border-radius: 100px;
          "
        ></div>
        <ul class="mt-2 mb-0 list-inline d-flex flex-column gap-4">
          <li
            class="border border-neutral-40 p-4 rounded-3 box-hover"
            v-for="info in transportation"
            :key="info.icon"
          >
            <p class="fs-5 mb-3 fw-semibold d-flex align-items-center gap-2-5">
              <span class="material-symbols-outlined text-primary"> {{ info.icon }} </span
              >{{ info.title }}
            </p>
            <p class="text-neutral-80 mb-0">
              {{ info.content }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Buddha {
  title: string;
  dates: string[];
  content: string;
  color: string;
  secondaryColor: string;
  textColor: string;
}
const buddha = ref<Buddha[]>([
  {
    title: '佛七',
    dates: ['1-7', '11-17', '21-27'],
    content: '佛七為為本寺主要的修行方式，7、17、27 為佛七圓滿日，過了圓滿日佛七期數 +1。',
    color: 'primary',
    secondaryColor: 'primary-tint',
    textColor: 'primary',
  },
  {
    title: '放香',
    dates: ['8-10', '18-20', '28-30'],
    content: '放香之日，從善導大師的述作中拈出隻字片語，暢談彌陀悲心。',
    color: 'neutral-60',
    secondaryColor: 'neutral-40',
    textColor: 'neutral-80',
  },
]);

interface Transportation {
  icon: string;
  title: string;
  content: string;
}
const transportation = ref<Transportation[]>([
  {
    icon: 'directions_car',
    title: '開車前往',
    content:
      '從台北開車往宜蘭，下宜蘭交流道後沿台9線往冬山方向，到太和村右轉進入寶和路，行駛約100公尺即可到達。',
  },
  {
    icon: 'train',
    title: '搭乘火車',
    content: '從羅東火車站下車後，搭乘計程車車程約20分鐘左右抵達。',
  },
  {
    icon: 'directions_bus',
    title: '搭乘客運',
    content: '搭乘國光客運或統聯客運於羅東轉運站下車，搭乘計程車車程約20分鐘左右抵達。',
  },
]);

const indexMap = ref<string | HTMLElement>('null');
onMounted(() => {
  const map = L.map(indexMap.value).setView([24.623211, 121.765145], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
    maxZoom: 25,
  }).addTo(map);

  L.marker([24.623211, 121.765145]).addTo(map).bindPopup('彌陀之家東林寺');
});
</script>

<style scoped lang="scss">
@import '@/assets/stylesheets/all.scss';
.wrap {
  margin: 0 12px;
  @media (min-width: 992px) {
    margin: 0 67px;
  }
}
.mb-index {
  margin-bottom: 5rem;
  @media (min-width: 992px) {
    margin-bottom: 10rem;
  }
  &-sm {
    padding-bottom: 6.5rem;
    margin-bottom: 2.5rem;
    @media (min-width: 992px) {
      padding-bottom: 2.5rem;
      margin-bottom: 5rem;
    }
  }
}
.buddha {
  &-point {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 8px rgba(255, 118, 64, 0.1);
    border: 4px solid $primary;
    margin-top: 84px;
    @media (min-width: 992px) {
      margin-top: 0;
      width: 32px;
      height: 32px;
    }
  }
  &-line {
    margin-top: 85px;
    @media (min-width: 992px) {
      margin-top: 0;
    }
  }
  &-title {
    top: -4rem;
    left: -1rem;
    width: 4rem;
  }
  &-timer {
    top: 3rem;
    left: -1rem;
    width: 4rem;
  }
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
.indexMap {
  @media (max-width: 992px) {
    height: calc(100vw - 24px);
    max-height: 500px;
  }
}
</style>
