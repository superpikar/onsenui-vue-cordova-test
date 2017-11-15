/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    findContactsLength: 0,
    pickContactsLength: 0,
  },
  mutations: {
    toggleMenu(state, isToggle) {
      if (typeof isToggle !== 'undefined') {
        state.menuIsOpen = isToggle;
      } else {
        state.menuIsOpen = !state.menuIsOpen;
      }
    },
    setFindContactsLength(state, length) {
      state.findContactsLength = length;
    },
    setPickContactsLength(state, length) {
      state.pickContactsLength = length;
    },
  },
});
