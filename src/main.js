import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import './axios';
//import '../src/assets/css/objectlist.css';
import '../src/assets/css/tailwind.css';

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
createApp(App).use(router).mount('#immo1-objectlist')

import "bootstrap/dist/js/bootstrap.js"

