import type { RouteRecordRaw } from 'vue-router';

import Home from '@/pages/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:uniquekey/:pageFrom',
    name: 'Detail',
    component: () => import('@/pages/Detail.vue'),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/pages/Collection.vue'),
  },
];
