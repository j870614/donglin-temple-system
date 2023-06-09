<template>
  <teleport to="title">彌陀之家東林寺-佛七介紹</teleport>
  <div class="wrap">
    <img
      src="@/assets/img/buddha_seven_bg.png"
      alt="佛七banner"
      class="rounded-5 mb-5"
      style="width: 100%"
    />
    <article
      class="fs-5 border border-neutral-60 rounded-4 py-3 px-4 mb-index-sm cursor-point"
      @click.prevent="
        () => {
          isInfoOpen = !isInfoOpen;
          openInfo(isInfoOpen);
        }
      "
      @keydown.prevent="
        () => {
          isInfoOpen = !isInfoOpen;
          openInfo(isInfoOpen);
        }
      "
    >
      <div class="overflow-hidden">
        <p v-for="(content, index) in info" :key="content + index" v-html="content"></p>
      </div>
      <p class="text-end mb-0">
        <span
          style="transform: rotate(180deg)"
          :style="{ transform: isInfoOpen ? 'rotate(180deg)' : 'rotate(0deg)' }"
          class="material-symbols-outlined mb-0"
          >expand_more</span
        >
      </p>
    </article>
    <div class="d-flex flex-column align-items-center">
      <h2 class="h3 fw-semibold mb-5">佛七舉辦時間</h2>
      <div class="position-relative mb-5">
        <div v-for="(item, index) in process" :key="index">
          <span
            class="d-inline-block fw-semibold py-1 px-3 bg-primary-tint text-primary rounded-4"
            >{{ item.period }}</span
          >
          <ol class="list-inline border-start border-2 border-primary-tint ms-5 mb-0 ps-5 py-2">
            <li
              class="d-flex flex-column flex-xl-row justify-content-between mb-3 mb-xl-0 gap-xl-5 fs-5"
              v-for="doing in item.step"
              :key="doing.timer"
            >
              {{ doing.timer }} <span v-html="doing.todo"></span>
            </li>
          </ol>
        </div>
        <span
          class="position-absolute d-inline-block p-2 bg-primary-tint rounded-circle"
          style="bottom: -15px; left: 25px"
        ></span>
      </div>
      <section class="mt-5">
        <h3 class="d-flex align-items-center fs-4 gap-2">
          <span class="material-symbols-outlined text-primary"> info </span>小小提醒：
        </h3>
        <ol class="fs-5 ms-4">
          <li>請準備黑色海青, 或專念服。</li>
          <li>請準備黑色襪子3雙, 以利換洗。</li>
          <li>可攜帶個人用的水杯、或環保餐具、及盥洗用品。</li>
          <li>山林早晚稍涼, 逢秋、冬二季, 請攜帶足夠的衣物。</li>
          <li>冬季宜蘭多雨, 請攜帶雨具。</li>
        </ol>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const info = ref<string[]>([
  '印光大師說，最殊勝、最大利益功德的法會就是打佛七，超越護國消災法會，超越任何經懺的功德。',
  '人人都能念佛，都能達到同心，同心就是一心。<br />念佛人的一心不是禪宗所講的明心見性，而是大家一起念佛，心念是一致的。',
  '《易經》說"二人同心，其利斷金"。三個、三十個或三百個念佛人一起念佛，當下都是同一個心念，這種攝受力量非常大。',
]);
const isInfoOpen = ref<boolean>(false);
function openInfo(isOpen: boolean): void {
  const nextInfo: string[] = [
    '相對的，在一個經懺法會上，大眾讀誦經文時，有的人不認識字、有的人讀錯字、有的人讀得很熟練，如此情況是很難達到心念一致的。',
    '當我們在大殿，同時口稱彌陀名號時，從第一念聲起到煞板，都是同心同念。',
    '所以，印光大師讚歎，佛七是最殊勝的法會功德。<br />真正念佛，打佛七才能消除我們的業障，乃至我們臨終時能蒙佛接引。',
    '一切歸功於我們平時念佛的因，才能蒙佛慈悲加佑，令心不亂往生淨土的果。',
  ];

  if (isOpen) {
    nextInfo.forEach((item) => {
      info.value.push(item);
    });
  } else {
    nextInfo.forEach(() => {
      info.value.pop();
    });
  }
}

interface Todo {
  timer: string;
  todo: string;
}
interface Process {
  period: string;
  step: Todo[];
}
const process: Process[] = [
  {
    period: '早課',
    step: [
      {
        timer: 'AM 5:00 - AM 6:00',
        todo: '拜佛&emsp;&emsp;',
      },
    ],
  },
  {
    period: '早上',
    step: [
      {
        timer: 'AM 8:00 - AM 8:30',
        todo: '靜坐念佛',
      },
      {
        timer: 'AM 8:30 - AM 9:30',
        todo: '繞佛&emsp;&emsp;',
      },
      {
        timer: 'AM 9:30 - AM 10:00',
        todo: '靜坐念佛',
      },
      {
        timer: 'AM 10:00 - AM 11:00',
        todo: '自由香&emsp;',
      },
    ],
  },
  {
    period: '下午',
    step: [
      {
        timer: 'PM 14:00 - PM 14:30',
        todo: '靜坐念佛',
      },
      {
        timer: 'PM 14:30 - PM 15:30',
        todo: '繞佛&emsp;&emsp;',
      },
      {
        timer: 'PM 15:30 - PM 16:00',
        todo: '靜坐念佛',
      },
      {
        timer: 'PM 16:00 - PM 17:00',
        todo: '自由香&emsp;',
      },
    ],
  },
  {
    period: '晚上',
    step: [
      {
        timer: 'PM 19:00 - PM 19:30',
        todo: '靜坐念佛',
      },
      {
        timer: 'PM 19:30 - PM 20:30',
        todo: '拜佛&emsp;&emsp;',
      },
      {
        timer: 'PM 21:00 -',
        todo: '安板&emsp;&emsp;',
      },
    ],
  },
];
</script>
<style scoped lang="scss">
.wrap {
  margin: 0 12px;
  @media (min-width: 1200px) {
    margin: 0 67px;
  }
}
.mb-index {
  margin-bottom: 5rem;
  @media (min-width: 1200px) {
    margin-bottom: 10rem;
  }
  &-sm {
    padding-bottom: 6.5rem;
    margin-bottom: 2.5rem;
    @media (min-width: 1200px) {
      padding-bottom: 2.5rem;
      margin-bottom: 5rem;
    }
  }
}
</style>
