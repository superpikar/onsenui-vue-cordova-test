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
  mounted() {
    this.$ons.ready(() => {
      // Set a new handler
      this.$ons.setDefaultDeviceBackButtonListener(() => {
        if (this.$router.currentRoute.path === '/') {
          this.$ons.notification.confirm('Do you want to close the app?') // Ask for confirmation
          .then((index) => {
            if (index === 1) { // OK button
              navigator.app.exitApp(); // Close the app
            }
          });
        } else {
          this.$router.back();
        }
      });

      /* eslint-disable no-undef */
      if (typeof codePush === 'undefined') {
        console.log('can\'t check app update on mobile web');
      } else {
        codePush.checkForUpdate((update) => {
          if (!update) {
            console.log('The app is up to date.');
          } else {
            console.log('An update is available! Should we download it?');
            codePush.sync(null, {
              installMode: InstallMode.IMMEDIATE,
              updateDialog: {
                title: 'An update is available!',
              },
            });
          }
        });
      }
    });
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
