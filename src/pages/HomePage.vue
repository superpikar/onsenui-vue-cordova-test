<style>
.content.card__content {
  text-align: left;
  height: 75px;
}
.content.card__content a {
  font-size: 20px;
  color: white;
  text-decoration: none;
  background: rgba(0,0,0,.5);
  padding: 5px;
}
.card {
  background-position: center;
}
</style>


<template>
  <v-ons-page>
    <navbar></navbar>
    <div class="main-content">
      <v-ons-card v-for="(item, key) in menus" :key="item.path" :style="`background-image: url(${item.background});`">
        <div class="content">
          <router-link :to="item.path">
            {{item.title}}
          </router-link>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
import randomColor from 'randomcolor';
import Menu from '../menu';

const homeMenu = Menu.sidebarMenu.filter(val => val.path !== '/');

export default {
  data() {
    return {
      menus: homeMenu,
      colors: randomColor({ hue: 'green', count: 10 }),
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
