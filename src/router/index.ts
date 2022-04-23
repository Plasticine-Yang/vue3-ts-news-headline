import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from './routes';

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
