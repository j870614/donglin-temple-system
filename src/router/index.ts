import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/front/FrontLayout.vue'),
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('@/views/back/BackLayout.vue'),
      children: [
        {
          path: 'announcement',
          component: () => import('@/views/back/System_Notification.vue'),
        },
      ],
    },
  ],
});

export default router;
