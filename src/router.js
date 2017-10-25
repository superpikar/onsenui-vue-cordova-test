import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';

export default new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: HomePage,
  }, {
    path: '/contacts',
    component: ContactsPage,
  }],
});
