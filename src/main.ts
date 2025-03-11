import { createApp } from 'vue';
import './reset.css';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import ZHLang from './config/zh.json';
import ENLang from './config/en.json';

import { createWebHistory, createRouter } from 'vue-router';

// @ts-ignore
import { routes } from 'vue-router/auto-routes';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    zh: ZHLang,
    en: ENLang,
  },
  globalInjection: true,
});
app.use(i18n);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/home',
    },
  ],
});

app.use(router);

app.mount('#app');
