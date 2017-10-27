import Vue from 'vue';
import Helper from './helper';

Vue.filter('parsePhoneNumber', Helper.parsePhoneNumber);
Vue.filter('parseSmsText', Helper.setSmsText);
