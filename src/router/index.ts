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
      component: () => import('@/views/back/BackLayout.vue'),
      children: [
        {
          path: '',
          components: {
            sidebar: () => import('@/components/back/SideBar.vue'),
          },
        },
      ],
    },
  ],
});

export default router;
