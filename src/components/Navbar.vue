<template>
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="toggleMenu">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">OnsenUI + Vue + Cordova</div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleMenu() {
        this.$store.commit('toggleMenu', true);
      },
    },
  };
</script>
