import { createApp } from 'vue';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

import router from './router';
import { getNewsList } from './api';

const app = createApp(App);

app.use(router);

getNewsList('top');

app.mount('#app');
