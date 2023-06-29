import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/front/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'frontIndex',
          component: () => import('@/views/front/FrontIndex.vue'),
        },
        {
          path: 'buddha',
          component: () => import('@/views/front/BuddhaSeven.vue'),
        },
        {
          path: ':id',
          component: () => import('@/views/front/BuddhaCheckIn.vue'),
        },
      ],
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('@/views/back/BackLayout.vue'),
      children: [
        {
          path: '',
          name: 'backIndex',
          component: () => import('@/views/back/BackIndex.vue'),
        },
        {
          path: 'rooms',
          component: () => import('@/views/back/RoomsArrange.vue'),
        },
        {
          path: 'booking',
          component: () => import('@/views/back/RoomsBooking.vue'),
        },
        {
          path: 'bookingHistory',
          component: () => import('@/views/back/RoomsHistory.vue'),
        },
        {
          path: 'buddha',
          children: [
            {
              path: 'list',
              component: () => import('@/views/back/BuddhaList.vue'),
            },
            {
              path: 'signUp',
              meta: {
                name: '佛七報名',
                form: '簡易',
              },
              component: () => import('@/views/back/BuddhaSignUp.vue'),
            },
            {
              path: 'checkIn',
              meta: {
                name: '佛七報到',
              },
              component: () => import('@/views/back/BuddhaCheckIn.vue'),
            },
          ],
        },
        {
          path: 'permissions',
          children: [
            {
              path: 'manage',
              component: () => import('@/views/back/AuthorityManagement.vue'),
            },
            {
              path: 'authorized',
              children: [
                {
                  path: '',
                  component: () => import('@/views/back/AdminAuthorization.vue'),
                },
                {
                  path: 'new',
                  name: 'addNewAuthorized',
                  component: () => import('@/views/back/AddAuthorization.vue'),
                  meta: {
                    form: '簡易',
                  },
                },
              ],
            },
            {
              path: 'buddha',
              component: () => import('@/views/back/SetBuddha.vue'),
            },
          ],
        },
        {
          path: 'announcement',
          children: [
            {
              path: 'history',
              component: () => import('@/views/back/SystemNotification.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminLogin.vue'),
    },
    {
      path: '/login-loading',
      name: 'loading',
      component: () => import('@/views/LoginLoading.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/AdminRegister.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
