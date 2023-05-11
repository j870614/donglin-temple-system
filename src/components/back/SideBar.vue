<template>
  <div class="h-100 d-flex flex-column justify-content-between py-2 my-1 my-xl-3 pt-xl-0">
    <ul class="list-inline">
      <template v-for="nav in sideNav" :key="nav.name + nav.icon">
        <!-- 第一層級 -->
        <li
          class="fs-5 style-sidebar flex-center"
          :class="{
            'bg-neutral-10':
              hoverNavName === nav.name + nav.icon && currentNavName !== nav.name + nav.path,
            'bg-primary text-white': !nav.children && currentNavName === nav.name + nav.path,
          }"
          @mouseenter.self="() => (hoverNavName = nav.name + nav.icon)"
          @focus.prevent="() => (hoverNavName = nav.name + nav.icon)"
          @mouseleave.self="() => (hoverNavName = '')"
          @blur.prevent="() => (hoverNavName = '')"
          @click.prevent="
            () => {
              nav.children ? changeOpen(nav, null) : changePath(nav.name, nav.path);
            }
          "
          @keydown.prevent="
            () => {
              nav.children ? changeOpen(nav, null) : changePath(nav.name, nav.path);
            }
          "
        >
          <div class="fw-semibold d-flex align-items-center gap-3">
            <span class="material-symbols-outlined fs-3">{{ nav.icon }} </span>
            {{ nav.name }}
          </div>
          <span
            v-if="nav.children"
            class="material-symbols-outlined"
            :style="{
              transform: nav.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }"
          >
            expand_more
          </span>
        </li>
        <template v-if="nav.children && nav.isOpen">
          <template v-for="navChild in nav.children" :key="navChild.name + navChild.icon">
            <template v-if="navChild.children && navChild.children.length">
              <!-- 第二層級,有多層級 -->
              <li
                class="fs-5 flex-center style-sidebar"
                :class="{
                  'bg-neutral-10': hoverNavName === navChild.name + navChild.icon,
                }"
                @mouseenter.self="() => (hoverNavName = navChild.name + navChild.icon)"
                @focus.prevent="() => (hoverNavName = navChild.name + navChild.icon)"
                @mouseleave.self="() => (hoverNavName = '')"
                @blur.prevent="() => (hoverNavName = '')"
                @click.prevent="
                  () => {
                    changeOpen(nav, navChild);
                  }
                "
                @keydown.prevent="
                  () => {
                    changeOpen(nav, navChild);
                  }
                "
              >
                <div class="fw-semibold d-flex align-items-center gap-3">
                  <span class="material-symbols-outlined fs-3">{{ navChild.icon }} </span>
                  {{ navChild.name }}
                </div>
                <span
                  class="material-symbols-outlined"
                  :style="{
                    transform: navChild.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }"
                >
                  expand_more
                </span>
              </li>
              <template v-if="navChild.isOpen">
                <ul
                  class="list-inline border-start border-neutral-40 border-4"
                  style="margin-left: 2rem"
                  v-for="innerChild in navChild.children"
                  :key="innerChild.name"
                >
                  <!-- 第三層級 -->
                  <li
                    class="fs-5 style-sidebar"
                    :class="{
                      'bg-primary text-white': $route.fullPath
                        .split('/back')[1]
                        .includes(innerChild.path),
                      'bg-neutral-10':
                        hoverNavName === innerChild.name &&
                        !$route.fullPath.split('/back')[1].includes(innerChild.path),
                    }"
                    @mouseenter.self="() => (hoverNavName = innerChild.name)"
                    @focus.prevent="() => (hoverNavName = innerChild.name)"
                    @mouseleave.self="() => (hoverNavName = '')"
                    @blur.prevent="() => (hoverNavName = '')"
                    @click.prevent="() => changePath(innerChild.name, innerChild.path)"
                    @keydown.prevent="() => changePath(innerChild.name, innerChild.path)"
                  >
                    <div class="fw-semibold">{{ innerChild.name }}</div>
                  </li>
                </ul>
              </template>
            </template>
            <!-- 僅第二層級 -->
            <li
              v-else
              class="fs-5 style-sidebar"
              :class="{
                'bg-primary text-white': $route.fullPath.split('/back')[1].includes(navChild.path),
                'bg-neutral-10':
                  hoverNavName === navChild.name && !$route.fullPath.includes(navChild.path),
              }"
              @mouseenter.self="() => (hoverNavName = navChild.name)"
              @focus.prevent="() => (hoverNavName = navChild.name)"
              @mouseleave.self="() => (hoverNavName = '')"
              @blur.prevent="() => (hoverNavName = '')"
              @click.prevent="() => changePath(navChild.name, navChild.path)"
              @keydown.prevent="() => changePath(navChild.name, navChild.path)"
            >
              <div class="fw-semibold d-flex align-items-center gap-3">
                <span class="material-symbols-outlined fs-3">{{ navChild.icon }} </span>
                {{ navChild.name }}
              </div>
            </li>
          </template>
        </template>
      </template>
    </ul>
    <router-link
      to=""
      class="fs-5 fw-semibold style-sidebar d-flex align-items-center gap-3"
      :class="{ 'bg-neutral-10': hoverNavName === '登出' }"
      @mouseenter.self="() => (hoverNavName = '登出')"
      @focus.prevent="() => (hoverNavName = '登出')"
      @mouseleave.self="() => (hoverNavName = '')"
      @blur.prevent="() => (hoverNavName = '')"
      ><span class="material-symbols-outlined"> logout </span>登出</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import sideBarConfigStore from '@/stores/SideBarConfig';

const router = useRouter();

interface NavItem {
  icon?: string;
  path: string;
  name: string;
  isOpen?: boolean;
  children?: NavItem[];
}
interface Permissions {
  [key: string]: NavItem;
}
const permissions: Permissions = {
  系統管理: {
    icon: 'build',
    path: '',
    name: '系統管理',
    isOpen: false,
    children: [
      {
        icon: 'vpn_key',
        path: '',
        name: '使用者權限',
        isOpen: false,
        children: [
          {
            path: '/permissions/manage',
            name: '使用者權限管理',
          },
          {
            path: '/permissions/authorized',
            name: '使用者權限核發',
          },
        ],
      },
      {
        icon: 'settings',
        path: '',
        name: '系統設定',
        isOpen: false,
        children: [
          {
            path: '',
            name: '佛七期數設定',
          },
          {
            path: '',
            name: '行事曆新增、修改',
          },
        ],
      },
      {
        icon: 'notifications',
        path: '',
        name: '系統公告',
        isOpen: false,
        children: [
          {
            path: '',
            name: '公告新增',
          },
          {
            path: '',
            name: '歷史公告查詢',
          },
        ],
      },
    ],
  },
  知客: {
    icon: 'group',
    path: '',
    name: '知客',
    isOpen: false,
    children: [
      {
        icon: 'edit_calendar',
        path: '',
        name: '佛七報名預約',
        isOpen: false,
        children: [
          {
            path: '/buddha/list',
            name: '佛七報名預約名單',
          },
          {
            path: '/buddha/signUp?step=1',
            name: '佛七報名',
          },
          {
            path: '',
            name: '佛七報到',
          },
        ],
      },
      {
        icon: 'badge',
        path: '',
        name: '皈依報名',
        isOpen: false,
        children: [
          {
            path: '',
            name: '皈依報名名單',
          },
          {
            path: '',
            name: '皈依報名',
          },
          {
            path: '',
            name: '皈依資料建檔',
          },
        ],
      },
      {
        icon: 'calendar_month',
        path: '',
        name: '參訪及活動',
        isOpen: false,
        children: [
          {
            path: '',
            name: '來寺參訪預約',
          },
          {
            path: '',
            name: '參與活動人數登記',
          },
        ],
      },
    ],
  },
  寮房: {
    icon: 'house_siding',
    path: '',
    name: '寮房',
    isOpen: false,
    children: [
      {
        icon: 'hotel',
        path: '',
        name: '預約及安單',
        isOpen: false,
        children: [
          {
            path: '',
            name: '安排寮房',
          },
          {
            path: '',
            name: '報到安單',
          },
          {
            path: '',
            name: '離單',
          },
        ],
      },
      {
        icon: 'help_clinic',
        path: '',
        name: '寮房資訊',
        isOpen: false,
        children: [
          {
            path: '',
            name: '查詢寮房資訊',
          },
          {
            path: '',
            name: '更換寮房',
          },
          {
            path: '',
            name: '設備報修',
          },
        ],
      },
      {
        icon: 'calendar_month',
        path: '',
        name: '日常坡事',
        isOpen: false,
        children: [
          {
            path: '',
            name: '坡事列表',
          },
          {
            path: '',
            name: '坡事安排',
          },
        ],
      },
    ],
  },
  四眾個人資料: {
    icon: 'draft',
    path: '',
    name: '四眾個人資料',
    isOpen: false,
    children: [
      {
        icon: 'search',
        path: '',
        name: '查詢四眾個人資料',
        isOpen: false,
        children: [],
      },
    ],
  },
  查詢用齋人數: {
    icon: 'restaurant_menu',
    path: '',
    name: '查詢用齋人數',
    isOpen: false,
  },
};

const nav = ref<NavItem[]>([
  {
    icon: 'house',
    path: '',
    name: '回首頁',
    isOpen: false,
  },
]);
const user = ref<string>('管理員'); // 這邊是使用者的身分, 跟下方的控制 sidebar 選項
switch (user.value) {
  case '管理員':
    nav.value.push(
      permissions['系統管理'],
      permissions['知客'],
      permissions['寮房'],
      permissions['四眾個人資料'],
      permissions['查詢用齋人數'],
    );
    break;
  case '知客':
    nav.value.push(permissions['知客'], permissions['四眾個人資料'], permissions['查詢用齋人數']);
    break;
  case '寮房':
    nav.value.push(permissions['寮房'], permissions['四眾個人資料'], permissions['查詢用齋人數']);
    break;
  default:
}

const sideNav = ref(nav);
const hoverNavName = ref('');
const currentNavName = ref('');

function changeCurrent(name: string, path: string): void {
  currentNavName.value = name + path;
}

const webWidth = ref<number>(0);
const sideBarStore = sideBarConfigStore();

function changePath(name: string, path: string): void {
  webWidth.value = window.innerWidth;
  changeCurrent(name, path);
  router.push(`/back${path}`);
  if (webWidth.value < 1200) {
    sideBarStore.isOpen = false;
  }
}

function changeOpen(firstNav: NavItem, secondNav: NavItem | null): void {
  const firstIndex = nav.value.findIndex((item) => item.name === firstNav.name);
  if (secondNav) {
    const outNav = nav.value[firstIndex];
    if (outNav.children) {
      const secondIndex: number = outNav.children.findIndex((item) => item.name === secondNav.name);
      // 第二層級選單開關
      outNav.children[secondIndex].isOpen = !outNav.children[secondIndex].isOpen;
      changeCurrent(outNav.children[secondIndex].name, outNav.children[secondIndex].path);
    }
    return;
  }

  // 第一層級關掉默認關閉第二層級
  if (nav.value[firstIndex].isOpen) {
    const outNav = nav.value[firstIndex];
    if (outNav?.children) {
      outNav.children.forEach((item, index, childNav) => {
        const arr = childNav;
        arr[index].isOpen = false;
      });
    }
  }
  // 第一層級選單開關
  nav.value[firstIndex].isOpen = !nav.value[firstIndex].isOpen;
  changeCurrent(nav.value[firstIndex].name, nav.value[firstIndex].path);
}
</script>
<style scoped lang="scss">
.flex-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.style-sidebar {
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
}
</style>
