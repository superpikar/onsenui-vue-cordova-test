// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueOnsen from 'vue-onsenui';
import App from './App';

import store from './store';
import router from './router';
import Navbar from './components/Navbar';

import './assets/css/style.css';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueRouter);

// global component
Vue.component('navbar', Navbar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
  },
});
