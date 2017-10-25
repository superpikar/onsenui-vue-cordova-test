<template>
  <v-ons-page>
    <navbar></navbar>
    <div class="main-content">
      <div class="header">
        <img src="../assets/logo.png">
      </div>
      <v-ons-card v-for="item in menus" :key="item.path">
        <div class="title">
          <router-link :to="item.path">
            {{item.title}}
          </router-link>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
import Menu from '../menu';

const homeMenu = Menu.sidebarMenu.filter(val => val.path !== '/');

export default {
  data() {
    return {
      menus: homeMenu,
    };
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank');
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
</style>
