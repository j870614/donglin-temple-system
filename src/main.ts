import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueScrollTo from 'vue-scrollto';
import { setupCalendar } from 'v-calendar';
import App from './App.vue';
import router from './router';

import './assets/stylesheets/all.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'v-calendar/dist/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueScrollTo, { offset: -100 });
app.use(setupCalendar, {});

app.mount('#app');
