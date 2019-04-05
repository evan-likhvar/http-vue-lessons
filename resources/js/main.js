require('./bootstrap');

import 'babel-polyfill'
import App from './App.vue'
import Vue from 'vue'
import store from './store/store'
//import VueResource from 'vue-resource'
import router from './routes'
import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import Button from './components/UI/button'
import axios from 'axios';
import Vuelidate from 'vuelidate'


Vue.component('app-button',Button);

/* Material*/
Vue.use(MdCard);

Vue.prototype.$axios = axios;

Vue.use(Vuelidate);


store.state.admin.user = sessionStorage.getItem('user');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
