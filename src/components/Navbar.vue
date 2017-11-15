<template>
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="goBack" v-if="enableBack">
        <v-ons-icon icon="ion-arrow-left-c"></v-ons-icon>
      </v-ons-toolbar-button>
      
      <v-ons-toolbar-button @click="toggleMenu" v-if="!enableBack">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{title}}</div>
    <div class="right">
      <slot></slot>
    </div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: {
      enableBack: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'OnsenUI + Vue + Cordova',
      },
    },
    methods: {
      toggleMenu() {
        this.$store.commit('toggleMenu', true);
      },
      goBack() {
        this.$router.back();
      },
    },
  };
</script>
