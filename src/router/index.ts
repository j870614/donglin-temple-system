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
          path: '/',
          component: () => import('@/views/front/FrontIndex.vue'),
        },
        {
          path: 'buddha',
          component: () => import('@/views/front/BuddhaSeven.vue'),
        },
      ],
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('@/views/back/BackLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/back/BackIndex.vue'),
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
  ],
});

export default router;
