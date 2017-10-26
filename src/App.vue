<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <sidebar-menu></sidebar-menu>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <router-view></router-view>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import SidebarMenu from './components/SidebarMenu';

export default {
  name: 'app',
  components: {
    SidebarMenu,
  },
  computed: {
    menuIsOpen: {
      get() {
        return this.$store.state.menuIsOpen;
      },
      set(newValue) {
        this.$store.commit('toggleMenu', newValue);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
