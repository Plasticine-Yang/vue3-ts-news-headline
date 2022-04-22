import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/Detail.vue'),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/pages/Collection.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
