import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import BluetoothPage from './pages/BluetoothPage';

export default new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: HomePage,
  }, {
    path: '/contacts',
    component: ContactsPage,
  }, {
    path: '/bluetooth',
    component: BluetoothPage,
  }],
});
