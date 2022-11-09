import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
Vue.use(PiniaVuePlugin);

const app = new Vue({
  pinia,
  render: (h) => h(App),
});

app.$mount('#app');
