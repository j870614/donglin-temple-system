import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueScrollTo from 'vue-scrollto';
import { setupCalendar } from 'v-calendar';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/stylesheets/all.scss';
import 'v-calendar/dist/style.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueScrollTo, { offset: -100 });
app.use(setupCalendar, {});
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
