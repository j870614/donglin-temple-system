import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

import './assets/stylesheets/all.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueScrollTo, { offset: -100 });

app.mount('#app');
