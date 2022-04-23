import { createApp } from 'vue';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

import { setupRouter } from './router';
import { setupPinia } from './store';

function bootstrap() {
  const app = createApp(App);

  // vue-router
  setupRouter(app);

  // pinia
  setupPinia(app);

  app.mount('#app');
}

bootstrap();
