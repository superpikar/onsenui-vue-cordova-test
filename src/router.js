import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import CameraPage from './pages/CameraPage';
import BluetoothPage from './pages/BluetoothPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

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
  }, {
    path: '/camera',
    component: CameraPage,
  }, {
    path: '/posts',
    component: PostsPage,
  }, {
    path: '/posts/:slug',
    component: PostPage,
  }],
});
